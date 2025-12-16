import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

interface Slide11_1 {
  isActive: boolean;
}

export const Slide11_1: React.FC<Slide11_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    bateria: [
      {
        src: `/images/${locale}/slide11/bateria/carrusel-rider-bateria_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/r200ix/"
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
    residencial: [
      {
        src: `/images/${locale}/slide11/residencial/carrusel-rider-residencial_00_v3.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/r214tc-comfort-edition/"
            : "https://tiendahusqvarna.es/riders/rider-r-214tc-confort/",
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
        src: `/images/${locale}/slide11/residencial/carrusel-rider-residencial_01_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/r216t-awd/"
            : "https://tiendahusqvarna.es/cortacesped/riders/rider-r216t-awd/",
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
        src: `/images/${locale}/slide11/residencial/carrusel-rider-residencial_02_v2.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/tratores-corta-relva-frontais/r316tx-awd/"
            : "https://www.husqvarna.com/es/riders/r316tx-awd/",
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
        src: `/images/${locale}/slide11/residencial/carrusel-rider-residencial_03_v2-1.png`,
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
        src: `/images/${locale}/slide11/residencial/carrusel-rider-residencial_03_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-relva/riders/r316tx-awd/"
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
      <CarouselSlide className="pl-[30px] py-[20px] pr-0">
        <div className="flex flex-col gap-[30px] pr-0 w-full relative">
          {/* upper content */}

          <div className="pb-0 w-full max-h-[65.35%] h-full relative">
            <Image
              src={`/images/${locale}/slide11/backgroundLeft.png`}
              alt="background left"
              className="object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "95%", height: "auto" }}
            />
            <Image
              src={`/images/${locale}/slide11/backgroundItem.png`}
              alt="background item"
              className="object-cover absolute bottom-[7%] left-[7%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "40.86%", height: "auto" }}
            />
          </div>
          {/* lower content */}
          <div className="pr-[30px] flex flex-row max-w-[100%] gap-[60px]">
            {/* left */}
            <div className="flex flex-row gap-[30px] place-items-baseline ">
              <ProductCard
                imageSrc={`/images/${locale}/slide11/carousel_ridersBateria.jpg`}
                alt="riders batería"
                imgClassName="!max-h-[241px] !max-w-[22.39%px]"
                onClick={() => setOpenDialog("bateria")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />

              <ProductCard
                imageSrc={`/images/${locale}/slide11/carousel_ridersResidencial.jpg`}
                alt="riders residencial"
                imgClassName="!max-h-[241px] !max-w-[22.39%px]"
                onClick={() => setOpenDialog("residencial")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
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
