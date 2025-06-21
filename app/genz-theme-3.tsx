"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Sparkles, ArrowRight, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export default function GenZTheme3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-x-hidden relative">
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/">
          <div className="relative group">
            <img
              src="/images/venturecrafters-new-logo.png"
              alt="VentureCrafters Logo"
              className="h-12 w-auto transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            <Link
              href="/about"
              className="text-white/80 hover:text-pink-400 transition-all duration-300 hover:scale-110 relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <a
              href="#services"
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#portfolio"
              className="text-white/80 hover:text-yellow-400 transition-all duration-300 hover:scale-110 relative group"
            >
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-green-400 transition-all duration-300 hover:scale-110 relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 border-0 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Start Building</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="relative">
              <Badge className="bg-white/10 backdrop-blur-xl text-white border border-white/20 text-lg px-8 py-4 rounded-full font-semibold shadow-2xl">
                ✨ The Future is Now
              </Badge>
            </div>

            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black leading-none">
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  BUILD
                </span>
                <span className="block text-white mt-4">THE</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  IMPOSSIBLE
                </span>
              </h1>

              {/* Floating Elements Around Text */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-bounce"></div>
              <div className="absolute -bottom-10 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            </div>

            <div className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              <p className="mb-4">We turn wild ideas into world-changing startups</p>
              <p>Your vision + Our execution = Pure magic ✨</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-2xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Let's Create Magic
                  <Sparkles className="ml-3 h-6 w-6" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black text-2xl px-16 py-8 rounded-2xl font-bold backdrop-blur-xl transition-all duration-300 hover:scale-105"
              >
                See Our Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 left-10 animate-float">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardContent className="p-6 text-center">
              <Rocket className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <p className="text-white font-semibold">12 MVPs</p>
              <p className="text-white/60 text-sm">Launched</p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute top-1/3 right-10 animate-float animation-delay-2000">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">$600K+</p>
              <p className="text-white/60 text-sm">Raised</p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-1/4 left-1/4 animate-float animation-delay-4000">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">100+</p>
              <p className="text-white/60 text-sm">Connections</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  )
}
