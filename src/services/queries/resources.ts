import { cache } from 'react'

import { prisma } from '@/lib/db'

import type { FeedResource, FeedTagResource } from '@/types/resourceType'

export const getAllResources = cache(async (): Promise<FeedResource[]> => {
  return await prisma.resource.findMany({
    where: {
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
})

export const getResourcesByTag = cache(
  async (slug: string): Promise<FeedTagResource[]> => {
    return await prisma.resource.findMany({
      where: {
        isPublished: true,
        tags: {
          some: {
            tag: {
              slug: slug,
            },
          },
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        url: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  },
)

export const getResourceById = cache(async (id: string) => {
  return await prisma.resource.findUnique({
    where: {
      id: id,
      isPublished: true,
    },
    include: {
      tags: {
        include: {
          tag: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
    },
  })
})
