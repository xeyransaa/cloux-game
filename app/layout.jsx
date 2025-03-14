import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "@/Redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloux - Game Center",
  description: "Game website",
  visualViewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} >{children}
      <Script src="/scripts/Script.js"/>
      </body>
    </html>

    </Provider>
    
  );
}