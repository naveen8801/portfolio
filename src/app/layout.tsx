import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeProviderComponent from "./../providers/ThemeProvider";
import LayoutProvider from "./../providers/LayoutProvider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      <Script
        strategy="lazyOnload"
        src="https://formi-verse.vercel.app//magical-script.js"
        data-form-id="67f0dae83d89e266921e1266"
        data-trigger-element-id="formiverse-form"
        data-popup-height="500"
      />
    </html>
  );
}
