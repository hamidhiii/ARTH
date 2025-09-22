import { TreePine, Cloud, Wheat, Rocket } from "lucide-react"

export const stats = [
  { id: 1, icon: TreePine, value: "47,832", label: "Trees Planted", change: "+12.5%", color: "text-green-600" },
  { id: 2, icon: Cloud, value: "2,847", label: "Tons CO₂ Reduced", change: "+8.3%", color: "text-blue-600" },
  { id: 3, icon: Wheat, value: "89.4%", label: "Agricultural Yield", change: "+15.7%", color: "text-yellow-600" },
  { id: 4, icon: Rocket, value: "156", label: "Active Missions", change: "+23.1%", color: "text-purple-600" },
]

export const chartData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 600 },
  { month: "Mar", value: 800 },
  { month: "Apr", value: 500 },
  { month: "May", value: 900 },
  { month: "Jun", value: 1200 },
]

export const liveActivity = [
  { id: 1, status: "Amazon Reforestation", location: "Brazil", time: "2 min ago", change: "+247 trees", color: "text-green-600" },
  { id: 2, status: "Solar Farm Setup", location: "California", time: "5 min ago", change: "-15 tons CO₂", color: "text-blue-600" },
  { id: 3, status: "Smart Irrigation", location: "Kenya", time: "8 min ago", change: "+12% yield", color: "text-yellow-600" },
]
