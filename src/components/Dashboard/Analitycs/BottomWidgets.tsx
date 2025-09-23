import { reports, resourceData } from "@/constants/analitycs"
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
} from "recharts"

export default function BottomWidgets() {
  return (
    <div className="grid grid-cols-1 mt-3.5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Project Categories */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Project Categories</h2>
          <Download className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
        <img
          src="/images/project-categories.png"
          alt="Project Categories"
          className="w-full h-40 object-cover rounded"
        />
      </div>

      {/* Resource Allocation */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Resource Allocation</h2>
          <Download className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
        <div className="w-full h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={resourceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="trees"
                stroke="#22c55e"
                name="Trees Planted"
              />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="#6366f1"
                name="CO₂ Reduced"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Reports */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Quick Reports</h2>
        </div>
        <ul className="space-y-3">
          {reports.map((r) => (
            <li
              key={r.id}
              className="flex justify-between items-center text-sm"
            >
              <span>{r.title}</span>
              <Download className="w-4 h-4 text-green-600 cursor-pointer" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
