import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ModalProvider } from '@/contexts/ModalContext'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Smartcode Solutions",
  description: "Elevate Your Business With Modern Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
