import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Asap, Inter } from "next/font/google";
import "./globals.css";
import { FloatNav } from "./components/floatNav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const asap = Asap({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-asap",
});

export const metadata: Metadata = {
  title: "OmarUI",
  description: "A collection of awesome test components with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-light-50 dark:bg-dark-50 antialiased transition-colors ${asap.variable} ${inter.className}`}
      >
        <ThemeProvider attribute="class">
          <FloatNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
