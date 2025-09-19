import { offerCards } from "@/constants/offerSection";

export default function OfferCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-16 lg:ml-24 gap-6">
        {offerCards.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="bg-white w-full max-w-[390px] p-6 rounded-lg shadow-md"
          >
            <div className="w-[60px] h-[60px] rounded-[8px] bg-[#10B981] flex items-center justify-center mb-4">
              <img src={icon} alt={title} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      
    )
}
