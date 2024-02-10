import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ThemeProviderComponent from "@/providers/ThemeProvider";
import LayoutProvider from "@/providers/LayoutProvider";
import DataProvider from "@/providers/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Viewer 👋",
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
          <DataProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </DataProvider>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
