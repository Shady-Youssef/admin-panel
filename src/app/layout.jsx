import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import ThemeRegistry from "./_components/ThemeRegistry/ThemeRegistry";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Admin Panel",
  description: "Developed By Shady Youssef",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ThemeRegistry>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
