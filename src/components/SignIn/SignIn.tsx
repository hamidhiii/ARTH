import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import SignInForm from "./SignInForm";
import LogInForm from "./LogInForm";

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const switcherRef = useRef<HTMLDivElement | null>(null);

  // Скроллим к переключателю после рендера
  useEffect(() => {
    if (switcherRef.current) {
      // Небольшая задержка, чтобы Header успел отрисоваться
      setTimeout(() => {
        switcherRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  }, []);

  return (
    <div className="bg-teal-500">
      <HeaderBanner />

      {/* Переключатель */}
      <motion.div
        ref={switcherRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center bg-teal-500 gap-4 pt-6"
      >
        <button
          onClick={() => setIsSignIn(true)}
          className={`cursor-pointer px-6 py-2 rounded-md font-medium ${
            isSignIn ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignIn(false)}
          className={`cursor-pointer px-6 py-2 rounded-md font-medium ${
            !isSignIn ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Login
        </button>
      </motion.div>

      {/* Форма с анимацией */}
      <div className="relative mt-6 flex justify-center">
        <AnimatePresence mode="wait">
          {isSignIn ? (
            <motion.div
              key="signIn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md"
            >
              <SignInForm />
            </motion.div>
          ) : (
            <motion.div
              key="logIn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md"
            >
              <LogInForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
