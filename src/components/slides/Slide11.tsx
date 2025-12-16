import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

interface Slide11Props {
  isActive: boolean;
}

export const Slide11: React.FC<Slide11Props> = ({ isActive }) => {
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
        <div className="flex flex-col gap-[30px] w-full relative">
          {/* upper content */}
          <div className="p-[30px] pb-0 w-full max-h-[65.35%] h-full relative">
            <Image
              src={`/images/${locale}/slide11/background.png`}
              alt="background left"
              className="object-cover"
              width={1130}
              height={511}
            />
            <Image
              src={`/images/${locale}/slide11/backgroundItem.png`}
              alt="background item"
              className="object-cover absolute bottom-[7.82%] left-[70px]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20.43%", height: "auto" }}
            />
          </div>
          {/* lower content */}
          <div className="pl-[30px] flex flex-row max-w-[75%] gap-[60px]">
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

              {/* right */}
              <ProductCard
                imageSrc={`/images/${locale}/slide11/carousel_ridersProfesional.jpg`}
                alt="riders profesionales"
                imgClassName="!max-h-[241px] !max-w-[22.39%px]"
                onClick={() => setOpenDialog("profesional")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
          </div>
          <Image
            src={`/images/${locale}/slide11/riderImage.png`}
            alt="riders residencial"
            className="object-cover absolute bottom-[0px] right-[0px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "27.7%", height: "auto" }}
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
