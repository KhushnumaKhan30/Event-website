import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AMUHACKS",
  description: "One of our hallmark initiatives, AMUHACKS, organized in collaboration with GDSC AMU, has gained significant recognition as a premier platform for innovation, creativity, and teamwork. This event attracts brilliant minds from across the country, creating a competitive yet collaborative environment where participants push the boundaries of technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
