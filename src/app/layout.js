import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.radiantvision.in"), // Replace with your domain

  title: {
    default: "Radiient Vision | MEPFP & BIM Engineering Solutions",
    template: "%s | Radiient Vision",
  },

  description:
    "Radiient Vision provides Mechanical, Electrical, Plumbing, Fire Protection (MEPFP) engineering and BIM coordination services for commercial, residential, and industrial projects.",

  keywords: [
    "MEP Engineering",
    "MEPFP",
    "BIM",
    "BIM Coordination",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Plumbing Engineering",
    "Fire Protection Engineering",
    "Construction Engineering",
    "Engineering Consultants",
  ],

  authors: [
    {
      name: "Radiient Vision",
    },
  ],

  creator: "Radiient Vision",
  publisher: "Radiient Vision",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Radiient Vision | MEPFP & BIM Engineering Solutions",
    description:
      "Professional MEPFP engineering, BIM coordination, clash detection, design, and documentation services.",
    url: "https://www.radiantvision.in",
    siteName: "Radiient Vision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Place in /public
        width: 1200,
        height: 630,
        alt: "Radiient Vision",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Radiient Vision | MEPFP & BIM Engineering Solutions",
    description:
      "Engineering excellence through MEPFP design and BIM coordination.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.radiantvision.in",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}