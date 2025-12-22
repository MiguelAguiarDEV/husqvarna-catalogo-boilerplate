import { cn } from '@/utils/misc'
import { type ReactNode, type CSSProperties } from 'react'

export const MainContainer = ({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) => {
  return (
    <section className={cn(`mx-auto w-full max-w-[1460px]`, className)} style={style}>
      {children}
    </section>
  )
}
