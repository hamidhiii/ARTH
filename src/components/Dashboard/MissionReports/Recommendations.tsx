import { CheckCircle2, ArrowRightCircle, Zap } from "lucide-react"

interface RecommendationsProps {
  items: string[]
}

export default function Recommendations({ items }: RecommendationsProps) {
  const icons = [<Zap key="1" className="w-4 h-4 text-yellow-500" />,
                 <ArrowRightCircle key="2" className="w-4 h-4 text-blue-500" />,
                 <CheckCircle2 key="3" className="w-4 h-4 text-green-500" />]

  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">Recommendations</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            {icons[idx % icons.length]}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
