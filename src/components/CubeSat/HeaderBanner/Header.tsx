import icon1 from '../../../assets/Cubesat/i (10).png'
import img from '../../../assets/Cubesat/ede134a8b68778edd938eb22ac10e34b9129355d.png'


export default function Header() {
  return (
    <section className="bg-[#05966936] py-12">
      {/* Badge */}
      <div className="flex justify-center m-auto gap-2 max-w-[350px] items-center rounded-full py-[10px] px-[16px] bg-gradient-to-r from-[#10B9811A] to-[#3B82F61A]">
        <img src={icon1} alt="EcoScan Icon" className="w-5 h-5" />
        <h4 className="font-medium text-[14px] leading-5 text-[#64748B]">
        Satellite Technology
        </h4>
      </div>

      {/* Title */}
      <h1 className="font-bold text-5xl text-[#0F172A] text-center mt-6">
      CubeSat
      </h1>
      <p className="max-w-[750px] font-normal text-[15px] md:text-[20px] leading-5 mg:leading-7 text-[#64748B] text-center m-auto mt-4">
      Compact satellite delivering global environmental insights through advanced orbital monitoring and comprehensive data collection.
      </p>
      <div className='m-auto mt-16 max-w-[1240px] rounded-2xl bg-gradient-to-r from-[#1E3A8A33] to-[#00D4AA1A]'>
        <div className=' m-auto '>
      <p className="w-32 mt-[10px] ml-2.5 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
      Live Orbital Data
                    </p>
            <img src={img} alt="" className='m-auto md:w-[400px] h-280px md:h-380px rounded-[9999px]'/>
        </div>
      </div>
    </section>
  )
}
