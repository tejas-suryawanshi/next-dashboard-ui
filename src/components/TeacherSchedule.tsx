"use client"
import React from 'react';

type ClassSchedule = {
  time: string;
  subject: string;
  classRoom: string;
};

const schedule: ClassSchedule[] = [
  { time: "08:00 AM - 09:00 AM", subject: "Mathematics", classRoom:"11th"  },
  { time: "09:00 AM - 10:00 AM", subject: "English", classRoom: "9th"},
  { time: "10:30 AM - 11:30 AM", subject: "Physics", classRoom:  "10th"},
  { time: "12:00 PM - 01:00 PM", subject: "Chemistry", classRoom: "8th"},
  { time: "02:00 PM - 03:00 PM", subject: "History", classRoom: "9th"},
];

const TeacherSchedule: React.FC = () => {
  return (
    <div className=" bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Today's Schedule</h1>
      <ul className="divide-y divide-gray-200">
        {schedule.map((item, index) => (
          <li key={index} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-gray-600 font-medium">{item.time}</p>
              <p className="text-gray-900 font-bold">{item.subject}</p>
            </div>
            <p className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
              {item.classRoom}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherSchedule;
