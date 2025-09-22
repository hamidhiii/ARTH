import { MapPin } from "lucide-react"
import { liveActivity } from "@/constants/dashboard"

export default function LiveActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
          Live Activity
        </h2>
        <a href="#" className="text-xs sm:text-sm text-green-600">View All</a>
      </div>

      {/* Карта-заглушка */}
      <div className="h-24 sm:h-32 bg-gray-100 rounded mb-4 flex items-center justify-center">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
        <span className="ml-2 text-xs sm:text-sm text-gray-500">Live</span>
      </div>

      {/* Активности */}
      <div className="space-y-3">
        {liveActivity.map((act) => (
          <div key={act.id} className="flex justify-between text-xs sm:text-sm">
            <div>
              <p className="font-medium">{act.status}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">
                {act.location} • {act.time}
              </p>
            </div>
            <span className={`${act.color} font-semibold text-xs sm:text-sm`}>
              {act.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
