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
  title: "Your Company Name",
  description: "MEPFP Engineering & BIM Solutions",
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
