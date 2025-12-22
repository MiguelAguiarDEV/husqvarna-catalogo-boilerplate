import { ReactNode, CSSProperties } from 'react'
import { MainContainer } from './MainContainer'
import { cn } from '@/utils/misc'

export const CarouselSlide = ({
  children,
  className,
  style,
}: {
  children: ReactNode
  key?: string
  className?: string
  style?: CSSProperties
}) => {
  return (
    <div>
      <MainContainer
        className={cn(
          `
            relative m-auto h-[calc(100vh-54px)] w-full bg-white text-white
          `,
          className,
        )}
        style={style}
      >
        {children}
      </MainContainer>
    </div>
  )
}
