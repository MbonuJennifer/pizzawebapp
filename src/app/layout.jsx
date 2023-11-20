import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Link from "next/link";


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Pizza Ordering Web App",
  description: "The best pizza ordering website in Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
