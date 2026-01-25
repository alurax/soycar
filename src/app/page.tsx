import {
  Header,
  Hero,
  Services,
  Gallery,
  TrustSection,
  BookingForm,
  Footer,
  BackgroundMusic,
  FacebookPosts,
} from "@/components/landing";

export default function Page() {
  return (
    <main className="min-h-screen">
      <BackgroundMusic />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <FacebookPosts />
      <TrustSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
