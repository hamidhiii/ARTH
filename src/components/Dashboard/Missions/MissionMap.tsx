import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet"
import type { LatLngExpression } from "leaflet"
import { missions } from "@/constants/missions"
import "leaflet/dist/leaflet.css"

export default function MissionMap() {
  // Центр карты (Узбекистан)
  const center: LatLngExpression = [41.3, 69.2]

  return (
    <MapContainer
      center={center}
      zoom={5}
      className="w-full h-full"
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Радиус сканирования */}
      <Circle
        center={center}
        radius={25000} // ~25 км
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
  )
}
