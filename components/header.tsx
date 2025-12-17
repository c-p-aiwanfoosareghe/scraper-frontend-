"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl">X</span>
            </div>
            <span className="text-white font-bold text-xl">XM Academy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-slate-300 hover:text-amber-400 transition-colors">
              Features
            </Link>
            <Link href="#book" className="text-slate-300 hover:text-amber-400 transition-colors">
              Trading Guide
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Sign In
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Get Started</Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-slate-300 hover:text-amber-400 transition-colors py-2">
                Home
              </Link>
              <Link href="#features" className="text-slate-300 hover:text-amber-400 transition-colors py-2">
                Features
              </Link>
              <Link href="#book" className="text-slate-300 hover:text-amber-400 transition-colors py-2">
                Trading Guide
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 justify-start">
                  Sign In
                </Button>
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
