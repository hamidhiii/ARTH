import { reports } from "@/constants/reports"
import ReportCard from "./ReportCard"

export default function ReportsList({ onSelect }: { onSelect: (id: number) => void }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full lg:w-1/3">
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search reports..."
          className="flex-1 border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} onClick={() => onSelect(report.id)} />
        ))}
      </div>
    </div>
  )
}
