import Announcement from "@/components/Announcement"
import AttendanceChart from "@/components/AttendanceChart"
import BigCalendar from "@/components/BigCalendar"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import QuPerformanceChart from "@/components/QuPerformanceChart"
import StudentPerformance from "@/components/StudentPerformance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* LEFT */}
        <div className="w-full xl:w-2/3">

                      {/* TOP */}

        
        <div className="flex flex-col  gap-4">
         {/* USER INFO CARD */}
            <div className="bg-center bg-no-repeat bg-cover bg-[url('/subtle-prism-green.svg')]  w-full h-full p-1 py-6 px-4 rounded-2xl flex gap-4 hover:scale-105 transition-all duration-500 ease-in-out border-l-4 border-transparent ">
            
            <div className="w-1/3">
             <Image src="https://images.pexels.com/photos/8088228/pexels-photo-8088228.jpeg" alt="" width={148} height={148} className=" rounded-3xl object-cover hover:scale-110 transition-all duration-500 ease-in-out border-l-4 border-transparent "/>
            </div>
            <div className="w-2/3 flex flex-col gap-4">
            <h1 className="text-3xl font-semibold mt-5 justify-center hover:bg-gray-100 text-center rounded-lg duration-500 hover:scale-105">Aditya Soni</h1>

            <div className="flex flex-wrap mt-10 items-center p-1 justify-between gap-2 text-xs font-medium hover:scale-105 hover:bg-gray-100 rounded-xl duration-500">
              <div className="w-full md:w-1/3 lg:w-full text-lg  2xl:w-1/3 flex items-center gap-2">
              <Image src="/blood.png" alt="" width={24} height={24}/>
              <span>A+</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full  text-lg 2xl:w-1/3 flex items-center gap-2">
              <Image src="/date.png" alt="" width={24} height={24}/>
              <span>April 2016</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full  text-lg 2xl:w-1/3 flex items-center gap-2">
              <Image src="/mail.png" alt="" width={24} height={24}/>
              <span>Aditya@woohoo.com</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full text-lg 2xl:w-1/3 flex items-center gap-1 ">
              <Image src="/phone.png" alt="" width={24} height={24}/>
              <span>+916969696969</span>
            </div>
            </div>
            </div>
         </div>
          {/* SMALL CARDS */}
          <div className="flex gap-6 justify-between flex-row w-full h-full">
            {/* CARD */}
            <div className="bg-white p-4 gap-4 flex rounded-lg w-full md:w-[48%] lg:w-[25%] xl:w-[25%]  hover:scale-110 transition-all duration-300 ease-in-out border-l-4 border-transparent ">
              <Image src="/singleAttendance.png" alt="" width={28} height={28} className="w-8 h-8"/>
              <div>
                <h1 className="font-semibold text-xl">90%</h1>
                <span className="text-sm to-gray-500">Attendence</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 gap-4 flex rounded-lg w-full md:w-[48%] lg:w-[25%] xl:w-[25%]  hover:scale-110 transition-all duration-300 ease-in-out border-l-4 border-transparent ">
              <Image src="/singleBranch.png" alt="" width={28} height={28} className="w-8 h-8"/> 
              <div>
                <h1 className="font-semibold text-xl">6th</h1>
                <span className="text-sm to-gray-500">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 gap-4 flex rounded-lg w-full md:w-[48%] xl:w-[25%] lg:w-[25%] hover:scale-110 transition-all duration-300 ease-in-out border-l-4 border-transparent ">
              <Image src="/singleLesson.png" alt="" width={28} height={28} className="w-8 h-8"/>
              <div>
                <h1 className="font-semibold text-xl">7</h1>
                <span className="text-sm to-gray-500">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 gap-4 flex rounded-lg w-full md:w-[48%] xl:w-[25%] lg:w-[25%]  hover:scale-110 transition-all duration-300 ease-in-out border-l-4 border-transparent ">
              <Image src="/singleClass.png" alt="" width={28} height={28} className="w-8 h-8"/>
              <div>
                <h1 className="font-semibold text-xl">6A</h1>
                <span className="text-sm to-gray-500">Class</span>
              </div>
            </div>
          </div>
           
        </div>
        <div className="flex gap-4 flex-col lg:flex-row mt-4">

        <div className="w-full lg:w-2/3 h-[500px]">
          <QuPerformanceChart/>
          </div>
          <div className="w-full lg:w-1/3 h-[500px]">
           <StudentPerformance/>
          </div>
        <div/>
        
        </div>

        <div className="mt-4 bg-white rounded-md p-4 h-[600px]">
          <h1 className="text-2xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar/>
        </div>
    
        
        
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-xl font-semibold mb-2">Shortcuts</h1>
          <div className="mt-1 flex gap-4 flex-row justify-evenly">
            <Link href="/list/classes" className="p-3 rounded-lg text-lg  italic semibold hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent  hover:font-semibold hover:underline hover:bg-gray-100 text-[#3a86ff]">Student&apos;s Lessons</Link>
            <Link href="/list/students" className="p-3 rounded-lg text-lg  italic semibold hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent  hover:font-semibold hover:underline hover:bg-gray-100 text-[#ff006d]">Student&apos;s Results</Link>
            <Link href="/list/lessons" className="p-3 rounded-lg text-lg  italic semibold hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent  hover:font-semibold hover:underline hover:bg-gray-100 text-[#ff7d00]">Student&apos;s Teachers</Link>
            {/* <Link href="/Messenger" className="p-3 rounded-lg text-lg  italic semibold hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent  hover:font-semibold hover:underline hover:bg-gray-100 text-[#37d153]">Open Chat</Link> */}
          </div>
        </div>

        <EventCalendar/>
        <Announcement/>
        
        </div>
    </div>
  )
}

export default SingleStudentPage