import { cn } from '@/utils/misc'
import { type ReactNode } from 'react'

export const MainContainer = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <section className={cn(`mx-auto w-full max-w-[1460px]`, className)}>
      {children}
    </section>
  )
}
