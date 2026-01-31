import { IoSearchOutline } from "react-icons/io5";
import CallList from "./CallList";
import CallDetails from "./CallDetails";

const CallLogs = () => {
  return (
    <div className="px-4 lg:px-8 py-6">
      <main className=" flex flex-col gap-4 lg:flex-row lg:gap-6 items-start">
        <section className="w-full  lg:w-[45%]">
          <div className="relative">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              className="bg-[#111B3C] w-full pl-12 pr-4 py-4 rounded-lg placeholder-white"
            />
          </div>
          <br />
          <CallList />
        </section>

        <section className="w-full   lg:w-[55%]">
          <div className="  flex  lg:flex-row gap-4 lg:gap-6">
            <select className="bg-[#111B3C] w-full lg:flex-1 px-4 py-4 rounded-lg">
              <option>Type</option>
            </select>

            <select className="bg-[#111B3C] w-full lg:flex-1 px-4 py-4 rounded-lg">
              <option>All Issue</option>
            </select>

            <select className="bg-[#111B3C] w-full lg:flex-1 px-4 py-4 rounded-lg">
              <option>Today</option>
            </select>
          </div>

          <br />
          <CallDetails />
        </section>
      </main>
    </div>
  );
};

export default CallLogs;
