import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import MainHeader from "@/components/MainHeader";
import TestIcon from "@/components/TestIcon";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "Canaan Garment",
  description: "A garment company website by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
