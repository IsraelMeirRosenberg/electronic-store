import { Rubik } from "next/font/google";
import "./globals.css";
import { connectToMongo } from "@/server/connectToMongo";

const rubik = Rubik({ subsets: ["latin"],weight:["300","400","500","600","700","800","900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
