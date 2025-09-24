import { FlightComparison } from "@/components/Dashboard/EcoScan/Charts/FlightComparison";
import { VegetationTrend } from "@/components/Dashboard/EcoScan/Charts/VegetationTrend";
import { Header } from "@/components/Dashboard/EcoScan/Header";
import { LidarModel } from "@/components/Dashboard/EcoScan/LidarModel";
import { LiveMap } from "@/components/Dashboard/EcoScan/LiveMap";
import { OrthoImagery } from "@/components/Dashboard/EcoScan/SidePanels/OrthoImagery";
import { Stats } from "@/components/Dashboard/EcoScan/Stats";


export default function EcoScan() {
    return (
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        <Header />
        <Stats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <LiveMap />
          </div>
  
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <OrthoImagery />
            {/* NDVI и Thermal аналогично */}
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <VegetationTrend />
          <FlightComparison />
        </div>
  
        <LidarModel />
      </div>
    );
  }
  
