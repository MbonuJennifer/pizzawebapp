import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './components/BootstrapClient';
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';
// import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza Ordering Web App',
  description: 'The best pizza ordering website in Africa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <BootstrapClient/>
        </body>
    </html>
  )
}
