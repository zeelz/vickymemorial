import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Funeral Service',
  description: 'In Loving Memory of Victoria Ngozi Okonta',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
