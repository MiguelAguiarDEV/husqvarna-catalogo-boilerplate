import { useRouter } from 'next/router'
import { CarouselSlide } from '../CarouselSlide'
import Image from 'next/image'

export const Slide1 = () => {
  const router = useRouter()
  const locale = router.query.locale as string

  return (
    <CarouselSlide
      key="1"
      className={`
        bg-transparent

        sm:pt-0
      `}
    >
      <Image
        src={`/images/${locale}/slide1.jpg`}
        alt="slide1"
        className="h-full w-full object-contain"
        width={684}
        height={967}
      />
    </CarouselSlide>
  )
}
