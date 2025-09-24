import {  type FC } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const LiveMap: FC = () => {
  const center: [number, number] = [41.31, 69.25]; // пример координат

  return (
    <div className="bg-white rounded-md shadow p-4">
      <h2 className="font-semibold mb-2">Live Map View</h2>
      <div className="w-full h-64 mb-3 rounded-md overflow-hidden">
        <MapContainer center={center} zoom={14} scrollWheelZoom={false} className="w-full h-full">
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Satellite / Ortho">
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenTopoMap"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Street">
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap"
              />
            </LayersControl.BaseLayer>

            <LayersControl.Overlay name="NDVI">
              <TileLayer
                // использовать URL к слою NDVI (raster / heatmap)
                url="https://your-server/ndvi/{z}/{x}/{y}.png"
                opacity={0.6}
              />
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Thermal">
              <TileLayer
                // URL для теплового слоя
                url="https://your-server/thermal/{z}/{x}/{y}.png"
                opacity={0.6}
              />
            </LayersControl.Overlay>

            <LayersControl.Overlay name="LiDAR">
              <TileLayer
                // слой LiDAR (если это растровый слой)
                url="https://your-server/lidar/{z}/{x}/{y}.png"
                opacity={0.6}
              />
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap gap-3">
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
          <button className="px-3 py-1 bg-green-500 text-white text-sm rounded">
            GeoTIFF
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">
            PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};
