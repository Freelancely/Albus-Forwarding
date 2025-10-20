"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Albus Forwarding
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About
            </Link>
            <Link href="/services" className="hover:text-accent transition">
              Services
            </Link>
            <Link href="/team" className="hover:text-accent transition">
              Team
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link href="/" className="block hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="block hover:text-accent transition">
              About
            </Link>
            <Link href="/services" className="block hover:text-accent transition">
              Services
            </Link>
            <Link href="/team" className="block hover:text-accent transition">
              Team
            </Link>
            <Link href="/contact" className="block hover:text-accent transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition text-center"
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
