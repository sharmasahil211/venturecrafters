"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
  Brain,
  Sparkles,
  Star,
  CheckCircle,
  Play,
  Coffee,
  Briefcase,
  Award,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function VentureCraftersLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden relative">
      {/* Custom Cursor - Hidden on mobile */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-5 md:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px md:60px md:60px",
            animation: "grid-float 20s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* Floating Orbs - Responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 md:from-cyan-500/20 md:to-purple-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 md:from-purple-500/20 md:to-pink-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 md:from-indigo-500/10 md:to-cyan-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
            className="h-8 md:h-10 w-auto hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-black/40 backdrop-blur-xl border-white/20 text-white hover:bg-white/10"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <Link
              href="/about"
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#services"
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link
              href="/portfolio"
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="#contact"
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-4 rounded-2xl"
              onClick={() => {
                setMobileMenuOpen(false)
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }}
            >
              Let's Build
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl hidden md:block">
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="flex space-x-4 md:space-x-6 text-sm font-medium">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors relative group">
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors relative group">
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base px-4 md:px-6"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Let's Build
            <Rocket className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section - Fully Mobile Optimized */}
      <section className="min-h-screen flex items-center pt-20 pb-8 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 text-sm px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 50+ Startups
                </Badge>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                  <span className="block text-white">We Don't Just</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Build Startups
                  </span>
                  <span className="block text-white">We Build</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Legends
                  </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start space-x-2 text-base md:text-lg text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>From idea to unicorn status</span>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-relaxed">
                  "We don't just consult. We co-op."
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Ex-founders, VCs, and operators who've been in the trenches. Your success is our obsession.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                      "_blank",
                    )
                  }
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 hover:border-white/40 text-lg px-8 py-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open("https://youtu.be/0wrCxUtWM7E", "_blank")}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </Button>
              </div>

              {/* Trust Indicators - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$600K+</div>
                  <div className="text-sm text-gray-400">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12+</div>
                  <div className="text-sm text-gray-400">MVPs Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Connections</div>
                </div>
              </div>
            </div>

            {/* Right Side Cards - Hidden on mobile, visible on desktop */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative">
                {/* Interactive Floating Cards */}
                <div className="absolute -top-8 -right-8 group">
                  <Card className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 transform rotate-6 hover:rotate-3 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <CardContent className="p-0">
                      <Rocket className="h-8 w-8 text-cyan-400 mb-2" />
                      <div className="text-sm font-semibold">12 MVPs</div>
                      <div className="text-xs text-gray-400">Last 6 months</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute top-20 -left-12 group">
                  <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 transform -rotate-6 hover:-rotate-3 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <CardContent className="p-0">
                      <DollarSign className="h-8 w-8 text-purple-400 mb-2" />
                      <div className="text-sm font-semibold">$600K+</div>
                      <div className="text-xs text-gray-400">Raised</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute bottom-8 right-4 group">
                  <Card className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-6 transform rotate-12 hover:rotate-6 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <CardContent className="p-0">
                      <Users className="h-8 w-8 text-pink-400 mb-2" />
                      <div className="text-sm font-semibold">100+</div>
                      <div className="text-xs text-gray-400">Network</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Central Element */}
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Obsessed Problem-Solvers</h3>
                    <p className="text-gray-400 text-sm">We don't just plan, we execute with precision</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section id="services" className="py-16 md:py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-6">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-2 rounded-full">
              <Briefcase className="w-4 h-4 mr-2" />
              Our Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services That Scale
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From zero to hero, we've got every stage of your startup journey covered with proven methodologies and
              cutting-edge strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Idea to MVP",
                desc: "Transform your vision into a market-ready product in 60 days with our rapid prototyping process.",
                badge: "Fast Track",
                color: "cyan",
                features: ["Market Research", "Prototype Development", "User Testing"],
              },
              {
                icon: DollarSign,
                title: "Fundraising Support",
                desc: "Craft compelling pitch decks and connect with the right investors to secure your funding.",
                badge: "Proven Results",
                color: "purple",
                features: ["Pitch Deck Creation", "Investor Matching", "Due Diligence"],
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                desc: "Scale your startup with data-driven growth tactics and performance optimization.",
                badge: "Growth Focused",
                color: "pink",
                features: ["Growth Hacking", "Analytics Setup", "Performance Tracking"],
              },
              {
                icon: Code,
                title: "Tech Development",
                desc: "Build scalable, modern tech infrastructure that grows with your business needs.",
                badge: "Full Stack",
                color: "orange",
                features: ["Web Development", "Mobile Apps", "Cloud Infrastructure"],
              },
              {
                icon: Users,
                title: "Team Building",
                desc: "Assemble the perfect team with our network of vetted professionals and advisors.",
                badge: "Expert Network",
                color: "green",
                features: ["Talent Acquisition", "Advisory Board", "Team Optimization"],
              },
              {
                icon: Globe,
                title: "Global Expansion",
                desc: "Scale internationally with our worldwide network and market entry strategies.",
                badge: "Worldwide",
                color: "indigo",
                features: ["Market Entry", "Legal Setup", "Local Partnerships"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${
                      service.color === "cyan"
                        ? "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                        : service.color === "purple"
                          ? "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                          : service.color === "pink"
                            ? "from-pink-500/20 to-pink-600/20 border border-pink-500/30"
                            : service.color === "orange"
                              ? "from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                              : service.color === "green"
                                ? "from-green-500/20 to-green-600/20 border border-green-500/30"
                                : "from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${
                        service.color === "cyan"
                          ? "text-cyan-400"
                          : service.color === "purple"
                            ? "text-purple-400"
                            : service.color === "pink"
                              ? "text-pink-400"
                              : service.color === "orange"
                                ? "text-orange-400"
                                : service.color === "green"
                                  ? "text-green-400"
                                  : "text-indigo-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{service.desc}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Badge
                    className={`self-start text-xs ${
                      service.color === "cyan"
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        : service.color === "purple"
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                          : service.color === "pink"
                            ? "bg-pink-500/20 text-pink-300 border-pink-500/30"
                            : service.color === "orange"
                              ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                              : service.color === "green"
                                ? "bg-green-500/20 text-green-300 border-green-500/30"
                                : "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    }`}
                  >
                    {service.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Mobile Optimized */}
      <section id="portfolio" className="py-16 md:py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-6">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 border-orange-500/30 text-sm px-4 py-2 rounded-full">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Startups We've Scaled
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From idea to execution, we've helped these startups build, scale, and succeed in competitive markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {[
              { name: "SamparkBindhu", logo: "/images/portfolio/samparkbindhu.png", category: "B2B SaaS" },
              { name: "CXFirst", logo: "/images/portfolio/cxfirst.jpeg", category: "Customer Experience" },
              { name: "Little Jungle", logo: "/images/portfolio/little-jungle.jpeg", category: "D2C" },
              { name: "Ajivam Water", logo: "/images/portfolio/ajivam.jpeg", category: "Water Solutions" },
              { name: "Survey Agent AI", logo: "/images/portfolio/survey-agent.jpeg", category: "AI/Tech" },
              { name: "ToyFlix", logo: "/images/portfolio/toyflix.webp", category: "Toy Rental" },
              { name: "PickkUp", logo: "/images/portfolio/pickup.jpeg", category: "Logistics" },
              { name: "FitFeast", logo: "/images/portfolio/fitfeast.png", category: "Healthy Snacking" },
            ].map((client, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-28 md:h-32">
                  <div className="w-full h-16 md:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                    />
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-gray-300 text-xs border-white/20">
                    {client.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              See Your Logo Here
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Moving Carousel */}
      <section className="py-16 md:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30 text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Founder Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                What Founders Say
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from founders who've built successful startups with VentureCrafters
            </p>
          </div>

          {/* Moving Testimonials Carousel */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-6 md:space-x-8">
              {[
                {
                  name: "Rajesh Kumar",
                  title: "Founder & CEO",
                  company: "TechFlow Solutions",
                  location: "🇮🇳 Bangalore, India",
                  feedback:
                    "VentureCrafters transformed our idea into a $2M ARR SaaS platform. Their execution speed is unmatched!",
                  rating: 5,
                  avatar: "RK",
                },
                {
                  name: "Sarah Chen",
                  title: "Co-founder",
                  company: "GreenTech Innovations",
                  location: "🇸🇬 Singapore",
                  feedback:
                    "From MVP to Series A in 8 months. The team's strategic guidance was instrumental in our success.",
                  rating: 5,
                  avatar: "SC",
                },
                {
                  name: "Amit Sharma",
                  title: "Founder",
                  company: "HealthFirst",
                  location: "🇮🇳 Mumbai, India",
                  feedback:
                    "They didn't just build our product, they built our entire go-to-market strategy. Incredible results!",
                  rating: 5,
                  avatar: "AS",
                },
                {
                  name: "Michael Rodriguez",
                  title: "CEO",
                  company: "FinanceFlow",
                  location: "🇺🇸 San Francisco, USA",
                  feedback: "Best investment we made. VentureCrafters helped us raise $5M and scale to 10,000+ users.",
                  rating: 5,
                  avatar: "MR",
                },
                {
                  name: "Priya Patel",
                  title: "Founder",
                  company: "EduTech Pro",
                  location: "🇮🇳 Pune, India",
                  feedback: "Their network opened doors we never knew existed. From idea to acquisition in 18 months!",
                  rating: 5,
                  avatar: "PP",
                },
                {
                  name: "James Wilson",
                  title: "Co-founder",
                  company: "RetailAI",
                  location: "🇬🇧 London, UK",
                  feedback:
                    "VentureCrafters understands both Indian and global markets. Perfect for international expansion.",
                  rating: 5,
                  avatar: "JW",
                },
                {
                  name: "Neha Gupta",
                  title: "Founder",
                  company: "SocialConnect",
                  location: "🇮🇳 Delhi, India",
                  feedback: "They turned our social media idea into a platform with 1M+ active users. Simply amazing!",
                  rating: 5,
                  avatar: "NG",
                },
                {
                  name: "David Kim",
                  title: "CEO",
                  company: "LogiTech Solutions",
                  location: "🇰🇷 Seoul, South Korea",
                  feedback:
                    "Professional, fast, and results-driven. They delivered beyond our expectations every time.",
                  rating: 5,
                  avatar: "DK",
                },
                {
                  name: "Ravi Mehta",
                  title: "Founder",
                  company: "AgriTech India",
                  location: "🇮🇳 Hyderabad, India",
                  feedback: "From a farming idea to a tech unicorn. VentureCrafters made the impossible possible!",
                  rating: 5,
                  avatar: "RM",
                },
                {
                  name: "Emma Thompson",
                  title: "Co-founder",
                  company: "WellnessApp",
                  location: "🇦🇺 Sydney, Australia",
                  feedback:
                    "Their expertise in both technology and business strategy is unparalleled. Highly recommend!",
                  rating: 5,
                  avatar: "ET",
                },
              ]
                .concat([
                  // Duplicate the array for seamless infinite scroll
                  {
                    name: "Rajesh Kumar",
                    title: "Founder & CEO",
                    company: "TechFlow Solutions",
                    location: "🇮🇳 Bangalore, India",
                    feedback:
                      "VentureCrafters transformed our idea into a $2M ARR SaaS platform. Their execution speed is unmatched!",
                    rating: 5,
                    avatar: "RK",
                  },
                  {
                    name: "Sarah Chen",
                    title: "Co-founder",
                    company: "GreenTech Innovations",
                    location: "🇸🇬 Singapore",
                    feedback:
                      "From MVP to Series A in 8 months. The team's strategic guidance was instrumental in our success.",
                    rating: 5,
                    avatar: "SC",
                  },
                  {
                    name: "Amit Sharma",
                    title: "Founder",
                    company: "HealthFirst",
                    location: "🇮🇳 Mumbai, India",
                    feedback:
                      "They didn't just build our product, they built our entire go-to-market strategy. Incredible results!",
                    rating: 5,
                    avatar: "AS",
                  },
                  {
                    name: "Michael Rodriguez",
                    title: "CEO",
                    company: "FinanceFlow",
                    location: "🇺🇸 San Francisco, USA",
                    feedback:
                      "Best investment we made. VentureCrafters helped us raise $5M and scale to 10,000+ users.",
                    rating: 5,
                    avatar: "MR",
                  },
                  {
                    name: "Priya Patel",
                    title: "Founder",
                    company: "EduTech Pro",
                    location: "🇮🇳 Pune, India",
                    feedback:
                      "Their network opened doors we never knew existed. From idea to acquisition in 18 months!",
                    rating: 5,
                    avatar: "PP",
                  },
                ])
                .map((testimonial, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs md:text-sm">{testimonial.title}</p>
                          <p className="text-cyan-400 text-xs md:text-sm font-medium">{testimonial.company}</p>
                          <p className="text-gray-500 text-xs mt-1">{testimonial.location}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                        "{testimonial.feedback}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Contact Section - Fully Responsive */}
      <section id="contact" className="py-16 md:py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <Badge className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-300 border-pink-500/30 text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
                  <Coffee className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Let's Connect
                </Badge>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">
                  <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Ready to Build?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Let's grab a coffee (virtual or real) and discuss how we can turn your startup dreams into reality.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-base md:text-lg">+91 95996 91123</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-purple-400 flex-shrink-0" />
                  <span className="text-base md:text-lg">info@venturecrafters.in</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8">
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold">🇮🇳 India</h3>
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm md:text-base">
                    <p>Forum, DLF Cyber City</p>
                    <p>DLF Phase 3, Sector 24</p>
                    <p>Gurugram, Haryana 122002</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-purple-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold">🇦🇪 UAE</h3>
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm md:text-base">
                    <p>in5 Tech, Dubai Knowledge Park</p>
                    <p>PO Box 73000, Dubai, UAE</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Fully Responsive */}
      <section className="py-16 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              Ready to Join the Success Stories?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Stop dreaming, start building. We're here to turn your startup vision into the next big success story.
            </p>
            <div className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">🚀 Your Journey Starts Here</div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Building Now
                <Sparkles className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Fully Responsive */}
      <footer className="bg-black/50 backdrop-blur-xl py-12 md:py-16 border-t border-white/10 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex justify-center">
              <img
                src="/images/venturecrafters-latest-logo.png"
                alt="VentureCrafters Logo"
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base md:text-lg">Building the future, one startup at a time.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">
                About
              </Link>
              <a
                href="#services"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base"
              >
                Services
              </a>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm md:text-base"
              >
                Portfolio
              </Link>
              <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm md:text-base">
                Contact
              </a>
            </div>
            <div className="pt-6 md:pt-8 border-t border-white/10 text-gray-500 text-sm md:text-base">
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

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
