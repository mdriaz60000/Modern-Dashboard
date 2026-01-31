"use client";

import { FaCalendarTimes, FaRegTimesCircle } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

const AppointmentSystem = () => {
  const calculation = [
    {
      name: "Total block",
      total: 60,
      increase: 10,
      icon: <FaCalendarTimes className="text-[#51A2FF]" />,
    },

    {
      name: "AI Booked ",
      total: 74,
      increase: 15,
      icon: <FaRegTimesCircle className="text-[#05DF72]" />,
    },

    {
      name: "Pending",
      total: 38,
      increase: "Awaiting Confermation",
      icon: <MdOutlineAccessTime className=" text-[#FDC700]" />,
    },
  ];

  return (
    <div className="px-4 lg:px-8 py-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {calculation.map((item, index) => (
          <div key={index} className="bg-[#111B3C]  p-6 rounded-xl hover:border border-white">
            <section className="space-y-2">
              <div className="flex items-center gap-4">
                <p>{item.icon}</p>
                <p className="text-sm">{item.name}</p>
              </div>
              <p className="text-2xl font-bold">{item.total}</p>
              {item.increase && (
                <p className="text-green-300">+{item.increase}%</p>
              )}
              {item.decrease && (
                <p className="text-red-300">-{item.decrease}%</p>
              )}
            </section>
          </div>
        ))}
      </div>

      <div className="py-4 rounded bg-linear-to-t from-[#1A1A2E] to-[#16213E]">
        <label className="mb-2 px-2 block">Booking Link</label>
        <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2">
          <input
            type="text"
            placeholder="https://techstore.com/book?id=store123"
            className="w-full rounded-md bg-[#1a2942] px-4 py-3 placeholder-white"
          />
          <button className="w-full sm:w-auto sidebar-active px-4 py-3 flex items-center justify-center gap-2 hover:bg-black">
            <FaRegCopy className="text-lg" />
            <span>CopyLink</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSystem;
