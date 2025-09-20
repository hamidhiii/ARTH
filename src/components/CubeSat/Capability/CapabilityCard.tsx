import {
    Camera,
    Thermometer,
    Globe,
    RefreshCcw,
    FileText,
    Map,
  } from "lucide-react"
  
export default function CapabilityCard() {
    const capabilities = [
        {
          id: 1,
          icon: <Camera className="w-6 h-6 text-green-600" />,
          title: "Satellite Imagery",
          description:
            "High-resolution visible and infrared spectrum imaging for comprehensive surface analysis",
        },
        {
          id: 2,
          icon: <Thermometer className="w-6 h-6 text-green-600" />,
          title: "Atmospheric Telemetry",
          description:
            "Real-time temperature, humidity, and radiation flux measurements",
        },
        {
          id: 3,
          icon: <Globe className="w-6 h-6 text-green-600" />,
          title: "Global Coverage",
          description:
            "Worldwide monitoring capability with comprehensive geographic reach",
        },
        {
          id: 4,
          icon: <RefreshCcw className="w-6 h-6 text-green-600" />,
          title: "Orbital Revisit",
          description:
            "Regular data updates with optimized orbital frequency patterns",
        },
        {
          id: 5,
          icon: <FileText className="w-6 h-6 text-green-600" />,
          title: "Data Formats",
          description:
            "Raw images, processed maps, and comprehensive telemetry reports",
        },
        {
          id: 6,
          icon: <Map className="w-6 h-6 text-green-600" />,
          title: "Remote Monitoring",
          description:
            "Continuous large-area monitoring, even in the most remote regions",
        },
      ]
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {capabilities.map(({ id, icon, title, description }) => (
      <div
        key={id}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6  items-start gap-4"
      >
        {/* Иконка */}
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100">
          {icon}
        </div>

        {/* Текст */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    ))}
  </div>
  )
}
