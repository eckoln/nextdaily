import { Toaster } from 'react-hot-toast'

import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/components/providers'
import { Sidebar } from '@/components/sidebar'

import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Next Daily - Sharing things about Next.js',
    template: `%s - Next Daily`,
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
          'relative flex min-h-screen w-full bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
        )}
      >
        <Providers>
          <Sidebar />
          <main className="flex-1">{children}</main>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
