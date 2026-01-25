"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/soycar_log.png" alt="SoyCar Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="font-serif text-xl font-semibold text-foreground">SoyCar</h1>
              <p className="text-[10px] text-muted-foreground tracking-wider uppercase">Transport & Car Rentals</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+639753803735"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <a
              href="/hotel/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Hotel Login
            </a>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary hover:bg-primary/90"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 text-foreground font-medium border-b border-border/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left py-2 text-foreground font-medium border-b border-border/50"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 text-foreground font-medium border-b border-border/50"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-foreground font-medium border-b border-border/50"
            >
              Contact
            </button>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="tel:+639753803735"
                className="flex items-center gap-2 text-foreground font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+63 975 380 3735</span>
              </a>
              <a
                href="/hotel/login"
                className="text-center py-2 text-foreground font-medium"
              >
                Hotel Partner
              </a>
              <Button
                onClick={() => scrollToSection("booking")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
