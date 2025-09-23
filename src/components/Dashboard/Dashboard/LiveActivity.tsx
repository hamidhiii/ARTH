import { MapPin } from "lucide-react"
import { liveActivity } from "@/constants/dashboard"

export default function LiveActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">Live Activity</h2>
        <a href="#" className="text-xs text-green-600">View All</a>
      </div>

      {/* Карта / статус */}
      <div className="h-40 sm:h-48 lg:h-56 bg-gray-100 rounded mb-4 flex items-center justify-center">
        <MapPin className="w-6 h-6 text-green-600" />
        <span className="ml-2 text-sm text-gray-500">Live</span>
      </div>

      {/* Лента событий */}
      <div className="space-y-3">
        {liveActivity.map((act) => (
          <div key={act.id} className="flex justify-between text-sm">
            <div>
              <p className="font-medium">{act.status}</p>
              <p className="text-gray-500 text-xs">{act.location} • {act.time}</p>
            </div>
            <span className={`${act.color} font-semibold`}>{act.change}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
