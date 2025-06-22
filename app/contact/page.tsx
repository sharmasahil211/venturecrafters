"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  ArrowRight,
  Rocket,
  Coffee,
  Globe,
  Users,
  Star,
  CheckCircle,
  ExternalLink,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const socialRef = useRef(null)

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

    const sections = [heroRef, contactRef, socialRef]
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
            { id: "hero", label: "Connect" },
            { id: "contact", label: "Contact" },
            { id: "social", label: "Social" },
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
                href={item === "Home" ? "/" : item === "Contact" ? "/contact" : `/${item.toLowerCase()}`}
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
                <Link href="/contact" className="text-gray-900 font-medium transition-all duration-300 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900" />
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
                  <Coffee className="w-4 h-4 mr-2" />
                  Let's Connect
                </Badge>
              </div>

              <div
                className={`space-y-6 transition-all duration-1000 delay-500 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                  <span className="block text-gray-900">Ready to</span>
                  <span className="block text-gray-400 italic">Transform</span>
                  <span className="block text-gray-900">Your Startup?</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  Let's grab a coffee (virtual or real) and discuss how we can turn your startup dreams into reality.
                  <br />
                  <span className="text-gray-500">
                    We're here to listen, understand your vision, and craft the perfect execution strategy for your
                    business.
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { number: "24hrs", label: "Response Time", icon: Clock },
                { number: "100+", label: "Startups Helped", icon: Users },
                { number: "$600K+", label: "Funds Raised", icon: Star },
                { number: "Global", label: "Reach", icon: Globe },
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

      {/* Contact Methods Section */}
      <section id="contact" ref={contactRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Choose your preferred way to connect with us. We're always excited to hear from ambitious founders.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Primary Contact */}
            <Card
              className={`lg:col-span-2 border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 ${
                isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 text-gray-400 mr-4">
                    <MessageCircle className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-light text-gray-900">Start the Conversation</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Ready to build something extraordinary? Fill out our quick form and we'll get back to you within 24
                  hours with a personalized strategy session.
                </p>
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-none font-light shadow-lg hover:scale-105 transition-all duration-300 group"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                      "_blank",
                    )
                  }
                >
                  Start Your Journey
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card
              className={`border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 delay-200 ${
                isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 text-gray-400 mr-4">
                    <Calendar className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-light text-gray-900">Book a Call</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Prefer to talk directly? Schedule a 30-minute discovery call to discuss your startup and explore how
                  we can help.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-none font-light hover:scale-105 transition-all duration-300 group w-full"
                >
                  Schedule Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                primary: "+91 95996 91123",
                secondary: "Available 9 AM - 7 PM IST",
                action: () => window.open("tel:+919599691123"),
              },
              {
                icon: Mail,
                title: "Email Us",
                primary: "info@venturecrafters.in",
                secondary: "We respond within 24 hours",
                action: () => window.open("mailto:info@venturecrafters.in"),
              },
              {
                icon: MapPin,
                title: "Visit Us",
                primary: "Bangalore, India",
                secondary: "Available for in-person meetings",
                action: () => {},
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105 ${
                  isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onClick={contact.action}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-10 h-10 mx-auto mb-6 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <contact.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h4 className="text-lg font-light text-gray-900 mb-3">{contact.title}</h4>
                  <p className="text-gray-900 font-normal mb-2">{contact.primary}</p>
                  <p className="text-sm text-gray-500 font-light">{contact.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Community Section */}
      <section id="social" ref={socialRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.social ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Follow Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Stay updated with our latest insights, success stories, and startup wisdom across our social channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                platform: "LinkedIn",
                handle: "@venturecrafters",
                description: "Professional insights & startup stories",
                icon: Linkedin,
                color: "hover:text-blue-600",
                followers: "5K+",
              },
              {
                platform: "Instagram",
                handle: "@venturecrafters.in",
                description: "Behind-the-scenes & founder life",
                icon: Instagram,
                color: "hover:text-pink-600",
                followers: "3K+",
              },
              {
                platform: "Twitter",
                handle: "@venturecrafters",
                description: "Real-time thoughts & industry news",
                icon: Twitter,
                color: "hover:text-blue-400",
                followers: "2K+",
              },
              {
                platform: "YouTube",
                handle: "VentureCrafters",
                description: "Startup tutorials & case studies",
                icon: Youtube,
                color: "hover:text-red-600",
                followers: "1K+",
              },
            ].map((social, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105 ${
                  isVisible.social ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-10 h-10 mx-auto mb-6 text-gray-400 transition-colors ${social.color} group-hover:scale-110 transition-transform`}
                  >
                    <social.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h4 className="text-lg font-light text-gray-900 mb-2">{social.platform}</h4>
                  <p className="text-gray-600 font-normal mb-2">{social.handle}</p>
                  <p className="text-sm text-gray-500 font-light mb-3">{social.description}</p>
                  <Badge variant="outline" className="border-gray-200 text-gray-500 text-xs font-light">
                    {social.followers} followers
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-500 ${
              isVisible.social ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="max-w-2xl mx-auto border-0 shadow-none bg-gray-50 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-8">
                <Rocket className="h-8 w-8 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                <h3 className="text-xl font-light text-gray-900 mb-4">Join Our Community</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  Connect with like-minded founders, share experiences, and get exclusive insights from our team and
                  portfolio companies.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-none font-light"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" strokeWidth={1} />
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Quick Questions?</h2>
            <p className="text-xl text-gray-600 font-light">Here are some answers to get you started.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can we start working together?",
                answer:
                  "We can typically start within 48 hours of our initial conversation. We believe in moving fast when founders are ready to execute.",
              },
              {
                question: "What's your typical engagement model?",
                answer:
                  "We work as your fractional co-founder, typically 3-6 month engagements with clear milestones and deliverables. Every engagement is customized to your specific needs.",
              },
              {
                question: "Do you take equity or work on retainer?",
                answer:
                  "We offer both models depending on the stage and needs of your startup. We're flexible and founder-friendly in our approach.",
              },
              {
                question: "What if we're not ready for funding yet?",
                answer:
                  "Perfect! We love working with early-stage founders. We'll help you build the foundation needed to become investor-ready when the time is right.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-white hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0">
                      <CheckCircle className="w-full h-full" strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-light text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Your startup journey starts with a single conversation. Let's make it count.
            </p>
            <div className="text-2xl font-light text-gray-900 mb-8">☕ Coffee's on us!</div>

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
                Start the Conversation
                <Coffee className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-12 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open("tel:+919599691123")}
              >
                Call Now
                <Phone className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
            </div>

            <div className="pt-8 text-gray-500 font-light">
              <p>Available Monday - Friday, 9 AM - 7 PM IST</p>
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
                  href={item === "Home" ? "/" : item === "Contact" ? "/contact" : `/${item.toLowerCase()}`}
                  className={`font-light transition-all duration-300 relative group ${
                    item === "Contact" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gray-900 transition-all duration-300 ${
                      item === "Contact" ? "w-full" : "w-0 group-hover:w-full"
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
