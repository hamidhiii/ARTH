import banner from "../../assets/Без названия2 (2).png"
export default function HeaderBanner() {
  return (
    <section className="bg-[#05966945]">
        <div className="pb-13">
        <img src={banner} alt="" />
        <h1 className="font-bold text-[90px] mt-[10px] md:text-[127px] leading-10 text-center text-white">AIRTH</h1>
        </div>
    </section>
  )
}
