import { cubesatConstants } from "@/constants/cubesat"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

export default function ClimateTrend() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-medium mb-2">Climate Variables Trend</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={cubesatConstants.charts.climateTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
          <Line type="monotone" dataKey="humidity" stroke="#387908" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
