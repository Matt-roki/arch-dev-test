import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space X Data",
  description: "Space X Data"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-5 md:p-10 font-extrabold border-b-2 border-white">
          <Link href="/">SPACE X DATA</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
