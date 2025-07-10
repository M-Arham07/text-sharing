

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TextShared | Share text instantly",
  description: "Share text or notes instantly using a unique code. No sign-up, no clutter. TextShared auto-deletes messages after 10 minutes for total privacy and simplicity.",
  author: "M.arham",
  keywords: [
    "text sharing", "notes", "instant share", "privacy", "no sign-up", "TextShared", "clipboard", "secure", "share code"
  ],
  openGraph: {
    title: "TextShared | Share text instantly",
    description: "Share text or notes instantly using a unique code. No sign-up, no clutter. TextShared auto-deletes messages after 10 minutes for total privacy and simplicity.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "TextShared"
  },
  twitter: {
    card: "summary_large_image",
    title: "TextShared | Share text instantly",
    description: "Share text or notes instantly using a unique code. No sign-up, no clutter. TextShared auto-deletes messages after 10 minutes for total privacy and simplicity."
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="7pyngYjfoRH8ND5ayllD2r3ZQFWY42axqNDOsEfa1FI" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <div className="flex-1 flex flex-col">
          {children}
          {/* Social Icons: vertical on desktop, horizontal below content on mobile */}
          <div>
            {/* Desktop: vertical right, Mobile: horizontal below */}
            <div className="hidden sm:flex fixed top-1/2 right-4 -translate-y-1/2 flex-col items-center gap-4 z-50 ">
              <a
                href="https://github.com/M-Arham07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/arh4m_su/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:khawajaarham15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="flex sm:hidden w-full flex-col items-center justify-center mt-[-190px] mb-4">
              <div className="flex flex-row items-center justify-center gap-6">
                <a
                  href="https://github.com/M-Arham07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/arh4m_su/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:khawajaarham15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gmail"
                  className="rounded-full bg-background border border-border p-3 shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-150 text-xl text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
