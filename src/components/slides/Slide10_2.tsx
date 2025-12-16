import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

export const Slide10_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    tractoresSinRecogedor: [
      {
        src: `/images/${locale}/slide10/tractorSinRecogedor/carrusel-tractor-sin-rec_00_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/ts112/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/tractor-t-s112/",
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
        src: `/images/${locale}/slide10/tractorSinRecogedor/carrusel-tractor-sin-rec_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/ts114/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/tractor-t-s114/",
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
        src: `/images/${locale}/slide10/tractorSinRecogedor/carrusel-tractor-sin-rec_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/",
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
    tractoresConRecogedor: [
      {
        src: `/images/${locale}/slide10/tractorConRecogedor/carrusel-tracto-rec_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/tc112/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/tractor-tc-112/",
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
        src: `/images/${locale}/slide10/tractorConRecogedor/carrusel-tracto-rec_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/tc114/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/tractor-tc-114/",
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
        src: `/images/${locale}/slide10/tractorConRecogedor/carrusel-tracto-rec_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/",
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
        src: `/images/${locale}/slide10/tractorConRecogedor/carrusel-tracto-rec_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/"
            : "https://tiendahusqvarna.es/tractores-cortacesped/",
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
        src: `/images/${locale}/slide10/tractorConRecogedor/carrusel-tracto-rec_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/tratores/tc242t/"
            : "https://tiendahusqvarna.es/cortacesped/tractores/tractor-tc242t/",
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
      <CarouselSlide className="p-[30px] pl-0">
        <div className="flex flex-row gap-[30px] items-center max-w-[100%]">
          {
            // left
          }
          <div className="flex flex-col gap-[30px] w-1/2">
            <Image
              src={`/images/${locale}/slide10/midBackgroundRight.png`}
              alt="background left"
              className="object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="w-full">
              <Image
                src={`/images/${locale}/slide10/adaptaSegunTemporadaRight.jpg`}
                alt="adapta según temporada"
                className="object-cover"
                width={283}
                height={241}
              />
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[30px]">
            {/* first element */}

            <ProductCard
              imageSrc={`/images/${locale}/slide10/carousel_sinRecogedor.jpg`}
              alt="carousel automower"
              imgClassName="w-full p-30"
              onClick={() => setOpenDialog("tractoresSinRecogedor")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            {/* second element */}

            <ProductCard
              imageSrc={`/images/${locale}/slide10/carousel_conRecogedor.jpg`}
              alt="carousel automower"
              imgClassName="w-full p-30"
              onClick={() => setOpenDialog("tractoresConRecogedor")}
              variant="floating"
              buttonText=""
              buttonClassName="hidden"
            />

            {/* third element */}

            <Image
              src={`/images/${locale}/slide10/accesorios.jpg`}
              alt="accesorios"
              className="object-cover"
              width={252}
              height={241}
            />
          </div>
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
