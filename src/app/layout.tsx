import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConsultationModal from "@/components/consultation-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AST Abroad Study & Travel | Overseas Education Consultancy",
  description: "AST Abroad Study and Travel helps students explore global education opportunities with expert counselling, university selection, visa assistance, travel support and pre-departure guidance.",
  keywords: ["overseas education", "study abroad", "university application", "student visa", "AST"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ConsultationModal />
      </body>
    </html>
  );
}
