import { MetadataRoute } from 'next'

import { getAllResources } from '@/services/queries/resources'
import { getTags } from '@/services/queries/tags'

export const dynamic = 'force-dynamic'

const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resources = await getAllResources()
  const tags = await getTags()

  const links = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/feed.xml`,
      lastModified: new Date(),
    },
  ]

  tags.map((tag) => {
    links.push({
      url: `${SITE_URL}/tags/${tag.slug}`,
      lastModified: tag.updatedAt,
    })
  })

  resources.map((resource) => {
    links.push({
      url: `${SITE_URL}/resources/${resource.id}`,
      lastModified: resource.updatedAt,
    })
  })

  return links
}
