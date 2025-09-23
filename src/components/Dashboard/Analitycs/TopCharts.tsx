import { impactTrendData, missionData } from "@/constants/analitycs"
import { Download } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

export default function TopCharts() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
      {/* Environmental Impact Trend */}
      <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
            Environmental Impact Trend
          </h2>
          <Download className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
        <div className="w-full h-52 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={impactTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="trees"
                stroke="#22c55e"
                name="Trees Planted (000s)"
              />
              <Line
                type="monotone"
                dataKey="water"
                stroke="#6366f1"
                name="Water Saved (ML)"
              />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="#9333ea"
                name="CO₂ Reduced (tons)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Mission Completion */}
      <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
            Monthly Mission Completion
          </h2>
          <Download className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
        <div className="w-full h-52 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={missionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="missions"
                stroke="#22c55e"
                fill="#22c55e"
                name="Trees Planted (missions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
