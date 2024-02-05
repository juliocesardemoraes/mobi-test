import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./StoreProvider";
import Navbar from "../components/molecules/Navbar/Navbar";
import AlertComponent from "@/components/molecules/Alert/Alert";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mobi Job Test",
  description: "Technical job interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        <ReduxProvider>
          <AlertComponent></AlertComponent>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
