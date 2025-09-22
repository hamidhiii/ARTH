import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  value: string
  label: string
  change: string
}

export default function StatsCard({ icon, value, label, change }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-lg sm:text-xl font-semibold">{value}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{label}</p>
        <span className="text-xs font-medium text-green-600">{change}</span>
      </div>
    </div>
  )
}
