import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Atul Chandra Paudyal",
      role: "Sales and Marketing Manager",
      bio: "Atul leads our Sales and Marketing Department with extensive experience in freight forwarding and client relationship management. He ensures Albus Forwarding delivers exceptional service and builds lasting partnerships with our valued clients.",
      expertise: ["Sales Strategy", "Client Relations", "Market Development"],
      email: "atul.paudyal@albusforwarding.com",
      phone: "9841360085",
      image: "/professional-man-suit.png",
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
                Meet the dedicated professional behind Albus Forwarding's success
              </p>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experienced Professional</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team combines industry experience with a passion for excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Leadership Team</h2>

            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition card-hover animate-fade-in-up"
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

                    <div className="space-y-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition text-sm smooth-transition w-full justify-center"
                      >
                        <Mail size={16} />
                        {member.email}
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition text-sm smooth-transition w-full justify-center"
                      >
                        <Phone size={16} />
                        {member.phone}
                      </a>
                      {/* <a
                        href="#"
                        className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition text-sm smooth-transition w-full"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a> */}
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
                  desc: "We believe in the power of teamwork. Our team works together seamlessly to solve complex logistics challenges and deliver exceptional results for our clients.",
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