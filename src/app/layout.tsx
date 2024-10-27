import type { Metadata } from "next";
import Header from "@/sections/Header";
import "./globals.css";
import Footer from "@/sections/Footer";

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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
