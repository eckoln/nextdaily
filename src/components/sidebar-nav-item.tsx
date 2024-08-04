'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {
  tag?: string
}

export function NavItem({ href, tag, className, ...props }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tagParam = searchParams.get('tag')

  const isActive = pathname === href || tagParam === tag

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'w-full justify-start space-x-3 px-2 xl:px-3',
        isActive && 'bg-accent text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}
