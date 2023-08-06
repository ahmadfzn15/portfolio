import Navbar from "@/components/navbar";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen bg-slate-900 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
