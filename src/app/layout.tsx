import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Asap, Inter } from "next/font/google";
import { FloatNav } from "./components/floatNav";
import { Toaster } from "sonner";
import "./globals.css";

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
          <Toaster
            offset={{ bottom: "76px" }}
            mobileOffset={{ bottom: "76px" }}
            position="bottom-center"
            visibleToasts={1}
            toastOptions={{
              unstyled: true,
              classNames: {
                toast:
                  "dark:bg-dark-300 bg-light-50 rounded-lg p-4 border border-light-500 dark:border-dark-500 text-xs shadow-xs w-full",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
