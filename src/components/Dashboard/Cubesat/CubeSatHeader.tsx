import { cubesatConstants } from "@/constants/cubesat"

export default function CubeSatHeader() {
  const { title, subtitle, lastPass, nextPass, status } = cubesatConstants.header

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="text-sm space-x-6 flex items-center">
        <span>Last Pass: <b>{lastPass}</b></span>
        <span>Next Pass: <b>{nextPass}</b></span>
        <span className="text-green-500 font-medium">{status}</span>
      </div>
    </div>
  )
}
