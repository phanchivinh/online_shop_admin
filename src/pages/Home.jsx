import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import { userData } from '../dummyData'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'
import { publicRequest } from '../requestMethods'
import { apiHome } from '../mockData'

const Home = () => {
  const [statistic, setStatistic] = useState([])
  const today = new Date()

  useEffect(() => {
    const getStatistic = async () => {
      try {
        // const response = await publicRequest.get("/v1/management/statistic/get-revenue", {
        console.log(today)
        // })
        const response = apiHome
        setStatistic(response.data.statistic)
      } catch (error) {
        console.log(error)
      }
    }

    getStatistic()
  }, [])

  return (
    <div className='flex-[4]'>
      <FeaturedInfo />
      <Chart data={userData} title="Doanh thu" grid dataKey="Active User" />
      {/* Home widgets */}
      <div className='flex m-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
