import { cubesatConstants } from "@/constants/cubesat"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function SatelliteImagery() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-medium mb-2">Latest Satellite Imagery</h2>
      <div className="space-y-4">
        {cubesatConstants.satelliteImagery.map((img) => (
          <div key={img.id}>
            <MapContainer
              center={[41.3, 69.2]} // центр карты (например, Узбекистан)
              zoom={3}
              scrollWheelZoom={false}
              style={{ height: "150px", width: "100%", borderRadius: "8px" }}
            >
              <TileLayer url={img.tileUrl} attribution={img.attribution} />
            </MapContainer>
            <p className="text-sm mt-1">
              <b>{img.type}</b> — {img.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
