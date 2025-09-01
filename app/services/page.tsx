"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Menu, X, ArrowRight, CheckCircle, Users, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const pillars = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-500" strokeWidth={1.5} />,
      title: "Idea Validation & Market Research",
      description:
        "We help you validate your startup idea through comprehensive market research, competitor analysis, and customer discovery to ensure you're building something people actually want.",
      features: [
        "Market sizing and analysis",
        "Competitor landscape mapping",
        "Customer interviews and surveys",
        "MVP definition and roadmap",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8 text-green-500" strokeWidth={1.5} />,
      title: "MVP Development & Launch",
      description:
        "From concept to launch, we build your minimum viable product with the right technology stack and go-to-market strategy to get your first customers quickly.",
      features: ["Technical architecture planning", "MVP development", "Launch strategy", "Early user acquisition"],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" strokeWidth={1.5} />,
      title: "Growth & Scaling",
      description:
        "Once you have product-market fit, we help you scale efficiently with proven growth strategies, operational systems, and team building guidance.",
      features: [
        "Growth strategy development",
        "Operations optimization",
        "Team hiring and management",
        "Performance tracking",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" strokeWidth={1.5} />,
      title: "Fundraising & Investment",
      description:
        "We prepare you for fundraising success with pitch deck development, financial modeling, investor introductions, and negotiation support.",
      features: ["Pitch deck creation", "Financial modeling", "Investor introductions", "Due diligence preparation"],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Header and Mobile Menu */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <Link href="/" className="group">
          <Image
            src="/images/venturecrafters-text-logo.png"
            alt="VentureCrafters"
            width={160}
            height={40}
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
              className="text-2xl font-medium text-gray-900 hover:text-gray-900"
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
            <Link
              href="/contact"
              className="text-2xl font-light text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 hidden md:block ${
          scrollY > 50 ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="w-32"></div>
              <div className="flex space-x-8 text-sm font-light">
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/ecosystem-access" className="text-gray-600 hover:text-gray-900">
                  Ecosystem Access
                </Link>
                <Link href="/services" className="text-gray-900 font-medium">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
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
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="font-light w-fit mb-6 py-1 px-3 text-sm border-gray-300 text-gray-600">
            VentureCrafters Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-tight tracking-tight text-gray-900">
            End-to-End Startup
            <br />
            <span className="text-gray-500">Development Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            From idea validation to successful exit, we provide comprehensive startup development services tailored to
            your unique journey and growth stage.
          </p>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">Our Four Pillars</h2>
            <p className="text-lg text-gray-600 font-light">
              Comprehensive support across every stage of your startup journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {pillar.icon}
                    <CardTitle className="text-xl font-light text-gray-900 ml-3">{pillar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-light mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">Why Choose VentureCrafters?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">What Others Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Generic advice and templates
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  One-size-fits-all approaches
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Theoretical knowledge without execution
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Limited ongoing support
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  Customized strategies for your specific market
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  Hands-on execution and implementation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  Real-world experience from successful exits
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  Long-term partnership and mentorship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">Ready to Build Your Startup?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
            Let's discuss your idea and create a customized roadmap for your success.
          </p>
          <Button
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 rounded-none font-light text-lg"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Start Your Journey <ArrowRight className="ml-3 h-5 w-5" strokeWidth={1.5} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 md:px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/venturecrafters-text-logo.png"
                alt="VentureCrafters Logo"
                width={160}
                height={40}
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
              <Link href="/services" className="text-gray-900 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-500 hover:text-gray-900 font-light">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900 font-light">
                Contact
              </Link>
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
