import { ResourcesList } from '@/components/feed-resources-list'

import { getAllResources } from '@/services/queries/resources'

export default async function Page() {
  const resources = await getAllResources()
  return <ResourcesList resources={resources} />
}
