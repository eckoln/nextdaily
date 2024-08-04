import { cn } from '@/lib/utils'

function PaneContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        'flex min-h-screen w-full shrink-0 flex-col lg:max-h-screen lg:overflow-y-auto',
        className,
      )}
      {...props}
    />
  )
}

function PaneHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-7',
        className,
      )}
      {...props}
    />
  )
}

function PaneContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn('flex flex-1 flex-col px-2 xl:px-4', className)}
      {...props}
    />
  )
}

export { PaneContainer, PaneContent, PaneHeader }
