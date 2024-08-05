'use server'

import { Prisma } from '@prisma/client'
import urlMetadata from 'url-metadata'
import { z } from 'zod'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'

async function getMetadata(url: string) {
  const metadata = await urlMetadata(url)
  return {
    title: metadata['og:title'] || metadata.title,
    description: metadata['og:description'] || metadata.description,
    thumbnail: metadata['og:image'] || metadata.image,
  }
}

export async function submitResource(
  formData: FormData,
): Promise<{ error?: string } | undefined> {
  try {
    // session check
    const session = await auth()

    if (!session?.user) {
      return {
        error: 'Unauthorized',
      }
    }

    // validate fields
    const validatedFields = z
      .object({
        url: z.string().url().min(1),
      })
      .safeParse(Object.fromEntries(formData))

    if (!validatedFields.success) {
      return {
        error: 'Invalid submission!',
      }
    }

    const { url } = validatedFields.data

    // check resource if exist
    const existingResource = await prisma.resource.findFirst({
      where: {
        url: {
          endsWith: url,
        },
      },
    })
    if (existingResource) {
      return {
        error: 'URL is already exist!',
      }
    }

    // fetch target URL's metadata
    const metadata = await getMetadata(url)

    // create resource record
    await prisma.resource.create({
      data: {
        title: metadata.title,
        description: metadata.description,
        thumbnail: metadata.thumbnail,
        url: url,
        authorId: session.user.id!,
      },
    })
  } catch (error: any) {
    console.error(error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          error: 'URL is already exist!',
        }
      }
    } else {
      return {
        error: 'Something went wrong!',
      }
    }
  }
}
