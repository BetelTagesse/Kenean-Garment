import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import MainHeader from "@/components/MainHeader";
import TestIcon from "@/components/TestIcon";
import { NavBar } from "@/components/NavBar";

import Head from "next/head"; // ✅ Import Head

export const metadata = {
  title: "Canaan Garment",
  description: "A garment company website by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>

      <body>
        <MainHeader />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
