import { Inter } from 'next/font/google'
import {Theme} from '@radix-ui/themes'
import './globals.css'
import Navbar from './components/Navbar'
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
        <Navbar></Navbar>
        {children}
        </Theme>
        </body>
    </html>
  )
}
