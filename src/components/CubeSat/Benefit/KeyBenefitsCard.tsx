import { KeyBenefits } from "@/constants/keyBenefits";


export default function KeyBenefitsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-16 gap-6">
      {KeyBenefits.map(({ id, title, description, icon }) => (
        <div
          key={id}
          className="bg-transparent w-full max-w-[360px] p-6 rounded-lg transition hover:shadow-lg"
        >
          <div className={`w-[60px] h-[60px] rounded-[9999px] m-auto flex items-center justify-center mb-4 bg-gradient-to-r from-[#00D4AA] to-[#3B82F6]`}>
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      ))}
    </div>
  )
}
