import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { ModalProvider } from '@/components/ui/modal/modalProvider'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Pierce Technology Challenge',
  description: 'Criado por Eduardo Batista'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-blueSecondary h-screen w-screen overflow-hidden`}
      >
        <ModalProvider>{children}</ModalProvider>
        <Toaster />
      </body>
    </html>
  )
}
