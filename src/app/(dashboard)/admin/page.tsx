import Announcement from "@/components/Announcement"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCountCards from "@/components/UserCountCards"

const AdminPage = () => {
    return (
      <div className='p-4 flex gap-4 flex-col md:flex-row'>
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERCOUNTCARD */}
        <div className="flex gap-4 justify-between flex-wrap">
         <UserCountCards type='students'/>
         <UserCountCards type='teachers'/>
         <UserCountCards type='parents'/>
         <UserCountCards type='staff'/>
        </div>

        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
           <AttendanceChart/>
          </div>
        </div>
        {/* FINANCE CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 " >
         <EventCalendar/>
         <Announcement/>
        </div>
      </div>
    )
  }
  
  export default AdminPage