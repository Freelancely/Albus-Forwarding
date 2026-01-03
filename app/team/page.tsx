"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Atul Chandra Paudyal",
      role: "Chief Executive Officer",
      bio: "Mr. Atul leads Albus Forwarding with a vision for excellence in logistics and customer service. With over a decade of experience in the freight forwarding industry, he is dedicated to driving the company's growth and innovation.",
      expertise: ["Sales and marketing"],
      email: "atul.paudyal@albusforwarding.com",
      phone: "9805533902, 9841360085",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Mr. Aashif Khan",
      role: "Sales and Customer Service Executive",
      bio: "Mr. Aashif is responsible for sales and customer service, ensuring client satisfaction and business growth.",
      expertise: ["HR", "Administrative", "Sales & Customer Service Executive"],
      email: "aashif_Khan@albusforwarding.com",
      phone: "9805533903",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Mr. Sumit Manandhar",
      role: "Accountant",
      bio: "Mr. Sumit manages our financial operations, ensuring accuracy and compliance in all accounting processes.",
      expertise: ["Financial Management", "Accounting", "Budget Planning"],
      email: "account@albusforwarding.com",
      phone: "9805533905",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Mr. Mandip Chaudhary",
      role: "Operation Officer",
      bio: "Mr. Mandip ensures seamless logistics operations, coordinating efficiently to meet client needs and operational goals.",
      expertise: ["Logistics Operations", "Process Optimization", "Client Coordination"],
      // email: "mandip.chaudhary@albusforwarding.com",
      phone: "9818396231 / 9801831135",
      image: "/placeholder.svg",
    },
  ]

  // State for slider
  const [currentIndex, setCurrentIndex] = useState(0)

  // Slider navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

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
                Our team combines industry experience with a passion for excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team Slider */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Leadership Team</h2>

            <div className="relative">
              {/* Slider Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                    >
                      <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition card-hover animate-fade-in-up">
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
                              href={`tel:${member.phone.split(" / ")[0]}`}
                              className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition text-sm smooth-transition w-full justify-center"
                            >
                              <Phone size={16} />
                              {member.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots for Slider */}
              <div className="flex justify-center mt-6 space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-primary" : "bg-muted-foreground/50"
                    } hover:bg-primary/70 transition`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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