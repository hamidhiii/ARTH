// constants/missions.ts
export const missions = [
    {
      id: 1,
      name: "Amazon Project",
      description: "Reforestation mission covering 2,500 hectares",
      lat: -3.4653,
      lng: -62.2159,
      progress: 68,
      status: "Active",
      team: "12 members",
      category: "Reforestation",
    },
    {
      id: 2,
      name: "Ocean Cleanup",
      description: "Pacific plastic removal operation",
      lat: 14.5995,
      lng: 120.9842,
      progress: 45,
      status: "Active",
      vessels: "3 active",
      category: "Pollution Control",
    },
    {
      id: 3,
      name: "Sustainable Farming",
      description: "Organic agriculture initiative",
      lat: 35.8617,
      lng: 104.1954,
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
  