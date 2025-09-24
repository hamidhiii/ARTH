import { cubesatConstants } from "@/constants/cubesat"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function WeeklyComparison() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-medium mb-2">Weekly Comparison</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={cubesatConstants.charts.weeklyComparison}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="radiation" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
