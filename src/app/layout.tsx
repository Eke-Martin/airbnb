import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AirBnB-Home-Rents",
  description: "Find your perfect home with AirBnB Home Rents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col bg-light-bg">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
