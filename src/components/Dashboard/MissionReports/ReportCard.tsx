import { cn } from "@/lib/utils"

export default function ReportCard({ report, onClick }: any) {
  return (
    <div
      className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 flex justify-between"
      onClick={onClick}
    >
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">{report.title}</h3>
        <p className="text-xs text-gray-500">{report.description}</p>
        <p className="text-xs text-gray-400 mt-1">{report.date} • {report.category}</p>
      </div>
      <span
        className={cn(
          "text-xs px-2 py-1 rounded-full h-fit",
          report.status === "Complete" && "bg-green-100 text-green-600",
          report.status === "In Progress" && "bg-yellow-100 text-yellow-600"
        )}
      >
        {report.status}
      </span>
    </div>
  )
}
