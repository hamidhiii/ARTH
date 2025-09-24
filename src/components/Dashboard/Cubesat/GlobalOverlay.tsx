import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function GlobalOverlay() {
  return (
    <MapContainer
      center={[41.3, 69.2]} // центр Узбекистан
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles © Esri &mdash; Source: Esri, USGS, NOAA"
      />
    </MapContainer>
  )
}
