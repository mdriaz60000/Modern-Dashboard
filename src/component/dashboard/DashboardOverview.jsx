"use client"
import { IoCallOutline } from "react-icons/io5";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";

const DashboardOverview = () => {
const calculation = [
  {
    "name": "Total Calls Today",
    "total": 40,
   "increase":18,
    "icon": <IoCallOutline />
  },
  {
    "name": "AI-Handled Calls",
    "total": 60,
    "increase":10,
    "icon": <FaRegCalendarAlt />

  },
  {
    "name": "Warm Transfer",
    "total": 45,
    "increase":20,
    "icon": <BsArrowLeftRight />
  },
  {
    "name": "Appointments Booked Orders",
    "total": 74,
    "increase":15,
    "icon": <FaBriefcase className="bg-red-500" />
  },
  {
    "name": "Missed/Failed Calls",
    "total": 19,
    "decrease": "5",
    "icon": <RxCross2 />
  },
  {
    "name": "Avg Call Duration",
    "total": 38,
    "increase":7,
    "icon": <MdOutlineAccessTime />
  }
]


    return (
<div className=" px-8 py-8">
<div className="  grid grid-cols-3 gap-8 text-white">
  {calculation.map((item, index) => (
    <div
      key={index}
      className="bg-[#111B3C]  flex justify-between  p-4 rounded-xl"
    >
      <section>
        <p className="text-sm">{item.name}</p>
        <p className="text-2xl font-bold">{item.total}</p>

        {item.increase && (
          <p className="text-green-300">+{item.increase}%</p>
        )}

        {item.decrease && (
          <p className="text-red-300">-{item.decrease}%</p>
        )}
      </section>

      <div className="text-4xl">
        {item.icon}
      </div>
    </div>
  ))}
       </div>

        </div>
    );
};

export default DashboardOverview;