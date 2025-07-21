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
  Sparkles,
  Clock,
  Phone,
  Mail,
  Menu,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const pillarsRef = useRef(null)
  const differenceRef = useRef(null)

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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = [heroRef, pillarsRef, differenceRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light overflow-x-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 bg-gray-900 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {[
            { id: "hero", label: "Overview" },
            { id: "pillars", label: "Four Pillars" },
            { id: "difference", label: "Difference" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-600"
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="group">
          <Image
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
            width={32}
            height={32}
            className={`h-8 w-auto transition-all duration-500 ${
              scrollY > 100 ? "opacity-60 scale-90" : "opacity-100 scale-100"
            } hover:opacity-100 hover:scale-100`}
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
            <div
              key={item}
              className={`transition-all duration-500 delay-${index * 100} ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={item === "Home" ? "/" : item === "Services" ? "/services" : `/${item.toLowerCase()}`}
                className="text-2xl font-light text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 hidden md:block ${
          scrollY > 50 ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="w-8"></div>
              <div className="flex space-x-8 text-sm font-light">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link href="/services" className="text-gray-900 font-medium transition-all duration-300 relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900" />
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </Link>
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
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-900 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-600 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div
                className={`inline-block transition-all duration-1000 delay-300 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                  <Rocket className="w-4 h-4 mr-2" />
                  The Only Execution Platform Founders Need
                </Badge>
              </div>

              <div
                className={`space-y-6 transition-all duration-1000 delay-500 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                  <span className="block text-gray-900">We're Not a</span>
                  <span className="block text-gray-400 italic">Cohort</span>
                  <span className="block text-gray-900">We're Your</span>
                  <span className="block text-gray-400 italic">Execution Partner</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  We're a <span className="text-gray-900 font-normal">full-stack execution partner</span> built for
                  founders who want to build real businesses — not just pitch decks.
                </p>
              </div>
            </div>

            {/* What We're NOT */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { text: "We're not a cohort", icon: X },
                { text: "We're not a mentorship program", icon: X },
                { text: "We're not a community", icon: X },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-6 w-6 text-gray-400 mx-auto mb-3" strokeWidth={1} />
                    <p className="text-gray-600 font-light text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" ref={pillarsRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.pillars ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Our Uniquely Simple Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Four integrated pillars that transform how you build, scale, and fund your startup.
            </p>
          </div>

          <div className="space-y-20">
            {/* Pillar 1: Personal Execution Partner */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  isVisible.pillars ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-none flex items-center justify-center text-white font-light text-lg">
                    1
                  </div>
                  <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                    <Users className="w-4 h-4 mr-2" />
                    Core Service
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900">Your Personal Execution Partner</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    We sit inside your business, every day. Not mentors. Not advisors.{" "}
                    <span className="text-gray-900 font-normal">Operators.</span>
                  </p>
                  <p className="text-lg text-gray-500 font-light">
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
                      className="flex items-center space-x-3 p-4 rounded-none bg-white hover:shadow-md transition-all duration-300"
                    >
                      <feature.icon className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                      <span className="text-sm text-gray-600 font-light">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card
                className={`border-0 shadow-none bg-white hover:shadow-lg transition-all duration-1000 delay-300 ${
                  isVisible.pillars ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 text-gray-400 mx-auto">
                    <Users className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light text-gray-900">Fractional Co-Founder</h4>
                    <p className="text-gray-600 leading-relaxed font-light">
                      We don't just advise from the sidelines. We roll up our sleeves and execute alongside you, taking
                      ownership of outcomes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pillar 2: On-Demand Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 lg:order-1">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 text-gray-400 mx-auto">
                    <Target className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light text-gray-900">Specialized Experts</h4>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Access world-class specialists through our trusted partner network. No full-time hires needed.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-gray-200 text-gray-600 px-3 py-1 rounded-full font-light"
                    >
                      Pay Only When Activated
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-none flex items-center justify-center text-white font-light text-lg">
                    2
                  </div>
                  <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Partner Network
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900">On-Demand Specialized Services</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    You don't need to hire full-time experts early. We unlock specialized services when you need them.
                  </p>
                  <p className="text-lg text-gray-500 font-light">
                    👉 Only when you need it. Pay only for what you activate.
                  </p>
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
                      className="flex items-center space-x-3 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <service.icon className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                      <span className="text-gray-600 font-light">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: FounderOS */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-none flex items-center justify-center text-white font-light text-lg">
                    3
                  </div>
                  <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                    <Settings className="w-4 h-4 mr-2" />
                    SaaS Platform
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900">
                    The VentureCrafters SaaS Stack — <span className="text-gray-600 italic">FounderOS™</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    We give you tools. Not spreadsheets. A custom SaaS platform designed to simplify early-stage
                    execution.
                  </p>
                  <p className="text-lg text-gray-500 font-light">
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
                      className="flex items-center space-x-3 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <feature.icon className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                      <span className="text-sm text-gray-600 font-light">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 text-gray-400 mx-auto">
                    <Settings className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light text-gray-900">FounderOS™</h4>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Your startup's operating system. Everything you need to run, track, and scale your business in one
                      integrated platform.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-gray-200 text-gray-600 px-3 py-1 rounded-full font-light"
                    >
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pillar 4: Fundraising */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 lg:order-1">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 text-gray-400 mx-auto">
                    <DollarSign className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light text-gray-900">Fundraising Orchestration</h4>
                    <p className="text-gray-600 leading-relaxed font-light">
                      We manage your fundraise like a process — with real outcomes, not just introductions.
                    </p>
                    <div className="text-2xl font-light text-gray-900">$600K+</div>
                    <div className="text-sm text-gray-500 font-light">Already Raised</div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-none flex items-center justify-center text-white font-light text-lg">
                    4
                  </div>
                  <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Fundraising
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900">Fundraising Orchestration</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    You focus on building. We orchestrate the fundraising.
                  </p>
                  <p className="text-lg text-gray-500 font-light">
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
                      className="flex items-center space-x-3 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <service.icon className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                      <span className="text-gray-600 font-light">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section id="difference" ref={differenceRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.difference ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">
              The <span className="text-gray-600 italic">VentureCrafters</span> Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* What Others Do */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible.difference ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-light text-gray-900 flex items-center">
                <X className="h-6 w-6 mr-3 text-gray-400" strokeWidth={1} />
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
                    className="flex items-center space-x-3 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <X className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                    <span className="text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible.difference ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-light text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-gray-400" strokeWidth={1} />
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
                    className="flex items-center space-x-3 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" strokeWidth={1} />
                    <span className="text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              isVisible.difference ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="max-w-2xl mx-auto border-0 shadow-none bg-gray-50 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-light text-gray-900 mb-4">That's it. No fluff. No sprints. No gimmicks.</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600 font-light">
                    <CheckCircle className="w-3 h-3 mr-2 text-gray-400" strokeWidth={1} />
                    Daily Execution
                  </div>
                  <div className="flex items-center text-gray-600 font-light">
                    <CheckCircle className="w-3 h-3 mr-2 text-gray-400" strokeWidth={1} />
                    On-Demand Experts
                  </div>
                  <div className="flex items-center text-gray-600 font-light">
                    <CheckCircle className="w-3 h-3 mr-2 text-gray-400" strokeWidth={1} />
                    Founder's SaaS Stack
                  </div>
                  <div className="flex items-center text-gray-600 font-light">
                    <CheckCircle className="w-3 h-3 mr-2 text-gray-400" strokeWidth={1} />
                    Fundraise Managed
                  </div>
                </div>
                <p className="text-xl text-gray-600 mt-6 font-light">
                  <span className="text-gray-900 font-normal">You build. We support. Fully integrated.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Ready to Execute?</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Stop planning. Start building. We're here to execute alongside you every step of the way.
            </p>
            <div className="text-2xl font-light text-gray-900 mb-8">🚀 Your Execution Partner Awaits</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Executing Now
                <Sparkles className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-12 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group bg-transparent"
              >
                Schedule Discovery Call
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-gray-500 font-light">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" strokeWidth={1} />
                <span>+91 95996 91123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" strokeWidth={1} />
                <span>info@venturecrafters.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/venturecrafters-latest-logo.png"
                alt="VentureCrafters Logo"
                width={32}
                height={32}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : item === "Services" ? "/services" : `/${item.toLowerCase()}`}
                  className={`font-light transition-all duration-300 relative group ${
                    item === "Services" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gray-900 transition-all duration-300 ${
                      item === "Services" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
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
