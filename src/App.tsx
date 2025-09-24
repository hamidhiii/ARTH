import { Route, Routes } from "react-router-dom"
import HomeLending from "./pages/HomeLending"
import EcoScanLending from "./pages/EcoScanLending"
import CubesatLending from "./pages/CubesatLending"
import SignIn from "./components/SignIn/SignIn"
import Dashboard from "./pages/Dashboard"
import PublicLayout from "./layots/PublicLayout"
import AdminLayout from "./layots/AdminLayout"
import Analitycs from "./pages/Analitycs"
import Reports from "./pages/Reports"
import MissionsPage from "./pages/MissionMap"
import EcoScan from "./pages/Ecoscan"
import CubeSatPage from "./pages/CubeSatPage"
import Tariffs from "./components/Dashboard/Tariffs/Tariffs"
import { SpeedInsights } from '@vercel/speed-insights/react';



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
        <Route path="tariffs" element={<Tariffs/>} />
        <Route path="analytics" element={<Analitycs/>} />
        <Route path="reports" element={<Reports/>} />
        <Route path="live-map" element={<MissionsPage/>} />
        <Route path="tariffs/Ecoscan" element={<EcoScan/>} />
        <Route path="tariffs/Cubesat" element={<CubeSatPage/>} />
      </Route>
      <SpeedInsights />
    </Routes>
  )
}
