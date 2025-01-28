import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAdsense from "./components/GoogleAdsense";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zukka Dev",
  description: "Zukka developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const apiKey = process.env.REACT_APP_ADSENSE_KEY

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAdsense pId={apiKey ?? ""} />
    </html>
  );
}
