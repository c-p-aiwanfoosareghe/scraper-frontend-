"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, TrendingUp, Bell, BarChart3 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section className="py-20 md:py-32 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Newsletter</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Stay Ahead of the Crypto Curve
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed text-pretty">
                Get exclusive insights, expert analysis, and market updates delivered straight to your inbox. Don't miss
                out on the latest trends and opportunities in the ever-evolving world of cryptocurrency trading.
              </p>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2 text-slate-400">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span>Market Updates</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Bell className="w-5 h-5 text-amber-400" />
                  <span>Price Alerts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <BarChart3 className="w-5 h-5 text-amber-400" />
                  <span>Analysis</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Sign Up Now</h3>
              <p className="text-slate-400 mb-6">Elevate your trading game today!</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 h-12 text-base"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold h-12"
                >
                  Subscribe to Newsletter
                </Button>
              </form>

              <p className="text-slate-500 text-sm mt-4 text-center">No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
