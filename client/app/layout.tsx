import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { CarProvider } from "@/context/carContext";
import { BookingProvider } from "@/context/dateContext";
import SessionWrapper from "@/components/SessionWrapper";
import { CartProvider } from "@/context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Company",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper> 
    <html lang="en">
      <body className="relative">
        <CarProvider>
        <CartProvider>
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
        </BookingProvider>
        </CartProvider>
        </CarProvider>
      </body>
    </html>
        </SessionWrapper>
  );
}
