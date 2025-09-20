import banner from "../../assets/HomeLending/Без названия2 (2).png"
export default function HeaderBanner() {
  return (
    <section className="bg-[#05966945]">
        <div className="pb-13">
        <img src={banner} alt=""  className="m-auto lg:w-[1100px] lg:h-[370px]"/>
        <h1 className="font-bold text-[90px] mt-[10px] md:text-[127px] leading-10 text-center text-white">AIRTH</h1>
        </div>
    </section>
  )
}
