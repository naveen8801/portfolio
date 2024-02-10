import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { data } from "@/lib/data";
import ThemeProviderComponent from "@/providers/ThemeProvider";

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
          <div className="h-screen">
            <NavBar data={data} />
            <div className="width container">{children}</div>
            <Footer data={data} />
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
