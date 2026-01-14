"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920&q=80"
          alt="Palawan coastal road at golden hour"
          className="w-full h-full object-cover" />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-[0px]">
            <span className="w-2 h-2 rounded-full animate-pulse bg-red-600" />
            <span className="text-white/90 text-sm font-medium">
              Since 2015 • El Nido & Puerto Princesa
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey Through
            <span className="block mt-2 text-amber-400">Paradise Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Trusted airport transfers, breathtaking island tours, and reliable vehicle 
            rentals across Palawan. Travel with the family that knows these roads by heart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="w-full sm:w-auto hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 bg-amber-400">
              Book Your Ride
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg backdrop-blur-sm">
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-sm">Happy Travelers</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">5★</span>
              <span className="text-sm">Google Rating</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-sm">Support Available</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to services">
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
