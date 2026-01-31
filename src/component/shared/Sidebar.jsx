"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname.startsWith(path);

  return (
    <aside className="h-full text-white font-medium flex flex-col justify-between">
      <section>
        <div className="flex items-center justify-center pt-8">
          <Image
            src="/Container.png"
            width={50}
            height={50}
            alt="logo"
            priority
          />
        </div>

        <ul className="space-y-4 pt-12 px-4">
          <li>
            <Link
              href="/"
              className={`flex items-center space-x-3 p-3 rounded-md transition-all
                ${pathname === "/" ? "sidebar-active" : "hover:bg-white/5"}
              `}
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard Overview</span>
            </Link>
          </li>

          <li>
            <Link
              href="/call-logs"
              className={`flex items-center space-x-3 p-3 rounded-md transition-all
                ${isActive("/call-logs") ? "sidebar-active" : "hover:bg-white/5"}
              `}
            >
              <IoCallOutline className="h-5 w-5" />
              <span>Call Logs</span>
            </Link>
          </li>

          <li>
            <Link
              href="/appointments"
              className={`flex items-center space-x-3 p-3 rounded-md transition-all
                ${isActive("/appointments") ? "sidebar-active" : "hover:bg-white/5"}
              `}
            >
              <FaBriefcase className="h-5 w-5" />
              <span>Appointments</span>
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className={`flex items-center space-x-3 p-3 rounded-md transition-all
                ${isActive("/settings") ? "sidebar-active" : "hover:bg-white/5"}
              `}
            >
              <IoSettingsOutline className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mb-5 px-4">
        <button className="flex items-center space-x-3 p-3 rounded-md w-full hover:bg-white/5 transition">
          <RiLogoutBoxRLine className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
