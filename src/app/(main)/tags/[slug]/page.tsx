import type { Metadata } from 'next'

import { EmptyPage } from '@/components/empty-page'

import { toCapitalize } from '@/lib/utils'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: toCapitalize(params.slug),
  }
}

export default function Page() {
  return <EmptyPage />
}
