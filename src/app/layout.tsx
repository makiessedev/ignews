import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { Header } from './components/Header'

const roboto = Roboto(
  { 
    subsets: ['latin'], 
    weight: ['400', '700', '900'], 
    variable: '--font-roboto'
  }
)

export const metadata: Metadata = {
  title: {
    default: 'Ig.news',
    template: '%s | Ig.news'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable} bg-gray-900 text-white-50`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
