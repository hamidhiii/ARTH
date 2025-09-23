import { useState } from "react"
import { reports } from "@/constants/reports"
import ReportsList from "@/components/Dashboard/MissionReports/ReportsList"
import ReportDetail from "@/components/Dashboard/MissionReports/ReportDetail"

export default function Reports() {
  const [selected, setSelected] = useState<number>(reports[0].id)

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <ReportsList onSelect={setSelected} />
      <ReportDetail id={selected} />
    </div>
  )
}
