"use client";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./Sidebar";

const routeTitleMap = {
  "/": "Dashboard Overview",
  "/call-logs": "Call Logs",
  "/appointments": "Appointments",
  "/settings": "Settings",
};

const Navbar = () => {
  const pathname = usePathname();
  const title = routeTitleMap[pathname] || "Dashboard";

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="h-20 bg-[#111B3C] text-white">
        <main className="h-full px-6 flex items-center justify-between">
          <section className="text-2xl">{title}</section>

          <section className="flex items-center gap-4">
            <IoMdNotificationsOutline className="text-2xl cursor-pointer" />

            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/Elipse 5.png"
                width={50}
                height={50}
                alt="profile"
                className="object-cover"
              />
            </div>

            <button
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          </section>
        </main>
      </div>

      {openSidebar && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
    </>
  );
};

export default Navbar;
