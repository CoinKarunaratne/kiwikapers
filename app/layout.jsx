import "./globals.css";

import { Sen } from "next/font/google";

const sen = Sen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sen",
});

export const metadata = {
  title: "Kiwi-Kapers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sen.className} bg-[#252525]`}>{children}</body>
    </html>
  );
}