import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-xl text-green-600">
        AIRTH
      </div>
      <nav className="flex-1 px-4 py-6 space-y-6">
        <div>
          <h4 className="text-xs text-gray-400 mb-2">Overview</h4>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-green-100 text-green-600"
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/live-map"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Live Map
          </NavLink>
        </div>

        <div>
          <h4 className="text-xs text-gray-400 mb-2">Tariffs</h4>
          <NavLink
            to="/admin/ecoscan"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:text-black"
              }`
            }
          >
            EcoScan
          </NavLink>
          <NavLink
            to="/admin/cubesat"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Cubesat
          </NavLink>
        </div>

        <div>
          <h4 className="text-xs text-gray-400 mb-2">Data</h4>
          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive ? "bg-green-100 text-green-600" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Reports
          </NavLink>
        </div>
      </nav>
    </aside>
  )
}
