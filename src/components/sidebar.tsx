import Link from 'next/link'

import {
  BookmarkIcon,
  ExternalLinkIcon,
  MegaphoneIcon,
  PinIcon,
} from 'lucide-react'

import { getTags } from '@/services/queries/tags'

import { PaneContainer, PaneContent, PaneHeader } from './pane'
import { SidebarClient } from './sidebar-client'
import { NavItem } from './sidebar-nav-item'
import { SidebarToggle } from './sidebar-toggle'

const externalLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/eckoln/nextdaily',
  },
  {
    label: 'Next.js Docs',
    href: 'https://nextjs.org/docs',
  },
  {
    label: 'Next.js GitHub',
    href: 'https://github.com/vercel/next.js',
  },
]

function getTagIcon(slug: string) {
  switch (slug) {
    case 'official':
      return MegaphoneIcon
    default:
      return PinIcon
  }
}

export async function Sidebar() {
  const tags = await getTags()

  return (
    <SidebarClient>
      <PaneContainer>
        {/* Brand */}
        <PaneHeader className="justify-between">
          <Link
            className="inline-flex items-center space-x-2 px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring xl:p-0"
            href="/"
          >
            <BookmarkIcon size={20} />
            <span>Next Daily</span>
          </Link>
          <SidebarToggle />
        </PaneHeader>
        <PaneContent>
          <nav className="flex flex-1 flex-col divide-y divide-border text-muted-foreground">
            {/* Tags */}
            {tags.length > 0 && (
              <div className="space-y-0.5 py-2 xl:py-4">
                <div className="flex h-9 items-center px-2 xl:px-4">
                  <span className="text-sm">Menu</span>
                </div>
                {tags.map((tag) => {
                  const TagIcon = getTagIcon(tag.slug)
                  return (
                    <NavItem
                      className="justify-between"
                      href={`/tags/${tag.slug}`}
                      tag={tag.slug}
                      key={tag.slug}
                      prefetch
                    >
                      <div className="flex items-center space-x-3">
                        <TagIcon size={16} />
                        <span>{tag.name}</span>
                      </div>
                      <span>{tag._count.resources}</span>
                    </NavItem>
                  )
                })}
              </div>
            )}
            {/* External links */}
            <div className="space-y-0.5 py-2 xl:mt-auto xl:py-4">
              {externalLinks.map((item) => (
                <NavItem href={item.href} target="_blank" key={item.href}>
                  <ExternalLinkIcon size={16} />
                  <span>{item.label}</span>
                </NavItem>
              ))}
            </div>
          </nav>
        </PaneContent>
      </PaneContainer>
    </SidebarClient>
  )
}
