"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Map, Car, Clock, Users, Shield } from "lucide-react";

const services = [
  {
    id: "airport-transfer",
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off between Puerto Princesa Airport and El Nido. Comfortable vehicles, professional drivers, and flight tracking included.",
    features: ["Flight tracking", "Meet & greet service", "Luggage assistance"],
    price: "From ₱999",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    popular: true,
  },
  {
    id: "inland-tours",
    icon: Map,
    title: "Inland Tours",
    description: "Discover Palawan's hidden gems with our curated inland tours for 8 hours.",
    features: ["Lio Beach, Nacpan Beach, Vanilla Beach"],
    price: "From ₱3,499",
    image: "/inland_tour.jpg",
    popular: false,
  },
  {
    id: "vehicle-rentals",
    icon: Car,
    title: "Vehicle Rentals",
    description: "Freedom to explore at your own pace. Choose from well-maintained cars and vans with or without a driver. Daily, weekly, and monthly rates available.",
    features: ["Self-drive available", "Full insurance", "GPS navigation"],
    price: "From ₱1,499/day",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    popular: false,
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book anytime, travel anytime. We're always here when you need us.",
  },
  {
    icon: Users,
    title: "Family-Owned",
    description: "Personal service and local expertise from a family that calls Palawan home.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Travel with peace of mind. All vehicles are comprehensively insured.",
  },
];

export function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="font-medium text-sm tracking-wider uppercase mb-4 block text-red-600">
            Our Services
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Explore Palawan
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From the moment you land to your final destination, we've got you covered 
            with reliable, comfortable, and affordable transport solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              {service.popular && (
                <div
                  className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-semibold text-sm text-red-600">{service.price}</span>
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToBooking}
                  className="w-full hover:bg-primary/90 bg-amber-400">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Strip */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#dc2626]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
