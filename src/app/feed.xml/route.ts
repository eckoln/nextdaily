import RSS from 'rss'

import { getAllResources } from '@/services/queries/resources'

export const dynamic = 'force-dynamic'

const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export async function GET() {
  const resources = await getAllResources()

  const feed = new RSS({
    title: 'Next Daily',
    description: 'Sharing things about Next.js',
    site_url: `${SITE_URL}`,
    feed_url: `${SITE_URL}/feed.xml`,
    language: 'en',
    pubDate: new Date(),
  })

  resources.map((resource) => {
    feed.item({
      title: resource.title,
      description: resource.description,
      url: `${SITE_URL}/resources/${resource.id}`,
      date: resource.createdAt,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
