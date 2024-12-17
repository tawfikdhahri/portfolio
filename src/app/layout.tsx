import Header from '@/app/components/Header'
import { Roboto_Mono } from 'next/font/google'
import '../../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './components/Footer'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-dark `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
