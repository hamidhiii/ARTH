import Sidebar from "@/components/Dashboard/SideBar"
import Topbar from "@/components/Dashboard/Topbar"
import { Outlet } from "react-router-dom"
import { useState } from "react"

export default function AdminLayout() {
  const [sidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-14 sm:h-16 border-b bg-white flex items-center px-4 sm:px-6">
          <Topbar  />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
