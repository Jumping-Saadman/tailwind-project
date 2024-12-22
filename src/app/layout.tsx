"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navBar";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Home | Arekta Gaming",
//   description: "A simple website",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </body>
    </html>
  );
}
