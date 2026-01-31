import AppointmentSystem from "@/component/dashboard/appointments/AppointmentSystem";
import AppointmentTable from "@/component/dashboard/appointments/AppointmentTable";



const Appointments = () => {
    return (
        <div className="">
           <AppointmentSystem></AppointmentSystem>
           <AppointmentTable />
         
        </div>
    );
};

export default Appointments;