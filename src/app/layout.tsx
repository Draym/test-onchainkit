import '@coinbase/onchainkit/styles.css'
import './globals.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import HomeNavbar from '@/components/HomeNavbar'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html suppressHydrationWarning lang="en">
      <head><title>Shop</title></head>
      <body
          className={clsx(
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable
          )}
      >
      <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
        <div className="relative flex flex-col h-screen">
          <HomeNavbar />
          <main className="container mx-auto max-w-7xl px-6 flex-grow">
            {children}
          </main>
        </div>
      </Providers>
      </body>
      </html>
  )
}
