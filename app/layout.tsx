import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'
import { Footer } from '@/components'


export const metadata: Metadata = {
  title: 'NOAGGREGATOR',
  description: 'CAR RENT IN TBILISI CITY',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="googlebot" content="car, rent, renatal, tbilisi , car rent georgia , rent car tbilisi , find car rent" />
      <meta name="keywords" content="car, rent, rental, tbilisi, car rent georgia , rent car tbilisi , find car rent" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
