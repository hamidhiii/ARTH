import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { chartData } from "@/constants/dashboard"

export default function ImpactChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4 col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
          Environmental Impact Trends
        </h2>
        <div className="flex gap-2 text-xs sm:text-sm">
          <button className="px-2 py-1 bg-green-100 text-green-600 rounded">7D</button>
          <button className="px-2 py-1 text-gray-500">30D</button>
          <button className="px-2 py-1 text-gray-500">90D</button>
        </div>
      </div>

      <div className="w-full h-64 sm:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trees" stroke="#10B981" name="Trees Planted" />
            <Line type="monotone" dataKey="co2" stroke="#3B82F6" name="CO₂ Reduced (tons)" />
            <Line type="monotone" dataKey="yield" stroke="#F59E0B" name="Agricultural Yield (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
