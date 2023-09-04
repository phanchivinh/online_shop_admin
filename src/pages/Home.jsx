import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import { userData, weeklyRevenue } from '../dummyData'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'
import { publicRequest } from '../requestMethods'
import { formatAPIParamsDate } from '../helpers'
import { startOfWeek } from 'date-fns'

const Home = () => {
  const [weeklyData, setWeeklyData] = useState([])

  //get api weekly data for chart
  useEffect(() => {
    const today = formatAPIParamsDate(new Date(2023, 8, 3))
    const firstDateOfWeekParam = formatAPIParamsDate(startOfWeek(today, { weekStartsOn: 1 }))
    const getWeeklyData = async () => {
      try {
        // const response = publicRequest.post('/v1/management/statistic/get-revenue', {
        //   from_date: firstDateOfWeekParam,
        //   today:today
        // },{
        //   headers: { Authorization: `Bearer ${accessToken}` }
        // })
        const response = weeklyRevenue
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
      <Chart data={weeklyData} title="Biểu đồ thông kê" grid dataKey="total_revenue" />
      {/* Home widgets */}
      <div className='flex m-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
