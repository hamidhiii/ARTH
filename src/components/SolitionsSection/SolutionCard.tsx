import { features, type Feature } from "@/constants/featuresSection";

export default function SolutionCard() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col mt-[30px] gap-10">
      {features.map(
        (
          { id, title, description, highlight, highlightDescription, icon, image }: Feature,
          index
        ) => (
          <div
            key={id}
            className="grid md:grid-cols-2 gap-6 items-center"
          >
            {/* Картинка (на мобилке всегда сверху) */}
            <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <img
                src={image}
                alt={title}
                className="w-full h-[300px] rounded-lg shadow-md object-cover"
              />
            </div>

            {/* Текст (на мобилке всегда снизу) */}
            <div
              className={`bg-white h-[300px] rounded-xl p-6 shadow-md
                ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-[60px] h-[60px] rounded-[8px] bg-[#10B981] flex items-center justify-center mb-4">
                  <img src={icon} alt="" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{description}</p>

              {highlight && (
                <div className="bg-white shadow rounded-lg px-4 py-3 border border-gray-200 w-fit">
                  <p className="text-green-600 font-bold">{highlight}</p>
                  <p className="text-gray-500 text-sm">
                    {highlightDescription}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
