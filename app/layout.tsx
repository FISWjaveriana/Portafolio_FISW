import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Your portfolio description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Adding base tag to help with path resolution */}
        <base href={process.env.NODE_ENV === 'production' ? '/Portafolio_FISW/' : '/'} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}