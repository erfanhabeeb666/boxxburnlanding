import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Boxxburn Kakkanad | BxB - Your Second Home | #theX5method',
  description: 'Premium functional fitness gym in Kochi. Community-driven training with the X5 Method. Join Boxxburn Kakkanad for functional training, kettlebell expertise, Animal Flow, boxing, and more.',
  keywords: 'gym Kochi, functional fitness Kakkanad, Boxxburn, BxB, X5 Method, kettlebell training, Animal Flow, boxing gym Kochi',
  authors: [{ name: 'Boxxburn Kakkanad' }],
  openGraph: {
    title: 'Boxxburn Kakkanad | BxB - Your Second Home',
    description: 'Premium functional fitness gym in Kochi. Community-driven training with the X5 Method.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boxxburn Kakkanad | BxB - Your Second Home',
    description: 'Premium functional fitness gym in Kochi. Community-driven training with the X5 Method.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

