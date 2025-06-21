"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Rocket, Sparkles, ArrowRight, Users, Globe, DollarSign, TrendingUp, Code, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function GenZTheme1() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Neon Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-xl opacity-50 animate-bounce"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/">
          <img
            src="/images/venturecrafters-new-logo.png"
            alt="VentureCrafters Logo"
            className="h-12 w-auto hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-xl border border-pink-500/30 rounded-full px-8 py-4 shadow-lg shadow-pink-500/20">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-bold">
            <Link
              href="/about"
              className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              ABOUT
            </Link>
            <a
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              SERVICES
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              WORK
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110"
            >
              CONTACT
            </a>
          </div>
          <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 border-0 rounded-full font-bold text-black shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
            LET'S VIBE ✨
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30 text-lg px-6 py-3 rounded-full font-bold animate-pulse">
              🔥 NO CAP STARTUP BUILDERS
            </Badge>

            <h1 className="text-7xl md:text-9xl font-black leading-none">
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                WE DON'T
              </span>
              <span className="block text-white mt-4">JUST BUILD</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 bg-clip-text text-transparent">
                WE SLAY 💅
              </span>
            </h1>

            <div className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <p>
                Your startup's about to be <span className="text-pink-400 font-bold">ICONIC</span> ✨
              </p>
              <p>
                We're the <span className="text-cyan-400 font-bold">main characters</span> in your success story 🎬
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                LET'S GET IT 🚀
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-xl px-12 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                SHOW ME THE VIBES ✨
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-4 shadow-lg shadow-pink-500/30">
            <Rocket className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-lg shadow-cyan-500/30">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-1000">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-lg shadow-yellow-500/30">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                OUR SUPERPOWERS
              </span>
            </h2>
            <p className="text-2xl text-gray-400">We're literally built different 💯</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "IDEA → REALITY",
                desc: "Turn your shower thoughts into the next unicorn 🦄",
                color: "from-pink-500 to-purple-500",
                emoji: "💡",
              },
              {
                icon: DollarSign,
                title: "BAG SECURED",
                desc: "Get that funding and make VCs fight over you 💰",
                color: "from-cyan-500 to-blue-500",
                emoji: "💸",
              },
              {
                icon: TrendingUp,
                title: "GROWTH HACKS",
                desc: "Scale faster than your TikTok FYP 📈",
                color: "from-yellow-500 to-orange-500",
                emoji: "📊",
              },
              {
                icon: Code,
                title: "TECH THAT HITS",
                desc: "Code so clean it's giving main character energy ✨",
                color: "from-green-500 to-teal-500",
                emoji: "⚡",
              },
              {
                icon: Users,
                title: "SQUAD GOALS",
                desc: "Build a team that's absolutely iconic 👑",
                color: "from-purple-500 to-pink-500",
                emoji: "🤝",
              },
              {
                icon: Globe,
                title: "GLOBAL DOMINATION",
                desc: "Take over the world, one market at a time 🌍",
                color: "from-indigo-500 to-purple-500",
                emoji: "🌟",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-black/50 backdrop-blur-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="text-2xl font-black mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-lg">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 via-cyan-600 to-yellow-600 opacity-90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-7xl font-black text-white">READY TO BE ICONIC? 👑</h2>
            <p className="text-2xl text-white/90">Stop scrolling and start building. Your startup era starts NOW ✨</p>
            <div className="text-4xl font-bold text-white mb-8">No cap, we're about to change your life 🔥</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-2xl px-16 py-8 rounded-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
              >
                LET'S GOOO 🚀
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-black text-2xl px-16 py-8 rounded-2xl font-black transition-all duration-300 hover:scale-105"
              >
                SLIDE INTO OUR DMs 💬
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
