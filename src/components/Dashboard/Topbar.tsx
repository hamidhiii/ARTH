import { NavLink } from "react-router-dom"
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
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Навигация слева */}
      <div className="flex gap-6 text-sm font-medium text-gray-600">
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

      {/* Аватар справа */}
      <div className="lg:ml-[850px] md:ml-[500px] ml-[200px]">
      <Dialog>
        <form>
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
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="@peduarte" />
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
      </div>
    </nav>
  )
}
