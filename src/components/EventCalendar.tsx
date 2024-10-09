"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events =[
    {
        id: 1,
        title: "Event 1",
        time: "12:00 PM - 2:00 PM",
        description: "---------------------"
    },
    {
        id: 2,
        title: "Event 2",
        time: "12:00 PM - 2:00 PM",
        description: "---------------------"
    },
    {
        id: 3,
        title: "Event 3",
        time: "12:00 PM - 2:00 PM",
        description: "---------------------"
    },
    {
        id: 4,
        title: "Event 4",
        time: "12:00 PM - 2:00 PM",
        description: "---------------------"
    },
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='rounded-md bg-white p-4'> 
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-6'>Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className='flex flex-col gap-4'>
            {events.map(event=>(
                <div className='p-5 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-[#4361ee] even:border-t-[#ff006e]' key={event.id}>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-800'>{event.title}</h1>
                        <span className='text-xs text-gray-500'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-600 text-xs'>{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default EventCalendar