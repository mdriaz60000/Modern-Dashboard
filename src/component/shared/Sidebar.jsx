"use client"
import Image from "next/image";
import Link from "next/link";
import {  FaBriefcase , FaHome } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline  } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className=" min-h-screen  rounded-xl text-white font-medium flex flex-col justify-between">
        <section>
        <div className="flex items-center justify-center pt-8">
   <Image src="/Container.png" width={50} height={50} alt="icons" />
        </div>
     
      <ul className="space-y-4 pt-12 px-4">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 p-3 rounded-md "
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard Overview</span>
          </Link>
        </li>
        <li>
          <Link
            href="/call-logs"
            className="flex items-center space-x-2 p-3 rounded-md  "
          >
            <IoCallOutline className="h-5 w-5" />
            <span>Call Logs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/appointments"
            className="flex items-center space-x-2 p-3 rounded-md "
          >
            <FaBriefcase className="h-5 w-5" />
            <span>Appointments</span>
          </Link>
        </li>
                <li>
<Link
  href="/settings"
  className="flex items-center space-x-2 p-3 rounded-md"
>
  <IoSettingsOutline className="h-5 w-5" />
  <span>Settings</span>
</Link>

        </li>
      </ul>
        </section>


      <footer className=" mb-5 px-4">
          <button
        
            className="flex items-center space-x-2 p-3 rounded-md "
          >
            <RiLogoutBoxRLine  className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </footer>

    </div>
  );
};

export default Sidebar;









