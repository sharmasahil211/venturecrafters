"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Code,
  Menu,
  X,
  Zap,
  Brain,
  Sparkles,
  Rocket,
  Handshake,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function VentureCraftersLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [microSaasDropdownOpen, setMicroSaasDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMicroSaasDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 1.2 // Make canvas taller to avoid cutoff
    }
    resizeCanvas()

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1
        this.x += this.speedX
        this.y += this.speedY
      }
      draw() {
        ctx.fillStyle = "rgba(156, 163, 175, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      const numberOfParticles = (canvas.width * canvas.height) / 12000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }
    init()

    const connect = () => {
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
              (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y),
          )
          if (distance < 120) {
            opacityValue = 1 - distance / 120
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacityValue})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light relative overflow-x-hidden">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes slide-down {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
      `}</style>

      {/* Header and Mobile Menu */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-text-logo.png"
            alt="VentureCrafters"
            className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-all duration-300"
          />
        </Link>
      </div>

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-3"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center px-6">
            <Link
              href="/about"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/ecosystem-access"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ecosystem Access
            </Link>
            <Link
              href="/services"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="#contact"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            {/* Add other mobile links if necessary */}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 hidden md:block ${scrollY > 50 ? "shadow-sm" : ""}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="w-8"></div> {/* Spacer */}
              <div className="flex space-x-8 text-sm font-light">
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/ecosystem-access" className="text-gray-600 hover:text-gray-900">
                  Ecosystem Access
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
                {/* Other nav items */}
              </div>
            </div>
            <Button
              className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-none font-light text-sm"
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
      <section className="min-h-screen flex items-center justify-center pt-20 md:pt-20 pb-16 px-4 md:px-6 relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

        <div className="container mx-auto max-w-5xl relative z-20">
          <div className="text-center space-y-8 md:space-y-10 animate-fade-in-up">
            <Badge
              variant="outline"
              className="font-light py-1 px-4 rounded-full text-sm border-gray-300 text-gray-500 bg-white/50 backdrop-blur-sm"
            >
              Now exclusively serving the GCC
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight">
              More Than Just Capital.
              <br />
              <span className="text-gray-500">The GCC's Startup Ecosystem, Built for Founders.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              At VentureCrafters, we’re building the definitive startup ecosystem for the GCC. We build, support, and
              fund founders — without the fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-none font-light text-base md:text-lg w-full sm:w-auto transition-transform hover:scale-105"
              >
                <Link href="/ecosystem-access">
                  <Sparkles className="mr-3 h-5 w-5" strokeWidth={1.5} /> Join the Tribe
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-none font-light text-base md:text-lg w-full sm:w-auto transition-transform hover:scale-105 bg-transparent"
                onClick={() => scrollTo("customized-support")}
              >
                <Rocket className="mr-3 h-5 w-5" strokeWidth={1.5} /> Scale with Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Overview */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-4 text-gray-900">What We Offer</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We’ve simplified everything into two high-impact offerings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="font-light w-fit mb-4 py-1 px-3 text-sm">
                  For Early-Stage Founders
                </Badge>
                <CardTitle className="text-3xl font-light text-gray-900">🚀 Ecosystem Access</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">
                  Plug into real momentum with tools, mentorship, and execution support.
                </p>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-3 text-gray-400" /> Free tools worth $2,000+
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-3 text-gray-400" /> Execution support from ex-founders
                  </li>
                  <li className="flex items-center">
                    <Brain className="h-4 w-4 mr-3 text-gray-400" /> Mentorship with functional experts
                  </li>
                  <li className="flex items-center">
                    <Handshake className="h-4 w-4 mr-3 text-gray-400" /> Investor connections
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <p className="text-lg font-light text-center text-gray-800 mb-4">Membership-based</p>
                <Button asChild className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-none py-3">
                  <Link href="/ecosystem-access">Learn More</Link>
                </Button>
              </div>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="font-light w-fit mb-4 py-1 px-3 text-sm">
                  For Funded Startups
                </Badge>
                <CardTitle className="text-3xl font-light text-gray-900">🔧 Customized Support</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">Tailored, hands-on help for startups that are ready to scale fast.</p>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-3 text-gray-400" /> Your next fundraising round
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-3 text-gray-400" /> GTM strategy and growth marketing
                  </li>
                  <li className="flex items-center">
                    <Code className="h-4 w-4 mr-3 text-gray-400" /> Product/tech development
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-gray-400" /> Corporate and channel access
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <p className="text-lg font-light text-center text-gray-800 mb-4">Custom Retainers</p>
                <Button
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-none py-3"
                  onClick={() => scrollTo("customized-support")}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* GCC Opportunity Section */}
      <section id="gcc-opportunity" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-4 text-gray-900">
              The GCC: A New Frontier for Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              The region is experiencing unprecedented growth, backed by government initiatives and a vibrant,
              tech-savvy population. This is the moment to build and invest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gray-50/50">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-gray-900 flex items-center">
                  <Rocket className="h-6 w-6 mr-3 text-gray-500" />
                  For Startups: Your Launchpad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-700 font-light">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">Untapped Markets</h4>
                      <p className="text-gray-600">Access a young, affluent, and digitally native consumer base.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">Growing Pool of Capital</h4>
                      <p className="text-gray-600">Connect with an increasing number of local and international VCs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">Strong Government Support</h4>
                      <p className="text-gray-600">Benefit from grants, sandboxes, and business-friendly policies.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gray-50/50">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-gray-900 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-gray-500" />
                  For Investors: A High-Growth Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-700 font-light">
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">Economic Diversification</h4>
                      <p className="text-gray-600">Invest in tech-driven ventures at the heart of national visions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">High-Potential Returns</h4>
                      <p className="text-gray-600">
                        Get in early on emerging sectors like FinTech, SaaS, and CleanTech.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Handshake className="h-5 w-5 mr-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-gray-800">Strategic Global Hub</h4>
                      <p className="text-gray-600">Leverage the GCC's position as a gateway to MEASA markets.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customized Support Section */}
      <section id="customized-support" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-4 text-gray-900">
              🧠 Already Raised? Let’s Scale Smart.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              If you’ve closed a round, we help you get to the next one — with speed and clarity.
            </p>
          </div>
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-6">
                What We Do: Hands-On Growth with Precision
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-light">Fundraising Strategy</AccordionTrigger>
                  <AccordionContent className="pt-2 text-gray-600 font-light text-base space-y-2">
                    <p>Deck improvement & storytelling that converts.</p>
                    <p>Warm intros to aligned investors.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-light">Growth Marketing</AccordionTrigger>
                  <AccordionContent className="pt-2 text-gray-600 font-light text-base space-y-2">
                    <p>Paid campaign design, retention & acquisition systems.</p>
                    <p>Landing pages, funnels & ad creative.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-light">Product & Tech Support</AccordionTrigger>
                  <AccordionContent className="pt-2 text-gray-600 font-light text-base space-y-2">
                    <p>Founder-friendly dev teams.</p>
                    <p>Technical architecture & automation, feature roadmapping.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-light">Market Access</AccordionTrigger>
                  <AccordionContent className="pt-2 text-gray-600 font-light text-base space-y-2">
                    <p>Corporate and ecosystem partnerships.</p>
                    <p>GTM in new geographies & channel partner scouting.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-8 text-center space-y-4">
                <p className="text-gray-600 font-light">
                  Scope-based or sprint-based retainers — we only take on 3-5 startups at a time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-none w-full sm:w-auto"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Book a Strategic Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-none w-full sm:w-auto bg-transparent"
                    onClick={() => (window.location.href = "mailto:info@venturecrafters.in?subject=Deck Review")}
                  >
                    Share Your Deck — Let’s Review
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight mb-4 text-gray-900">Let's Talk</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  Ready to turn your startup vision into reality? We'd love to hear from you.
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 font-light">+971 501532986</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 font-light">info@venturecrafters.in</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div className="text-gray-600 font-light">
                    <p className="font-medium text-gray-700">Our Office</p>
                    <p>Business Bay, Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-light mb-3 text-gray-900">Start a Conversation</h3>
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">
                    Fill out our form and we'll get back to you within 24 hours.
                  </p>
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none font-light w-full"
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
      <footer className="py-12 md:py-16 px-4 md:px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex justify-center">
              <img
                src="/images/venturecrafters-text-logo.png"
                alt="VentureCrafters Logo"
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-900 font-light">
                About
              </Link>
              <Link href="/ecosystem-access" className="text-gray-500 hover:text-gray-900 font-light">
                Ecosystem Access
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-gray-900 font-light">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-500 hover:text-gray-900 font-light">
                Portfolio
              </Link>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 font-light">
                Contact
              </a>
            </div>
            <div className="pt-6 md:pt-8 border-t border-gray-100 text-gray-400 text-xs font-light">
              <p>&copy; 2024 VentureCrafters. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
