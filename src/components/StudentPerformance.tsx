"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 375, fill:"#06d6a0" },
  { name: 'Group B', value: 125, fill:"#e1e5f2" },
];

const StudentPerformance = () => {
  return (
    <div className='bg-white p-4 rounded-lg h-full w-full relative hover:scale-105 transition-all duration-500 ease-in-out border-l-4 border-transparent'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>OverAll Performance :</h1>
            <Image src="/moreDark.png" alt="" width={18} height={18}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={75}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-3xl font-bold'>375</h1>
      <p className='text-xs text-gray-500'>of 500 SPS</p>
      </div>
        <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center '>Jan - Feb</h2>
    </div>

  )
}

export default StudentPerformance