import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";

export const Slide9_2: React.FC = () => {
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
    <CarouselSlide className="p-[30px]">
      <div className="flex flex-col gap-[30px] max-w-[100%] max-h-[90%] w-full">
        {/* first row */}
        <div className="flex flex-row gap-[30px] max-h-[25%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_electricosYBateria.jpg`}
            alt="electricos y bateria"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("electricosBateria")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_gasolina.jpg`}
            alt="gasolina"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("gasolina")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>
        {/* second row */}

        <div className="flex flex-row gap-[30px] max-h-[25%">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_profesionales.jpg`}
            alt="cortacesped profesionales"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("profesional")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_manuales.jpg`}
            alt="cortacesped manuales"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("manual")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>

        {/* third row */}

        <div className="flex flex-row gap-[30px] max-h-[25%">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_flotante.jpg`}
            alt="cortacesped flotante"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("flotante")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide9/carousel_escarificadores.jpg`}
            alt="cortacesped escarificadores"
            imgClassName="!max-h-[97.5%] !max-w-[90%] p-30"
            onClick={() => setOpenDialog("escarificador")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
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
  );
};
