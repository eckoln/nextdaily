import { useParams, useSearchParams } from 'next/navigation'

export function useTagParams() {
  const params = useParams<{ slug: string }>()
  const searchParams = useSearchParams()
  return params.slug || searchParams.get('tag')
}
