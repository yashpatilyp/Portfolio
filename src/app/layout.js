import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider"; // Relative path


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yash Portfolio App",
  description: "Animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
