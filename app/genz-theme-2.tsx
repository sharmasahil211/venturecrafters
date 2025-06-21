"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GenZTheme2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white overflow-x-hidden relative">
      {/* Retro Grid */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 2px, transparent 2px)
          `,
            backgroundSize: "80px 80px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        ></div>
      </div>

      {/* Glitch Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-80 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-yellow-500 opacity-80 animate-pulse"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/">
          <div className="relative group">
            <img
              src="/images/venturecrafters-new-logo.png"
              alt="VentureCrafters Logo"
              className="h-12 w-auto transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-pink-500 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded"></div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-xl border-2 border-pink-500 rounded-none px-8 py-4 shadow-lg shadow-pink-500/50"
        style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
      >
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-mono font-bold uppercase tracking-wider">
            <Link
              href="/about"
              className="text-pink-400 hover:text-cyan-400 transition-colors duration-300 hover:animate-pulse"
            >
              &gt; ABOUT_
            </Link>
            <a
              href="#services"
              className="text-pink-400 hover:text-cyan-400 transition-colors duration-300 hover:animate-pulse"
            >
              &gt; SERVICES_
            </a>
            <a
              href="#portfolio"
              className="text-pink-400 hover:text-cyan-400 transition-colors duration-300 hover:animate-pulse"
            >
              &gt; PORTFOLIO_
            </a>
            <a
              href="#contact"
              className="text-pink-400 hover:text-cyan-400 transition-colors duration-300 hover:animate-pulse"
            >
              &gt; CONTACT_
            </a>
          </div>
          <Button
            className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-cyan-500 hover:to-pink-500 border-0 font-mono font-bold text-black shadow-lg shadow-pink-500/30 hover:shadow-cyan-500/30 transition-all duration-300"
            style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
          >
            EXECUTE.EXE
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <Badge className="bg-black/50 text-pink-400 border-2 border-pink-500 text-lg px-6 py-3 font-mono uppercase tracking-wider animate-pulse">
              [SYSTEM_ONLINE] STARTUP_ACCELERATOR.EXE
            </Badge>

            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-black font-mono leading-none">
                <span className="block text-pink-400 glitch" data-text="ERROR_404:">
                  ERROR_404:
                </span>
                <span className="block text-cyan-400 mt-4 glitch" data-text="BORING_FOUND">
                  BORING_FOUND
                </span>
                <span className="block text-yellow-400 mt-4 glitch" data-text="LOADING_EPIC...">
                  LOADING_EPIC...
                </span>
              </h1>

              {/* Terminal Cursor */}
              <div className="inline-block w-4 h-12 bg-pink-400 animate-pulse ml-4"></div>
            </div>

            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <p>&gt; INITIALIZING_STARTUP_PROTOCOL...</p>
              <p>&gt; LOADING_UNICORN_STATUS... [████████████] 100%</p>
              <p>&gt; READY_TO_DISRUPT_EVERYTHING.EXE</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-xl px-12 py-8 font-mono font-bold shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-105"
                style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
              >
                RUN_STARTUP.EXE
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-xl px-12 py-8 font-mono font-bold transition-all duration-300 hover:scale-105"
                style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
              >
                VIEW_DEMO.BAT
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Terminal Windows */}
        <div className="absolute top-20 left-10 bg-black/80 border-2 border-green-400 p-4 rounded-lg font-mono text-sm animate-pulse">
          <div className="text-green-400">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p>&gt; npm run build-unicorn</p>
            <p>&gt; Success: 12 MVPs deployed</p>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 bg-black/80 border-2 border-pink-400 p-4 rounded-lg font-mono text-sm animate-bounce">
          <div className="text-pink-400">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p>&gt; funding_raised: $600K+</p>
            <p>&gt; status: LEGENDARY</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 2s infinite;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.5s infinite;
          color: #ff0080;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 0.5s infinite;
          color: #00ffff;
          z-index: -2;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(-2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, -2px); }
        }
      `}</style>
    </div>
  )
}
