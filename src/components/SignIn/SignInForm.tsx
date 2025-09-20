import google from '../../assets/991dbcd1cd4ad01aff8ed5ef17bdb52fc404e431.png'
import yandex from '../../assets/91a529810beaf35bb8b092ca0abba3b9318f9789.png'
import apple from '../../assets/5897954b8625aea5e9793b444f44772a24de460a.png'
import facebook from '../../assets/9a21c2082176bba4eac3e968babcde8fbe501c76.png'
export default function SignInForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-teal-500">
        <div className="bg-emerald-600 p-8 rounded-md w-[350px] sm:w-[400px] shadow-lg">
          {/* Заголовок */}
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Sign In
          </h1>
  
          {/* Email */}
          <label className="block text-white font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="w-full mb-5 px-4 py-2 rounded-md outline-none text-gray-900
                       placeholder-gray-400 bg-white focus:ring-2 focus:ring-white"
          />
  
          {/* Password */}
          <label className="block text-white font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            className="w-full mb-6 px-4 py-2 rounded-md outline-none text-gray-900
                       placeholder-gray-400 bg-white focus:ring-2 focus:ring-white"
          />
  
          {/* Кнопка Sign In */}
          <button
            className="w-full bg-gray-900 text-white font-medium py-2 hover:cursor-pointer rounded-md hover:bg-gray-800 transition"
          >
            Sign In
          </button>
  
          {/* Разделитель */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-200 text-sm">-or-</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          {/* Соц-кнопки */}
          <div className="flex justify-center gap-5">
            <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
              <img src={google} alt="Google" className="w-6 h-6" />
            </button>
            <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
              <img src={yandex} alt="Yandex" className="w-6 h-6" />
            </button>
            <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
              <img src={apple} alt="Apple" className="w-6 h-6" />
            </button>
            <button className="bg-white w-10 h-10 flex hover:cursor-pointer items-center justify-center rounded-full shadow">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  