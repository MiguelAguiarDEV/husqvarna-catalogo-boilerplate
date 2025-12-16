import { ReactNode } from 'react'
import { MainContainer } from './MainContainer'
import { cn } from '@/utils/misc'

export const CarouselSlide = ({
  children,
  className,
}: {
  children: ReactNode
  key?: string
  className?: string
}) => {
  return (
    <div>
      <MainContainer
        className={cn(
          `
            relative m-auto h-full w-full bg-white text-white

            md:h-[calc(100vh-54px)]
          `,
          className,
        )}
      >
        {children}
      </MainContainer>
    </div>
  )
}
