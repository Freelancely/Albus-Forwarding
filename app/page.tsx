import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Plane, Ship, FileCheck, Package, Truck, Globe } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large volume shipments.",
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert customs documentation and clearance services.",
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage and inventory management solutions.",
    },
    {
      icon: Truck,
      title: "Cross Border Trucking",
      description: "Efficient road transport across borders and regions.",
    },
    {
      icon: Globe,
      title: "Project Shipments",
      description: "Specialized handling for large and complex project cargo.",
    },
  ]

  const strengths = [
    {
      number: "10+",
      label: "Years of Experience",
      description: "Decade of expertise in freight forwarding",
    },
    {
      number: "50+",
      label: "Global Network",
      description: "Connections across continents",
    },
    {
      number: "100%",
      label: "Reliability",
      description: "Committed to timely delivery",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="hero-section text-primary-foreground py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-down">
                Delivering Global Logistics Solutions Beyond Boundaries
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-100">
                Professional freight forwarding and logistics services connecting Nepal to the world with reliability,
                expertise, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
                <Link
                  href="/contact"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition smooth-transition"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition smooth-transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive logistics solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className={`bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition border border-border card-hover animate-fade-in-up animate-delay-${(index % 3) * 100}`}
                  >
                    <Icon className="w-12 h-12 text-accent mb-4 animate-float" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Link href="/services" className="text-accent font-semibold mt-4 inline-block hover:underline">
                      Learn more →
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Albus Forwarding</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine flexibility, compatibility, and deep industry expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className={`text-center p-8 bg-muted rounded-lg card-hover animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-pulse-glow">
                    {strength.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{strength.label}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today for a customized logistics solution that fits your needs.
            </p>
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 