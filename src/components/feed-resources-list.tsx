import type { FeedTagResource } from '@/types/resourceType'

import { ResourceCard } from './feed-resource-card'

interface Props {
  resources: FeedTagResource[]
}

export function ResourcesList({ resources }: Props) {
  if (!resources.length) {
    return (
      <div className="flex items-center justify-center py-16 text-muted-foreground">
        <span>No resources found.</span>
      </div>
    )
  }

  return (
    <ul className="space-y-0.5 py-2 xl:py-4">
      {resources.map((resource) => (
        <li key={resource.id}>
          <ResourceCard resource={resource} />
        </li>
      ))}
    </ul>
  )
}
