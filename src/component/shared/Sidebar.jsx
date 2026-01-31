"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline, IoClose } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const pathname = usePathname();
  const isActive = (path) => pathname.startsWith(path);

  return (
    <>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 h-full w-64
          bg-[#111B3C] text-white font-medium flex flex-col justify-between
          z-50 transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <section>
          <div className="flex items-center justify-between pt-8 px-6 lg:justify-center">
            <Image
              src="/Container.png"
              width={50}
              height={50}
              alt="logo"
              priority
            />

            <button
              onClick={() => setOpenSidebar(false)}
              className="lg:hidden text-2xl"
            >
              <IoClose />
            </button>
          </div>

          <ul className="space-y-4 pt-12 px-4">
            <li>
              <Link
                href="/"
                onClick={() => setOpenSidebar(false)}
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
                onClick={() => setOpenSidebar(false)}
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
                onClick={() => setOpenSidebar(false)}
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
                onClick={() => setOpenSidebar(false)}
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

        <footer className="mb-5 px-4">
          <button className="flex items-center space-x-3 p-3 rounded-md w-full hover:bg-white/5 transition">
            <RiLogoutBoxRLine className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
