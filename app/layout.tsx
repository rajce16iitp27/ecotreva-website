import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
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
      className={`${dmSans.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">

<Header />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}