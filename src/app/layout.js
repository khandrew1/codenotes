import { Inter } from "next/font/google";
import "./globals.css";
// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codenotes",
  description: "Saving the world, one nap at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen text-codenotes-black-100`}
      >
        {children}
      </body>
    </html>
  );
}
