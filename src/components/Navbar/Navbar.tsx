import { useState } from "react";
import Menu from "./Menu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Gemini_Generated_Image_5nvpty5nvpty5nvp.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex m-auto max-w-[1400px] pt-2 lg:justify-between md:justify-around items-center px-4">
      {/* Лого */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-[150px]" />
        {/* <h2 className="font-bold text-xl leading-7 text-[#111827]">AIRTH</h2> */}
      </div>

      {/* Десктопное меню */}
      <div className="hidden md:block">
        <Menu />
      </div>

      {/* Кнопка */}
      <button className="hidden md:block bg-[#2AFCD636] cursor-pointer hover:bg-[#0F172A] hover:text-white rounded-lg px-5 py-3 font-medium text-base leading-6 text-black">
        Get Started
      </button>

      {/* Мобильный бургер */}
      <div className="md:hidden ml-auto">
        {open ? (
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      {/* Анимированное мобильное меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ y: -50, opacity: 0, rotateX: 25 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -50, opacity: 0, rotateX: 25 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="absolute top-14 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden z-50 rounded-b-2xl"
          >
            <Menu />
            <button className="bg-[#2AFCD636] cursor-pointer hover:bg-[#0F172A] hover:text-white rounded-lg px-5 py-3 font-medium text-base leading-6 text-black">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
