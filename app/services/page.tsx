"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  DollarSign,
  CheckCircle,
  X,
  ArrowRight,
  Rocket,
  Settings,
  TrendingUp,
  Shield,
  Code,
  PresentationIcon as PresentationChart,
  FileText,
  Database,
  UserCheck,
  BarChart3,
  Briefcase,
  Handshake,
  Star,
  Sparkles,
  Clock,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ServicesPage() {
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
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out hidden md:block"
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
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/services" className="text-cyan-400 font-semibold relative">
              Services
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
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
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Let's Build
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                The Only Execution Platform Founders Need
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">We're Not a</span>
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Cohort
                </span>
                <span className="block text-white">We're Your</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Execution Partner
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300">
                <p className="leading-relaxed">
                  We're a <span className="text-cyan-400 font-bold">full-stack execution partner</span> built for
                  founders who want to build real businesses — not just pitch decks.
                </p>
              </div>
            </div>

            {/* What We're NOT - Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { text: "We're not a cohort", icon: X },
                { text: "We're not a mentorship program", icon: X },
                { text: "We're not a community", icon: X },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-red-400 mx-auto mb-3" />
                    <p className="text-gray-300 font-medium text-sm md:text-base">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Uniquely Simple Model
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four integrated pillars that transform how you build, scale, and fund your startup.
            </p>
          </div>

          <div className="space-y-20">
            {/* Pillar 1: Personal Execution Partner */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm px-4 py-2">
                    <Users className="w-4 h-4 mr-2" />
                    Core Service
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-white">Your Personal Execution Partner</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We sit inside your business, every day. Not mentors. Not advisors.{" "}
                    <span className="text-cyan-400 font-bold">Operators.</span>
                  </p>
                  <p className="text-lg text-gray-400">
                    👉 We operate like a fractional co-founder — with accountability baked in.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { text: "Daily execution sprints", icon: Clock },
                    { text: "Weekly KPI tracking", icon: BarChart3 },
                    { text: "Live in your tools", icon: Settings },
                    { text: "Co-owning deliverables", icon: Handshake },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >
                      <feature.icon className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-xl border border-cyan-500/30 p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">Fractional Co-Founder</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We don't just advise from the sidelines. We roll up our sleeves and execute alongside you, taking
                      ownership of outcomes.
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pillar 2: On-Demand Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-xl border border-purple-500/30 p-8 lg:order-1">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">Specialized Experts</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Access world-class specialists through our trusted partner network. No full-time hires needed.
                    </p>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Pay Only When Activated
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Partner Network
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-white">On-Demand Specialized Services</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    You don't need to hire full-time experts early. We unlock specialized services when you need them.
                  </p>
                  <p className="text-lg text-gray-400">👉 Only when you need it. Pay only for what you activate.</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { text: "Pitch Deck Refinement", icon: PresentationChart },
                    { text: "Financial Model Building", icon: BarChart3 },
                    { text: "Tech Architecture & MVP Build", icon: Code },
                    { text: "Performance Marketing Launch", icon: TrendingUp },
                    { text: "Legal & Compliance Support", icon: Shield },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <service.icon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: FounderOS */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-sm px-4 py-2">
                    <Settings className="w-4 h-4 mr-2" />
                    SaaS Platform
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black">
                    <span className="text-white">The VentureCrafters SaaS Stack — </span>
                    <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                      FounderOS™
                    </span>
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We give you tools. Not spreadsheets. A custom SaaS platform designed to simplify early-stage
                    execution.
                  </p>
                  <p className="text-lg text-gray-400">
                    👉 Finally, founders have real operational tools that save time and reduce chaos.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { text: "KPI dashboards (auto-tracked)", icon: BarChart3 },
                    { text: "Investor CRM", icon: Users },
                    { text: "Customer discovery tracker", icon: Target },
                    { text: "Deal flow data room", icon: Database },
                    { text: "Hiring templates & guides", icon: UserCheck },
                    { text: "One-click investor reporting", icon: FileText },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >
                      <feature.icon className="h-5 w-5 text-pink-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-xl border border-pink-500/30 p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">FounderOS™</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Your startup's operating system. Everything you need to run, track, and scale your business in one
                      integrated platform.
                    </p>
                    <Badge className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-300 border-pink-500/30">
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pillar 4: Fundraising */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 p-8 lg:order-1">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">Fundraising Orchestration</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We manage your fundraise like a process — with real outcomes, not just introductions.
                    </p>
                    <div className="text-3xl font-bold text-green-400">$600K+</div>
                    <div className="text-sm text-gray-400">Already Raised</div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-sm px-4 py-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Fundraising
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-white">Fundraising Orchestration</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    You focus on building. We orchestrate the fundraising.
                  </p>
                  <p className="text-lg text-gray-400">
                    👉 We don't just introduce you. We manage your fundraise like a process — with real outcomes.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { text: "Narrative refinement & storytelling", icon: FileText },
                    { text: "Data room build-out", icon: Database },
                    { text: "Pre-qualified investor mapping", icon: Target },
                    { text: "Warm introductions (guaranteed meetings)", icon: Handshake },
                    { text: "Syndicate creation if oversubscribed", icon: Users },
                    { text: "Post-raise execution discipline", icon: CheckCircle },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <service.icon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-white">The </span>
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  VentureCrafters
                </span>
                <span className="text-white"> Difference</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* What Others Do */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-red-400 flex items-center">
                  <X className="h-8 w-8 mr-3" />
                  What Others Do
                </h3>
                <div className="space-y-4">
                  {[
                    "Cohorts with generic advice",
                    "Mentor networks with no accountability",
                    "Pitch days hoping for investor luck",
                    "Spreadsheet-based tracking",
                    "One-size-fits-all programs",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-red-900/20 border border-red-500/30"
                    >
                      <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Do */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-green-400 flex items-center">
                  <CheckCircle className="h-8 w-8 mr-3" />
                  What We Do
                </h3>
                <div className="space-y-4">
                  {[
                    "Structured execution with daily accountability",
                    "Professionalized fundraising process",
                    "SaaS-powered startup management",
                    "Full-stack partner on your terms",
                    "Customized execution for your business",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-green-900/20 border border-green-500/30"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-4">That's it. No fluff. No sprints. No gimmicks.</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Daily Execution
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      On-Demand Experts
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Founder's SaaS Stack
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Fundraise Managed
                    </div>
                  </div>
                  <p className="text-xl text-gray-300 mt-6">
                    <span className="text-white font-bold">You build. We support. Fully integrated.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white">Ready to Execute?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Stop planning. Start building. We're here to execute alongside you every step of the way.
            </p>
            <div className="text-3xl font-bold text-white mb-8">🚀 Your Execution Partner Awaits</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Executing Now
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                Schedule Discovery Call
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 95996 91123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@venturecrafters.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl py-16 border-t border-white/10 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img src="/images/venturecrafters-latest-logo.png" alt="VentureCrafters Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-lg">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-cyan-400 font-semibold">
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
