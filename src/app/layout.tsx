import type { Metadata } from "next";
import Header from "@/sections/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devendra Mishra - Engineer.",
  description: "A Full Stack Developer and a DevOps Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
