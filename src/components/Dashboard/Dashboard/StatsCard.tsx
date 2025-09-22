import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  value: string
  label: string
  change: string
}

export default function StatsCard({ icon, value, label, change }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-xl font-semibold">{value}</p>
        <p className="text-gray-500 text-sm">{label}</p>
        <span className="text-xs font-medium text-green-600">{change}</span>
      </div>
    </div>
  )
}
