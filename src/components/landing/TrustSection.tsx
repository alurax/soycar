"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah & Mike",
    location: "Sydney, Australia",
    rating: 5,
    text: "Our airport transfer was flawless! The driver tracked our flight and was waiting when we arrived. Made our Palawan trip stress-free from the start.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Rented a van for 3 days to explore El Nido at our own pace. Clean vehicle, great condition, and the team was so helpful with route suggestions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Emma & James",
    location: "London, UK",
    rating: 5,
    text: "The inland tour was incredible! Our guide knew all the hidden spots. Definitely book Tour A if you want to see the Underground River.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

const credentials = [
  {
    title: "LTO Accredited",
    description: "Fully licensed transport operator",
  },
  {
    title: "DOT Registered",
    description: "Department of Tourism certified",
  },
  {
    title: "Comprehensive Insurance",
    description: "All passengers covered",
  },
  {
    title: "Local Expertise",
    description: "8+ years in Palawan tourism",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="font-medium text-sm tracking-wider uppercase mb-4 block text-[#dc2626]">
            Why Choose Us
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join hundreds of happy travelers who've experienced the SoyCar difference. 
            Family service, professional standards.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Review Badge */}
        <div className="flex justify-center mb-16">
          <div
            className="inline-flex items-center gap-4 bg-secondary/50 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm">
              <span className="font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground"> rating on </span>
              <span className="font-semibold text-foreground">Google</span>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </div>
          ))}
        </div>

        {/* About Blurb */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="/team.jpg"
                  alt="SoyCar Family Team"
                  className="w-48 h-48 md:w-full md:h-auto rounded-xl object-cover" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Meet the Family Behind SoyCar
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a single van helping friends get to the airport has grown into 
                  Palawan's most trusted family transport service. We're locals who know every 
                  backroad, secret beach, and the best lechon spots along the way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you book with SoyCar, you're not just a customer — you're family. 
                  We'll make sure your Palawan adventure is as magical as the islands themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
