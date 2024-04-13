import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pranav Keshav | Web Developer Portfolio",
  description:
    "Welcome to the portfolio of Pranav Keshav, showcasing expertise in web development and design. Explore projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
