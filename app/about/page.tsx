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
  ArrowRight,
  Quote,
  Menu,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const problemRef = useRef(null)
  const journeyRef = useRef(null)
  const validationRef = useRef(null)

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

    const sections = [heroRef, problemRef, journeyRef, validationRef]
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
            { id: "hero", label: "Story" },
            { id: "problem", label: "Problem" },
            { id: "journey", label: "Journey" },
            { id: "validation", label: "Validation" },
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
          <img
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
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
                href={item === "Home" ? "/" : item === "About" ? "/about" : `/${item.toLowerCase()}`}
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
                <Link href="/about" className="text-gray-900 font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900" />
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
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
                  <Heart className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
              </div>

              <div
                className={`space-y-6 transition-all duration-1000 delay-500 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                  <span className="block text-gray-900">We're the</span>
                  <span className="block text-gray-400 italic">90%</span>
                  <span className="block text-gray-900">who refused</span>
                  <span className="block text-gray-400 italic">to quit</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  We've been where you are. We've felt the pain, the rejection, the sleepless nights.
                  <br />
                  <span className="text-gray-900 font-normal">But we didn't give up.</span>
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { number: "90%", label: "Startup Failure Rate", icon: Target },
                { number: "10%", label: "Success Stories", icon: Star },
                { number: "100%", label: "Our Commitment", icon: Heart },
                { number: "∞", label: "Possibilities", icon: Lightbulb },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-500 group cursor-default transform hover:scale-105 ${
                    isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <stat.icon className="w-full h-full" strokeWidth={1} />
                    </div>
                    <div className="text-2xl font-light text-gray-900 mb-2">{stat.number}</div>
                    <p className="text-sm text-gray-500 font-light">{stat.label}</p>
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

      {/* The Problem Section */}
      <section id="problem" ref={problemRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.problem ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">
              The Problem
              <br />
              <span className="text-gray-600">Everyone Talks About</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Every time someone says <span className="text-gray-900 font-normal">"90% of startups fail,"</span>
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
                className={`border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 group transform hover:scale-105 ${
                  isVisible.problem ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <item.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <X className="h-6 w-6 text-gray-400 mx-auto mb-3" strokeWidth={1} />
                  <p className="text-gray-600 font-light">{item.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center space-y-8 transition-all duration-1000 delay-500 ${
              isVisible.problem ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-light mb-6 text-gray-900">But here's what they don't tell you:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-600 font-light">
                <p>No one stays to rebuild with you.</p>
                <p>No one walks into the trenches with you.</p>
                <p>Everyone just... moves on.</p>
              </div>
            </div>

            <div className="pt-12">
              <Card className="max-w-2xl mx-auto border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-8 w-8 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-xl font-light text-gray-900 mb-4">That's where VentureCrafters was born.</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    We decided to be the partners we wished we had when we were struggling founders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="journey" ref={journeyRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.journey ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">
              Our Journey
              <br />
              <span className="text-gray-600">From Failure to Success</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible.journey ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900">We've Been There</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  We've sat on that side of the table, feeling the weight of uncertainty.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { text: "Pitched with trembling hands to skeptical investors", icon: Users },
                  { text: "Watched dashboards flatline at 3 AM", icon: TrendingUp },
                  { text: "Burnt through capital and had to rebuild from scratch", icon: DollarSign },
                  { text: "Faced rejection after rejection, but kept going", icon: Heart },
                ].map((experience, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 ${
                      isVisible.journey ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 text-gray-400">
                      <experience.icon className="w-full h-full" strokeWidth={1} />
                    </div>
                    <span className="text-gray-600 flex-1 font-light">{experience.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  And through all of this, we gained something invaluable—
                  <span className="text-gray-900 font-normal"> real clarity</span> on what founders actually need.
                </p>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible.journey ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Card className="border-0 shadow-none bg-gray-50 hover:shadow-lg transition-all duration-500 p-8">
                <CardContent className="p-0 text-center space-y-6">
                  <div className="w-12 h-12 text-gray-400 mx-auto">
                    <Brain className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <Quote className="h-6 w-6 text-gray-400 mx-auto" strokeWidth={1} />
                    <h3 className="text-xl font-light text-gray-900">Our Realization</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      Founders don't fail because they're wrong or incompetent.
                    </p>
                    <p className="text-xl font-normal text-gray-900">They fail because they're alone.</p>
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Now Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">What We Do Now</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              At VentureCrafters, we help founders build real, fundable, scalable businesses with execution-first
              thinking, hands-on support, and brutal honesty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 text-gray-400 mr-4 group-hover:text-gray-600 transition-colors">
                    <span className="text-2xl font-light">90%</span>
                  </div>
                  <h3 className="text-xl font-light text-gray-900">If you're in the 90%</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                  We'll help you build smarter, faster, and with more structure. No more shooting in the dark.
                </p>
                <div className="space-y-3">
                  {["Strategic Planning", "MVP Development", "Market Validation"].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600 font-light">
                      <CheckCircle className="w-4 h-4 mr-2 text-gray-400" strokeWidth={1} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 text-gray-400 mr-4 group-hover:text-gray-600 transition-colors">
                    <span className="text-2xl font-light">10%</span>
                  </div>
                  <h3 className="text-xl font-light text-gray-900">If you're in the 10%</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                  We'll back you with fundraising support, growth planning, tech builds, and investor connections.
                </p>
                <div className="space-y-3">
                  {["Fundraising Support", "Growth Strategy", "Investor Network"].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600 font-light">
                      <CheckCircle className="w-4 h-4 mr-2 text-gray-400" strokeWidth={1} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500">
              <CardContent className="p-8">
                <Coffee className="h-8 w-8 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  <span className="font-normal text-gray-900">No fluff. No VC lingo.</span>
                  <br />
                  Just clear paths and committed people who've walked the journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section id="validation" ref={validationRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.validation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">
              <span className="text-gray-500">Our Validation?</span>
              <br />
              We Don't Just Talk. We Build.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Lightbulb,
                number: "12+",
                title: "MVPs Launched",
                desc: "Across fintech, travel tech, D2C, and last-mile delivery",
              },
              {
                icon: DollarSign,
                number: "$600K+",
                title: "Capital Raised",
                desc: "Helped startups secure funding across early-stage deals",
              },
              {
                icon: Globe,
                number: "Global",
                title: "Network",
                desc: "Worldwide connections with operators, angels, and builders",
              },
              {
                icon: Award,
                number: "100%",
                title: "Commitment",
                desc: "Led by ex-founders who've built and scaled multiple times",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-500 group transform hover:scale-105 ${
                  isVisible.validation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-10 h-10 mx-auto mb-6 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <stat.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-2">{stat.number}</div>
                  <h4 className="text-lg font-light text-gray-900 mb-3">{stat.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Zap, text: "Helped founders get investor-ready in 30 days" },
                { icon: Rocket, text: "Built startups from idea to revenue in 60 days" },
                { icon: Target, text: "Said NO to vanity projects" },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 rounded-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <achievement.icon className="h-6 w-6 text-gray-400 mx-auto mb-3" strokeWidth={1} />
                  <p className="text-lg text-gray-600 font-light">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Join the Movement</h2>
              <div className="space-y-6 text-xl text-gray-600 font-light">
                <p>
                  This is more than a service. <span className="font-normal text-gray-900">It's a mindset.</span>
                </p>
                <p>We're building a global tribe of builders who help each other win.</p>
                <p>Because we've been there. And we're here now.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-light text-gray-900">
                VentureCrafters — Built by the 90%. Here to change the stats.
              </h3>
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
                  Start Your Journey
                  <Rocket className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-12 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                </Button>
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
              <img
                src="/images/venturecrafters-latest-logo.png"
                alt="VentureCrafters Logo"
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : item === "About" ? "/about" : `/${item.toLowerCase()}`}
                  className={`font-light transition-all duration-300 relative group ${
                    item === "About" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gray-900 transition-all duration-300 ${
                      item === "About" ? "w-full" : "w-0 group-hover:w-full"
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
