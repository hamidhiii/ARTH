import { applications } from "@/constants/applications ";
import { Check } from "lucide-react";

export default function Aplication() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {applications.map(({ id, icon, title, description, points, bg }) => (
      <div
        key={id}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
      >
        {/* Иконка */}
        <div className={`w-12 h-12 flex items-center justify-center rounded-md text-green-600 text-2xl mb-4 ${bg}`}>
        <img src={icon} alt="" />

        </div>
        {/* Заголовок */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Пункты */}
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-center text-gray-700 text-sm">
              <Check size={16} className="text-green-500 mr-2" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}
