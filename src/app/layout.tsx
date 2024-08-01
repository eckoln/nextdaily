import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Next.js Starter',
    template: `%s - Next.js Starter`,
  },
  description: '',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html className="dark" style={{ colorScheme: 'dark' }} lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
