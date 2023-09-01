import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'

const font = Titillium_Web({
  weight: ['200', '400','600', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Maeztra Ecommerce',
  description: 'Teste Desenvolvedor Maeztra',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
