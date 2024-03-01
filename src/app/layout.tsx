import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AG | Portfolio",
  description: "AlexandreFPGoncalves Web Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen max-h-screen flex-col">
          <div className="flex-grow overflow-y-auto bg-zinc-900 text-white">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
