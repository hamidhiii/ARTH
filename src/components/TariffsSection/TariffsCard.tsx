import { tarifsSection } from "@/constants/tarifsSection"
import type { Tariff } from "@/constants/tarifsSection"

export default function TariffsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[30px] justify-items-center">
      {tarifsSection.map(({ id, img, title, description }: Tariff) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl max-w-[400px] flex flex-col transition-shadow duration-300 w-full"
        >
          <img src={img} alt={title} className="w-full h-48 object-cover" />

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {description}
            </p>

            <button className="self-end max-w-[140px] rounded-[100px] bg-[#2AFCD636] px-[16px] py-[10px] mt-auto cursor-pointer hover:bg-black hover:text-white">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
