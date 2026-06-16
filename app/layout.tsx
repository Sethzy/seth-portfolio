import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seth Portfolio",
  description: "A compact personal portfolio scaffold inspired by siddz.com.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
