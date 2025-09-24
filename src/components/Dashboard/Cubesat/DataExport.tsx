import { cubesatConstants } from "@/constants/cubesat"

export default function DataExport() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-medium mb-2">Data Export</h2>
      <div className="space-y-3">
        {cubesatConstants.export.map((btn) => (
          <button
            key={btn.id}
            className={`${btn.color} text-white w-full py-2 rounded`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}
