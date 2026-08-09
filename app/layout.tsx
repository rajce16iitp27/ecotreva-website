import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville, Pacifico } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const pacifico = Pacifico({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ecotreva | Eco-Friendly Materials Exported from India",
  description:
    "Connecting global businesses with India's leading manufacturers of sustainable materials. Premium B2B export partner for bagasse, paper, pulp, bamboo, and jute products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${libreBaskerville.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body>
        <Header />

        {children}

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}