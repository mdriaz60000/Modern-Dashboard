import { IoSearchOutline } from "react-icons/io5";
import CallList from "./CallList";
import CallDetails from "./CallDetails";

const CallLogs = () => {
  return (
    <div className="px-8 py-6">
      <main className="flex gap-6 items-start"> 
        
       
        <section className="w-[45%]">
          <div className="relative">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              className="bg-[#111B3C]  w-full pl-12 pr-4 py-4 rounded-lg placeholder-white"
            />
          </div>
          <br />
          <CallList />
        </section>

       
        <section className="w-[55%]"> 
          <div className="flex gap-6 pl-12"> 
            <select className="bg-[#111B3C]  flex-1 px-4 py-4 rounded-lg">
              <option>Type</option>
            </select>

            <select className="bg-[#111B3C]  flex-1 px-4 py-4 rounded-lg">
              <option>All Issue</option>
            </select>

            <select className="bg-[#111B3C]  flex-1 px-4 py-4 rounded-lg">
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