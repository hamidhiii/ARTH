import ExecutiveSummary from "./ExecutiveSummary"
import KeyMetrics from "./KeyMetrics"
import Recommendations from "./Recommendations"
import { reports } from "@/constants/reports"
import { Button } from "@/components/ui/button"

export default function ReportDetail({ id }: { id: number }) {
  const report = reports.find((r) => r.id === id)
  if (!report) return <p>No report selected</p>

  return (
    <div className="flex-1 bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">{report.title}</h2>
          <p className="text-xs text-gray-500">Generated on {report.date}</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-red-500 hover:bg-red-600 text-white text-xs">Export PDF</Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-xs">Export Excel</Button>
        </div>
      </div>

      {/* Sections */}
      <ExecutiveSummary summary={report.summary} />
      <KeyMetrics metrics={report.metrics} />
      <Recommendations items={report.recommendations} />
    </div>
  )
}
