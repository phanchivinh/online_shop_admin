import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { apiFeaturedInfo } from '../mockData'
import { startOfYesterday } from 'date-fns'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import { formatAPIParamsDate } from '../helpers'

const emptyDate = {
  "sale_date": "",
  "total_cost": 0,
  "total_revenue": 0,
  "order_count": "0"
}

const FeaturedInfo = () => {
  const [todayStatistic, setTodayStatistic] = useState({})
  const [revenueVariabilityPercent, setRevenueVariabilityPercent] = useState(0)
  const [profitVariabilityPercent, setProfitVariabilityPercent] = useState(0)
  const [orderVariabilityPercent, setOrderVariabilityPercent] = useState(0)
  // const [previousStatistic, setPreviousStatistic] = useState({})

  const accessToken = useSelector(state => state.auth.accessToken)

  const calcRevenueVariability = (previousData, todayData) => {
    const previousRevenue = previousData.total_revenue
    const todayRevenue = todayData.total_revenue
    const percentVariability = ((todayRevenue - previousRevenue) / previousRevenue) * 100
    setRevenueVariabilityPercent(percentVariability)
    return;
  }


  const calcProfitVariability = (previousData, todayData) => {
    const previousProfit = previousData.total_revenue - previousData.total_cost
    const todayProfit = todayData.total_revenue - todayData.total_cost
    const percentVariability = ((previousProfit - todayProfit) / previousProfit) * 100
    setProfitVariabilityPercent(percentVariability)
    return;
  }

  const calcTotalOfOrders = (previousData, todayData) => {
    const previousTotal = previousData.total_count
    const todayTotal = todayData.total_count
    const percentVariability = ((previousTotal - todayTotal) / previousTotal) * 100
    setOrderVariabilityPercent(percentVariability)
  }

  useEffect(() => {
    const today = new Date()
    const previousDay = startOfYesterday()
    const todayParam = formatAPIParamsDate(today)
    const previousDayParam = formatAPIParamsDate(previousDay)
    const getStatistic = async () => {
      try {
        const response = await publicRequest.post('/v1/management/statistic/get-revenue', {
          from_date: previousDayParam,
          to_date: todayParam
        }, {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        const todayData = response.data.statistic.find(item => todayParam === formatAPIParamsDate(new Date(item.sale_date))) || emptyDate
        const previousDayData = response.data.statistic.find(item => previousDayParam === formatAPIParamsDate(new Date(item.sale_date))) || emptyDate
        setTodayStatistic(todayData)
        calcRevenueVariability(previousDayData, todayData)
        calcProfitVariability(previousDayData, todayData)
        calcTotalOfOrders(previousDayData, todayData)
      } catch (error) {
        console.log(error)
      }
    }
    getStatistic()
  }, [])

  return (
    <div className='w-full flex justify-between'>
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Doanh thu (Revenue)</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>{todayStatistic.total_revenue}</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>{revenueVariabilityPercent}%</span>
          {
            revenueVariabilityPercent > 0 ? <AiOutlineArrowUp className='text-base ml-1 text-green-500' /> : <AiOutlineArrowDown className='text-base ml-1 text-red-500' />
          }

        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với hôm qua</span>
      </div>
      {/* ------------------------------------- */}
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Lợi nhuận (Profit)</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>{(todayStatistic.total_revenue - todayStatistic.total_cost)}</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>{profitVariabilityPercent}%</span>
          {
            profitVariabilityPercent > 0 ? <AiOutlineArrowUp className='text-base ml-1 text-green-500' /> : <AiOutlineArrowDown className='text-base ml-1 text-red-500' />
          }
        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với hôm qua</span>
      </div>
      {/* ------------------------------------- */}
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Tổng đơn hàng</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>{todayStatistic.total_count}</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>{orderVariabilityPercent}</span>
          {
            revenueVariabilityPercent > 0 ? <AiOutlineArrowUp className='text-base ml-1 text-green-500' /> : <AiOutlineArrowDown className='text-base ml-1 text-red-500' />
          }
        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với tháng trước</span>
      </div>

    </div>
  )
}

export default FeaturedInfo
