import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Vishesh | Creative Developer & Digital Identity",
  description:
    "A personal digital identity and creative developer portfolio. Exploring the intersection of design, technology, and human experience.",
  keywords: [
    "portfolio",
    "creative developer",
    "designer",
    "developer",
    "digital identity",
    "personal website",
  ],
  authors: [{ name: "Vishesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo / Brand */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-white/40">
                <span className="text-xs font-mono font-semibold text-[#2d5bff]">VP</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-[#f5f5f5] group-hover:text-white transition-colors duration-300">
                VISHESH
              </span>
            </a>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Work", "About", "Writing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-medium text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300 tracking-wide uppercase"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-medium text-[#0a0a0a] bg-[#2d5bff] hover:bg-[#3e6cff] transition-all duration-300 rounded-none tracking-wide uppercase"
            >
              Get in touch
            </a>
          </div>
        </nav>

        {/* Main content with offset for fixed header */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6b6b6b] tracking-wide">
              © 2026 Vishesh. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors duration-300 tracking-wide uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
