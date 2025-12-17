import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">X</span>
              </div>
              <span className="text-white font-bold text-xl">XM Academy</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              In the race to end poverty. Empowering traders with knowledge and tools for financial success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#book" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Trading Guide
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Trading Signals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} XM Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
