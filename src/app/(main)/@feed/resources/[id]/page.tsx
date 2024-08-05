import { ResourcesList } from '@/components/feed-resources-list'

import { getResourcesByTag } from '@/services/queries/resources'

interface Props {
  searchParams: {
    tag: string
  }
}

export default async function Page({ searchParams }: Props) {
  const resources = await getResourcesByTag(searchParams.tag)
  return <ResourcesList resources={resources} />
}
