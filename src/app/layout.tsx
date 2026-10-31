
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techvoro | Digital Products. Built for Growth.",
  description:
    "Techvoro builds premium mobile apps, web applications and custom software for ambitious businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
