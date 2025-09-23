import type { FC } from "react";
import map from '@/assets/EcoScanLending/div.png'

export const LiveMap: FC = () => (
  <div className="bg-white rounded-md shadow p-4">
    <h2 className="font-semibold mb-2">Live Map View</h2>
    <div className="w-full h-64 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
     <img src={map} alt="" className="h-64 object-cover"/>
    </div>
    <div className="flex gap-3 justify-between">
      <div className="flex gap-3">
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" /> Orthophoto
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" /> NDVI
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" /> Thermal
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" /> LiDAR
        </label>
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-green-500 text-white text-sm rounded">GeoTIFF</button>
        <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">PDF Report</button>
      </div>
    </div>
  </div>
);
