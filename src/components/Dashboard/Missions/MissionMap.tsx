import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet"
import type { LatLngExpression } from "leaflet"
import { missions } from "@/constants/missions"
import "leaflet/dist/leaflet.css"

export default function MissionMap() {
  const center: LatLngExpression = [41.3, 69.2] // Узбекистан

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow">
      <MapContainer
        center={center}
        zoom={5}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Радиус сканирования */}
        <Circle
          center={center}
          radius={250000} // 250 км
          pathOptions={{ color: "lime", fillOpacity: 0.1 }}
        />

        {missions.map((m) => {
          const pos: LatLngExpression = [m.lat, m.lng]
          return (
            <Marker key={m.id} position={pos}>
              <Popup>
                <strong>{m.name}</strong> <br />
                {m.description} <br />
                Status: {m.status} <br />
                Progress: {m.progress}%
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
