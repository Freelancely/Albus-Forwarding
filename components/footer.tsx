import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Albus Forwarding</h3>
            <p className="text-sm opacity-90">
              Global logistics solutions beyond boundaries. Delivering excellence in freight forwarding since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-accent transition">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#air-freight" className="hover:text-accent transition">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services#ocean-freight" className="hover:text-accent transition">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link href="/services#customs" className="hover:text-accent transition">
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link href="/services#warehousing" className="hover:text-accent transition">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <p>Mid Baneshwor, Kathmandu, Nepal</p>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <p>+977 9841360085</p>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <p>info@albusforwarding.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 flex justify-between items-center">
          <p className="text-sm opacity-75">© 2025 Albus Forwarding Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-accent transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
