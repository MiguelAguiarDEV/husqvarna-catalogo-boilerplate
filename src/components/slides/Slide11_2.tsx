import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { ProductsDialog } from "../ProductsDialog";
import { useState } from "react";

export const Slide11_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    profesional: [
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_00_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/r420tsx-awd/"
            : "https://tiendahusqvarna.es/cortacesped/riders/rider-r-420tsx-awd/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_01_v2.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/tratores-corta-relva-frontais/p524x/"
            : "https://www.husqvarna.com/es/riders/p524x/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_02_v2.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/tratores-corta-relva-frontais/p524xr-efi/"
            : "https://www.husqvarna.com/es/riders/p524xr-efi/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_03_v2.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/tratores-corta-relva-frontais/p525dx-com-cabine/"
            : "https://www.husqvarna.com/es/riders/p525dx-cabina/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_04_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/"
            : "https://tiendahusqvarna.es/cortacesped/riders/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_05_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/"
            : "https://tiendahusqvarna.es/cortacesped/riders/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide11/profesional/carrusel-rider-pro_06_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/"
            : "https://tiendahusqvarna.es/cortacesped/riders/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide>
        <div className="flex flex-col gap-[30px] py-[20px] pr-[30px] pl-0 w-full relative">
          {/* upper content */}

          <div className="pb-0 w-full max-h-[65.35%] h-full relative">
            <Image
              src={`/images/${locale}/slide11/backgroundRight.png`}
              alt="background left"
              className="object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "95%", height: "auto" }}
            />
          </div>
          {/* lower content */}
          <div className="pl-[30px] max-w-[50%]">
            {/* left */}

            <ProductCard
              imageSrc={`/images/${locale}/slide11/carousel_ridersProfesional.jpg`}
              alt="riders profesionales"
              imgClassName="!max-w-[22.39%px]"
              onClick={() => setOpenDialog("profesional")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />
          </div>
          <Image
            src={`/images/${locale}/slide11/riderImage.png`}
            alt="riders residencial"
            className="object-cover absolute bottom-[4%] right-[0px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "53%", height: "auto" }}
          />
        </div>

        <ProductsDialog
          open={openDialog !== null}
          onClose={() => setOpenDialog(null)}
          images={
            openDialog
              ? productDialogImages[
              openDialog as keyof typeof productDialogImages
              ]
              : []
          }
        />
      </CarouselSlide>
    </>
  );
};
