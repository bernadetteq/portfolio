import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <div className="max-w-4xl mx-auto max-sm:px-6">
          
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}