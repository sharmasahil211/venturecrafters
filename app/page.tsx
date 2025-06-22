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
  Menu,
  X,
  ChevronDown,
  Zap,
  UserPlus,
  Calendar,
  LocateIcon as Location,
  Star,
  Camera,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function VentureCraftersLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [microSaasDropdownOpen, setMicroSaasDropdownOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const texts = ["We don't just consult.", "We co-op.", "We craft ventures."]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMicroSaasDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Typing animation effect
  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentTextIndex, texts])

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))
    return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>
  }

  // Animated background gradient
  const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(156, 163, 175, 0.3) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light relative overflow-hidden">
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes slide-in {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-down {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-slide-in { animation: slide-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <AnimatedBackground />
      <FloatingParticles />

      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-text-logo.png"
            alt="VentureCrafters"
            className="h-10 w-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-fade-in-up">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <Link
              href="/about"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#services"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link
              href="/portfolio"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="#contact"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>

            {/* Micro SaaS Mobile */}
            <button
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center"
              onClick={() => {
                setMobileMenuOpen(false)
                window.open("https://v0-pivot-hire.vercel.app/", "_blank")
              }}
            >
              <Zap className="mr-2 h-5 w-5" strokeWidth={1} />
              Micro SaaS
            </button>

            {/* Join Community Mobile */}
            <button
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center"
              onClick={() => {
                setMobileMenuOpen(false)
                window.open("https://chat.whatsapp.com/LliMQVE2glEESXvGD5mZ4h", "_blank")
              }}
            >
              <Users className="mr-2 h-5 w-5" strokeWidth={1} />
              Join Community
            </button>

            <Button
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-none font-light transition-all duration-300 hover:scale-105"
              onClick={() => {
                setMobileMenuOpen(false)
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 hidden md:block ${
          scrollY > 50 ? "shadow-sm" : ""
        }`}
        style={{
          transform: `translateY(${scrollY > 100 ? -100 : 0}px)`,
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="w-8"></div>
              <div className="flex space-x-8 text-sm font-light">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  About
                </Link>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Services
                </a>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Portfolio
                </Link>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Contact
                </a>

                {/* Micro SaaS Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center"
                    onClick={() => setMicroSaasDropdownOpen(!microSaasDropdownOpen)}
                  >
                    <Zap className="mr-1 h-4 w-4" strokeWidth={1} />
                    Micro SaaS
                    <ChevronDown
                      className={`ml-1 h-3 w-3 transition-transform duration-300 ${microSaasDropdownOpen ? "rotate-180" : ""}`}
                      strokeWidth={1}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {microSaasDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-none shadow-lg animate-slide-down z-50">
                      <button
                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-light flex items-center text-sm"
                        onClick={() => {
                          setMicroSaasDropdownOpen(false)
                          window.open("https://v0-pivot-hire.vercel.app/", "_blank")
                        }}
                      >
                        <UserPlus className="mr-2 h-4 w-4" strokeWidth={1} />
                        Pivot Hire
                        <ArrowRight className="ml-auto h-3 w-3" strokeWidth={1} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Join Community Button */}
                <button
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center"
                  onClick={() => {
                    window.open("https://chat.whatsapp.com/LliMQVE2glEESXvGD5mZ4h", "_blank")
                  }}
                >
                  <Users className="mr-1 h-4 w-4" strokeWidth={1} />
                  Join Community
                </button>
              </div>
            </div>
            <Button
              className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-none font-light text-sm transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center pt-20 pb-16 px-6 relative"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-32 h-32 border border-gray-200 rounded-full animate-float opacity-20"
            style={{
              top: "20%",
              left: "10%",
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute w-16 h-16 bg-gray-100 rotate-45 animate-pulse-slow"
            style={{
              top: "60%",
              right: "15%",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute w-24 h-24 border-2 border-gray-200 animate-float"
            style={{
              bottom: "30%",
              left: "20%",
              animationDelay: "2s",
            }}
          />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-block animate-fade-in-up">
                <Badge
                  variant="outline"
                  className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light hover:scale-105 transition-transform duration-300"
                >
                  Trusted by 50+ Startups
                </Badge>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight animate-slide-in">
                <span className="block text-gray-900">We don't just</span>
                <span className="block text-gray-900">consult.</span>
                <span className="block text-gray-400 italic">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up">
                Ex-founders, VCs, and operators who've been in the trenches.
                <br />
                Your success is our obsession.
              </p>
            </div>

            {/* Enhanced CTA Buttons - Keep only primary actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Your Journey
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("https://youtu.be/0wrCxUtWM7E", "_blank")}
              >
                Watch Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-16 border-t border-gray-100 animate-fade-in-up">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-light text-gray-900">$600K+</div>
                <div className="text-sm text-gray-500 font-light">Raised</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-light text-gray-900">12+</div>
                <div className="text-sm text-gray-500 font-light">MVPs Built</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-light text-gray-900">100+</div>
                <div className="text-sm text-gray-500 font-light">Connections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-gray-50 relative"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900 animate-fade-in-up">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up">
              From zero to hero, we've got every stage of your startup journey covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Idea to MVP",
                desc: "Transform your vision into a market-ready product in 60 days.",
              },
              {
                icon: DollarSign,
                title: "Fundraising",
                desc: "Craft compelling narratives and connect with the right investors.",
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                desc: "Scale your startup with data-driven growth tactics.",
              },
              {
                icon: Code,
                title: "Tech Development",
                desc: "Build scalable, modern infrastructure that grows with you.",
              },
              {
                icon: Users,
                title: "Team Building",
                desc: "Assemble the perfect team with our vetted network.",
              },
              {
                icon: Globe,
                title: "Global Expansion",
                desc: "Scale internationally with our worldwide connections.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 group hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 mb-6 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-light mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Startups we've helped build, scale, and succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "SamparkBindhu", logo: "/images/portfolio/samparkbindhu.png" },
              { name: "CXFirst", logo: "/images/portfolio/cxfirst.jpeg" },
              { name: "Little Jungle", logo: "/images/portfolio/little-jungle.jpeg" },
              { name: "Ajivam Water", logo: "/images/portfolio/ajivam.jpeg" },
              { name: "Survey Agent AI", logo: "/images/portfolio/survey-agent.jpeg" },
              { name: "ToyFlix", logo: "/images/portfolio/toyflix.webp" },
              { name: "PickkUp", logo: "/images/portfolio/pickup.jpeg" },
              { name: "FitFeast", logo: "/images/portfolio/fitfeast.png" },
            ].map((client, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3 rounded-none font-light transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              Get Your Logo Here
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </section>

      {/* Wall of Events Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light mb-6 hover:scale-105 transition-transform duration-300"
            >
              <Camera className="w-4 h-4 mr-2" />
              Community & Events
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Wall of Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From intimate founder meetups to large-scale conferences, we're building the startup ecosystem one event
              at a time.
            </p>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "25+", label: "Events Hosted", icon: Calendar },
              { number: "1000+", label: "Founders Connected", icon: Users },
              { number: "50+", label: "Speakers Featured", icon: Star },
              { number: "5", label: "Cities Covered", icon: Location },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-6">
                  <div className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <stat.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-sm text-gray-500 font-light">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{/* Event cards removed */}</div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                <h3 className="text-xl font-light text-gray-900 mb-4">Join Our Next Event</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  Be part of the startup community that's shaping the future. Connect, learn, and grow with like-minded
                  founders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none font-light transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Register for Events
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-3 rounded-none font-light transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      window.open("https://chat.whatsapp.com/LliMQVE2glEESXvGD5mZ4h", "_blank")
                    }}
                  >
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">What Founders Say</h2>
            <p className="text-lg text-gray-600 font-light">Voices from India and UAE</p>
          </div>

          {/* Moving testimonials carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {[
                {
                  quote:
                    "VentureCrafters transformed our idea into a $2M ARR platform. Their execution speed is unmatched.",
                  author: "Rajesh Kumar",
                  company: "TechFlow Solutions",
                  location: "Mumbai, India",
                  flag: "🇮🇳",
                },
                {
                  quote:
                    "From MVP to Series A in 8 months. The team's strategic guidance was instrumental in our success.",
                  author: "Sarah Chen",
                  company: "GreenTech Innovations",
                  location: "Bangalore, India",
                  flag: "🇮🇳",
                },
                {
                  quote:
                    "The Dubai expansion strategy they crafted helped us capture 40% market share in just 6 months.",
                  author: "Ahmed Al Mansouri",
                  company: "Desert Digital",
                  location: "Dubai, UAE",
                  flag: "🇦🇪",
                },
                {
                  quote:
                    "Their network in the Middle East opened doors we never thought possible. Incredible ROI on our investment.",
                  author: "Fatima Al Zahra",
                  company: "Emirates FinTech",
                  location: "Abu Dhabi, UAE",
                  flag: "🇦🇪",
                },
                {
                  quote:
                    "VentureCrafters didn't just build our product - they built our entire go-to-market strategy. Game changer!",
                  author: "Priya Sharma",
                  company: "HealthTech India",
                  location: "Delhi, India",
                  flag: "🇮🇳",
                },
                {
                  quote:
                    "The cross-border expertise between India and UAE markets is unparalleled. They understand both ecosystems.",
                  author: "Omar Hassan",
                  company: "Gulf Logistics Pro",
                  location: "Sharjah, UAE",
                  flag: "🇦🇪",
                },
                {
                  quote:
                    "From zero to unicorn valuation in 18 months. Their strategic guidance was the catalyst we needed.",
                  author: "Vikram Patel",
                  company: "AI Solutions Ltd",
                  location: "Pune, India",
                  flag: "🇮🇳",
                },
                {
                  quote:
                    "The team's understanding of regulatory frameworks in both markets saved us months of compliance work.",
                  author: "Layla Al Qasimi",
                  company: "RegTech MENA",
                  location: "Dubai, UAE",
                  flag: "🇦🇪",
                },
              ]
                .concat([
                  // Duplicate the array for seamless loop
                  {
                    quote:
                      "VentureCrafters transformed our idea into a $2M ARR platform. Their execution speed is unmatched.",
                    author: "Rajesh Kumar",
                    company: "TechFlow Solutions",
                    location: "Mumbai, India",
                    flag: "🇮🇳",
                  },
                  {
                    quote:
                      "From MVP to Series A in 8 months. The team's strategic guidance was instrumental in our success.",
                    author: "Sarah Chen",
                    company: "GreenTech Innovations",
                    location: "Bangalore, India",
                    flag: "🇮🇳",
                  },
                  {
                    quote:
                      "The Dubai expansion strategy they crafted helped us capture 40% market share in just 6 months.",
                    author: "Ahmed Al Mansouri",
                    company: "Desert Digital",
                    location: "Dubai, UAE",
                    flag: "🇦🇪",
                  },
                  {
                    quote:
                      "Their network in the Middle East opened doors we never thought possible. Incredible ROI on our investment.",
                    author: "Fatima Al Zahra",
                    company: "Emirates FinTech",
                    location: "Abu Dhabi, UAE",
                    flag: "🇦🇪",
                  },
                ])
                .map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-none bg-gray-50 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex-shrink-0 w-80"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-2">{testimonial.flag}</span>
                        <span className="text-sm text-gray-500 font-light">{testimonial.location}</span>
                      </div>
                      <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-gray-100 pt-6">
                        <p className="font-light text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500 font-light">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Let's Talk</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Ready to turn your startup vision into reality? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <Phone
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                    strokeWidth={1}
                  />
                  <span className="text-gray-600 font-light">+91 95996 91123</span>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" strokeWidth={1} />
                  <span className="text-gray-600 font-light">info@venturecrafters.in</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <MapPin
                      className="h-5 w-5 text-gray-400 mt-1 group-hover:text-gray-600 transition-colors"
                      strokeWidth={1}
                    />
                    <div className="text-gray-600 font-light">
                      <p className="font-medium text-gray-700 mb-1">India Office</p>
                      <p>Forum, DLF Cyber City</p>
                      <p>Gurugram, Haryana 122002</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <MapPin
                      className="h-5 w-5 text-gray-400 mt-1 group-hover:text-gray-600 transition-colors"
                      strokeWidth={1}
                    />
                    <div className="text-gray-600 font-light">
                      <p className="font-medium text-gray-700 mb-1">UAE Office</p>
                      <p>Business Bay</p>
                      <p>Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-4 text-gray-900">Start a Conversation</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    Fill out our form and we'll get back to you within 24 hours with a personalized strategy session.
                  </p>
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none font-light w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img
                src="/images/venturecrafters-text-logo.png"
                alt="VentureCrafters Logo"
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-light"
              >
                About
              </Link>
              <a
                href="#services"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-light"
              >
                Services
              </a>
              <Link
                href="/portfolio"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-light"
              >
                Portfolio
              </Link>
              <a
                href="#contact"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-light"
              >
                Contact
              </a>
            </div>
            <div className="pt-8 border-t border-gray-100 text-gray-400 text-sm font-light">
              <p>&copy; 2024 VentureCrafters. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
