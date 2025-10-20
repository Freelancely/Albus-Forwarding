import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in international logistics, Rajesh founded Albus Forwarding with a vision to revolutionize freight forwarding in Nepal.",
      expertise: ["Strategic Leadership", "International Trade", "Business Development"],
      image: "/professional-man-suit.png",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Operations Director",
      bio: "Priya oversees all operational aspects of the company, ensuring seamless execution of logistics solutions across all service lines.",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance"],
      image: "/professional-businesswoman.png",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Head of Customs & Compliance",
      bio: "Amit brings 12 years of customs expertise, ensuring all shipments meet regulatory requirements across multiple countries.",
      expertise: ["Customs Regulations", "Compliance", "Documentation"],
      image: "/professional-man-in-formal-wear.jpg",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Client Relations Manager",
      bio: "Neha ensures every client receives exceptional service and support, building lasting relationships through dedication and expertise.",
      expertise: ["Client Management", "Account Services", "Problem Solving"],
      image: "/professional-woman-smiling.png",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Technology & Systems Lead",
      bio: "Vikram leads our technology initiatives, implementing cutting-edge systems for tracking, management, and customer visibility.",
      expertise: ["IT Infrastructure", "System Integration", "Data Analytics"],
      image: "/professional-man-with-tech-background.jpg",
    },
    {
      id: 6,
      name: "Anjali Verma",
      role: "Finance Manager",
      bio: "Anjali manages all financial operations, ensuring transparency and efficiency in our business processes.",
      expertise: ["Financial Management", "Accounting", "Budget Planning"],
      image: "/professional-woman-office.png",
    },
  ]

  const departments = [
    {
      name: "Operations",
      description: "Manages day-to-day logistics operations and ensures timely delivery of all shipments.",
      members: 8,
    },
    {
      name: "Customs & Compliance",
      description: "Handles all regulatory requirements and customs documentation across borders.",
      members: 5,
    },
    {
      name: "Client Services",
      description: "Provides 24/7 support and maintains strong client relationships.",
      members: 6,
    },
    {
      name: "Technology",
      description: "Develops and maintains systems for tracking and management.",
      members: 4,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="hero-section text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-down">Our Team</h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-100">
                Meet the dedicated professionals behind Albus Forwarding's success
              </p>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experienced Professionals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team combines decades of industry experience with a passion for excellence and customer
                satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className={`bg-muted p-6 rounded-lg border border-border card-hover animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-accent">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <p className="text-2xl font-bold">{dept.members} Members</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Leadership Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition card-hover animate-fade-in-up animate-delay-${(index % 3) * 100}`}
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase">Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition text-sm smooth-transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition text-sm smooth-transition"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up">Our Culture</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Collaboration",
                  desc: "We believe in the power of teamwork. Our diverse team works together seamlessly to solve complex logistics challenges and deliver exceptional results for our clients.",
                },
                {
                  title: "Innovation",
                  desc: "We continuously invest in technology and process improvements to stay ahead of industry trends and provide cutting-edge solutions to our clients.",
                },
                {
                  title: "Integrity",
                  desc: "Honesty and transparency are at the core of everything we do. We build trust with our clients and partners through ethical business practices and reliable service.",
                },
                {
                  title: "Excellence",
                  desc: "We are committed to delivering the highest quality service in every interaction. Our team takes pride in exceeding expectations and setting industry standards.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-muted p-8 rounded-lg card-hover animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-accent">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-lg opacity-90 mb-8">
              We're always looking for talented professionals who share our passion for excellence in logistics.
            </p>
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
            >
              View Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
