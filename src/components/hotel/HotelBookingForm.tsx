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
import { Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { HotelSession } from "@/lib/hotelAuth";

interface HotelBookingFormData {
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

interface HotelBookingFormProps {
  hotel: HotelSession;
  onBookingSuccess: () => void;
}

export function HotelBookingForm({ hotel, onBookingSuccess }: HotelBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<HotelBookingFormData>();

  const passengersValue = watch("passengers");
  const isAirportTransfer = selectedService.includes("airport");

  const onSubmit = async (data: HotelBookingFormData) => {
    if (!passengersValue) {
      alert("Please select number of passengers");
      return;
    }

    if (!selectedService) {
      alert("Please select a service type");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("bookings")
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            service_type: selectedService,
            pickup_location: data.pickupLocation,
            dropoff_location: data.dropoffLocation,
            travel_date: data.travelDate,
            travel_time: data.travelTime,
            passengers: passengersValue,
            flight_number: data.flightNumber || null,
            special_requests: data.specialRequests || null,
            status: "pending",
            hotel_id: hotel.id,
          },
        ]);

      if (error) {
        console.error("Error creating booking:", error);
        alert(`Error: ${error.message}`);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setTimeout(() => {
        setIsSuccess(false);
        reset();
        setSelectedService("");
        onBookingSuccess();
      }, 2000);
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-primary/20 bg-green-50/50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-serif text-lg font-bold text-foreground mb-2">
            Booking Created Successfully!
          </h3>
          <p className="text-sm text-muted-foreground">
            The booking has been added to your list and will appear shortly.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Create New Booking</CardTitle>
        <CardDescription>
          Add a new booking for your guests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Guest Information */}
          <div className="space-y-4 pb-4 border-b border-border/50">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Guest Information
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Guest Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: "Guest name is required" })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="guest@example.com"
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
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-4 pb-4 border-b border-border/50">
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
                  {...register("pickupLocation", {
                    required: "Pickup location is required",
                  })}
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
                  {...register("dropoffLocation", {
                    required: "Drop-off location is required",
                  })}
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
                <Select value={passengersValue || ""} onValueChange={(value) => setValue("passengers", value)}>
                  <SelectTrigger className={!passengersValue ? "text-muted-foreground" : ""}>
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
                  Optional: We'll track the flight for timely pickup
                </p>
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              placeholder="Child seat, extra luggage space, specific route preferences..."
              rows={3}
              {...register("specialRequests")}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold"
            disabled={isSubmitting || !selectedService}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Creating Booking...
              </>
            ) : (
              "Create Booking"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
