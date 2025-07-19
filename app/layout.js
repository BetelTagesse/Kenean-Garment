import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import MainHeader from "@/components/MainHeader";
import TestIcon from "@/components/TestIcon";
import { NavBar } from "@/components/NavBar";

import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Canaan Garment",
  description: "A garment company website by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <HeaderWrapper />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
