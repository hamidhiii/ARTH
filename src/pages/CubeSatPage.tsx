import ClimateTrend from "@/components/Dashboard/Cubesat/ClimateTrend";
import CubeSatHeader from "@/components/Dashboard/Cubesat/CubeSatHeader";
import DataExport from "@/components/Dashboard/Cubesat/DataExport";
import GlobalOverlay from "@/components/Dashboard/Cubesat/GlobalOverlay";
import MetricsCards from "@/components/Dashboard/Cubesat/MetricsCards";
import OrbitTimeline from "@/components/Dashboard/Cubesat/OrbitTimeline";
import SatelliteImagery from "@/components/Dashboard/Cubesat/SatelliteImagery";
import WeeklyComparison from "@/components/Dashboard/Cubesat/WeeklyComparison";


export default function CubeSatPage() {
    return (
      <div className="p-4 md:p-6 space-y-6">
        {/* HEADER */}
        <CubeSatHeader />
  
        {/* OVERLAY + IMAGERY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GlobalOverlay />
          </div>
          <SatelliteImagery />
        </div>
  
        {/* METRICS */}
        <MetricsCards />
  
        {/* CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClimateTrend />
          <OrbitTimeline />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeeklyComparison />
          <DataExport />
        </div>
      </div>
    )
  }
  
