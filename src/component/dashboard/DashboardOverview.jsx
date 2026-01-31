"use client";
import { IoCallOutline } from "react-icons/io5";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";

const DashboardOverview = () => {
  const calculation = [
    {
      name: "Total Calls Today",
      total: 40,
      increase: 18,
      icon: <IoCallOutline />,
      color: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
    },
    {
      name: "AI-Handled Calls",
      total: 60,
      increase: 10,
      icon: <FaRegCalendarAlt />,
      color: "bg-linear-to-r from-[#AD46FF] to-[#F6339A]",
    },
    {
      name: "Warm Transfer",
      total: 45,
      increase: 20,
      icon: <BsArrowLeftRight />,
      color: "bg-linear-to-r from-[#FF6900] to-[#FB2C36]",
    },
    {
      name: "Appointments Booked Orders",
      total: 74,
      increase: 15,
      icon: <FaBriefcase />,
      color: "bg-linear-to-r from-[#00C950] to-[#00BC7D]",
    },
    {
      name: "Missed/Failed Calls",
      total: 19,
      decrease: "5",
      icon: <RxCross2 />,
      color: "bg-linear-to-r from-[#FB2C36] to-[#FF2056]",
    },
    {
      name: "Avg Call Duration",
      total: 38,
      increase: 7,
      icon: <MdOutlineAccessTime />,
      color: "bg-linear-to-r from-[#615FFF] to-[#2B7FFF]",
    },
  ];

  return (
    <div className=" px-8 py-6">
      <div className="  grid grid-cols-3 gap-4 ">
        {calculation.map((item, index) => (
          <div
            key={index}
            className="bg-[#111B3C]  flex justify-between  p-8 rounded-xl"
          >
            <section className=" space-y-2">
              <p className="text-sm">{item.name}</p>
              <p className="text-2xl font-bold">{item.total}</p>

              {item.increase && (
                <p className="text-[#05DF72]">+{item.increase}%</p>
              )}

              {item.decrease && (
                <p className="text-[#FD244A]">-{item.decrease}%</p>
              )}
            </section>

            <div>
              <p className={` p-4 rounded-2xl text-2xl ${item.color}`}>
                {item.icon}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
