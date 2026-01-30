import AppointmentSystem from "@/component/dashboard/appointments/AppointmentSystem";
import AppointmentTable from "@/component/dashboard/appointments/AppointmentTable";



const Appointments = () => {
    return (
        <div className="space-y-6">
           <AppointmentSystem></AppointmentSystem>
           <AppointmentTable />
         
        </div>
    );
};

export default Appointments;