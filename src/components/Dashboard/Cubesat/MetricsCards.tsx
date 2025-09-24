import { cubesatConstants } from "@/constants/cubesat"

export default function MetricsCards() {
  const { temperature, humidity, solarRadiation, coverage } = cubesatConstants.metrics

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h3 className="text-gray-500">Temperature</h3>
        <p className="text-orange-500 text-xl font-semibold">{temperature}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h3 className="text-gray-500">Humidity</h3>
        <p className="text-blue-500 text-xl font-semibold">{humidity}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h3 className="text-gray-500">Solar Radiation</h3>
        <p className="text-yellow-500 text-xl font-semibold">{solarRadiation}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h3 className="text-gray-500">Coverage Stats</h3>
        <p>Area: <b>{coverage.area}</b></p>
        <p>Passes: <b>{coverage.dailyPasses}</b></p>
        <p>Clouds: <b>{coverage.cloudCoverage}</b></p>
      </div>
    </div>
  )
}
