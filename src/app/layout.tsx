import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishesh Gurnani | AI/ML Engineer & Creative Technologist",
  description:
    "Personal digital identity and portfolio of Vishesh Gurnani. BCA candidate specializing in AI & ML at Alliance University. Building machine learning pipelines, distributed software, and creative technology.",
  keywords: [
    "Vishesh Gurnani",
    "portfolio",
    "AI engineer",
    "machine learning",
    "deep learning",
    "FastAPI",
    "Sentry",
    "EdgeCrop Zero",
    "TinyML",
    "ESP32",
    "Archon",
    "Alliance University",
    "Bengaluru",
  ],
  authors: [{ name: "Vishesh Gurnani" }],
  openGraph: {
    title: "Vishesh Gurnani | AI/ML Engineer & Creative Technologist",
    description:
      "Personal digital identity and portfolio of Vishesh Gurnani. BCA candidate specializing in AI & ML at Alliance University.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-full flex flex-col bg-[#0c0c0d] text-neutral-100 antialiased selection:bg-neutral-100 selection:text-neutral-900">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
