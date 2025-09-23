import { Route, Routes } from "react-router-dom"
import HomeLending from "./pages/HomeLending"
import EcoScanLending from "./pages/EcoScanLending"
import CubesatLending from "./pages/CubesatLending"
import SignIn from "./components/SignIn/SignIn"
import Dashboard from "./pages/Dashboard"
import PublicLayout from "./layots/PublicLayout"
import AdminLayout from "./layots/AdminLayout"
import Analitycs from "./pages/Analitycs"


export default function App() {
  return (
    <Routes>
      {/* Публичные страницы */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomeLending />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ecoscan" element={<EcoScanLending />} />
        <Route path="/cubesat" element={<CubesatLending />} />
      </Route>

      {/* Админка */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tariffs" element={<div>Tariffs page</div>} />
        <Route path="analytics" element={<Analitycs/>} />
        <Route path="reports" element={<div>Reports page</div>} />
        <Route path="live-map" element={<div>Live map page</div>} />
      </Route>
    </Routes>
  )
}
