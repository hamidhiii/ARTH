import BottomWidgets from "@/components/Dashboard/Analitycs/BottomWidgets";
import TopCharts from "@/components/Dashboard/Analitycs/TopCharts";
import StatsCard from "@/components/Dashboard/Dashboard/StatsCard";
import { stats } from "@/constants/dashboard";

export default function Analitycs() {
  return (
    <div className="w-full max-w-7xl mx-auto">
    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {stats.map(({ id, icon: Icon, value, label, change, color }) => (
        <StatsCard
          key={id}
          icon={<Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />}
          value={value}
          label={label}
          change={change}
        />
      ))}
    </div>

    {/* Chart + Live Activity */}
    <div className="gap-7">
      <TopCharts/>
      <BottomWidgets/>
    </div>
  </div>
  )
}
