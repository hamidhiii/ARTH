import { missionStats } from "@/constants/missions"

export default function MissionStats() {
  return (
    <div className="text-sm space-y-1">
      <p>Total Missions: <b>{missionStats.total}</b></p>
      <p>Active: <b>{missionStats.active}</b></p>
      <p>Completed: <b>{missionStats.completed}</b></p>
      <p>Coverage: <b>{missionStats.coverage}</b></p>
    </div>
  )
}
