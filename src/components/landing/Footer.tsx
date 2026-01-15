"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/soycar_log.png" alt="SoyCar Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-background">SoyCar</h3>
                <p className="text-[10px] text-background/60 tracking-wider uppercase">Transport & Rentals</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted family transport partner in Palawan. Making every journey 
              comfortable, safe, and memorable since 2015.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/soycar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/soycar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-background/70 hover:text-primary transition-colors text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-background/70 hover:text-primary transition-colors text-sm"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-background/70 hover:text-primary transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="block text-background/70 hover:text-primary transition-colors text-sm"
              >
                Book Now
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Airport Transfers</li>
              <li>Inland Tours (8 hours)</li>
              <li>Vehicle Rentals</li>
              <li>Private Charters</li>
              <li>Group Transportation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+639123456789"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-background">+63 975 380 3735</p>
                  <p className="text-xs text-background/50">Available 24/7</p>
                </div>
              </a>
              <a
                href="mailto:soycartransportcarrrentals@gmail.com"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-background">soycartransportcarrrentals@gmail.com</p>
                  <p className="text-xs text-background/50">Quick response</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-background">El Nido</p>
                  <p className="text-xs text-background/50">Palawan, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {currentYear} SoyCar Transport & Rentals. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
