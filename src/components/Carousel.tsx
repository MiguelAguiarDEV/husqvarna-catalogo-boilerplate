import type SwiperCore from 'swiper'
import type { SwiperOptions } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Zoom } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { ReactNode, useEffect, useState } from 'react'
import { Icon } from './ui/icon'

type Props = {
  slides: ReactNode[]
  initialIndex?: number
  slidesPerView: number | 'auto'
  paginationContainerClassName?: string
  className?: string
  withPagination?: boolean
  spaceBetween?: number
  loop?: boolean
  breakpoints?: SwiperOptions['breakpoints']
  swiper?: SwiperCore
  setSwiper?: (swiper: SwiperCore) => void
  activeIndex?: number
  onActiveIndexChange?: (index: number) => void
  showArrows?: boolean
  noSwipingSelector?: string
  zoom?: boolean
}

export const Carousel = ({
  noSwipingSelector,
  initialIndex = 0, // Set default value to 0
  loop,
  slides,
  spaceBetween,
  slidesPerView = 1,
  className,
  breakpoints,
  swiper: externalSwiper,
  setSwiper, // Add setSwiper to destructured props
  activeIndex: controlledActiveIndex,
  onActiveIndexChange,
  showArrows = true, // Default to true for better usability
  zoom = false,
}: Props) => {
  const [internalSwiper, setInternalSwiper] = useState<SwiperCore | undefined>(
    undefined,
  )
  const [internalActiveIndex, setInternalActiveIndex] = useState(initialIndex)

  // Use controlled or internal state
  const activeIndex =
    controlledActiveIndex !== undefined
      ? controlledActiveIndex
      : internalActiveIndex

  const swiper = externalSwiper || internalSwiper

  useEffect(() => {
    if (externalSwiper) {
      setInternalActiveIndex(externalSwiper.realIndex)
    }
  }, [externalSwiper])

  useEffect(() => {
    if (controlledActiveIndex !== undefined && swiper) {
      swiper.slideTo(controlledActiveIndex)
    }
  }, [controlledActiveIndex, swiper])

  const handleActiveIndexChange = (index: number) => {
    setInternalActiveIndex(index)
    onActiveIndexChange?.(index)
  }

  const handlePrevSlide = () => {
    if (loop) {
      swiper?.slidePrev()
    } else {
      swiper?.slideTo(Math.max(0, activeIndex - 1))
    }
  }

  const handleNextSlide = () => {
    if (loop) {
      swiper?.slideNext()
    } else {
      swiper?.slideTo(Math.min(slides.length - 1, activeIndex + 1))
    }
  }

  const canGoPrev = loop || activeIndex > 0
  const canGoNext = loop || activeIndex < slides.length - 1

  return (
    <div className="relative">
      {' '}
      {/* Added flex and centering classes */}{' '}
      {/* Ensure the parent has a defined height */}
      <div className="transform">
        {' '}
        {/* Centering with transform */}
        <Swiper
          zoom={zoom}
          noSwipingSelector={noSwipingSelector}
          initialSlide={initialIndex}
          spaceBetween={spaceBetween}
          className={className}
          modules={[A11y, Zoom]}
          breakpoints={breakpoints}
          slidesPerView={slidesPerView}
          onSwiper={(newSwiper: SwiperCore) => {
            if (setSwiper) {
              setSwiper(newSwiper)
            } else {
              setInternalSwiper(newSwiper)
            }
          }}
          loop={loop}
          onSlideChange={(changedSwiper: SwiperCore) => {
            handleActiveIndexChange(changedSwiper.realIndex)
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              zoom={zoom}
              key={index}
              className={`
                !flex items-center justify-center h-[calc(100vh-54px)]
              `}
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Rectangular Arrow Buttons with Hover Effects */}
      {showArrows && (
        <>
          {canGoPrev && (
            <button
              className={`
                absolute left-0 top-1/2 z-10 flex h-11 -translate-y-1/2
                items-center justify-center rounded-[4px] text-[#f25421]
                transition-colors duration-200

                md:left-4 md:w-[30px] md:bg-white md:shadow-md
                md:hover:bg-[#f25421] md:hover:text-white
              `}
              onClick={handlePrevSlide}
            >
              <Icon name="chevron-left" size="20px" />
            </button>
          )}
          {canGoNext && (
            <button
              className={`
                absolute right-0 top-1/2 z-10 flex h-11 -translate-y-1/2
                items-center justify-center rounded-[4px] text-[#f25421]
                transition-colors duration-200

                md:right-4 md:w-[30px] md:bg-white md:shadow-md
                md:hover:bg-[#f25421] md:hover:text-white
              `}
              onClick={handleNextSlide}
            >
              <Icon name="chevron-right" size="20px" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
