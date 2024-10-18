import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/magazine.png",
        label: "School Magazine",
        href: "/magazine",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
    // {
    //   icon: "/exam.png",
    //   label: "Exams",
    //   href: "/list/exams",
    //   visible: ["admin", "teacher", "student", "parent"],
    // },
      {
        icon: "/assignment.png",
        label: "Home Work",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className=" text-lg">
      {menuItems.map(i=>(
      <div className="flex-col text-center items-center gap-2" key={i.title}>
        <span className=" hidden lg:block text-gray-600 font-light my-4 text-center">{i.title}</span>
       {i.items.map(item=>{
        if(item.visible.includes(role)){
          return(
            <Link href={item.href} key={item.label} className="flex items-center md:px-2 justify-center lg:justify-start gap-4 rounded-xl hover:bg-[#eee] hover:text-[#3D50FD]  hover:scale-105 transition-all duration-300 ease-in-out border-l-4 border-transparent  py-4 pl-2 pr-2 hover:font-bold ">
            <Image src={item.icon} alt="" width={30} height={30}/>
            <span className="hidden lg:block">{item.label}</span>
            </Link> 
            
            )
        }
       }

       )}
        </div>
      ))}
    </div>
  )
}

export default Menu