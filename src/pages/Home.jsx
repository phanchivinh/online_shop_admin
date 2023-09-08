import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import { userData, weeklyRevenue } from '../dummyData'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'
import { publicRequest } from '../requestMethods'
import { formatAPIParamsDate } from '../helpers'
import { startOfWeek } from 'date-fns'
import { useSelector } from 'react-redux'

const Home = () => {
  const [weeklyData, setWeeklyData] = useState([])
  const accessToken = useSelector(state => state.auth.accessToken)
  //get api weekly data for chart
  const getFirstDateOfWeek = () => {
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    return firstDay
  }

  useEffect(() => {
    const today = formatAPIParamsDate(new Date(2023, 8, 3))
    const firstDateOfWeekParam = formatAPIParamsDate(getFirstDateOfWeek())
    const getWeeklyData = async () => {
      try {
        const response = await publicRequest.post('/v1/management/statistic/get-revenue', {
          from_date: firstDateOfWeekParam,
          to_date: today
        }, {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        // const response = weeklyRevenue
        setWeeklyData(response.data.statistic)
      } catch (error) {
        console.log(error)
      }
    }
    getWeeklyData()
  }, [])

  return (
    <div className='flex-[4]'>
      <FeaturedInfo />
      <Chart data={weeklyData} title="Doanh thu tuần này" grid dataKey="total_revenue" />
      {/* Home widgets */}
      <div className='flex m-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
