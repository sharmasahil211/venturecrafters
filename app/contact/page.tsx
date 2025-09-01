"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Header and Mobile Menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex-1">
            <Link href="/" className="group">
              <img
                src="/images/venturecrafters-text-logo.png"
                alt="VentureCrafters"
                className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-light">
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
            <Link href="/contact" className="text-gray-900 font-normal">
              Contact
            </Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-3"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <Button
              className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-none font-light text-sm hidden md:block"
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
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center px-6 pt-16">
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
            <Link
              href="/contact"
              className="text-2xl font-light text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-4 text-gray-900">Get in Touch</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                We're here to help you build the future. Let's connect.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gray-50/50">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-light mb-6 text-gray-900">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">+971 501532986</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">team@venturecrafters.ae</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-gray-900">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-4"
                      action="https://docs.google.com/forms/d/e/1FAIpQLSdFkI2Rwm14GrK-T9M4Qbrn6nu9V03--G7gLIgeQcR-docV3g/formResponse"
                      method="POST"
                      target="_blank"
                    >
                      <Input
                        name="entry.123456789" // Replace with your actual form entry ID
                        placeholder="Your Name"
                        className="bg-white rounded-none border-gray-300"
                        required
                      />
                      <Input
                        name="entry.234567890" // Replace with your actual form entry ID
                        type="email"
                        placeholder="Your Email"
                        className="bg-white rounded-none border-gray-300"
                        required
                      />
                      <Textarea
                        name="entry.345678901" // Replace with your actual form entry ID
                        placeholder="Your Message"
                        className="bg-white rounded-none border-gray-300"
                        rows={5}
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none font-light w-full"
                      >
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 md:px-6 border-t border-gray-100 bg-white">
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
