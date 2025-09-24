export const cubesatConstants = {
    header: {
      title: "CubeSat Monitoring",
      subtitle: "Real-time environmental data collection",
      lastPass: "14:32 UTC",
      nextPass: "16:47 UTC",
      status: "Active",
    },
    globalOverlay: {
      legend: ["Vegetation", "Temperature"],
      mapUrl: "/assets/maps/world-map.png", // картинка карты
    },
    satelliteImagery: [
        {
          id: 1,
          type: "Multi-spectral",
          time: "14:32 UTC",
          tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // заменишь на мультиспектр тайлы
          attribution: "Multi-spectral data source"
        },
        {
          id: 2,
          type: "Thermal IR",
          time: "14:28 UTC",
          tileUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", 
          attribution: "Thermal IR data source"
        }
      ],
    metrics: {
      temperature: "23.4°C",
      humidity: "67%",
      solarRadiation: "850 W/m²",
      coverage: {
        area: "2.44M km²",
        dailyPasses: 14,
        cloudCoverage: "25%",
      },
    },
    charts: {
      climateTrend: [
        { month: "Jan", temp: 22, humidity: 60 },
        { month: "Feb", temp: 23, humidity: 65 },
        { month: "Mar", temp: 24, humidity: 70 },
      ],
      orbitTimeline: [
        { day: "Mon", passes: 3 },
        { day: "Tue", passes: 5 },
        { day: "Wed", passes: 4 },
      ],
      weeklyComparison: [
        { week: "W1", radiation: 700 },
        { week: "W2", radiation: 850 },
        { week: "W3", radiation: 800 },
      ],
    },
    export: [
      { id: 1, label: "Download Raw Data (CSV)", color: "bg-green-500" },
      { id: 2, label: "Export Processed Maps", color: "bg-blue-500" },
      { id: 3, label: "Generate Report (PDF)", color: "bg-purple-500" },
    ],
  }
  