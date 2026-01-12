"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2, Phone, Mail, MapPin, Clock } from "lucide-react";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupLocation: string;
  dropoffLocation: string;
  travelDate: string;
  travelTime: string;
  passengers: string;
  flightNumber?: string;
  specialRequests?: string;
}

const serviceOptions = [
  { value: "airport-pps-elnido", label: "Airport Transfer: PPS → El Nido" },
  { value: "airport-elnido-pps", label: "Airport Transfer: El Nido → PPS" },
  { value: "airport-roundtrip", label: "Airport Transfer: Round Trip" },
  { value: "tour-a", label: "Inland Tour A (Underground River)" },
  { value: "tour-b", label: "Inland Tour B (Honda Bay)" },
  { value: "tour-c", label: "Inland Tour C (City Tour)" },
  { value: "tour-d", label: "Inland Tour D (Firefly Watching)" },
  { value: "rental-car", label: "Vehicle Rental: Car (Self-drive)" },
  { value: "rental-van", label: "Vehicle Rental: Van (With driver)" },
  { value: "custom", label: "Custom Trip / Other" },
];

const passengerOptions = [
  { value: "1", label: "1 passenger" },
  { value: "2", label: "2 passengers" },
  { value: "3", label: "3 passengers" },
  { value: "4", label: "4 passengers" },
  { value: "5", label: "5 passengers" },
  { value: "6", label: "6 passengers" },
  { value: "7+", label: "7+ passengers (Van)" },
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Booking submitted:", { ...data, serviceType: selectedService });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      setSelectedService("");
    }, 5000);
  };

  const isAirportTransfer = selectedService.includes("airport");

  if (isSuccess) {
    return (
      <section id="booking" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Booking Request Received!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for choosing SoyCar! We've received your booking request and 
                will contact you within 2 hours to confirm details and pricing.
              </p>
              <p className="text-sm text-muted-foreground">
                For urgent inquiries, call us at{" "}
                <a href="tel:+639123456789" className="text-primary font-semibold">
                  +63 912 345 6789
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Book Your Ride
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Explore Palawan?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fill out the form below and we'll get back to you within 2 hours with 
            a confirmed quote. No payment required until pickup.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">Booking Details</CardTitle>
                <CardDescription>
                  All fields marked with * are required
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                      Personal Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name", { required: "Name is required" })}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-destructive text-xs">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-destructive text-xs">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp *</Label>
                      <Input
                        id="phone"
                        placeholder="+63 912 345 6789"
                        {...register("phone", { required: "Phone number is required" })}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs">{errors.phone.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        We'll send booking confirmation via WhatsApp
                      </p>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                      Trip Details
                    </h4>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className={!selectedService ? "text-muted-foreground" : ""}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation">Pickup Location *</Label>
                        <Input
                          id="pickupLocation"
                          placeholder="e.g., PPS Airport, Hotel name"
                          {...register("pickupLocation", { required: "Pickup location is required" })}
                          className={errors.pickupLocation ? "border-destructive" : ""}
                        />
                        {errors.pickupLocation && (
                          <p className="text-destructive text-xs">{errors.pickupLocation.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoffLocation">Drop-off Location *</Label>
                        <Input
                          id="dropoffLocation"
                          placeholder="e.g., El Nido Town, Resort name"
                          {...register("dropoffLocation", { required: "Drop-off location is required" })}
                          className={errors.dropoffLocation ? "border-destructive" : ""}
                        />
                        {errors.dropoffLocation && (
                          <p className="text-destructive text-xs">{errors.dropoffLocation.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="travelDate">Travel Date *</Label>
                        <Input
                          id="travelDate"
                          type="date"
                          {...register("travelDate", { required: "Travel date is required" })}
                          className={errors.travelDate ? "border-destructive" : ""}
                        />
                        {errors.travelDate && (
                          <p className="text-destructive text-xs">{errors.travelDate.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travelTime">Pickup Time *</Label>
                        <Input
                          id="travelTime"
                          type="time"
                          {...register("travelTime", { required: "Pickup time is required" })}
                          className={errors.travelTime ? "border-destructive" : ""}
                        />
                        {errors.travelTime && (
                          <p className="text-destructive text-xs">{errors.travelTime.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passengers">Passengers *</Label>
                        <Select {...register("passengers")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {passengerOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Conditional Flight Number Field */}
                    {isAirportTransfer && (
                      <div className="space-y-2 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <Label htmlFor="flightNumber">Flight Number</Label>
                        <Input
                          id="flightNumber"
                          placeholder="e.g., PR 123"
                          {...register("flightNumber")}
                        />
                        <p className="text-xs text-muted-foreground">
                          We'll track your flight to ensure timely pickup
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Child seat, extra luggage space, specific route preferences..."
                        rows={3}
                        {...register("specialRequests")}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                    disabled={isSubmitting || !selectedService}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Booking Request"
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    No payment required. We'll confirm availability and send a quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="font-serif">Need Help?</CardTitle>
                <CardDescription>
                  Reach out directly for urgent bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <a
                  href="tel:+639123456789"
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Call Us</p>
                    <p className="text-primary font-medium">+63 912 345 6789</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/639123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                    <p className="text-green-600 font-medium">Message Us</p>
                  </div>
                </a>

                <a
                  href="mailto:book@soycar.ph"
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-primary font-medium">book@soycar.ph</p>
                  </div>
                </a>

                <div className="border-t border-border/50 pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Service Areas</p>
                      <p className="text-sm text-muted-foreground">
                        Puerto Princesa, El Nido, San Vicente, Port Barton
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        Within 2 hours (usually faster!)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
