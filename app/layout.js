import './globals.css'
import { Inter } from 'next/font/google'
import Fav from "../public/sinti-logo-zip-file/svg/logo-black.svg"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SinTi Tech solutions',
  description: 'Sinti Tech solutions is a digital agency that offers web development, UI/UX design and product marketing services to people or clients all over the world.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
