import { Inter } from "next/font/google";
import Session from "@/components/Session";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codenotes",
  description: "Saving the world, one nap at a time",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen text-codenotes-black-100`}
      >
        <Session session={session} refetchInterval={5 * 60}>
          {children}
        </Session>
      </body>
    </html>
  );
}
