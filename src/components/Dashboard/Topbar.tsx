import { NavLink } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"


export default function Topbar() {
  const [open, setOpen] = useState(false)
  const [tariffsOpen, setTariffsOpen] = useState(false)
  

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white">
      {/* ЛОГО слева */}
      <div className="text-lg font-bold lg:hidden block text-green-600">EcoAdmin</div>

      {/* ПРАВАЯ часть */}
      <div className="flex items-center gap-4">
        {/* Навигация для десктопа */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-black"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/tariffs"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-black"
            }
          >
            Tariffs
          </NavLink>
          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-black"
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-black"
            }
          >
            Reports
          </NavLink>
        </div>

        {/* Аватар */}
        <Dialog>
          <form className="ml-19 md:ml-30 lg:ml-195">
            <DialogTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>

        {/* Бургер для мобилки */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-6 p-2 hover:bg-gray-100 rounded-md"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              <NavLink to="/admin" onClick={() => setOpen(false)}>
                Dashboard
              </NavLink>

              {/* Аккордеон Tariffs */}
              <div>
                <button
                  onClick={() => setTariffsOpen(!tariffsOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Tariffs</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      tariffsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`ml-4 overflow-hidden transition-all duration-300 ${
                    tariffsOpen ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 text-gray-600">
                    <NavLink
                      to="/admin/tariffs/ecoscan"
                      onClick={() => setOpen(false)}
                      className="hover:text-green-600"
                    >
                      Ecoscan
                    </NavLink>
                    <NavLink
                      to="/admin/tariffs/cubesat"
                      onClick={() => setOpen(false)}
                      className="hover:text-green-600"
                    >
                      Cubesat
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/admin/analytics" onClick={() => setOpen(false)}>
                Analytics
              </NavLink>
              <NavLink to="/admin/reports" onClick={() => setOpen(false)}>
                Reports
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}
