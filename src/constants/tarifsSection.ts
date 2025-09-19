import ecoscan from '../assets/Artboard 5.jpg'
import cubesat from '../assets/cubesat-image02.jpg'

export interface Tariff {
  id: number
  img: string
  title: string
  description: string
}

export const tarifsSection: Tariff[] = [
  {
    id: 0,
    img: ecoscan,
    title: "ECOSCAN",
    description:
      "An unmanned aerial survey system featuring 3 hour flight time and a geodetic GNSS receiver.",
  },
  {
    id: 1,
    img: cubesat,
    title: "CUBESAT",
    description:
      "CubeSat standard small satellites developed under the Space-π educational initiative enable school and student experiments in the near-Earth orbit",
  },
]
