"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  Globe,
  Heart,
  X,
  Rocket,
  Brain,
  DollarSign,
  Users,
  Target,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
  Coffee,
  Award,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-float 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-40">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
            className="h-10 w-auto hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="text-cyan-400 font-semibold relative">
              About
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors relative group">
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors relative group">
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Let's Build
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full">
                <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Our Story
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">We're the</span>
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  90%
                </span>
                <span className="block text-white">who refused</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  to quit
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We've been where you are. We've felt the pain, the rejection, the sleepless nights.
                <span className="text-cyan-400 font-semibold"> But we didn't give up.</span>
              </p>
            </div>

            {/* Floating Stats - Mobile Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16">
              {[
                { number: "90%", label: "Startup Failure Rate", icon: Target, color: "red" },
                { number: "10%", label: "Success Stories", icon: Star, color: "yellow" },
                { number: "100%", label: "Our Commitment", icon: Heart, color: "pink" },
                { number: "∞", label: "Possibilities", icon: Sparkles, color: "cyan" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 bg-gradient-to-br ${
                        stat.color === "red"
                          ? "from-red-500/20 to-red-600/20 border border-red-500/30"
                          : stat.color === "yellow"
                            ? "from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30"
                            : stat.color === "pink"
                              ? "from-pink-500/20 to-pink-600/20 border border-pink-500/30"
                              : "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon
                        className={`h-5 w-5 md:h-6 md:w-6 ${
                          stat.color === "red"
                            ? "text-red-400"
                            : stat.color === "yellow"
                              ? "text-yellow-400"
                              : stat.color === "pink"
                                ? "text-pink-400"
                                : "text-cyan-400"
                        }`}
                      />
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-2">{stat.number}</div>
                    <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  The Problem
                </span>
                <br />
                <span className="text-white">Everyone Talks About</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Every time someone says <span className="text-red-400 font-bold">"90% of startups fail,"</span>
                they list the same tired reasons. But nobody offers real solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { reason: "No product-market fit", icon: Target },
                { reason: "Ran out of money", icon: DollarSign },
                { reason: "Founder conflicts", icon: Users },
                { reason: "Poor GTM strategy", icon: TrendingUp },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <X className="h-6 w-6 text-red-400 mx-auto mb-3" />
                    <p className="text-gray-300 font-medium">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-6">But here's what they don't tell you:</h3>
                <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-400">
                  <p>No one stays to rebuild with you.</p>
                  <p>No one walks into the trenches with you.</p>
                  <p>Everyone just... moves on.</p>
                </div>
              </div>

              <div className="pt-12">
                <Card className="max-w-2xl mx-auto bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30">
                  <CardContent className="p-8 text-center">
                    <Lightbulb className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      That's where VentureCrafters was born.
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We decided to be the partners we wished we had when we were struggling founders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Journey
                </span>
                <br />
                <span className="text-white">From Failure to Success</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">We've Been There</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We've sat on that side of the table, feeling the weight of uncertainty.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { text: "Pitched with trembling hands to skeptical investors", icon: Users, color: "red" },
                    { text: "Watched dashboards flatline at 3 AM", icon: TrendingUp, color: "orange" },
                    {
                      text: "Burnt through capital and had to rebuild from scratch",
                      icon: DollarSign,
                      color: "yellow",
                    },
                    { text: "Faced rejection after rejection, but kept going", icon: Heart, color: "pink" },
                  ].map((experience, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                          experience.color === "red"
                            ? "from-red-500/20 to-red-600/20"
                            : experience.color === "orange"
                              ? "from-orange-500/20 to-orange-600/20"
                              : experience.color === "yellow"
                                ? "from-yellow-500/20 to-yellow-600/20"
                                : "from-pink-500/20 to-pink-600/20"
                        }`}
                      >
                        <experience.icon
                          className={`h-5 w-5 ${
                            experience.color === "red"
                              ? "text-red-400"
                              : experience.color === "orange"
                                ? "text-orange-400"
                                : experience.color === "yellow"
                                  ? "text-yellow-400"
                                  : "text-pink-400"
                          }`}
                        />
                      </div>
                      <span className="text-gray-300 flex-1">{experience.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    And through all of this, we gained something invaluable—
                    <span className="text-cyan-400 font-bold"> real clarity</span> on what founders actually need.
                  </p>
                </div>
              </div>

              <div className="relative">
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <CardContent className="p-0 text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-cyan-400 mx-auto" />
                      <h3 className="text-2xl font-bold text-white">Our Realization</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Founders don't fail because they're wrong or incompetent.
                      </p>
                      <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        They fail because they're alone.
                      </p>
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Now Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">What We Do Now</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                At VentureCrafters, we help founders build real, fundable, scalable businesses with execution-first
                thinking, hands-on support, and brutal honesty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">90%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">If you're in the 90%</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We'll help you build smarter, faster, and with more structure. No more shooting in the dark.
                  </p>
                  <div className="space-y-3">
                    {["Strategic Planning", "MVP Development", "Market Validation"].map((feature, idx) => (
                      <div key={idx} className="flex items-center text-cyan-300">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">10%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">If you're in the 10%</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We'll back you with fundraising support, growth planning, tech builds, and investor connections.
                  </p>
                  <div className="space-y-3">
                    {["Fundraising Support", "Growth Strategy", "Investor Network"].map((feature, idx) => (
                      <div key={idx} className="flex items-center text-purple-300">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <Coffee className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">No fluff. No VC lingo.</span>
                    <br />
                    Just clear paths and committed people who've walked the journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-gray-500">Our Validation?</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  We Don't Just Talk. We Build.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Lightbulb,
                  number: "12+",
                  title: "MVPs Launched",
                  desc: "Across fintech, travel tech, D2C, and last-mile delivery",
                  color: "cyan",
                },
                {
                  icon: DollarSign,
                  number: "$600K+",
                  title: "Capital Raised",
                  desc: "Helped startups secure funding across early-stage deals",
                  color: "purple",
                },
                {
                  icon: Globe,
                  number: "Global",
                  title: "Network",
                  desc: "Worldwide connections with operators, angels, and builders",
                  color: "pink",
                },
                {
                  icon: Award,
                  number: "100%",
                  title: "Commitment",
                  desc: "Led by ex-founders who've built and scaled multiple times",
                  color: "orange",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${
                        stat.color === "cyan"
                          ? "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                          : stat.color === "purple"
                            ? "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                            : stat.color === "pink"
                              ? "from-pink-500/20 to-pink-600/20 border border-pink-500/30"
                              : "from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon
                        className={`h-8 w-8 ${
                          stat.color === "cyan"
                            ? "text-cyan-400"
                            : stat.color === "purple"
                              ? "text-purple-400"
                              : stat.color === "pink"
                                ? "text-pink-400"
                                : "text-orange-400"
                        }`}
                      />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <h4 className="text-lg font-bold text-gray-200 mb-3">{stat.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{stat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-6">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <p className="text-lg text-gray-300">
                    Helped founders get investor-ready in <span className="text-white font-bold">30 days</span>
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <Rocket className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-lg text-gray-300">
                    Built startups from idea to revenue in <span className="text-white font-bold">60 days</span>
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <Target className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-lg text-gray-300">
                    Said <span className="text-red-400 font-bold">NO</span> to vanity projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-white">Join the Movement</h2>
              <div className="space-y-6 text-xl text-white/90">
                <p>
                  This is more than a service. <span className="font-bold">It's a mindset.</span>
                </p>
                <p>We're building a global tribe of builders who help each other win.</p>
                <p>Because we've been there. And we're here now.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">
                VentureCrafters — Built by the 90%. Here to change the stats.
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                  <Rocket className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img src="/images/venturecrafters-latest-logo.png" alt="VentureCrafters Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-lg">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-cyan-400 font-semibold">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-pink-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="pt-8 border-t border-white/10 text-gray-500">
              <p>&copy; 2024 VentureCrafters. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(1deg); }
          66% { transform: translate(-20px, 20px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}
