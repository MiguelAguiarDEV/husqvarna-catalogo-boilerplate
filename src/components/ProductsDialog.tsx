import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Dialog } from "./Dialog";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/utils/misc";
import { Swiper as SwiperType } from "swiper";
import { Icon } from "./ui/icon";
import Image from "next/image";
import { pushBuyProduct, pushPopupToDataLayer } from "@/utils/analytics";
import { ProductImage, SupportedLocale } from "@/types";

type Props = {
  open: boolean;
  onClose: () => void;
  images: ProductImage[];
  defaultActiveSlide?: number;
};

export const ProductsDialog = ({
  open,
  onClose,
  images,
  defaultActiveSlide = 0,
}: Props) => {
  const router = useRouter();
  const locale = (router.query.locale as SupportedLocale) || "es";
  const [activeSlide, setActiveSlide] = useState(defaultActiveSlide);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleClose = () => {
    onClose();
    setActiveSlide(0);
  };

  const handlePrevSlide = () => {
    swiper?.slidePrev();
    pushPopupToDataLayer(images[swiper?.realIndex ?? 0]?.productData);
  };

  const handleNextSlide = () => {
    swiper?.slideNext();
    pushPopupToDataLayer(images[swiper?.realIndex ?? 0]?.productData);
  };

  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === images.length - 1;

  useEffect(() => {
    if (open) {
      if (images[activeSlide]) {
        pushPopupToDataLayer(images[activeSlide]?.productData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={`
        relative h-[80%] max-w-[80%]

        sm:h-[90vh]
      `}
      containerClassName="py-10"
    >
      <div
        className={`
          absolute left-0 right-0 top-1/2 -translate-y-1/2

          lg:left-12 lg:right-12
        `}
      >
        <Carousel
          slides={images.map((image, index) => (
            <>
              {image.href && image.href.length > 0 ? (
                <Link
                  key={index}
                  target="_blank"
                  href={image.href}
                  onClick={() => {
                    pushBuyProduct(
                      image.productData.category,
                      locale,
                      image.productData.name
                    );
                  }}
                >
                  <Image
                    className="h-full w-full object-cover ProductDialogImage"
                    src={image.src}
                    alt={`Product image ${index + 1}`}
                    width={923}
                    height={674}
                  />
                </Link>
              ) : (
                <Image
                  className="h-full w-full object-cover ProductDialogImage"
                  src={image.src}
                  alt={`Product image ${index + 1}`}
                  width={923}
                  height={674}
                />
              )}
            </>
          ))}
          spaceBetween={0}
          slidesPerView={1}
          activeIndex={activeSlide}
          onActiveIndexChange={(index) => setActiveSlide(index)}
          swiper={swiper ?? undefined}
          setSwiper={setSwiper}
          showArrows={false}
        />
      </div>
      {images.length > 1 && (
        <>
          {/* Custom arrow buttons */}
          {!isFirstSlide && (
            <button
              className={`
            absolute left-2 top-1/2 z-10 flex h-11 w-[30px] -translate-y-1/2
            items-center justify-center rounded-[4px] bg-[#f25421] text-white
            shadow-md transition-colors duration-200

            hover:bg-[#d94b1a]
          `}
              onClick={handlePrevSlide}
            >
              <Icon name="chevron-left" size="20px" />
            </button>
          )}
          {!isLastSlide && (
            <button
              className={`
            absolute right-2 top-1/2 z-10 flex h-11 w-[30px] -translate-y-1/2
            items-center justify-center rounded-[4px] bg-[#f25421] text-white
            shadow-md transition-colors duration-200

            hover:bg-[#d94b1a]
          `}
              onClick={handleNextSlide}
            >
              <Icon name="chevron-right" size="20px" />
            </button>
          )}
          <div className="absolute bottom-14 left-0 right-0 flex justify-center">
            <div className="flex rounded-full bg-[#f25421] px-3 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "mx-1 h-2 w-2 rounded-full bg-white",
                    index !== activeSlide && "opacity-60"
                  )}
                  onClick={() => swiper?.slideTo(index)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
};
