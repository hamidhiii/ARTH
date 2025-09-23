import { missionFilters } from "@/constants/missions"

export default function MissionFilters() {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-2">Mission Filters</h2>
      {missionFilters.map((f) => (
        <label key={f.id} className="flex items-center gap-2 mb-1 cursor-pointer">
          <input type="checkbox" defaultChecked className="accent-current" />
          <span className={`${f.color} font-medium`}>
            {f.label} <span className="text-gray-500 text-xs">({f.count})</span>
          </span>
        </label>
      ))}
    </div>
  )
}
