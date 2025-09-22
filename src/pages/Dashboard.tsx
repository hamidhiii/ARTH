import ImpactChart from "@/components/Dashboard/Dashboard/ImpactChart"
import LiveActivity from "@/components/Dashboard/Dashboard/LiveActivity"
import StatsCard from "@/components/Dashboard/Dashboard/StatsCard"
import { stats } from "@/constants/dashboard"

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
        Environmental Impact Dashboard
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">
        Track your green initiatives and environmental contributions in real-time
      </p>

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <ImpactChart />
        <LiveActivity />
      </div>
    </div>
  )
}
