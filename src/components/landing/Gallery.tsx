"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/luxuryvan4.jpg",
    alt: "Artista Van",
    caption: "Comfortable luxury van for VIPs",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    alt: "Luxury sedan",
    caption: "Elegant sedans for your trips",
  },
  {
    src: "suv.jpg",
    alt: "Modern compact car",
    caption: "Perfect for city exploration",
  },
  {
    src: "/spacious_van.jpg",
    alt: "Spacious van",
    caption: "Spacious vans for group adventures",
  },
  {
    src: "delica.jpg",
    alt: "Adventure vehicle",
    caption: "Rugged vehicles for off-road exploration",
  },
  {
    src: "/4vans.jpg",
    alt: "Premium Vans",
    caption: "Nissan Premium Vans",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="font-medium text-sm tracking-wider uppercase mb-4 block text-[#dc2626]">
            Our Fleet
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Premium Vehicles for Your Journey
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our diverse fleet of well-maintained, modern vehicles. 
            From comfortable SUVs to luxury sedans, we have the perfect car for your Palawan adventure.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl aspect-square ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div
                  className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50"
                aria-label="Close">
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50"
                aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50"
                aria-label="Next">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              {selectedImage !== null && (
                <div className="flex flex-col items-center">
                  <img
                    src={galleryImages[selectedImage].src.replace("w=800", "w=1600")}
                    alt={galleryImages[selectedImage].alt}
                    className="max-h-[80vh] w-auto object-contain" />
                  <p className="text-white/80 text-center py-4">
                    {galleryImages[selectedImage].caption}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
