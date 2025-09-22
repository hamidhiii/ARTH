import { EyeClosedIcon, EyeIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider } from "firebase/auth"
import { auth } from "@/Firebase"

import google from '../../assets/991dbcd1cd4ad01aff8ed5ef17bdb52fc404e431.png'
import yandex from '../../assets/91a529810beaf35bb8b092ca0abba3b9318f9789.png'
import apple from '../../assets/5897954b8625aea5e9793b444f44772a24de460a.png'
import facebook from '../../assets/9a21c2082176bba4eac3e968babcde8fbe501c76.png'

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // 📌 Регистрация по email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("❌ Пароли не совпадают")
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("✅ Регистрация успешна!")
      navigate("/admin")
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        alert("⚠️ Такой аккаунт уже существует")
      } else {
        alert("❌ Ошибка: " + err.message)
      }
    }
  }

  // 📌 Google вход
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      alert("✅ Вход через Google успешен!")
      navigate("/admin")
    } catch (error: any) {
      alert("❌ Ошибка Google входа: " + error.message)
    }
  }

  // 📌 Apple вход
  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com")
    try {
      await signInWithPopup(auth, provider)
      alert("✅ Вход через Apple успешен!")
      navigate("/admin")
    } catch (error: any) {
      alert("❌ Ошибка Apple входа: " + error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-500">
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-600 p-8 rounded-md w-[350px] sm:w-[400px] shadow-lg"
      >
        <h1 className="text-white text-3xl font-bold text-center mb-8">Sign Up</h1>

        <label className="block text-white mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 px-4 py-2 rounded-md text-gray-900 bg-white"
        />

        <label className="block text-white mb-1">Password</label>
        <div className="relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-gray-900 bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-600 text-sm"
          >
            {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
          </button>
        </div>

        <label className="block text-white mb-1">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-md text-gray-900 bg-white"
        />

        <button
          type="submit"
          className="w-full bg-gray-900 cursor-pointer text-white py-2 rounded-md"
        >
          Sign Up
        </button>

        {/* Разделитель */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-200 text-sm">-or-</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
  
        {/* Соц-кнопки */}
        <div className="flex justify-center gap-5">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow"
          >
            <img src={google} alt="Google" className="w-6 h-6" />
          </button>

          <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
            <img src={yandex} alt="Yandex" className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleAppleSignIn}
            className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow"
          >
            <img src={apple} alt="Apple" className="w-6 h-6" />
          </button>

          <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  )
}
