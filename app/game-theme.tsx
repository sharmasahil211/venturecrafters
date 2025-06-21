"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  ArrowRight,
  Lightbulb,
  Code,
  Sparkles,
  CheckCircle,
  Play,
  Zap,
  Target,
  Trophy,
  Gamepad2,
  Crown,
  Sword,
  Gem,
  Lock,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GameTheme() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const founderJourney = [
    {
      level: 1,
      stage: "IDEA",
      title: "💡 Spawn Point",
      progress: 25,
      status: "completed",
      description: "Every legend starts here",
      xp: "250 XP",
    },
    {
      level: 2,
      stage: "MVP",
      title: "🛠️ First Build",
      progress: 50,
      status: "completed",
      description: "Craft your first prototype",
      xp: "500 XP",
    },
    {
      level: 3,
      stage: "REVENUE",
      title: "💰 First Kill",
      progress: 75,
      status: "current",
      description: "Generate your first revenue",
      xp: "1000 XP",
    },
    {
      level: 4,
      stage: "FUNDING",
      title: "🚀 Boss Level",
      progress: 100,
      status: "locked",
      description: "Unlock investor mode",
      xp: "2500 XP",
    },
  ]

  const gamifiedServices = [
    {
      id: 1,
      title: "Idea Forge",
      subtitle: "Level 1 - Starter Pack",
      icon: Lightbulb,
      description: "Transform your wild ideas into game-changing concepts",
      features: ["Market Research", "Concept Validation", "Competitive Analysis"],
      difficulty: "Beginner",
      duration: "2-4 weeks",
      xp: "250 XP",
      status: "unlocked",
      color: "from-green-500 to-emerald-600",
      badge: "🌱 STARTER",
    },
    {
      id: 2,
      title: "MVP Builder",
      subtitle: "Level 2 - Craft Mode",
      icon: Code,
      description: "Build your minimum viable product with precision",
      features: ["Rapid Prototyping", "Tech Stack Setup", "User Testing"],
      difficulty: "Intermediate",
      duration: "4-8 weeks",
      xp: "500 XP",
      status: "unlocked",
      color: "from-blue-500 to-cyan-600",
      badge: "⚡ BUILDER",
    },
    {
      id: 3,
      title: "Growth Hacker",
      subtitle: "Level 3 - Scaling Mode",
      icon: TrendingUp,
      description: "Scale your startup with data-driven growth tactics",
      features: ["Growth Strategy", "Performance Marketing", "Analytics"],
      difficulty: "Advanced",
      duration: "6-12 weeks",
      xp: "1000 XP",
      status: "current",
      color: "from-purple-500 to-pink-600",
      badge: "🔥 SCALER",
    },
    {
      id: 4,
      title: "Funding Quest",
      subtitle: "Level 4 - Boss Battle",
      icon: DollarSign,
      description: "Secure funding and conquer the investment world",
      features: ["Pitch Deck", "Investor Network", "Due Diligence"],
      difficulty: "Expert",
      duration: "8-16 weeks",
      xp: "2500 XP",
      status: "locked",
      color: "from-yellow-500 to-orange-600",
      badge: "👑 LEGEND",
    },
    {
      id: 5,
      title: "Team Assembly",
      subtitle: "Level 5 - Guild Mode",
      icon: Users,
      description: "Build your dream team and create an unstoppable force",
      features: ["Talent Acquisition", "Team Building", "Culture Design"],
      difficulty: "Expert",
      duration: "Ongoing",
      xp: "1500 XP",
      status: "locked",
      color: "from-indigo-500 to-purple-600",
      badge: "⚔️ GUILD",
    },
    {
      id: 6,
      title: "Global Expansion",
      subtitle: "Level 6 - World Conquest",
      icon: Globe,
      description: "Dominate global markets and become a worldwide legend",
      features: ["Market Entry", "International Strategy", "Global Scaling"],
      difficulty: "Legendary",
      duration: "12+ weeks",
      xp: "5000 XP",
      status: "locked",
      color: "from-red-500 to-pink-600",
      badge: "🌍 CONQUEROR",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Gaming Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gaming-grid 15s linear infinite",
          }}
        />
      </div>

      {/* Floating Gaming Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-xl opacity-60 animate-pulse transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-lg opacity-50 animate-bounce transform rotate-12"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur-2xl opacity-40 animate-pulse transform -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur-xl opacity-50 animate-bounce transform rotate-45"></div>
      </div>

      {/* Gaming HUD Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b-2 border-cyan-500/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Player Info */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="group">
                <img
                  src="/images/venturecrafters-latest-logo.png"
                  alt="VentureCrafters"
                  className="h-10 w-auto hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-lg border border-cyan-500/30">
                  <span className="text-cyan-400 font-bold">LEVEL 42</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-lg border border-yellow-500/30">
                  <span className="text-yellow-400 font-bold">15,750 XP</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">
                ABOUT
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors font-semibold">
                SERVICES
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-pink-400 transition-colors font-semibold">
                PORTFOLIO
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">
                CONTACT
              </Link>
            </nav>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Gamepad2 className="mr-2 h-4 w-4" />
              START GAME
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section - Gaming Dashboard */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            {/* Gaming Badge */}
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-2 border-cyan-500/50 text-lg px-6 py-3 rounded-full font-bold animate-pulse">
              <Trophy className="w-5 h-5 mr-2" />🎮 STARTUP BUILDING GAME
            </Badge>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  YOU PLAY
                </span>
                <span className="block text-white mt-4">WE</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  CO-OP
                </span>
              </h1>

              <div className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <p className="mb-4">
                  <span className="text-cyan-400 font-bold">Startup building isn't a pitch.</span>
                </p>
                <p>
                  <span className="text-pink-400 font-bold">It's a game.</span> 🎯
                </p>
              </div>
            </div>

            {/* Gaming Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Players Leveled Up", value: "50+", icon: Users, color: "cyan" },
                { label: "XP Generated", value: "$600K+", icon: DollarSign, color: "yellow" },
                { label: "Quests Completed", value: "12+", icon: Target, color: "purple" },
                { label: "Achievement Rate", value: "100%", icon: Trophy, color: "pink" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-black/50 backdrop-blur-xl border-2 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`h-8 w-8 mx-auto mb-2 text-${stat.color}-400`} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-3 h-6 w-6" />
                START YOUR QUEST
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black text-xl px-12 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                <Gamepad2 className="mr-3 h-6 w-6" />
                WATCH GAMEPLAY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Journey - Progress Bar */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-2 border-green-500/50 text-lg px-6 py-3 rounded-full font-bold mb-6">
              <BarChart3 className="w-5 h-5 mr-2" />🎯 FOUNDER JOURNEY
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                LEVEL UP YOUR STARTUP
              </span>
            </h2>
            <p className="text-xl text-gray-400">Complete quests, gain XP, unlock new abilities</p>
          </div>

          {/* Progress Journey */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-800 rounded-full transform -translate-y-1/2">
                <div
                  className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: "75%" }}
                ></div>
              </div>

              {/* Journey Stages */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {founderJourney.map((stage, index) => (
                  <div key={index} className="relative">
                    <Card
                      className={`
                      ${
                        stage.status === "completed"
                          ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/50"
                          : stage.status === "current"
                            ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 animate-pulse"
                            : "bg-gradient-to-br from-gray-800/20 to-gray-700/20 border-gray-600/50"
                      }
                      backdrop-blur-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer
                    `}
                    >
                      <CardContent className="p-6 text-center">
                        {/* Level Badge */}
                        <div
                          className={`
                          w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold
                          ${
                            stage.status === "completed"
                              ? "bg-green-500 text-white"
                              : stage.status === "current"
                                ? "bg-blue-500 text-white animate-pulse"
                                : "bg-gray-600 text-gray-400"
                          }
                        `}
                        >
                          {stage.status === "completed" ? (
                            <CheckCircle className="h-8 w-8" />
                          ) : stage.status === "current" ? (
                            stage.level
                          ) : (
                            <Lock className="h-8 w-8" />
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{stage.description}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              stage.status === "completed"
                                ? "bg-green-500"
                                : stage.status === "current"
                                  ? "bg-blue-500"
                                  : "bg-gray-600"
                            }`}
                            style={{ width: `${stage.progress}%` }}
                          ></div>
                        </div>

                        <Badge
                          className={`
                          ${
                            stage.status === "completed"
                              ? "bg-green-500/20 text-green-300 border-green-500/50"
                              : stage.status === "current"
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                                : "bg-gray-600/20 text-gray-400 border-gray-600/50"
                          }
                        `}
                        >
                          {stage.xp}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Services - Skill Tree */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-2 border-purple-500/50 text-lg px-6 py-3 rounded-full font-bold mb-6">
              <Sword className="w-5 h-5 mr-2" />
              ⚔️ SKILL TREE
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                UNLOCK YOUR ABILITIES
              </span>
            </h2>
            <p className="text-xl text-gray-400">Master each skill to become a startup legend</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamifiedServices.map((service, index) => (
              <Card
                key={index}
                className={`
                  group relative overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer
                  ${
                    service.status === "unlocked"
                      ? "bg-gradient-to-br from-white/10 to-white/5 border-cyan-500/50 hover:border-cyan-400"
                      : service.status === "current"
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 hover:border-blue-400 animate-pulse"
                        : "bg-gradient-to-br from-gray-800/20 to-gray-700/20 border-gray-600/50 hover:border-gray-500"
                  }
                `}
              >
                {/* Lock Overlay for Locked Services */}
                {service.status === "locked" && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 font-bold">LOCKED</p>
                      <p className="text-xs text-gray-500">Complete previous levels</p>
                    </div>
                  </div>
                )}

                <CardContent className="p-8">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color}
                      group-hover:scale-110 transition-transform shadow-lg
                    `}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge
                      className={`
                      ${
                        service.status === "unlocked"
                          ? "bg-green-500/20 text-green-300 border-green-500/50"
                          : service.status === "current"
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                            : "bg-gray-600/20 text-gray-400 border-gray-600/50"
                      }
                    `}
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-400 font-semibold">{service.subtitle}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Game Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      <div>
                        <p className="text-xs text-gray-400">DIFFICULTY</p>
                        <p className="font-bold text-white">{service.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">DURATION</p>
                        <p className="font-bold text-white">{service.duration}</p>
                      </div>
                    </div>

                    {/* XP Reward */}
                    <div className="flex items-center justify-between pt-4">
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">
                        <Gem className="w-3 h-3 mr-1" />
                        {service.xp}
                      </Badge>
                      {service.status === "unlocked" && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          START
                        </Button>
                      )}
                      {service.status === "current" && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        >
                          <Zap className="w-4 h-4 mr-1" />
                          CONTINUE
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Gallery */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-2 border-yellow-500/50 text-lg px-6 py-3 rounded-full font-bold mb-6">
              <Crown className="w-5 h-5 mr-2" />🏆 HALL OF FAME
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                LEGENDARY PLAYERS
              </span>
            </h2>
            <p className="text-xl text-gray-400">Players who conquered the startup game</p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "SamparkBindhu", achievement: "First Revenue", xp: "1000 XP", badge: "💰" },
              { name: "CXFirst", achievement: "Series A", xp: "2500 XP", badge: "🚀" },
              { name: "Little Jungle", achievement: "Market Leader", xp: "1500 XP", badge: "👑" },
              { name: "Ajivam Water", achievement: "Innovation Award", xp: "2000 XP", badge: "⚡" },
              { name: "Survey Agent AI", achievement: "AI Pioneer", xp: "3000 XP", badge: "🤖" },
              { name: "ToyFlix", achievement: "Subscription Master", xp: "1800 XP", badge: "🎮" },
              { name: "PickkUp", achievement: "Logistics Legend", xp: "2200 XP", badge: "🚚" },
              { name: "FitFeast", achievement: "Health Hero", xp: "1600 XP", badge: "💪" },
            ].map((player, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-2 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{player.badge}</div>
                  <h3 className="font-bold text-white mb-1">{player.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{player.achievement}</p>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">{player.xp}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Boss CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Animated Gaming Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-black/50 text-red-300 border-2 border-red-500/50 text-xl px-8 py-4 rounded-full font-bold animate-pulse">
              <Sword className="w-6 h-6 mr-2" />🔥 FINAL BOSS BATTLE
            </Badge>

            <h2 className="text-6xl md:text-7xl font-black text-white">READY TO BECOME A LEGEND?</h2>

            <p className="text-2xl text-white/90 leading-relaxed">
              Your startup adventure awaits. Join the game and level up your entrepreneurial journey!
            </p>

            <div className="text-4xl font-bold text-white mb-8">🎮 Game On!</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-2xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Gamepad2 className="mr-3 h-6 w-6" />
                START PLAYING NOW
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-gray-900 text-2xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                <Trophy className="mr-3 h-6 w-6" />
                VIEW LEADERBOARD
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gaming-grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
