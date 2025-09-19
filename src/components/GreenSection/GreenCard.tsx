import { GREEN_SECTION } from "@/constants/greenSection";

export default function GreenCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-16 gap-6">
      {GREEN_SECTION.map(({ id, title, description, icon, bg }) => (
        <div
          key={id}
          className="bg-white w-full max-w-[290px] p-6 rounded-lg shadow-md transition hover:shadow-lg"
        >
          <div className={`w-[60px] h-[60px] rounded-[9999px] m-auto flex items-center justify-center mb-4 ${bg}`}>
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      ))}
    </div>
  );
}
