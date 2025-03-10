import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "./icons.css";
import Navigation from "@/samebook/layout/navigation/navigation";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navigation />
        <div className="min-h-screen bg-background-primary">{children}</div>
      </body>
    </html>
  );
}
