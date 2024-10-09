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
    name: 'Girls',
    count: 45,
    fill: '#D72483',
  },

  {
    name: 'Boys',
    count: 55,
    fill: '#3d52d5',
  },
  
 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4 hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent'>

      {/* TITLE */}
       <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
       </div>
      {/* CHART */}
       <div className='relative w-full h-[75%]'>
       <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="95%" barSize={22} data={data}>
          <RadialBar
            
            
            background
    
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image 
         src="/maleFemale.png"
         alt=""
         width={60}
         height={60}
         className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
           
       </div>
      {/* BOTTOM */}
       <div className='flex justify-center gap-16'>
         <div className='flex flex-col gap-1'>
            <div className=' w-5 h-5 rounded-full bg-PabloBlueLight'/>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
         </div>
         <div className='flex flex-col gap-1'>
            <div className=' w-5 h-5 rounded-full bg-PabloPink '/>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
         </div>
       </div>

    </div>
  )
}

export default CountChart