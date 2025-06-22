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
  Play,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function DynamicMinimalTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const taglines = ["We don't just consult.", "We co-op.", "We execute.", "We deliver."]

  const testimonials = [
    {
      quote: "VentureCrafters transformed our idea into a $2M ARR platform. Their execution speed is unmatched.",
      author: "Rajesh Kumar",
      company: "TechFlow Solutions",
      rating: 5,
    },
    {
      quote: "From MVP to Series A in 8 months. The team's strategic guidance was instrumental.",
      author: "Sarah Chen",
      company: "GreenTech Innovations",
      rating: 5,
    },
    {
      quote: "They didn't just build our product, they built our entire go-to-market strategy.",
      author: "Amit Sharma",
      company: "HealthFirst",
      rating: 5,
    },
  ]

  // Typing animation effect
  useEffect(() => {
    let currentTaglineIndex = 0
    let currentCharIndex = 0
    let isDeleting = false

    const typeWriter = () => {
      const currentTagline = taglines[currentTaglineIndex]

      if (isDeleting) {
        setTypedText(currentTagline.substring(0, currentCharIndex - 1))
        currentCharIndex--
      } else {
        setTypedText(currentTagline.substring(0, currentCharIndex + 1))
        currentCharIndex++
      }

      if (!isDeleting && currentCharIndex === currentTagline.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length
      }

      const speed = isDeleting ? 50 : 100
      setTimeout(typeWriter, speed)
    }

    typeWriter()
  }, [])

  // Scroll and mouse tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
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

    const sections = [heroRef, servicesRef, portfolioRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.5

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light overflow-x-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 bg-gray-900 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`,
        }}
      />

      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {[
            { id: "hero", label: "Home" },
            { id: "services", label: "Services" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
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

      {/* Logo with fade effect */}
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
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {["About", "Services", "Portfolio", "Contact"].map((item, index) => (
            <div
              key={item}
              className={`transition-all duration-500 delay-${index * 100} ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                className="text-2xl font-light text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </div>
          ))}
          <div
            className={`transition-all duration-500 delay-400 ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-none font-light"
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
      </div>

      {/* Desktop Navigation with blur effect */}
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
                {["About", "Services", "Portfolio", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
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

      {/* Hero Section with parallax */}
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
                  Trusted by 50+ Startups
                </Badge>
              </div>

              <div
                className={`space-y-4 transition-all duration-1000 delay-500 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                  <span className="block text-gray-900">We don't just</span>
                  <span className="block text-gray-900">consult.</span>
                </h1>

                {/* Typing animation */}
                <div className="h-20 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-400 italic">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                  Ex-founders, VCs, and operators who've been in the trenches.
                  <br />
                  Your success is our obsession.
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open("https://youtu.be/0wrCxUtWM7E", "_blank")}
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Our Story
              </Button>
            </div>

            {/* Animated trust indicators */}
            <div
              className={`grid grid-cols-3 gap-8 max-w-md mx-auto pt-16 border-t border-gray-100 transition-all duration-1000 delay-1100 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "$600K+", label: "Raised" },
                { value: "12+", label: "MVPs Built" },
                { value: "100+", label: "Connections" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 delay-${1200 + index * 100} hover:scale-110 cursor-default ${
                    isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-2xl font-light text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-light">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with staggered animations */}
      <section id="services" ref={servicesRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
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
              { icon: Users, title: "Team Building", desc: "Assemble the perfect team with our vetted network." },
              { icon: Globe, title: "Global Expansion", desc: "Scale internationally with our worldwide connections." },
            ].map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-white hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-6 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-full h-full" strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with hover effects */}
      <section id="portfolio" ref={portfolioRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.portfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
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
                className={`border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105 ${
                  isVisible.portfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 flex items-center justify-center h-24 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              isVisible.portfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3 rounded-none font-light transition-all duration-300 hover:scale-105 group"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with auto-rotation */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">What Founders Say</h2>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-none bg-white min-h-[200px]">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gray-900 text-gray-900" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-600 font-light leading-relaxed italic transition-all duration-500">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="border-t border-gray-100 pt-6 transition-all duration-500">
                    <p className="font-light text-gray-900">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-gray-500 font-light">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Let's Talk</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Ready to turn your startup vision into reality? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: "+91 95996 91123" },
                  { icon: Mail, text: "info@venturecrafters.in" },
                  { icon: MapPin, text: "Forum, DLF Cyber City\nGurugram, Haryana 122002" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-500 hover:translate-x-2 ${
                      isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <contact.icon className="h-5 w-5 text-gray-400 mt-1" strokeWidth={1} />
                    <span className="text-gray-600 font-light whitespace-pre-line">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Card className="border-0 shadow-none bg-gray-50 hover:shadow-lg transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-4 text-gray-900">Start a Conversation</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    Fill out our form and we'll get back to you within 24 hours with a personalized strategy session.
                  </p>
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none font-light w-full transition-all duration-300 hover:scale-105 group"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                src="/images/venturecrafters-latest-logo.png"
                alt="VentureCrafters Logo"
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8 text-sm">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
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
