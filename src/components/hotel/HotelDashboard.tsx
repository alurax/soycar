"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, Loader2, MapPin, Phone, Mail, RefreshCw, Settings } from "lucide-react";
import { getHotelSession, logoutHotel, HotelSession } from "@/lib/hotelAuth";
import { supabase } from "@/lib/supabase";
import { HotelBookingForm } from "./HotelBookingForm";

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  pickup_location: string;
  dropoff_location: string;
  travel_date: string;
  travel_time: string;
  passengers: string;
  flight_number?: string;
  special_requests?: string;
  status: string;
  created_at: string;
}

export function HotelDashboard() {
  const router = useRouter();
  const [hotel, setHotel] = useState<HotelSession | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    // Check if hotel is logged in
    const hotelSession = getHotelSession();
    if (!hotelSession) {
      router.push("/hotel/login");
      return;
    }
    setHotel(hotelSession);
    fetchBookings(hotelSession.id);
  }, [router]);

  const fetchBookings = async (hotelId: number) => {
    try {
      setIsLoading(true);
      console.log("🔍 Fetching bookings for hotel ID:", hotelId);
      
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("hotel_id", hotelId)
        .order("travel_date", { ascending: false });

      if (error) {
        console.error("❌ Database Error:", error);
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        
        // Check if it's an RLS error
        if (error.code === "PGRST116" || error.message?.includes("permission")) {
          alert(`🔒 RLS Permission Error: ${error.message}\n\nYou need to disable RLS on the bookings table in Supabase.\n\n1. Go to Supabase Dashboard\n2. Authentication → Policies\n3. Find "bookings" table\n4. Click the lock icon to disable RLS\n\nOr run this SQL:\nALTER TABLE bookings DISABLE ROW LEVEL SECURITY;`);
        } else {
          alert(`Database Error: ${error.message}`);
        }
        return;
      }

      console.log(`✅ Found ${data?.length || 0} bookings for hotel ${hotelId}:`, data);
      setBookings(data || []);
    } catch (error) {
      console.error("❌ Unexpected error:", error);
      alert(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (bookingId: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: newStatus })
        .eq("id", bookingId);

      if (error) {
        console.error("Error updating status:", error);
        alert("Failed to update booking status");
        return;
      }

      // Refresh bookings
      if (hotel) {
        fetchBookings(hotel.id);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleLogout = () => {
    logoutHotel();
    router.push("/hotel/login");
  };

  const handleRefresh = () => {
    if (hotel) {
      fetchBookings(hotel.id);
    }
  };

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground">{hotel.name}</h1>
            <p className="text-sm text-muted-foreground">Booking Management Dashboard</p>
            <p className="text-xs text-muted-foreground">Hotel ID: {hotel.id}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/hotel/edit-profile">
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Edit Account
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Create Booking Form */}
        <div className="mb-12">
          <HotelBookingForm 
            hotel={hotel} 
            onBookingSuccess={() => {
              if (hotel) {
                fetchBookings(hotel.id);
              }
            }}
          />
        </div>

        {/* Hotel Info Card */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle>Hotel Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-foreground">{hotel.phone || "Not provided"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-foreground">{hotel.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground">{hotel.city || "Not provided"}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Contact Person</p>
                <p className="text-foreground">{hotel.contact_person || "Not provided"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Refresh */}
        <Card className="mb-8 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Manage Bookings</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Status Filter</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>
              Bookings ({bookings.length})
            </CardTitle>
            <CardDescription>
              Manage your hotel's transportation bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No bookings found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Guest</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Travel Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Passengers</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.filter((booking) => statusFilter === "all" || booking.status === statusFilter).map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.name}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{booking.email}</p>
                            <p className="text-muted-foreground">{booking.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          {booking.service_type.replace("-", " ")}
                        </TableCell>
                        <TableCell>
                          {new Date(booking.travel_date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{booking.travel_time}</TableCell>
                        <TableCell>{booking.passengers}</TableCell>
                        <TableCell>
                          <Select
                            value={booking.status}
                            onValueChange={(value) => handleStatusChange(booking.id, value)}
                          >
                            <SelectTrigger className="w-fit">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="confirmed">Confirmed</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => alert(`Details for booking #${booking.id}\n\nPickup: ${booking.pickup_location}\nDropoff: ${booking.dropoff_location}\nSpecial Requests: ${booking.special_requests || 'None'}`)}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
