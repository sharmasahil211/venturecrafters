"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Rocket,
  Zap,
  Brain,
  Menu,
  X,
  ArrowRight,
  Calendar,
  MessageCircle,
  CheckCircle,
  Briefcase,
  Target,
  Wrench,
  Star,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ahmed Al-Falahi",
    company: "NomadCart, Dubai, UAE",
    quote:
      "VentureCrafters isn't just an accelerator; it's the operational backbone we needed. The execution support saved us months of guesswork.",
  },
  {
    name: "Fatima Al-Mansoori",
    company: "FinTech Arabia, Riyadh, KSA",
    quote:
      "The high-signal mentorship is unparalleled. We got direct, actionable advice that immediately impacted our GTM strategy in Saudi Arabia.",
  },
  {
    name: "Yousef Al-Kuwari",
    company: "Qatar Logistics AI, Doha, Qatar",
    quote:
      "The curated freelancer pool is a game-changer. We found a brilliant UI/UX designer who understood the startup hustle from day one.",
  },
  {
    name: "Noora Al-Hashemi",
    company: "Edutech MENA, Abu Dhabi, UAE",
    quote:
      "The Crafters Vault is a goldmine. The templates for investor outreach were instrumental in our pre-seed round.",
  },
  {
    name: "Khalid bin Salman",
    company: "AgriTech Solutions, Jeddah, KSA",
    quote:
      "Moving from idea to MVP felt seamless with the Founder's Dashboard. It kept our small team aligned and focused on what truly matters.",
  },
  {
    name: "Mariam Al-Bader",
    company: "EcoWares, Kuwait City, Kuwait",
    quote:
      "The community is the real deal. It's a high-trust environment where founders genuinely help each other navigate the challenges of the GCC market.",
  },
  {
    name: "Sultan Al-Otaibi",
    company: "CyberSec KSA, Dammam, KSA",
    quote:
      "The investor access is not just a promise. When we were ready, the introductions were warm, relevant, and led to meaningful conversations.",
  },
  {
    name: "Dana Al-Khalifa",
    company: "Manama Health, Manama, Bahrain",
    quote:
      "The monthly execution support helped us refine our pricing model. It was like having a part-time COO without the hefty price tag.",
  },
  {
    name: "Omar Al-Said",
    company: "Muscat Innovations, Muscat, Oman",
    quote:
      "VentureCrafters understands the nuances of building in the Gulf. Their guidance is practical, not theoretical, which is exactly what early-stage founders need.",
  },
  {
    name: "Layla Al-Jaber",
    company: "Riyadh Retail Tech, Riyadh, KSA",
    quote:
      "The weekly Founder Clinics are incredibly valuable. We've applied learnings on branding and digital marketing that have shown immediate results.",
  },
  {
    name: "Abdullah Al-Mulla",
    company: "Dubai PropTech, Dubai, UAE",
    quote:
      "Pivot Hire saved us countless hours in hiring. Finding talent that fits our culture was our biggest challenge, and VentureCrafters solved it.",
  },
  {
    name: "Hessa Al-Ghanim",
    company: "Doha Creative Hub, Doha, Qatar",
    quote:
      "Being part of this ecosystem feels like a competitive advantage. The resources, network, and support system are exactly what we needed to scale.",
  },
]

export default function EcosystemAccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toolStack = {
    HIRING: [
      { name: "Pivot Hire", description: "AI-based talent curation + auto job posting" },
      { name: "Templates", description: "One-click JD templates and vetted candidate pipelines" },
    ],
    "LEARNING & GROWTH": [
      { name: "Crafters Vault", description: "100+ Notion templates, investor outreach kits, GTM playbooks" },
      { name: "Founder Clinics", description: "Weekly deep dives on GTM, fundraising, branding, etc." },
    ],
    "OPERATIONS & MANAGEMENT": [
      { name: "Datarooms", description: "Investor-ready docs, pitch deck hosting, KPIs — all in one secure place" },
      { name: "Founder's Dashboard", description: "A Notion-based command center to track goals, team, metrics" },
    ],
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <style jsx global>{`
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 80s linear infinite;
      }
      .group:hover .animate-marquee {
        animation-play-state: paused;
      }
    `}</style>
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
                className="text-2xl font-medium text-gray-900 hover:text-gray-900"
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
                <div className="w-32"></div> {/* Spacer */}
                <div className="flex space-x-8 text-sm font-light">
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/ecosystem-access" className="text-gray-900 font-medium">
                    Ecosystem Access
                  </Link>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900">
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
              VentureCrafters Ecosystem Access
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-tight tracking-tight text-gray-900">
              Your All-in-One Founder's Toolkit
              <br />
              <span className="text-gray-500">Backed by Executioners, Not Theorists</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Welcome to the Crafters Ecosystem — a curated founder-first network designed to fuel your startup journey
              with precision, speed, and real-world execution.
            </p>
            <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto font-light">
              This is not a course. Not a Slack group. This is your high-leverage operating system for building and
              scaling early-stage startups.
            </p>
          </div>
        </section>

        {/* Who is it for? */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-8">
              <Target className="inline-block h-8 w-8 mr-3 mb-1 text-gray-400" strokeWidth={1} />
              Who Is It For?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="border-0 shadow-none bg-gray-50">
                <CardContent className="p-6">
                  <p className="font-light text-gray-600">
                    Founders in the <span className="font-medium text-gray-800">idea to pre-seed stage</span>.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none bg-gray-50">
                <CardContent className="p-6">
                  <p className="font-light text-gray-600">
                    <span className="font-medium text-gray-800">Solo or early teams</span> validating MVPs, finding PMF,
                    or building traction.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none bg-gray-50">
                <CardContent className="p-6">
                  <p className="font-light text-gray-600">
                    <span className="font-medium text-gray-800">Builders</span> who want a community + toolkit + expert
                    network without fluff.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-lg text-gray-700 italic">
              If you're tired of pitch decks and webinars with no ROI — you're in the right place.
            </p>
          </div>
        </section>

        {/* What You Get Section */}
        <section id="what-you-get" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">💡 What You Get</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
                We’ve bundled everything a founder needs into one powerful access pass.
              </p>
            </div>

            <div className="space-y-16">
              {/* Founder Tools */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light text-gray-900 flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-gray-400" strokeWidth={1.5} />
                    1. $2,000+ Worth of Founder Tools — Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 font-light">
                    We’ve handpicked real-world tools across hiring, learning, and management to save you time, effort,
                    and 💰.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(toolStack).map(([category, tools]) => (
                      <div key={category} className="bg-gray-50 p-4 rounded-none">
                        <h4 className="font-medium text-gray-700 mb-3 text-sm tracking-wider uppercase">{category}</h4>
                        <ul className="space-y-2">
                          {tools.map((tool) => (
                            <li key={tool.name}>
                              <p className="font-medium text-gray-800 text-sm">{tool.name}</p>
                              <p className="text-gray-500 text-xs font-light">{tool.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-6 text-gray-500 font-medium">
                    Total tool value: $2,000+ — included with your access.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Execution Support */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light text-gray-900 flex items-center">
                      <Wrench className="h-6 w-6 mr-3 text-gray-400" strokeWidth={1.5} />
                      2. Monthly Execution Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-light mb-4">
                      We don’t just advise. We do. Get hands-on support from our curated pool of 'Executioners' — a
                      unique blend of ex-founders and domain experts.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-none mb-4">
                      <p className="font-medium text-gray-800 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />4 hours/month of Execution Support
                        included
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 font-light">
                      Example use-cases: Structuring a hiring plan, pricing your SaaS, setting up a CRM campaign. Get it
                      done with an Executioner.
                    </p>
                  </CardContent>
                </Card>

                {/* Mentor Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light text-gray-900 flex items-center">
                      <Brain className="h-6 w-6 mr-3 text-gray-400" strokeWidth={1.5} />
                      3. Strategic Mentor Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-light mb-4">
                      Your access includes time with curated mentors covering fundraising prep, product roadmapping,
                      team building, and founder wellbeing.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-none mb-4">
                      <p className="font-medium text-gray-800 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />5 hours/month of Mentorship included
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 font-light">
                      These are battle-tested builders and specialists with scars, stories, and strategy.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Freelancer Pool */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-gray-400" strokeWidth={1.5} />
                      4. Startup Freelancers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-light text-sm">
                      Connect with mindset-aligned freelancers for UI/UX, web dev, content, branding, CRM, and more.
                      We’ve done the vetting, you just plug and play.
                    </p>
                  </CardContent>
                </Card>

                {/* Community */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-gray-400" strokeWidth={1.5} />
                      5. High-Signal Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-light text-sm">
                      A high-trust, no-fluff tribe of doers. Founder WhatsApp group, mock demo days, real-time feedback
                      loops, and exclusive events.
                    </p>
                  </CardContent>
                </Card>

                {/* Investor Access */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900 flex items-center">
                      <Rocket className="h-5 w-5 mr-2 text-gray-400" strokeWidth={1.5} />
                      6. Investor Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-light text-sm">
                      When you're ready to raise, get warm intros, deck reviews, and data room prep.{" "}
                      <span className="font-medium text-gray-800">
                        Note: We only refer when the story, product, and traction align.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Access to Events */}
              <div className="flex justify-center">
                <div className="w-full md:w-1/2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-light text-gray-900 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-gray-400" strokeWidth={1.5} />
                        7. Exclusive Events Access
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 font-light text-sm">
                        Access to curated founder meets, mentor sessions, investor AMAs, and VC partner discussions.
                        Network with the right people at the right time.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">💰 Pricing</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
                Simple, transparent pricing for comprehensive ecosystem access
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="border-0 shadow-xl max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-5xl font-extralight text-gray-900 mb-2">
                      1,000 <span className="text-2xl text-gray-500">AED</span>
                    </div>
                    <p className="text-gray-600 font-light">per month</p>
                  </div>

                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">$2,000+ worth of founder tools</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">4 hours/month execution support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">5 hours/month strategic mentorship</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">Access to vetted freelancer pool</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">High-signal founder community</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">Investor access & warm intros</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 font-light">Exclusive events & networking</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-none font-light text-base"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Apply for Access
                  </Button>

                  <p className="text-sm text-gray-500 font-light mt-4">
                    No setup fees • Cancel anytime • 30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Insights Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">📊 Community Insights</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
                Real data from our thriving founder ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-extralight text-gray-900 mb-2">73%</div>
                  <p className="text-gray-600 font-light text-sm">
                    Of founders secured their first paying customer within 90 days of joining
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-extralight text-gray-900 mb-2">$2.4M</div>
                  <p className="text-gray-600 font-light text-sm">Total fundraise by community members in first year</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-extralight text-gray-900 mb-2">100+</div>
                  <p className="text-gray-600 font-light text-sm">Active startups across GCC, USA, Europe and Asia</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-extralight text-gray-900 mb-2">92%</div>
                  <p className="text-gray-600 font-light text-sm">
                    Founder retention rate - they stay because it works
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">Know about community in detail</h2>
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-none font-light text-base"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1bUBxYgkvvDwPOk3tYe3nLbGDNjXCe3Ox?usp=sharing",
                  "_blank",
                )
              }
            >
              <FileText className="mr-3 h-5 w-5" strokeWidth={1.5} />
              View Community PDF
            </Button>
          </div>
        </section>

        {/* How to Get In Section */}
        <section id="how-to-join" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extralight text-gray-900">🛣️ How to Get In</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
                We keep the ecosystem tight, intentional, and high-signal. There are two ways in:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-light text-gray-900 mb-3">Book a Discovery Call</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Schedule a call with our team to assess fit. If you're a builder ready to execute, you're welcome.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-gray-300 hover:bg-gray-100 bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Schedule Your Call
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-light text-gray-900 mb-3">Get a Referral</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Get referred by a founder already inside the Crafters Ecosystem for a fast-tracked review.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-gray-300 hover:bg-gray-100 bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/viewform?usp=dialog",
                        "_blank",
                      )
                    }
                  >
                    Apply with Referral Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Our Founders Say Section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 text-center mb-12">
              What Our GCC Founders Say
            </h2>
            <div className="relative group">
              <div className="flex animate-marquee">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 md:w-96 mx-4 border-0 shadow-lg bg-gray-50">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 font-light italic mb-4">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-auto">
                        <p className="font-medium text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-white to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4">
              🔗 Ready to Plug Into the Tribe?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
              Stop building alone. Start building with a dedicated ecosystem behind you.
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
              Apply for Ecosystem Access <ArrowRight className="ml-3 h-5 w-5" strokeWidth={1.5} />
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
                <Link href="/ecosystem-access" className="text-gray-900 font-medium">
                  Ecosystem Access
                </Link>
                <Link href="/services" className="text-gray-500 hover:text-gray-900 font-light">
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
    </>
  )
}
