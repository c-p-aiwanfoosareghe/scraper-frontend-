import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">In the race to end poverty</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Master the Art of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Trading</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Delve into the world of Technical Analysis with our comprehensive trading guide. Equip yourself with the
            essential tools to make informed investment decisions in any market environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6 min-h-[56px] w-full sm:w-auto"
            >
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-6 min-h-[56px] w-full sm:w-auto bg-transparent"
            >
              View Curriculum
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center justify-center gap-3 text-slate-400">
              <Users className="w-5 h-5 text-amber-400" />
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-400">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span>Expert Analysis</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-400">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Proven Strategies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
