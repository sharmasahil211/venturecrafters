"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  ArrowRight,
  Rocket,
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
  Clock,
  Quote,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PortfolioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCaseStudyIndex, setShowCaseStudyIndex] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
      color: "cyan",
      icon: Building,
      // Detailed case study data
      caseStudy: {
        challenge:
          "Traditional B2B communication tools were fragmented, leading to inefficient workflows and poor collaboration between teams and external partners.",
        solution:
          "Built a unified communication platform with real-time messaging, file sharing, video conferencing, and project management integration.",
        timeline: "8 months from concept to market launch",
        techStack: ["React", "Node.js", "WebRTC", "MongoDB", "AWS"],
        keyMetrics: [
          { label: "User Growth", value: "200%", period: "6 months" },
          { label: "Enterprise Clients", value: "50+", period: "Current" },
          { label: "Daily Active Users", value: "5,000+", period: "Current" },
          { label: "Message Volume", value: "100K+", period: "Daily" },
        ],
        testimonial: {
          quote:
            "VentureCrafters didn't just build our platform - they understood our vision and executed it flawlessly. Their technical expertise and strategic guidance were instrumental in our success.",
          author: "Rajesh Kumar",
          position: "Founder & CEO, SamparkBindhu",
        },
        achievements: [
          "Featured in TechCrunch as 'Rising B2B Platform'",
          "Winner of Best Communication Tool 2024",
          "Successfully raised Pre-Series A funding",
          "Expanded to 3 countries within first year",
        ],
        nextSteps: "Preparing for Series A funding round and international expansion",
      },
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
      color: "purple",
      icon: Users,
      caseStudy: {
        challenge:
          "Businesses struggled with managing customer interactions across multiple channels, leading to inconsistent experiences and high support costs.",
        solution:
          "Developed an AI-powered platform that unifies customer touchpoints, provides intelligent routing, and offers predictive customer insights.",
        timeline: "10 months from ideation to full deployment",
        techStack: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
        keyMetrics: [
          { label: "Efficiency Improvement", value: "40%", period: "Average" },
          { label: "Customer Satisfaction", value: "95%", period: "Current" },
          { label: "Response Time Reduction", value: "60%", period: "Average" },
          { label: "Cost Savings", value: "₹2Cr+", period: "Annual" },
        ],
        testimonial: {
          quote:
            "The CXFirst platform revolutionized our customer service. VentureCrafters' AI expertise and execution speed were phenomenal.",
          author: "Priya Sharma",
          position: "VP Customer Success, CXFirst",
        },
        achievements: [
          "AI Excellence Award 2024",
          "Recognized as Top CX Platform by Gartner",
          "Successfully serving 100+ enterprise clients",
          "Achieved profitability within 18 months",
        ],
        nextSteps: "Expanding AI capabilities and entering US market",
      },
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
      color: "green",
      icon: ShoppingCart,
      caseStudy: {
        challenge:
          "Parents struggled to find high-quality, sustainable children's clothing that was both stylish and affordable in the Indian market.",
        solution:
          "Created a premium D2C brand focusing on organic materials, contemporary designs, and direct customer relationships through digital channels.",
        timeline: "6 months from brand conception to market launch",
        techStack: ["Shopify Plus", "React", "Node.js", "Stripe", "Google Analytics"],
        keyMetrics: [
          { label: "Revenue Growth", value: "300%", period: "Year 1" },
          { label: "Customer Base", value: "50K+", period: "Current" },
          { label: "Repeat Purchase Rate", value: "65%", period: "Current" },
          { label: "Average Order Value", value: "₹2,500", period: "Current" },
        ],
        testimonial: {
          quote:
            "VentureCrafters helped us build not just a brand, but a movement towards sustainable children's fashion. Their strategic approach was game-changing.",
          author: "Anita Desai",
          position: "Founder, Little Jungle",
        },
        achievements: [
          "Sustainable Fashion Brand of the Year 2024",
          "Featured in Vogue India's Top D2C Brands",
          "Carbon-neutral shipping achieved",
          "Expanded to 50+ cities across India",
        ],
        nextSteps: "International expansion and launching new product categories",
      },
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
      color: "blue",
      icon: Droplets,
      caseStudy: {
        challenge:
          "Traditional water purification systems were expensive, inefficient, and required frequent maintenance, making clean water inaccessible to many.",
        solution:
          "Developed innovative, cost-effective water purification technology with IoT monitoring and predictive maintenance capabilities.",
        timeline: "12 months from R&D to commercial launch",
        techStack: ["IoT Sensors", "React Native", "AWS IoT", "Python", "MongoDB"],
        keyMetrics: [
          { label: "Installations", value: "10K+", period: "Current" },
          { label: "Water Purity Rate", value: "99.9%", period: "Consistent" },
          { label: "Maintenance Reduction", value: "70%", period: "vs Traditional" },
          { label: "Cost Savings", value: "40%", period: "for Customers" },
        ],
        testimonial: {
          quote:
            "Ajivam's technology is revolutionary. VentureCrafters' technical expertise and market understanding helped us create a truly impactful solution.",
          author: "Dr. Suresh Patel",
          position: "CTO, Ajivam Water",
        },
        achievements: [
          "Water Innovation Award 2024",
          "Government partnership for rural deployment",
          "ISO certification achieved",
          "Featured in National Geographic India",
        ],
        nextSteps: "Scaling to 100K installations and international markets",
      },
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
      color: "orange",
      icon: Brain,
      caseStudy: {
        challenge:
          "Traditional survey methods were time-consuming, had low response rates, and provided limited insights, making market research inefficient.",
        solution:
          "Built an AI-powered platform that creates intelligent surveys, optimizes for engagement, and provides real-time analytics with predictive insights.",
        timeline: "14 months from concept to enterprise deployment",
        techStack: ["Python", "OpenAI GPT", "React", "PostgreSQL", "Kubernetes"],
        keyMetrics: [
          { label: "Surveys Processed", value: "1M+", period: "Total" },
          { label: "Time Savings", value: "85%", period: "vs Traditional" },
          { label: "Response Rate", value: "3x Higher", period: "Industry Average" },
          { label: "Enterprise Clients", value: "200+", period: "Current" },
        ],
        testimonial: {
          quote:
            "Survey Agent AI transformed our market research capabilities. VentureCrafters' AI expertise is unmatched in the industry.",
          author: "Michael Chen",
          position: "Head of Research, Fortune 500 Company",
        },
        achievements: [
          "AI Innovation Award 2024",
          "Featured in MIT Technology Review",
          "Unicorn valuation trajectory",
          "Partnership with top consulting firms",
        ],
        nextSteps: "Series B funding and global expansion",
      },
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
      color: "pink",
      icon: Gamepad2,
      caseStudy: {
        challenge:
          "Parents faced the challenge of constantly buying new toys for growing children, leading to waste and high costs, while children quickly lost interest in toys.",
        solution:
          "Created a subscription-based toy rental platform with age-appropriate curation, hygiene protocols, and educational value assessment.",
        timeline: "9 months from concept to operational launch",
        techStack: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
        keyMetrics: [
          { label: "Active Subscribers", value: "5K+", period: "Current" },
          { label: "Retention Rate", value: "98%", period: "Monthly" },
          { label: "Toys in Circulation", value: "50K+", period: "Current" },
          { label: "Parent Satisfaction", value: "4.9/5", period: "Average Rating" },
        ],
        testimonial: {
          quote:
            "ToyFlix solved a real problem for parents. VentureCrafters understood our vision and built something truly special for families.",
          author: "Sarah Johnson",
          position: "Founder, ToyFlix",
        },
        achievements: [
          "Sustainable Business Award 2024",
          "Featured in Shark Tank India",
          "Successfully raised Series A",
          "Expanded to 10 major cities",
        ],
        nextSteps: "National expansion and international franchise model",
      },
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
      color: "indigo",
      icon: Truck,
      caseStudy: {
        challenge:
          "E-commerce businesses struggled with expensive, unreliable last-mile delivery, leading to poor customer experience and high operational costs.",
        solution:
          "Developed an intelligent logistics platform with AI-powered route optimization, real-time tracking, and flexible delivery options.",
        timeline: "11 months from development to multi-city operations",
        techStack: ["React", "Node.js", "Google Maps API", "MongoDB", "AWS"],
        keyMetrics: [
          { label: "Deliveries Completed", value: "100K+", period: "Total" },
          { label: "Cost Reduction", value: "30%", period: "for Clients" },
          { label: "On-time Delivery", value: "95%", period: "Success Rate" },
          { label: "Cities Covered", value: "15", period: "Current" },
        ],
        testimonial: {
          quote:
            "PickkUp revolutionized our delivery operations. VentureCrafters' technical solution and operational expertise were crucial to our success.",
          author: "Amit Gupta",
          position: "COO, Major E-commerce Brand",
        },
        achievements: [
          "Logistics Innovation Award 2024",
          "Partnership with top e-commerce platforms",
          "Carbon-neutral delivery options launched",
          "Achieved operational profitability",
        ],
        nextSteps: "Pan-India expansion and B2B marketplace integration",
      },
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
      color: "emerald",
      icon: Coffee,
      caseStudy: {
        challenge:
          "Health-conscious consumers struggled to find tasty, convenient snacks that aligned with their fitness goals without compromising on nutrition.",
        solution:
          "Created a premium healthy snacking brand with scientifically formulated products, transparent nutrition labeling, and fitness community engagement.",
        timeline: "7 months from product development to retail launch",
        techStack: ["Shopify", "React", "Klaviyo", "Google Analytics", "Stripe"],
        keyMetrics: [
          { label: "Retail Presence", value: "500+", period: "Stores" },
          { label: "Customer Rating", value: "4.8/5", period: "Average" },
          { label: "Monthly Sales", value: "₹50L+", period: "Current" },
          { label: "Repeat Customers", value: "70%", period: "Rate" },
        ],
        testimonial: {
          quote:
            "FitFeast became the go-to brand for health enthusiasts. VentureCrafters' brand strategy and execution were phenomenal.",
          author: "Fitness Influencer",
          position: "Brand Ambassador",
        },
        achievements: [
          "Healthy Brand of the Year 2024",
          "Featured in Men's Health Magazine",
          "Fitness industry partnerships",
          "Achieved market leadership in premium segment",
        ],
        nextSteps: "International expansion and new product categories",
      },
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400",
      indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400",
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-float 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-40">
        <Link href="/" className="group">
          <img
            src="/images/venturecrafters-latest-logo.png"
            alt="VentureCrafters"
            className="h-10 w-auto hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors relative group">
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/portfolio" className="text-cyan-400 font-semibold relative">
              Portfolio
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Let's Build
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 border-orange-500/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Success Stories
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">Startups We've</span>
                <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Transformed
                </span>
                <span className="block text-white">Into</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300">
                <p className="leading-relaxed">
                  From idea to execution, we've helped these startups build, scale, and succeed in competitive markets.
                </p>
                <p className="text-base md:text-lg text-gray-400">
                  Each story represents months of dedication, strategic thinking, and relentless execution.
                </p>
              </div>
            </div>

            {/* Portfolio Stats - Mobile Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "8+", label: "Startups Scaled", icon: TrendingUp, color: "cyan" },
                { number: "$600K+", label: "Funds Raised", icon: DollarSign, color: "green" },
                { number: "12+", label: "MVPs Built", icon: Lightbulb, color: "purple" },
                { number: "100K+", label: "Users Impacted", icon: Users, color: "orange" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 bg-gradient-to-br ${
                        stat.color === "cyan"
                          ? "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                          : stat.color === "green"
                            ? "from-green-500/20 to-green-600/20 border border-green-500/30"
                            : stat.color === "purple"
                              ? "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                              : "from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon
                        className={`h-5 w-5 md:h-6 md:w-6 ${
                          stat.color === "cyan"
                            ? "text-cyan-400"
                            : stat.color === "green"
                              ? "text-green-400"
                              : stat.color === "purple"
                                ? "text-purple-400"
                                : "text-orange-400"
                        }`}
                      />
                    </div>
                    <div className="text-xl md:text-2xl font-black text-white mb-2">{stat.number}</div>
                    <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">Filter by Industry</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                        : "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  onClick={() => {
                    setSelectedPortfolio(item)
                    setIsModalOpen(true)
                  }}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                          <img
                            src={item.logo || "/placeholder.svg"}
                            alt={`${item.name} Logo`}
                            className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </h3>
                          <Badge variant="secondary" className="bg-white/10 text-gray-300 text-xs border-white/20 mt-1">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${getColorClasses(item.color)}`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">{item.description}</p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service, idx) => (
                          <Badge key={idx} className="bg-white/5 text-gray-300 border-white/20 text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm">Key Results:</h4>
                      <div className="space-y-2">
                        {item.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <Badge className={`bg-gradient-to-r ${getColorClasses(item.color)} border-0 text-xs`}>
                        <Zap className="w-3 h-3 mr-1" />
                        {item.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Collective Impact
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                  color: "cyan",
                },
                {
                  metric: "₹50Cr+",
                  label: "Combined Revenue",
                  description: "Generated by our startups",
                  icon: TrendingUp,
                  color: "green",
                },
                {
                  metric: "15+",
                  label: "Awards Won",
                  description: "Industry recognition achieved",
                  icon: Award,
                  color: "purple",
                },
                {
                  metric: "100%",
                  label: "Success Rate",
                  description: "Startups still operating",
                  icon: Target,
                  color: "orange",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${
                        item.color === "cyan"
                          ? "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                          : item.color === "green"
                            ? "from-green-500/20 to-green-600/20 border border-green-500/30"
                            : item.color === "purple"
                              ? "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                              : "from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <item.icon
                        className={`h-8 w-8 ${
                          item.color === "cyan"
                            ? "text-cyan-400"
                            : item.color === "green"
                              ? "text-green-400"
                              : item.color === "purple"
                                ? "text-purple-400"
                                : "text-orange-400"
                        }`}
                      />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{item.metric}</div>
                    <h4 className="text-lg font-bold text-gray-200 mb-3">{item.label}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our portfolio companies operate across multiple countries, serving diverse markets and creating
                    international impact.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-400">
                    <span>🇮🇳 India</span>
                    <span>🇦🇪 UAE</span>
                    <span>🇺🇸 USA</span>
                    <span>🇸🇬 Singapore</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white">Ready to Join This Portfolio?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Your startup could be our next success story. Let's build something extraordinary together.
            </p>
            <div className="text-3xl font-bold text-white mb-8">🚀 Your Success Story Starts Here</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                    "_blank",
                  )
                }
              >
                Start Your Journey
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                onClick={() => {
                  setSelectedPortfolio(portfolioItems[showCaseStudyIndex])
                  setIsModalOpen(true)
                }}
              >
                View Case Studies
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl py-16 border-t border-white/10 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img src="/images/venturecrafters-latest-logo.png" alt="VentureCrafters Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-lg">Building the future, one startup at a time.</p>
            <div className="flex justify-center space-x-8">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-pink-400 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-cyan-400 font-semibold">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="pt-8 border-t border-white/10 text-gray-500">
              <p>&copy; 2024 VentureCrafters. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {isModalOpen && selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl p-8 border-b border-white/10 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedPortfolio.logo || "/placeholder.svg"}
                      alt={`${selectedPortfolio.name} Logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-white mb-2">{selectedPortfolio.name}</h2>
                    <Badge className={`bg-gradient-to-r ${getColorClasses(selectedPortfolio.color)} border-0`}>
                      {selectedPortfolio.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:bg-white/10 rounded-2xl p-3"
                >
                  <X className="h-8 w-8" />
                </Button>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const currentIndex = portfolioItems.findIndex((item) => item.name === selectedPortfolio.name)
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioItems.length - 1
                      setSelectedPortfolio(portfolioItems[prevIndex])
                      setShowCaseStudyIndex(prevIndex)
                    }}
                    className="text-white hover:bg-white/10 rounded-xl"
                  >
                    ← Previous
                  </Button>
                  <span className="text-gray-400 text-sm">
                    {portfolioItems.findIndex((item) => item.name === selectedPortfolio.name) + 1} of{" "}
                    {portfolioItems.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const currentIndex = portfolioItems.findIndex((item) => item.name === selectedPortfolio.name)
                      const nextIndex = currentIndex < portfolioItems.length - 1 ? currentIndex + 1 : 0
                      setSelectedPortfolio(portfolioItems[nextIndex])
                      setShowCaseStudyIndex(nextIndex)
                    }}
                    className="text-white hover:bg-white/10 rounded-xl"
                  >
                    Next →
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-12">
              {/* Overview */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-3 text-cyan-400" />
                    The Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedPortfolio.caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lightbulb className="h-6 w-6 mr-3 text-purple-400" />
                    Our Solution
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedPortfolio.caseStudy.solution}</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Performance Metrics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedPortfolio.caseStudy.keyMetrics.map((metric, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
                        <h4 className="text-lg font-bold text-gray-200 mb-1">{metric.label}</h4>
                        <p className="text-sm text-gray-400">{metric.period}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Timeline */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Zap className="h-6 w-6 mr-3 text-orange-400" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedPortfolio.caseStudy.techStack.map((tech, index) => (
                        <Badge key={index} className="bg-white/10 text-gray-300 border-white/20 text-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Clock className="h-6 w-6 mr-3 text-green-400" />
                      Project Timeline
                    </h3>
                    <p className="text-xl text-gray-300 font-semibold">{selectedPortfolio.caseStudy.timeline}</p>
                    <p className="text-gray-400 mt-2">From initial concept to successful market launch</p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial */}
              <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20">
                <CardContent className="p-8 text-center">
                  <Quote className="h-12 w-12 text-cyan-400 mx-auto mb-6" />
                  <blockquote className="text-xl text-white leading-relaxed mb-6 italic">
                    "{selectedPortfolio.caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="text-cyan-400 font-bold text-lg">
                    {selectedPortfolio.caseStudy.testimonial.author}
                  </div>
                  <div className="text-gray-400">{selectedPortfolio.caseStudy.testimonial.position}</div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                  <Award className="h-8 w-8 mr-3 text-yellow-400" />
                  Key Achievements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPortfolio.caseStudy.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 bg-white/5 rounded-2xl p-4 border border-white/10"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                      <span className="text-lg">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <ArrowRight className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">What's Next</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{selectedPortfolio.caseStudy.nextSteps}</p>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Your Success Story?</h3>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                      "_blank",
                    )
                    setIsModalOpen(false)
                  }}
                >
                  Start Your Journey
                  <Rocket className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes grid-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(1deg); }
          66% { transform: translate(-20px, 20px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}
