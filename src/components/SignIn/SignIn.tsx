import { useState } from "react"
import HeaderBanner from "../HeaderBanner/HeaderBanner"
import SignInForm from "./SignInForm"
import LogInForm from "./LogInForm"

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <>
      <HeaderBanner />

      {/* Переключатель */}
      <div className="flex justify-center bg-teal-500 gap-4 pt-6">
        <button
          onClick={() => setIsSignIn(true)}
          className={` cursor-pointer px-6  py-2 rounded-md font-medium ${
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
      </div>

      {/* Форма */}
      <div className="">
        {isSignIn ? <SignInForm /> : <LogInForm />}
      </div>
    </>
  )
}
