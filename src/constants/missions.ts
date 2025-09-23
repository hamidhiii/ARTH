// constants/missions.ts
export const missions = [
  {
    id: 1,
    name: "Jizzakh Green Project",
    description: "Reforestation mission near Jizzakh region",
    lat: 40.1160, // Джизак
    lng: 67.8422,
    progress: 68,
    status: "Active",
    team: "12 members",
    category: "Reforestation",
  },
  {
    id: 2,
    name: "Tashkent River Cleanup",
    description: "Pollution control along Chirchiq river",
    lat: 41.2995, // Ташкент
    lng: 69.2401,
    progress: 45,
    status: "Active",
    vessels: "3 active",
    category: "Pollution Control",
  },
  {
    id: 3,
    name: "Bukhara Agro Initiative",
    description: "Sustainable farming in Bukhara region",
    lat: 39.7670, // Бухара
    lng: 64.4550,
    progress: 12,
    status: "Planning",
    category: "Agriculture",
  },
]

  
  export const missionStats = {
    total: 26,
    active: 18,
    completed: 8,
    coverage: "15,240 km²",
  }
  
  export const missionFilters = [
    { id: "reforestation", label: "Reforestation", count: 12, color: "text-green-600" },
    { id: "pollution", label: "Pollution Control", count: 8, color: "text-blue-600" },
    { id: "agriculture", label: "Agriculture", count: 6, color: "text-yellow-600" },
  ]
  
  export const missionLegend = [
    { label: "Reforestation", color: "bg-green-500" },
    { label: "Pollution Control", color: "bg-blue-500" },
    { label: "Agriculture", color: "bg-yellow-500" },
  ]
  