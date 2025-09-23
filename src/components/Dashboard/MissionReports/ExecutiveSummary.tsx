interface ExecutiveSummaryProps {
    summary: {
      energyReduction: string
      kwhSaved: string
      costSavings: string
    }
  }
  
  export default function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Executive Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{summary.energyReduction}</p>
            <p className="text-xs text-gray-600">Energy Reduction</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{summary.kwhSaved}</p>
            <p className="text-xs text-gray-600">kWh Saved</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{summary.costSavings}</p>
            <p className="text-xs text-gray-600">Cost Savings</p>
          </div>
        </div>
      </div>
    )
  }
  