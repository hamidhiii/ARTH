
import Sidebar from "@/components/Dashboard/SideBar"
import Topbar from "@/components/Dashboard/Topbar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 border-b bg-white flex items-center px-6">
          <Topbar />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
