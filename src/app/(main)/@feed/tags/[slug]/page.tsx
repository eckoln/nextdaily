import { ResourcesList } from '@/components/feed-resources-list'

import { getResourcesByTag } from '@/services/queries/resources'

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const resources = await getResourcesByTag(params.slug)
  return <ResourcesList resources={resources} />
}
