export type FeedResource = {
  id: string
  title: string
  description: string
  url: string
  createdAt: Date
  updatedAt: Date
}

export type FeedTagResource = Omit<FeedResource, 'updatedAt'>
