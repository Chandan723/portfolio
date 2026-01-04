import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a clean, modern look
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandan Kumar Mahato | Portfolio",
  description: "ECE Student & Aspiring Engineer | 3D Interactive Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-slate-950 text-slate-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
