import DashboardActivity from "@/component/dashboard/ DashboardActivity";
import AreaChartComponent from "@/component/dashboard/AreaChat";
import DashboardOverview from "@/component/dashboard/DashboardOverview";

export default function Home() {
  return (
    <div >
      <DashboardOverview></DashboardOverview>
      <AreaChartComponent></AreaChartComponent>
      <DashboardActivity></DashboardActivity>


    </div>
  );
}
