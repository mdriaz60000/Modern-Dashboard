import React from "react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const AppointmentTable = () => {
 const appointments=[
  {
    "clientName": "Rahim Ahmed",
    "clientPhone": "+8801712345678",
    "clientEmail": "rahim.ahmed@example.com",
    "device": "iPhone 12",
    "repairType": "Screen Replacement",
    "date": "2026-02-01",
    "slotNo": 1,
    "startTime": "10:00 AM"
  },
  {
    "clientName": "Karim Hasan",
    "clientPhone": "+8801812345679",
    "clientEmail": "karim.hasan@example.com",
    "device": "Samsung Galaxy S21",
    "repairType": "Battery Replacement",
    "date": "2026-02-01",
    "slotNo": 2,
    "startTime": "11:00 AM"
  },
  {
    "clientName": "Nusrat Jahan",
    "clientPhone": "+8801912345680",
    "clientEmail": "nusrat.jahan@example.com",
    "device": "MacBook Pro",
    "repairType": "Keyboard Repair",
    "date": "2026-02-02",
    "slotNo": 3,
    "startTime": "12:00 PM"
  },
  {
    "clientName": "Ayesha Rahman",
    "clientPhone": "+8801612345681",
    "clientEmail": "ayesha.rahman@example.com",
    "device": "Dell Inspiron",
    "repairType": "Motherboard Repair",
    "date": "2026-02-02",
    "slotNo": 4,
    "startTime": "01:00 PM"
  },
  {
    "clientName": "Sabbir Hossain",
    "clientPhone": "+8801512345682",
    "clientEmail": "sabbir.hossain@example.com",
    "device": "iPad Air",
    "repairType": "Charging Port Fix",
    "date": "2026-02-03",
    "slotNo": 5,
    "startTime": "10:30 AM"
  },
  {
    "clientName": "Mehedi Hasan",
    "clientPhone": "+8801712345683",
    "clientEmail": "mehedi.hasan@example.com",
    "device": "HP Pavilion",
    "repairType": "OS Reinstallation",
    "date": "2026-02-03",
    "slotNo": 6,
    "startTime": "11:30 AM"
  },
  {
    "clientName": "Farzana Akter",
    "clientPhone": "+8801812345684",
    "clientEmail": "farzana.akter@example.com",
    "device": "Xiaomi Redmi Note 10",
    "repairType": "Camera Repair",
    "date": "2026-02-04",
    "slotNo": 7,
    "startTime": "12:30 PM"
  },
  {
    "clientName": "Tanvir Islam",
    "clientPhone": "+8801912345685",
    "clientEmail": "tanvir.islam@example.com",
    "device": "Lenovo ThinkPad",
    "repairType": "Fan Cleaning",
    "date": "2026-02-04",
    "slotNo": 8,
    "startTime": "02:00 PM"
  },
  {
    "clientName": "Rifat Khan",
    "clientPhone": "+8801612345686",
    "clientEmail": "rifat.khan@example.com",
    "device": "OnePlus 9",
    "repairType": "Speaker Repair",
    "date": "2026-02-05",
    "slotNo": 9,
    "startTime": "03:00 PM"
  },
  {
    "clientName": "Sumaiya Noor",
    "clientPhone": "+8801512345687",
    "clientEmail": "sumaiya.noor@example.com",
    "device": "Asus VivoBook",
    "repairType": "SSD Upgrade",
    "date": "2026-02-05",
    "slotNo": 10,
    "startTime": "04:00 PM"
  }
]

const pages = [1, 2, 3, 4, 5];

  return (
    <main className=" px-8">
    <div className=" bg-[#111B3B]">
      <table className="w-full border-collapse text-left ">
        <thead>
          <tr className="border-b ">
            <th className="py-3 px-2">Client</th>
            <th className="py-3 px-2">Phone</th>
            <th className="py-3 px-2">Email</th>
            <th className="py-3 px-2">Device</th>
            <th className="py-3 px-2">Repair</th>
            <th className="py-3 px-2">Date</th>
            <th className="py-3 px-2">Slot</th>
            <th className="py-3 px-2">Start Time</th>
          </tr>
        </thead>

        <tbody>
          {appointments.slice(0, 6).map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 "
            >
              <td className="py-3 px-2 text-[#51A2FF]">{item.clientName}</td>
              <td className="py-3 px-2">{item.clientPhone}</td>
              <td className="py-3 px-2">{item.clientEmail}</td>
              <td className="py-3 px-2">{item.device}</td>
              <td className="py-3 px-2">{item.repairType}</td>
              <td className="py-3 px-2">{item.date}</td>
              <td className="py-3 px-2">{item.slotNo}</td>
              <td className="py-3 px-2">{item.startTime}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>

    <div className="flex items-center justify-center gap-2 mt-8 text-bold ">

  <button className="px-2 py-1 ">
   <MdKeyboardArrowLeft />
  </button>


  <button className="">
    Previous
  </button>


  {pages.map((page) => (
    <button
      key={page}
      className={` px-2 py-1
        ${
          page === 1
            ? " text-white"
            : "hover:bg-bg-[#A6C8FF]"
        }`}
    >
      {page}
    </button>
  ))}


  <button className="">
    Next
  </button>


  <button className="">
  <MdOutlineKeyboardArrowRight />
  </button>
</div>
    </main>

  );
};

export default AppointmentTable;