import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import logo from '../../assets/Gemini_Generated_Image_5nvpty5nvpty5nvp.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className=''>
        <img src={logo} alt="" className='w-48 h-30 m-auto'/>
        <p className='font-normal text-xl leading-7 text-[#94A3B8] text-center'>© 2025 AIRTH. Advanced satellite technology for environmental monitoring.</p>
        <ul className='flex m-auto items-center justify-center text-center gap-2.5 mt-4'>
            <li className='text-[25px] cursor-pointer text-gray-500 hover:text-[#08a0e9]'><Link to={'https://www.facebook.com/?locale=ru_RU'}><BsTwitter/></Link></li>
            <li className='text-[25px] cursor-pointer text-gray-500 hover:text-[#0a66c2]'><Link to={'https://www.linkedin.com/'}><BsLinkedin/></Link></li>
            <li className='text-[25px] cursor-pointer text-gray-500 hover:text-[#FF0000]'><Link to={'https://www.youtube.com/'}><BsYoutube/></Link></li>
        </ul>
    </footer>
  )
}
