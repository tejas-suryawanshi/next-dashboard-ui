import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GYAN SAGAR PUBLIC SCHOOL",
  description: "Next.js School Management System",
  icons: {
    icon: "/favicon-32x32.png" ,
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen ">
    {/* LEFT */}
    <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white">
      <Link href="/" className="flex items-center justify-center gap-2 mt-5">
       <img src="/gspslogocanva.png" alt="logo"  />
       <span className="hidden lg:block"></span>
      </Link>
      <Menu/>
    </div>
    {/* RIGTH */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
      <Navbar/>
      {children}
    </div>
  </div>

  
  );
}
