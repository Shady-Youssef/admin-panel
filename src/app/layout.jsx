
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme";
import Navbar from "./_components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";

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
      <body className={`${poppins.variable} `}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <Navbar/>
        {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
