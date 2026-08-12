import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with real ID
const CONVERSION_LABEL = 'XXXXXXXXXXXX'; // Replace with real label

export const metadata: Metadata = {
  title: "Plateforme Centrale | Guide des Meilleures Plateformes en France",
  description: "Découvrez les meilleures plateformes sélectionnées et notées par nos experts en France. Bonus exclusifs et revues détaillées.",
  icons: {
    icon: '/favicon_new.png',
    apple: '/favicon_new.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  // The window.open logic is handled in the component
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-[#f8fafc]`}>
        <Header />
        <div className="pt-32">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
