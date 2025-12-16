import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

interface Slide9Props {
  isActive: boolean;
}

export const Slide9: React.FC<Slide9Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    gasolina: [
      {
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_00_v2.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_01_v2.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_02_v2.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_03.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_04.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_05.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_06.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_07.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_08.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_09.png`,
        href: "",
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
        src: `/images/${locale}/slide9/gasolina/carrusel-cortacesped-gasolina_10.png`,
        href: "",
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
    electricosBateria: [
      {
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_00.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_01.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_02.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_03.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_04.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_05.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_06.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_07.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_08.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_09.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_10.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_11.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_12.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_13.png`,
        href: "",
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
        src: `/images/${locale}/slide9/electricosBateria/carrusel-cortacesped_bat-elec_14.png`,
        href: "",
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
    escarificador: [
      {
        src: `/images/${locale}/slide9/escarificadores/carrusel-escarificador_00.png`,
        href: "",
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
        src: `/images/${locale}/slide9/escarificadores/carrusel-escarificador_01.png`,
        href: "",
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
    manual: [
      {
        src: `/images/${locale}/slide9/manuales/carrusel-cortacesped-manual_00.png`,
        href: "",
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
        src: `/images/${locale}/slide9/manuales/carrusel-cortacesped-manual_01.png`,
        href: "",
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
        src: `/images/${locale}/slide9/profesionales/carrusel-cortacesped-profesional_00.png`,
        href: "",
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
        src: `/images/${locale}/slide9/profesionales/carrusel-cortacesped-profesional_01.png`,
        href: "",
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
    flotante: [
      {
        src: `/images/${locale}/slide9/flotante/carrusel-cortacesped-flotante_00.png`,
        href: "",
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
      <CarouselSlide className="p-[30px]">
        <div className="flex flex-row gap-3">
          {/* left */}
          <div className="flex flex-col w-1/2 ">
            {/* upper content */}
            <div className="max-w-[535px] max-h-[511px] w-full h-full">
              <Image
                src={`/images/${locale}/slide9/midBackgroundLeft.png`}
                alt="background left"
                className="w-full h-full object-cover"
                width={535}
                height={511}
              />
            </div>
            {/* lower content */}
            <div className="flex flex-row gap-[15px] mt-[5%]">
              <div className="w-[260px] h-[241px]">
                <Image
                  src={`/images/${locale}/slide9/corteAltoNivel.jpg`}
                  alt="corte de algo nivel con un cortacesped Husqvarna"
                  className="object-cover"
                  width={260}
                  height={241}
                />
              </div>
              <div className="w-[260px] h-[241px]">
                <Image
                  src={`/images/${locale}/slide9/resistentesFiables.jpg`}
                  alt="resistentes y fiables"
                  className="object-cover"
                  width={260}
                  height={241}
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="grid grid-cols-2 w-1/2 grid-rows-3 gap-[5%]">
            {/* first row */}
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_electricosYBateria.jpg`}
                alt="electricos y bateria"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("electricosBateria")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_gasolina.jpg`}
                alt="gasolina"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("gasolina")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            {/* second row */}
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_profesionales.jpg`}
                alt="cortacesped profesionales"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("profesional")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_manuales.jpg`}
                alt="cortacesped manuales"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("manual")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            {/* third row */}
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_flotante.jpg`}
                alt="cortacesped flotante"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("flotante")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="w-full max-w-[253px] h-full max-h-[241px]">
              <ProductCard
                imageSrc={`/images/${locale}/slide9/carousel_escarificadores.jpg`}
                alt="cortacesped escarificadores"
                imgClassName="!max-h-[241px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("escarificador")}
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
