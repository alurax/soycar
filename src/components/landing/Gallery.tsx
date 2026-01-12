"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80",
    alt: "El Nido limestone cliffs",
    caption: "El Nido's iconic limestone cliffs",
  },
  {
    src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    alt: "Scenic coastal road in Palawan",
    caption: "Scenic drives along Palawan's coast",
  },
  {
    src: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=80",
    alt: "Crystal clear waters of Palawan",
    caption: "Crystal clear waters await",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "White sand beach in Palawan",
    caption: "Pristine white sand beaches",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Sunset view from Palawan",
    caption: "Unforgettable Palawan sunsets",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Mountain and lake view",
    caption: "Explore beyond the beach",
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
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Discover Paradise
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Get a glimpse of the breathtaking destinations awaiting you in Palawan. 
            These are the views you'll experience with SoyCar.
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
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              {selectedImage !== null && (
                <div className="flex flex-col items-center">
                  <img
                    src={galleryImages[selectedImage].src.replace("w=800", "w=1600")}
                    alt={galleryImages[selectedImage].alt}
                    className="max-h-[80vh] w-auto object-contain"
                  />
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
