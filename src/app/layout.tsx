
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Cuts Kenya | Premium Meats & Seafood',
  description: 'Nairobi\'s premier butcher shop offering premium beef, goat, mutton, chicken, and seafood.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
