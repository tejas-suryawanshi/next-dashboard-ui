"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
    name: 'Jan',
    income: 900,
    expense: 2600,
  },
  {
    name: 'Feb',
    income: 3100,
    expense: 1900,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 2400,
  },
  {
    name: 'April',
    income: 3400,
    expense: 1600,
  },
  {
    name: 'May',
    income: 2700,
    expense: 2000,
  },
  {
    name: 'Jun',
    income: 3000,
    expense: 3600,
  },
  {
    name: 'Jul',
    income: 4200,
    expense: 2900,
  },
  {
    name: 'Aug',
    income: 3500,
    expense: 2600,
  },
  {
    name: 'Sep',
    income: 3900,
    expense: 2900,
  },
  {
    name: 'Oct',
    income: 3200,
    expense: 2200,
  },
  {
    name: 'Nov',
    income: 4000,
    expense: 1900,
  },
  {
    name: 'Dec',
    income: 3900,
    expense: 1500,
  },
   
 
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full '>
        <div className='flex justify-between items-center'>
         <h1 className='text-lg font-semibold'>Finance</h1>
         <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={15} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={15} />
          <Tooltip  contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend  align='center' verticalAlign='top'  wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Line type="monotone" dataKey="income" stroke="#06d6a0" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#fe5d9f" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart