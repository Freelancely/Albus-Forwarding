import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Target, Users, Zap } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Reliability",
      description: "Consistent, on-time delivery of your cargo with complete transparency.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined processes and cutting-edge technology for faster logistics.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We treat every client as a long-term partner, not just a transaction.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to highest standards in every aspect of our service.",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "Albus Forwarding established with a vision to revolutionize logistics in Nepal.",
    },
    {
      year: "2017",
      title: "Regional Expansion",
      description: "Expanded operations to South Asia with partnerships in India and Bangladesh.",
    },
    {
      year: "2019",
      title: "Global Network",
      description: "Established connections with major logistics hubs across Europe and Asia.",
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Launched advanced tracking and management systems for real-time visibility.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-down">
                About Albus Forwarding
              </h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-100">
                A decade of excellence in connecting Nepal to the world through reliable, innovative logistics
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-muted p-8 rounded-lg card-hover animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide world-class freight forwarding and logistics solutions that empower businesses to expand
                  globally. We are committed to delivering reliable, cost-effective, and innovative services that
                  transcend geographical boundaries and connect Nepal to international markets.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-primary text-primary-foreground p-8 rounded-lg card-hover animate-slide-in-right">
                <h2 className="text-3xl font-bold mb-4 text-accent">Our Vision</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  To become the most trusted and innovative logistics partner in South Asia, recognized for our
                  commitment to excellence, sustainability, and customer satisfaction. We envision a future where
                  seamless global trade is accessible to businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up animate-delay-100">
                Albus Forwarding was founded in 2015 with a simple yet ambitious goal: to transform the logistics
                landscape in Nepal. What started as a small team of passionate professionals has grown into a
                comprehensive logistics solution provider serving clients across multiple continents.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up animate-delay-200">
                Over the years, we've built a reputation for reliability, innovation, and customer-centric service. Our
                team has invested in cutting-edge technology, developed strategic partnerships with global logistics
                leaders, and continuously adapted to meet the evolving needs of our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-300">
                Today, Albus Forwarding stands as a beacon of excellence in the freight forwarding industry, committed
                to delivering exceptional value and building lasting relationships with every client we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every service we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className={`bg-muted p-8 rounded-lg text-center hover:shadow-md transition card-hover animate-fade-in-up animate-delay-${index * 100}`}
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Our Journey</h2>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex gap-6 animate-fade-in-up animate-delay-${index * 100}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg animate-pulse-glow">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-1 h-16 bg-accent/30 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join hundreds of businesses that trust Albus Forwarding for their logistics needs.
            </p>
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
