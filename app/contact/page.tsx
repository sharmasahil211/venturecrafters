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
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors relative group">
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="text-cyan-400 font-semibold relative">
              Contact
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
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

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-300 border-pink-500/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full">
                <Coffee className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Let's Connect
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">Ready to</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <span className="block text-white">Your Startup?</span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300">
                <p className="leading-relaxed">
                  Let's grab a coffee (virtual or real) and discuss how we can turn your startup dreams into reality.
                </p>
                <p className="text-base md:text-lg text-gray-400">
                  We're here to listen, understand your vision, and craft the perfect execution strategy for your
                  business.
                </p>
              </div>
            </div>

            {/* Quick Stats - Mobile Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "24hrs", label: "Response Time", icon: Clock, color: "cyan" },
                { number: "100+", label: "Startups Helped", icon: Users, color: "purple" },
                { number: "$600K+", label: "Funds Raised", icon: Star, color: "pink" },
                { number: "Global", label: "Reach", icon: Globe, color: "orange" },
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
                          : stat.color === "purple"
                            ? "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                            : stat.color === "pink"
                              ? "from-pink-500/20 to-pink-600/20 border border-pink-500/30"
                              : "from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon
                        className={`h-5 w-5 md:h-6 md:w-6 ${
                          stat.color === "cyan"
                            ? "text-cyan-400"
                            : stat.color === "purple"
                              ? "text-purple-400"
                              : stat.color === "pink"
                                ? "text-pink-400"
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

      {/* Contact Methods Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose your preferred way to connect with us. We're always excited to hear from ambitious founders.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Primary Contact */}
              <Card className="lg:col-span-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Start the Conversation</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Ready to build something extraordinary? Fill out our quick form and we'll get back to you within 24
                    hours with a personalized strategy session.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-4 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Start Your Journey
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Book a Call</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Prefer to talk directly? Schedule a 30-minute discovery call to discuss your startup vision.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white w-full rounded-xl transition-all duration-300"
                  >
                    Schedule Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Direct Contact Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Phone className="h-6 w-6 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl">🇮🇳</div>
                      <div>
                        <p className="text-white font-semibold">+91 95996 91123</p>
                        <p className="text-gray-400 text-sm">India Office</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 9:00 AM - 7:00 PM IST</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Sat: 10:00 AM - 4:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Mail className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <Mail className="h-5 w-5 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">info@venturecrafters.in</p>
                        <p className="text-gray-400 text-sm">General Inquiries</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>24-hour response guarantee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Detailed project discussions</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media & Online Presence */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-8">Connect With Us Online</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    name: "LinkedIn",
                    icon: Linkedin,
                    color: "from-blue-500 to-blue-600",
                    url: "https://linkedin.com/company/venturecrafters",
                    description: "Professional updates & insights",
                  },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    color: "from-pink-500 to-purple-600",
                    url: "https://instagram.com/venturecrafters",
                    description: "Behind the scenes content",
                  },
                  {
                    name: "Twitter",
                    icon: Twitter,
                    color: "from-cyan-400 to-blue-500",
                    url: "https://twitter.com/venturecrafters",
                    description: "Real-time updates & thoughts",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    color: "from-red-500 to-red-600",
                    url: "https://youtu.be/0wrCxUtWM7E",
                    description: "Our story & case studies",
                  },
                ].map((social, index) => (
                  <Card
                    key={index}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${social.color} group-hover:scale-110 transition-transform`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{social.name}</h4>
                      <p className="text-gray-400 text-xs">{social.description}</p>
                      <ExternalLink className="h-4 w-4 text-gray-500 mx-auto mt-2 group-hover:text-white transition-colors" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-6 w-6 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">🇮🇳 India Office</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <p className="font-semibold">Forum, DLF Cyber City</p>
                      <p>DLF Phase 3, Sector 24</p>
                      <p>Gurugram, Haryana 122002</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>IST: Mon-Fri 9AM-7PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">🇦🇪 UAE Office</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <p className="font-semibold">in5 Tech, Dubai Knowledge Park</p>
                      <p>PO Box 73000</p>
                      <p>Dubai, UAE</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>GST: Sun-Thu 9AM-6PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white">What Are You Waiting For?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Every day you wait is a day your competitors get ahead. Let's start building your success story today.
            </p>
            <div className="text-3xl font-bold text-white mb-8">☕ Coffee's on us!</div>

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
                Let's Build Together
                <Rocket className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                Schedule Discovery Call
                <Calendar className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 95996 91123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@venturecrafters.in</span>
              </div>
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
              <Link href="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-cyan-400 font-semibold">
                Contact
              </Link>
            </div>
            <div className="pt-8 border-t border-white/10 text-gray-500">
              <p>&copy; 2024 VentureCrafters. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

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
