import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI4REALNET evaluation protocols',
  description: 'AI4REALNET evaluation protocols card deck with filtering capabilities',
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
