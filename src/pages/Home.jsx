import React from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import { userData } from '../dummyData'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'

const Home = () => {
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
