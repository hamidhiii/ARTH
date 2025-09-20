import icon1 from '../../../assets/EcoScanLending/svg (1).png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from '../../../assets/EcoScanLending/01.jpg'
import img2 from '../../../assets/EcoScanLending/Artboard 2.jpg'
import img3 from '../../../assets/EcoScanLending/Artboard 3.jpg'

export default function HeaderEcoScan() {
  return (
    <section className="bg-[#05966936] py-12">
      {/* Badge */}
      <div className="flex justify-center m-auto gap-2 max-w-[350px] items-center rounded-full py-[10px] px-[16px] bg-gradient-to-r from-[#10B9811A] to-[#3B82F61A]">
        <img src={icon1} alt="EcoScan Icon" className="w-5 h-5" />
        <h4 className="font-medium text-[14px] leading-5 text-[#64748B]">
          Professional Surveying Solution
        </h4>
      </div>

      {/* Title */}
      <h1 className="font-bold text-5xl text-[#0F172A] text-center mt-6">
        EcoScan
      </h1>
      <p className="max-w-[750px] font-normal text-[15px] md:text-[20px] leading-5 mg:leading-7 text-[#64748B] text-center m-auto mt-4">
        High-resolution aerial surveying drone for precision mapping and environmental monitoring with advanced sensor technology
      </p>

      {/* Carousel */}
      <div className="mt-10 max-w-5xl mx-auto relative">
        <Carousel>
          <CarouselContent>
            {[img1, img2, img3].map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative">
                  {/* Image */}
                  <img
                    src={img}
                    alt={`EcoScan ${idx + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg border-2 border-sky-300 shadow-sm"
                  />

                  {/* Active Badge */}
                  {idx === 0 && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                      Active
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious className="left-2 bg-white shadow rounded-full hover:bg-gray-100" />
          <CarouselNext className="right-2 bg-white shadow rounded-full hover:bg-gray-100" />
        </Carousel>
      </div>
    </section>
  )
}
