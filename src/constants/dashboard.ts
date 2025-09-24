import { TreePine, Cloud, Wheat, Rocket } from "lucide-react"

export const stats = [
  { id: 1, icon: TreePine, value: "47,832", label: "Trees Planted", change: "+12.5%", color: "text-green-600" },
  { id: 2, icon: Cloud, value: "2,847", label: "Tons CO₂ Reduced", change: "+8.3%", color: "text-blue-600" },
  { id: 3, icon: Wheat, value: "89.4%", label: "Agricultural Yield", change: "+15.7%", color: "text-yellow-600" },
  { id: 4, icon: Rocket, value: "156", label: "Active Missions", change: "+23.1%", color: "text-purple-600" },
]

export const chartData = [
  { month: "Jan", trees: 400, co2: 240, yield: 80 },
  { month: "Feb", trees: 600, co2: 300, yield: 85 },
  { month: "Mar", trees: 800, co2: 500, yield: 90 },
  { month: "Apr", trees: 500, co2: 200, yield: 70 },
  { month: "May", trees: 900, co2: 600, yield: 95 },
  { month: "Jun", trees: 1200, co2: 750, yield: 100 },
]


export const liveActivity = [
  { id: 1, status: "Amazon Reforestation", location: "Brazil", time: "2 min ago", change: "+247 trees", color: "text-green-600" },
  { id: 2, status: "Solar Farm Setup", location: "California", time: "5 min ago", change: "-15 tons CO₂", color: "text-blue-600" },
  { id: 3, status: "Smart Irrigation", location: "Kenya", time: "8 min ago", change: "+12% yield", color: "text-yellow-600" },
]
