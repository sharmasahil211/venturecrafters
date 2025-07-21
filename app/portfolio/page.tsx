"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Building,
  ShoppingCart,
  Truck,
  Droplets,
  Brain,
  Gamepad2,
  Coffee,
  Sparkles,
  X,
  Menu,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function PortfolioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const heroRef = useRef(null)
  const portfolioRef = useRef(null)
  const metricsRef = useRef(null)

  const portfolioItems = [
    {
      name: "SamparkBindhu",
      logo: "/images/portfolio/samparkbindhu.png",
      category: "B2B SaaS",
      description:
        "Revolutionary B2B communication platform connecting businesses with seamless integration and real-time collaboration tools.",
      services: ["MVP Development", "Tech Architecture", "Growth Strategy"],
      results: ["50+ Enterprise Clients", "200% User Growth", "Series A Ready"],
      status: "Active",
      icon: Building,
    },
    {
      name: "CXFirst",
      logo: "/images/portfolio/cxfirst.jpeg",
      category: "Customer Experience",
      description:
        "AI-powered customer experience platform that transforms how businesses interact with their customers through intelligent automation.",
      services: ["Product Strategy", "AI Integration", "Market Positioning"],
      results: ["40% Efficiency Boost", "95% Customer Satisfaction", "Market Leader"],
      status: "Scaling",
      icon: Users,
    },
    {
      name: "Little Jungle",
      logo: "/images/portfolio/little-jungle.jpeg",
      category: "D2C",
      description:
        "Premium children's clothing brand focused on sustainable, organic materials with direct-to-consumer excellence.",
      services: ["Brand Strategy", "E-commerce Build", "Digital Marketing"],
      results: ["300% Revenue Growth", "50K+ Happy Customers", "Pan-India Presence"],
      status: "Thriving",
      icon: ShoppingCart,
    },
    {
      name: "Ajivam Water",
      logo: "/images/portfolio/ajivam.jpeg",
      category: "Water Solutions",
      description:
        "Innovative water purification technology providing clean, safe drinking water solutions for homes and businesses.",
      services: ["Product Development", "Market Entry", "Distribution Strategy"],
      results: ["10K+ Installations", "99.9% Purity Rate", "Award Winning"],
      status: "Expanding",
      icon: Droplets,
    },
    {
      name: "Survey Agent AI",
      logo: "/images/portfolio/survey-agent.jpeg",
      category: "AI/Tech",
      description:
        "Advanced AI-powered survey platform that revolutionizes data collection and analysis with intelligent automation.",
      services: ["AI Development", "Platform Architecture", "Go-to-Market"],
      results: ["1M+ Surveys Processed", "85% Time Savings", "Enterprise Adoption"],
      status: "Unicorn Track",
      icon: Brain,
    },
    {
      name: "ToyFlix",
      logo: "/images/portfolio/toyflix.webp",
      category: "Toy Rental",
      description:
        "Netflix for toys - subscription-based toy rental service bringing joy and learning to children while promoting sustainability.",
      services: ["Business Model", "App Development", "Logistics Setup"],
      results: ["5K+ Subscribers", "98% Retention Rate", "Funding Secured"],
      status: "Growing",
      icon: Gamepad2,
    },
    {
      name: "PickkUp",
      logo: "/images/portfolio/pickup.jpeg",
      category: "Logistics",
      description:
        "Last-mile delivery solution optimizing logistics for e-commerce businesses with real-time tracking and efficient routing.",
      services: ["Platform Development", "Operations Setup", "Scaling Strategy"],
      results: ["100K+ Deliveries", "30% Cost Reduction", "Multi-City Launch"],
      status: "Scaling",
      icon: Truck,
    },
    {
      name: "FitFeast",
      logo: "/images/portfolio/fitfeast.png",
      category: "Healthy Snacking",
      description:
        "Premium healthy snacking brand delivering nutritious, delicious snacks that fuel active lifestyles and wellness goals.",
      services: ["Brand Building", "Product Development", "Market Launch"],
      results: ["500+ Retail Stores", "4.8★ Rating", "Health Certified"],
      status: "Market Leader",
      icon: Coffee,
    },
  ]

  const categories = [
    "All",
    "B2B SaaS",
    "AI/Tech",
    "D2C",
    "Logistics",
    "Customer Experience",
    "Water Solutions",
    "Toy Rental",
    "Healthy Snacking",
  ]

  const filteredPortfolio =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

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

    const sections = [heroRef, portfolioRef, metricsRef]
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
            { id: "portfolio", label: "Portfolio" },
            { id: "metrics", label: "Impact" },
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
                href={item === "Home" ? "/" : item === "Portfolio" ? "/portfolio" : `/${item.toLowerCase()}`}
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
                  className="text-gray-900 font-medium transition-all duration-300 relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900" />
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
                  <Award className="w-4 h-4 mr-2" />
                  Success Stories
                </Badge>
              </div>

              <div
                className={`space-y-6 transition-all duration-1000 delay-500 ${
                  isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                  <span className="block text-gray-900">Startups We've</span>
                  <span className="block text-gray-400 italic">Transformed</span>
                  <span className="block text-gray-900">Into</span>
                  <span className="block text-gray-400 italic">Success Stories</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  From idea to execution, we've helped these startups build, scale, and succeed in competitive markets.
                  <br />
                  <span className="text-gray-500">
                    Each story represents months of dedication, strategic thinking, and relentless execution.
                  </span>
                </p>
              </div>
            </div>

            {/* Portfolio Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
                isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { number: "8+", label: "Startups Scaled", icon: TrendingUp },
                { number: "$600K+", label: "Funds Raised", icon: DollarSign },
                { number: "12+", label: "MVPs Built", icon: Lightbulb },
                { number: "100K+", label: "Users Impacted", icon: Users },
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

      {/* Category Filter */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight mb-8 text-gray-900">Filter by Industry</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full transition-all duration-300 font-light ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white shadow-lg hover:bg-gray-800"
                      : "border-gray-300 text-gray-600 hover:border-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" ref={portfolioRef} className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible.portfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedPortfolio(item)
                  setIsModalOpen(true)
                }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-none bg-white flex items-center justify-center overflow-hidden shadow-sm">
                        <Image
                          src={item.logo || "/placeholder.svg"}
                          alt={`${item.name} Logo`}
                          width={64}
                          height={64}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                          {item.name}
                        </h3>
                        <Badge variant="outline" className="border-gray-200 text-gray-500 text-xs mt-1 font-light">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <item.icon className="w-full h-full" strokeWidth={1} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm font-light">{item.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-light mb-3 text-sm">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map((service, idx) => (
                        <Badge key={idx} className="bg-white text-gray-600 border-gray-200 text-xs font-light">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-light mb-3 text-sm">Key Results:</h4>
                    <div className="space-y-2">
                      {item.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600 font-light">
                          <CheckCircle className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" strokeWidth={1} />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 text-xs font-light">
                      <Zap className="w-3 h-3 mr-1" strokeWidth={1} />
                      {item.status}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gray-600 p-2">
                      <ExternalLink className="h-4 w-4" strokeWidth={1} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section id="metrics" ref={metricsRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.metrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">Collective Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              The combined success of our portfolio companies speaks to our execution-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "500K+",
                label: "Total Users Served",
                description: "Across all portfolio companies",
                icon: Users,
              },
              {
                metric: "₹50Cr+",
                label: "Combined Revenue",
                description: "Generated by our startups",
                icon: TrendingUp,
              },
              {
                metric: "15+",
                label: "Awards Won",
                description: "Industry recognition achieved",
                icon: Award,
              },
              {
                metric: "100%",
                label: "Success Rate",
                description: "Startups still operating",
                icon: Target,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500 group transform hover:scale-105 ${
                  isVisible.metrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-10 h-10 mx-auto mb-6 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <item.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-2">{item.metric}</div>
                  <h4 className="text-lg font-light text-gray-900 mb-3">{item.label}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-500 ${
              isVisible.metrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="max-w-2xl mx-auto border-0 shadow-none bg-white hover:shadow-lg transition-all duration-500">
              <CardContent className="p-8">
                <Globe className="h-8 w-8 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                <h3 className="text-xl font-light text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  Our portfolio companies operate across multiple countries, serving diverse markets and creating
                  international impact.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500 font-light">
                  <span>🇮🇳 India</span>
                  <span>🇦🇪 UAE</span>
                  <span>🇺🇸 USA</span>
                  <span>🇸🇬 Singapore</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Ready to Join This Portfolio?</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Your startup could be our next success story. Let's build something extraordinary together.
            </p>
            <div className="text-2xl font-light text-gray-900 mb-8">🚀 Your Success Story Starts Here</div>

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
                <Sparkles className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 px-12 py-4 rounded-none font-light text-lg transition-all duration-300 hover:scale-105 group bg-transparent"
              >
                View Case Studies
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Button>
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
                  href={item === "Home" ? "/" : item === "Portfolio" ? "/portfolio" : `/${item.toLowerCase()}`}
                  className={`font-light transition-all duration-300 relative group ${
                    item === "Portfolio" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gray-900 transition-all duration-300 ${
                      item === "Portfolio" ? "w-full" : "w-0 group-hover:w-full"
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
