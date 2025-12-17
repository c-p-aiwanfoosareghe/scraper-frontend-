import { BookOpen, LineChart, GraduationCap, Target, Zap, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Guides",
    description: "In-depth trading materials covering technical analysis, chart patterns, and market psychology.",
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description: "Real-time insights and expert analysis on cryptocurrency and financial markets.",
  },
  {
    icon: GraduationCap,
    title: "Expert Training",
    description: "Learn from seasoned traders with years of experience in various market conditions.",
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Master the art of protecting your capital with proven risk management strategies.",
  },
  {
    icon: Zap,
    title: "Trading Signals",
    description: "Receive timely alerts and opportunities to maximize your trading potential.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a worldwide network of traders sharing insights and strategies.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Unlocking Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Trading Potential
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-pretty">
            Get access to all of the benefits mentioned below and transform your trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
