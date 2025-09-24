import { cubesatConstants } from "@/constants/cubesat"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function OrbitTimeline() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-medium mb-2">Orbit Coverage Timeline</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={cubesatConstants.charts.orbitTimeline}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="passes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
