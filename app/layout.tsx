import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ── DrukWide — titles / big headings ─────────────────────────────────────
const drukWide = localFont({
  src: [
    {
      path: "../public/fonts/DrukWide/DrukWide-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DrukWide/DrukWide-MediumItalic-Trial.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/DrukWide/DrukWide-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DrukWide/DrukWide-BoldItalic-Trial.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/DrukWide/DrukWide-Heavy-Trial.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/DrukWide/DrukWide-Super-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-druk",
  display: "swap",
});

// ── Gilroy — sub-headings + body ─────────────────────────────────────────
const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NKHL 10K · Edition 2026",
  description:
    "Beyond the Obsidian Palm. An ultra-premium endurance experience in Marrakech's Palmeraie.",
  openGraph: {
    title: "NKHL 10K · Edition 2026",
    description: "Where athletic precision meets uncompromising Moroccan luxury.",
    siteName: "NKHL 10K",
  },
};

import CinematicPreloader from "@/components/ui/CinematicPreloader";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${drukWide.variable} ${gilroy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian-950 text-white selection:bg-coral-500/30">
        <CinematicPreloader />
        {children}
        
        {/* NKHL+ Premium App Frame Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[90] p-1.5 md:p-3">
            <div className="w-full h-full rounded-[24px] md:rounded-[32px] border-[1.5px] border-gold-500/20 shadow-[inset_0_0_60px_rgba(251,191,36,0.03)]" />
        </div>
        <div className="pointer-events-none fixed inset-0 z-[89] border-[6px] md:border-[12px] border-obsidian-950" />
      </body>
    </html>
  );
}
