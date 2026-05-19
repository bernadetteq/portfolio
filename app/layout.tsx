import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Bernadette Quitoriano Portfolio",
  description: "Bernadette Quitoriano - Product Manager Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </head>
      <body className="antialiased">
        <div className="max-w-4xl mx-auto max-sm:px-6">
          
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
      <Script
        id="clarity"
        strategy="afterInteractive"
      >
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wtlhvpm4em");
        `}
      </Script>
      <GoogleAnalytics gaId="G-F7XL718W47" />
    </html>
  );
}