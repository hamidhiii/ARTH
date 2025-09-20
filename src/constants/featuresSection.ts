import drone1 from "../assets/HomeLending/Artboard 4.jpg"
import drone2 from "../assets/HomeLending/cubesat-image02.jpg"
import drone3 from "../assets/HomeLending/Artboard 5.jpg"
import icon1 from '../assets/HomeLending/i (5).png'
import icon2 from '../assets/HomeLending/svg (1).png'
import icon3 from '../assets/HomeLending/svg (2).png'
export interface Feature {
  id: number
  title: string
  description: string
  highlight?: string
  highlightDescription?: string
  icon: string
  image: string
}

export const features: Feature[] = [
  {
    id: 0,
    title: "Reforestation at Scale",
    description:
      "Advanced drones equipped with precision planting technology can plant over 100,000 trees per day, revolutionizing forest restoration efforts worldwide.",
    highlight: "100,000+",
    highlightDescription: "Trees planted daily per drone fleet",
    icon: icon1,
    image: drone1,
  },
  {
    id: 1,
    title: "Detect & Monitor Pollution",
    description:
      "Smart sensor networks create real-time pollution heatmaps, enabling rapid response to environmental threats and contamination sources.",
    highlight: "Real-time",
    highlightDescription: "Pollution monitoring & alerts",
    icon: icon2,
    image: drone2,
  },
  {
    id: 2,
    title: "Optimize Farming",
    description:
      "Precision irrigation and crop monitoring systems reduce water waste by up to 40% while increasing agricultural yields through AI-driven insights.",
    highlight: "40%",
    highlightDescription: "Water savings with precision irrigation",
    icon: icon3,
    image: drone3,
  },
]
