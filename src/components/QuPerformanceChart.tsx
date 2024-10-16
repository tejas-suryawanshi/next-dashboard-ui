"use client"

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
 {
    name: 'Total',
    count: 100,
    fill: 'White',
  },

  {
    name: 'Activity',
    count: 40,
    fill: '#ffd60a',
  },
  {
    name: 'Language',
    count: 88,
    fill: '#06d6a0',
  },
  {
    name: 'Physical',
    count: 70,
    fill: '#6e44ff',
  },
  {
    name: 'Discipline',
    count: 92,
    fill: '#f72585',
  },
  {
    name: 'Academic',
    count: 85,
    fill: '#446df6',
  }, 
 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const QuPerformanceChart = () => {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4 hover:scale-105 transition-all duration-500 ease-in-out border-l-4 border-transparent'>

      {/* TITLE */}
       <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Qualitative Performance  :</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
       </div>
      {/* CHART */}
       <div className='relative w-full h-[75%]'>
       <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="25%" outerRadius="95%" barSize={22} data={data}>
          <RadialBar
            
            
            background
    
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image 
         src="/5891-cut.png"
         alt=""
         width={82}
         height={82}
         className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
           
       </div>
      {/* BOTTOM */}
       <div className='flex gap-6 flex-row justify-between '>
         <div className='flex flex-col gap-1'>
            <div className=' items-center w-12 h-5 rounded-full bg-[#446df6]'/>
            <h1 className='font-bold'>Academic</h1>
            <h2 className='text-xs text-slate-500'>Points (85)</h2>
         </div>
         <div className='flex flex-col gap-1'>
            <div className=' w-12 h-5 rounded-full bg-[#f72585]'/>
            <h1 className='font-bold'>Discipline</h1>
            <h2 className='text-xs text-slate-500'>Points (92)</h2>
         </div>
         <div className='flex flex-col gap-1'>
            <div className=' w-12 h-5 rounded-full bg-[#6e44ff]'/>
            <h1 className='font-bold'>Physical</h1>
            <h2 className='text-xs text-slate-500'>Points (70)</h2>
         </div>
         <div className='flex flex-col gap-1'>
            <div className=' w-12 h-5 rounded-full bg-[#06d6a0]'/>
            <h1 className='font-bold'>Language</h1>
            <h2 className='text-xs text-slate-500'>Points (88)</h2>
         </div>
         <div className='flex flex-col gap-1'>
            <div className=' w-12 h-5 rounded-full bg-[#ffd60a]'/>
            <h1 className='font-bold'>Activity</h1>
            <h2 className='text-xs text-slate-500'>Points (40)</h2>
         </div>
       </div>

    </div>
  )
}

export default QuPerformanceChart