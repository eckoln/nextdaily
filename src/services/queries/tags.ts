import { cache } from 'react'

import { prisma } from '@/lib/db'

export const getTags = cache(async () => {
  return await prisma.tag.findMany({
    orderBy: {
      index: 'asc',
    },
    include: {
      _count: {
        select: {
          resources: {
            where: {
              resource: {
                isPublished: true,
              },
            },
          },
        },
      },
    },
  })
})
