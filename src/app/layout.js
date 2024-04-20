import { Inter } from "next/font/google";
import "./globals.css";
// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codenotes",
  description: "Revolutionizing the ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
