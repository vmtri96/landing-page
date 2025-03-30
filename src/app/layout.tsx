import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ModalProvider } from "@/context/ModalContext";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingContext";

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
        <LoadingProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
