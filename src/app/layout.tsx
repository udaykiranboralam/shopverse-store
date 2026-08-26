import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ShopVerse - Your One-Stop Ecommerce Store",
  description: "Discover amazing products at great prices. Shop the latest trends in fashion, electronics, and home goods.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
