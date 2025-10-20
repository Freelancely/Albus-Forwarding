import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Plane, Ship, FileCheck, Package, Truck, Globe, CheckCircle, Clock, DollarSign, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "air-freight",
      icon: Plane,
      title: "Air Freight",
      shortDesc: "Fast and reliable air cargo services",
      fullDesc:
        "Our air freight services are designed for time-sensitive shipments that require speed and reliability. We partner with major airlines and have access to competitive rates and priority handling.",
      benefits: [
        "Express delivery worldwide",
        "Real-time tracking",
        "Customs clearance included",
        "Door-to-door service",
        "Competitive rates",
        "24/7 customer support",
      ],
      features: [
        { icon: Clock, text: "2-5 days delivery" },
        { icon: DollarSign, text: "Competitive pricing" },
        { icon: Shield, text: "Full insurance" },
        { icon: CheckCircle, text: "Guaranteed delivery" },
      ],
    },
    {
      id: "ocean-freight",
      icon: Ship,
      title: "Ocean Freight",
      shortDesc: "Cost-effective sea freight solutions",
      fullDesc:
        "Perfect for large volume shipments, our ocean freight services offer the most economical solution for international shipping. We handle both FCL (Full Container Load) and LCL (Less than Container Load) shipments.",
      benefits: [
        "FCL and LCL options",
        "Global port coverage",
        "Flexible scheduling",
        "Consolidated shipments",
        "Competitive rates",
        "Professional documentation",
      ],
      features: [
        { icon: Clock, text: "15-45 days delivery" },
        { icon: DollarSign, text: "Best rates" },
        { icon: Shield, text: "Full coverage" },
        { icon: CheckCircle, text: "Reliable service" },
      ],
    },
    {
      id: "customs",
      icon: FileCheck,
      title: "Customs Clearance",
      shortDesc: "Expert customs documentation",
      fullDesc:
        "Navigate complex customs regulations with our expert team. We handle all documentation, declarations, and clearance procedures to ensure smooth border crossings.",
      benefits: [
        "Expert documentation",
        "Regulatory compliance",
        "Fast clearance",
        "Duty optimization",
        "Multi-country expertise",
        "Hassle-free process",
      ],
      features: [
        { icon: CheckCircle, text: "100% compliance" },
        { icon: Clock, text: "Quick processing" },
        { icon: DollarSign, text: "Duty optimization" },
        { icon: Shield, text: "Legal protection" },
      ],
    },
    {
      id: "warehousing",
      icon: Package,
      title: "Warehousing",
      shortDesc: "Secure storage and inventory management",
      fullDesc:
        "Our state-of-the-art warehousing facilities provide secure storage with advanced inventory management systems. Perfect for businesses needing flexible storage solutions.",
      benefits: [
        "Climate-controlled storage",
        "24/7 security",
        "Inventory management",
        "Pick and pack services",
        "Flexible terms",
        "Real-time visibility",
      ],
      features: [
        { icon: Shield, text: "Secure facilities" },
        { icon: Clock, text: "24/7 access" },
        { icon: CheckCircle, text: "Inventory tracking" },
        { icon: DollarSign, text: "Flexible pricing" },
      ],
    },
    {
      id: "trucking",
      icon: Truck,
      title: "Cross Border Trucking",
      shortDesc: "Efficient road transport across borders",
      fullDesc:
        "Our cross-border trucking services connect Nepal with neighboring countries. We maintain a modern fleet and experienced drivers for safe and timely deliveries.",
      benefits: [
        "Modern fleet",
        "Experienced drivers",
        "Border expertise",
        "Flexible scheduling",
        "Competitive rates",
        "Real-time tracking",
      ],
      features: [
        { icon: Clock, text: "Scheduled delivery" },
        { icon: DollarSign, text: "Competitive rates" },
        { icon: Shield, text: "Insured cargo" },
        { icon: CheckCircle, text: "Professional service" },
      ],
    },
    {
      id: "project",
      icon: Globe,
      title: "Project Shipments",
      shortDesc: "Specialized handling for complex cargo",
      fullDesc:
        "For oversized, heavy, or specialized cargo, our project shipment team provides customized solutions. We handle everything from planning to final delivery.",
      benefits: [
        "Custom solutions",
        "Heavy lift capability",
        "Route planning",
        "Specialized equipment",
        "Expert coordination",
        "On-time delivery",
      ],
      features: [
        { icon: CheckCircle, text: "Custom handling" },
        { icon: Clock, text: "Flexible timeline" },
        { icon: Shield, text: "Full protection" },
        { icon: DollarSign, text: "Transparent pricing" },
      ],
    },
  ]

  const whyChoose = [
    {
      title: "Global Network",
      description: "Access to logistics partners in 50+ countries worldwide",
    },
    {
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge",
    },
    {
      title: "Technology",
      description: "Advanced tracking and management systems",
    },
    {
      title: "Reliability",
      description: "Consistent on-time delivery performance",
    },
    {
      title: "Competitive Pricing",
      description: "Best rates without compromising quality",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service and assistance",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-down">Our Services</h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-100">
                Comprehensive logistics solutions tailored to meet your unique business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className={`bg-muted p-8 rounded-lg hover:shadow-lg transition border border-border card-hover animate-fade-in-up animate-delay-${(index % 3) * 100}`}
                  >
                    <Icon className="w-12 h-12 text-accent mb-4 animate-float" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.shortDesc}</p>
                    <a
                      href={`#${service.id}`}
                      className="text-accent font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Learn more →
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        {services.map((service, index) => {
          const Icon = service.icon
          const isEven = index % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 md:py-24 ${isEven ? "bg-muted" : "bg-background"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div
                    className={`${isEven ? "order-1" : "order-2"} ${isEven ? "animate-slide-in-left" : "animate-slide-in-right"}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className="w-16 h-16 text-accent flex-shrink-0 animate-float" />
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.fullDesc}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="/contact"
                      className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
                    >
                      Get Quote
                    </a>
                  </div>

                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => {
                        const FeatureIcon = feature.icon
                        return (
                          <div
                            key={i}
                            className={`bg-background p-6 rounded-lg border border-border text-center card-hover animate-scale-in animate-delay-${i * 100}`}
                          >
                            <FeatureIcon className="w-8 h-8 text-accent mx-auto mb-3 animate-float" />
                            <p className="text-sm font-semibold text-foreground">{feature.text}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Albus Forwarding</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver more than logistics—we deliver peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className={`bg-background p-8 rounded-lg border border-border card-hover animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact our team to discuss your specific logistics requirements and get a personalized quote.
            </p>
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
