import { ResourcesList } from '@/components/feed-resources-list'

import { getAllResources } from '@/services/queries/resources'

export default async function Default() {
  const resources = await getAllResources()
  return <ResourcesList resources={resources} />
}
