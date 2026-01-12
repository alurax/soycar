import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SoyCar Transport & Rentals | Palawan Airport Transfers & Tours",
  description: "Trusted family transport in Palawan, Philippines. Airport transfers between Puerto Princesa and El Nido, inland tours, and vehicle rentals. Book your ride today!",
  keywords: ["Palawan transport", "El Nido airport transfer", "Puerto Princesa transfer", "Palawan tours", "car rental Palawan"],
  openGraph: {
    title: "SoyCar Transport & Rentals | Palawan",
    description: "Your trusted family transport partner for Palawan adventures. Airport transfers, inland tours, and vehicle rentals.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
