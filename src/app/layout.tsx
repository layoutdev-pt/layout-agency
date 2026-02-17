import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Layout Agency | Em Construção",
  description:
    "Layout Agency está a construir algo extraordinário. Junta-te à nossa waitlist para seres o primeiro a saber!",
  authors: [{ name: "Layout Agency" }],
  creator: "Layout Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen bg-[#0f0f0f]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
