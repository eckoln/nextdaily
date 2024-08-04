import { cache } from 'react'

import { prisma } from '@/lib/db'

export const getTags = cache(async () => {
  return await prisma.tag.findMany({
    include: {
      _count: true,
    },
  })
})
