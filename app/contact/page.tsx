"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Mid Baneshwor", "Kathmandu, Nepal"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977 9841360085", "+977 1-4123456"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@albusforwarding.com", "support@albusforwarding.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-down">Get in Touch</h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-100">
                Have questions about our services? We'd love to hear from you. Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className={`bg-muted p-8 rounded-lg border border-border text-center card-hover animate-fade-in-up animate-delay-${index * 100}`}
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-background p-8 rounded-lg border border-border animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in-up">
                    <p className="text-green-800 font-semibold">Thank you for your message!</p>
                    <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in-up">
                    <p className="text-red-800 font-semibold">Error</p>
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                        placeholder="+977 9841360085"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="air-freight">Air Freight Inquiry</option>
                      <option value="ocean-freight">Ocean Freight Inquiry</option>
                      <option value="customs">Customs Clearance</option>
                      <option value="warehousing">Warehousing Services</option>
                      <option value="trucking">Cross Border Trucking</option>
                      <option value="project">Project Shipment</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none disabled:opacity-50"
                      placeholder="Tell us about your logistics needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-full min-h-96 animate-slide-in-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5789456789!2d85.3456789!3d27.7172222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sNew%20Baneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to get a quote?",
                  a: "We typically provide quotes within 24 hours of receiving your inquiry. For complex shipments, it may take up to 48 hours.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept bank transfers, credit cards, and other payment methods. Contact us for specific details about your preferred payment option.",
                },
                {
                  q: "Do you provide insurance for shipments?",
                  a: "Yes, we offer comprehensive insurance coverage for all shipments. Insurance costs vary based on cargo value and type.",
                },
                {
                  q: "Can you handle urgent shipments?",
                  a: "We specialize in time-sensitive shipments and can arrange expedited services for urgent cargo.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`bg-muted p-6 rounded-lg border border-border card-hover animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <h3 className="text-lg font-semibold mb-3 text-accent">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
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
              Contact us today and let our team help you find the perfect logistics solution for your business.
            </p>
            <a
              href="#"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block smooth-transition"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
