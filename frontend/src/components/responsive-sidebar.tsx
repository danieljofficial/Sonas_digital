"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Package, ShoppingCart, Bookmark, Bell, SettingsIcon, LogOut, Plus, Palette, Menu, X } from "lucide-react"

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - hidden on mobile, shown on click or on larger screens */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:w-[114px]
      `}
      >
        <div className="h-full flex flex-col p-4">
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=30&width=106"
              alt="SonasDigitals"
              width={106}
              height={30}
              className="mb-4"
            />
            <button className="flex items-center justify-start w-full p-2 text-xs bg-gray-100 rounded-md">
              <Plus size={16} className="mr-1" />
              Custom order
            </button>
          </div>

          <nav className="flex-1 space-y-4">
            <Link href="/dashboard" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <Home size={20} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/brand-kit" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <Palette size={20} />
              <span className="text-xs mt-1">Brand Kit</span>
            </Link>
            <Link href="/products" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <Package size={20} />
              <span className="text-xs mt-1">Products</span>
            </Link>
            <Link href="/orders" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <ShoppingCart size={20} />
              <span className="text-xs mt-1">Orders</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <ShoppingCart size={20} />
              <span className="text-xs mt-1">Cart</span>
            </Link>
            <Link href="/saved-projects" className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500">
              <Bookmark size={20} />
              <span className="text-xs mt-1">Saved projects</span>
            </Link>
          </nav>

          <div className="mt-auto space-y-4">
            <Link
              href="/notifications"
              className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-500 relative"
            >
              <Bell size={20} />
              <span className="text-xs mt-1">Notification</span>
              <span className="absolute top-0 right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </Link>
            <Link href="/settings" className="flex flex-col items-center p-2 bg-gray-100 text-gray-800 rounded-md">
              <SettingsIcon size={20} />
              <span className="text-xs mt-1">Settings</span>
            </Link>
            <Link href="/logout" className="flex flex-col items-center p-2 text-red-500 hover:text-red-600">
              <LogOut size={20} />
              <span className="text-xs mt-1">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

