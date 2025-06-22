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
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MinimalistTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
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
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <Link
              href="/about"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#services"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link
              href="/portfolio"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="#contact"
              className="text-xl font-light text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
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
      )}

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 hidden md:block ${
          scrollY > 50 ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="w-8"></div> {/* Spacer for logo */}
              <div className="flex space-x-8 text-sm font-light">
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </a>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Portfolio
                </Link>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
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
      <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge variant="outline" className="border-gray-200 text-gray-600 px-4 py-2 rounded-full font-light">
                  Trusted by 50+ Startups
                </Badge>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                <span className="block text-gray-900">We don't just</span>
                <span className="block text-gray-900">consult.</span>
                <span className="block text-gray-400 italic">We co-op.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                Ex-founders, VCs, and operators who've been in the trenches.
                <br />
                Your success is our obsession.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-none font-light text-lg"
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
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-none font-light text-lg"
                onClick={() => window.open("https://youtu.be/0wrCxUtWM7E", "_blank")}
              >
                Watch Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-16 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">$600K+</div>
                <div className="text-sm text-gray-500 font-light">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">12+</div>
                <div className="text-sm text-gray-500 font-light">MVPs Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">100+</div>
                <div className="text-sm text-gray-500 font-light">Connections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
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
                className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors">
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
                className="border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3 rounded-none font-light"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">What Founders Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "VentureCrafters transformed our idea into a $2M ARR platform. Their execution speed is unmatched.",
                author: "Rajesh Kumar",
                company: "TechFlow Solutions",
              },
              {
                quote: "From MVP to Series A in 8 months. The team's strategic guidance was instrumental.",
                author: "Sarah Chen",
                company: "GreenTech Innovations",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-none bg-white">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-light text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 font-light">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
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
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-gray-400" strokeWidth={1} />
                  <span className="text-gray-600 font-light">+91 95996 91123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-gray-400" strokeWidth={1} />
                  <span className="text-gray-600 font-light">info@venturecrafters.in</span>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" strokeWidth={1} />
                  <div className="text-gray-600 font-light">
                    <p>Forum, DLF Cyber City</p>
                    <p>Gurugram, Haryana 122002</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-none bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-4 text-gray-900">Start a Conversation</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    Fill out our form and we'll get back to you within 24 hours with a personalized strategy session.
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
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img
                src="/images/venturecrafters-latest-logo.png"
                alt="VentureCrafters Logo"
                className="h-8 w-auto opacity-60"
              />
            </div>
            <p className="text-gray-500 font-light">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                About
              </Link>
              <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                Services
              </a>
              <Link href="/portfolio" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
                Portfolio
              </Link>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors font-light">
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
