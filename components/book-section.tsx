import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const benefits = [
  "Technical Analysis Fundamentals",
  "Chart Pattern Recognition",
  "Risk Management Strategies",
  "Market Psychology Insights",
  "Entry & Exit Strategies",
  "Portfolio Diversification",
]

export function BookSection() {
  return (
    <section id="book" className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-sm font-medium">Trading Guide</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">Master Technical Analysis</h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed text-pretty">
              Delve into the world of Technical Analysis with this comprehensive trading guide. This book equips both
              novice and seasoned traders with the essential tools to make informed investment decisions in any market
              environment.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold min-h-[56px]">
              Get Your Copy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 border border-slate-600">
                <div className="w-64 md:w-80 h-80 md:h-96 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex flex-col items-center justify-center p-8 shadow-2xl">
                  <div className="text-slate-900 font-bold text-2xl md:text-3xl text-center mb-4">
                    Technical Analysis
                  </div>
                  <div className="text-slate-800 text-center text-sm md:text-base mb-6">A Complete Trading Guide</div>
                  <div className="w-16 h-1 bg-slate-900/30 rounded-full mb-6" />
                  <div className="text-slate-900/70 text-sm">XM Academy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
