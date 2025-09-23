import { missionLegend } from "@/constants/missions"

export default function MissionLegend() {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-2">Legend</h2>
      <ul className="space-y-1">
        {missionLegend.map((l, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${l.color}`} />
            {l.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
