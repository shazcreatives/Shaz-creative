import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import CanvasParticles from "@/components/CanvasParticles";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SHAZ Creatives | We Build Brands That Dominate Attention",
  description: "SHAZ Creatives is an ultra-premium creative digital agency specializing in premium content creation, branding, video production, graphic design, and digital growth.",
  keywords: [
    "creative digital agency",
    "branding agency",
    "social media management",
    "video editing",
    "graphic designing",
    "video production",
    "product photography",
    "instagram reels",
    "premium website design",
    "growth marketing"
  ],
  authors: [{ name: "SHAZ Creatives" }],
  openGraph: {
    title: "SHAZ Creatives | We Build Brands That Dominate Attention",
    description: "Premium content creation, branding, video production & digital growth.",
    type: "website",
    locale: "en_US",
    siteName: "SHAZ Creatives"
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAZ Creatives",
    description: "Premium content creation, branding, video production & digital growth."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans bg-shaz-black text-shaz-white antialiased selection:bg-shaz-purple/30 selection:text-white`}
      >
        <LenisProvider>
          <CustomCursor />
          <CanvasParticles />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
