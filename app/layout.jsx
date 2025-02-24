import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloux - Game Center",
  description: "Game website",
  visualViewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} >{children}
      <Script src="/scripts/Script.js"/>
      </body>
    </html>
  );
}