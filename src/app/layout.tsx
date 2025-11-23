
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Cuts Kenya | Premium Meats & Seafood',
  description: 'Nairobi\'s premier butcher shop offering premium beef, goat, mutton, chicken, and seafood.',
}

// Schema.org structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ButcherShop',
  name: 'Prime Cuts Kenya',
  description: 'Nairobi\'s premier butcher shop offering premium beef, goat, mutton, chicken, and seafood.',
  url: 'https://primecutskenya.co.ke',
  telephone: '+254-700-000000', // Update with actual phone number
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Update with actual address', // Update this
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi',
    postalCode: '00100',
    addressCountry: 'KE',
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 08:00-16:00',
    'Su 09:00-14:00'
  ],
  priceRange: '$$',
  servesCuisine: 'Kenyan Meat Products',
  sameAs: [
    'https://facebook.com/primecutskenya', // Update if available
    'https://instagram.com/primecutskenya' // Update if available
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
