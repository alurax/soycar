import {
  Header,
  Hero,
  Services,
  Gallery,
  TrustSection,
  BookingForm,
  Footer,
} from "@/components/landing";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <TrustSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
