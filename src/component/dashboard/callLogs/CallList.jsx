"use client";

import { FaPhone } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";

const CallList = () => {
  const calls = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Quote Provided",
      category: "Screen",
      statusColor: "bg-linear-to-r from-[#00C95033] to-[#00BC7D33] text-[#05DF72]",
      categoryColor: "bg-blue-500/20 text-blue-400",
      icon: BsCheckCircleFill,
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      category: "Software",
      statusColor: "bg-orange-500",
     statusColor: "bg-linear-to-r from-[#FF690033] to-[#FB2C3633] text-[#FF8904]",
      icon: BsCheckCircleFill,
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Appointment ",
      category: "Battery",
      statusColor: "bg-blue-600",
     statusColor: "bg-linear-to-r from-[#2B7FFF33] to-[#00B8DB33] text-[#51A2FF]",
      icon: FaCalendarCheck,
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "0:20",
      status: "Call Dropped",
      category: "Unknown",
      statusColor: "bg-red-600",
      statusColor: "bg-linear-to-r from-[#FF150033] to-[#FB2C3633] text-[#FF0404]",
      icon: MdCancel,
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Quote Provided",
      category: "Screen",
      statusColor: "bg-[#00C950]",
      statusColor: "bg-linear-to-r from-[#00C95033] to-[#00BC7D33] text-[#05DF72]",
      icon: BsCheckCircleFill,
    },
  ];

  return (
    <div className="bg-[#111B3C]  py-6">
      <div className="">
        <h1 className=" text-[20px] px-2 py-2  border-b border-blue-500/30">
          Call List
        </h1>

        <div className="space-y-4">
          {calls.map((call) => (
            <div key={call.id} className="  rounded-lg p-4 ">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-5 h-5 " />
                  </div>
                  <div>
                    <p className="text-white font-medium">{call.phone}</p>
                    <p className="text-[#90A1B9] text-sm">
                      {call.date} • {call.time}
                    </p>
                  </div>
                </div>

                <span
                  className={`${call.statusColor}  text-xs px-3 py-1 rounded-full `}
                >
                  {call.status}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#90A1B9]">
                <div className="flex items-center gap-1">
                  <IoMdTime className="w-4 h-4" />
                  <span>{call.duration}</span>
                </div>

                <div className="flex items-center gap-1">
                  <call.icon className="w-4 h-4" />
                  <span>{call.status}</span>
                </div>

                <span
                  className={`${call.categoryColor} px-2 py-1rounded text-xs`}
                >
                  {call.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallList;
