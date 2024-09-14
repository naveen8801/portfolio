import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeProviderComponent from "./../providers/ThemeProvider";
import LayoutProvider from "./../providers/LayoutProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello! 👋",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderComponent>
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProviderComponent>
        <Analytics />
      </body>
    </html>
  );
}
