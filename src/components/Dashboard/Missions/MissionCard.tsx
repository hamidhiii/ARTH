import { missions } from "@/constants/missions"

export default function MissionCard() {
  return (
    <div className="space-y-3">
      {missions.map((m) => (
        <div key={m.id} className="border rounded-lg p-3 shadow-sm bg-white">
          <h3 className="font-semibold">{m.name}</h3>
          <p className="text-xs text-gray-600">{m.description}</p>
          <p className="text-sm mt-1">Progress: {m.progress}%</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">View Details</button>
        </div>
      ))}
    </div>
  )
}
