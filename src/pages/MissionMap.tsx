import MissionCard from "@/components/Dashboard/Missions/MissionCard";
import MissionFilters from "@/components/Dashboard/Missions/MissionFilters";
import MissionLegend from "@/components/Dashboard/Missions/MissionLegend";
import MissionMap from "@/components/Dashboard/Missions/MissionMap";
import MissionStats from "@/components/Dashboard/Missions/MissionStats";


export default function MissionsPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r p-4 flex flex-col">
        <MissionFilters />
        <h2 className="text-sm font-semibold mt-4">Active Missions</h2>
        <MissionCard />
      </div>

      {/* Map + overlays */}
      <div className="flex-1 relative">
        <MissionMap />

        {/* Stats */}
        <div className="absolute top-4 right-4 bg-white shadow rounded p-4">
          <MissionStats />
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white shadow rounded p-2">
          <MissionLegend />
        </div>
      </div>
    </div>
  )
}
