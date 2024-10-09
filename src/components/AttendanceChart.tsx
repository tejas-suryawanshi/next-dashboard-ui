"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 100,
    absent: 50,
  },
  {
    name: 'Tue',
    present: 140,
    absent: 30,
  },
  {
    name: 'Wed',
    present: 200,
    absent: 70,
  },
  {
    name: 'Thu',
    present: 176,
    absent: 60,
  },
  {
    name: 'Fri',
    present: 150,
    absent: 90,
  },
  {
    name: 'Sat',
    present: 90,
    absent: 30,
  },
  
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full '>
        <div className='flex justify-between items-center'>
         <h1 className='text-lg font-semibold'>Attendance</h1>
         <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}  />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#4895ef" activeBar={<Rectangle fill="green" stroke="black" />} legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#d372e8" activeBar={<Rectangle fill="red" stroke="black" />} legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart