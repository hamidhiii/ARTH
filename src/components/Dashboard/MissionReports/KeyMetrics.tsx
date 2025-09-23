interface KeyMetricsProps {
    metrics: { label: string; value: string }[]
  }
  
  export default function KeyMetrics({ metrics }: KeyMetricsProps) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Key Metrics</h3>
        <div className="bg-gray-50 rounded-lg divide-y">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex justify-between px-4 py-3 text-sm"
            >
              <span className="text-gray-600">{metric.label}</span>
              <span className="font-medium text-gray-800">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  