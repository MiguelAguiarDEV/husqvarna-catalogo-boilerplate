import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

interface Slide14Props {
  isActive: boolean;
}

export const Slide14: React.FC<Slide14Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    bateria: [
      {
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_00_v2.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/aspire/soprador-aspire-b8x-p4a/"
            : "https://tiendahusqvarna.com/aspire/kit-soplador-aspire-b8x-p4a/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-bateria/120ib/"
            : "https://tiendahusqvarna.com/sopladores/soplador-bateria/kit-soplador-120ib/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/120ib/"
            : "https://tiendahusqvarna.es/sopladores/soplador-bateria/kit-soplador-120ib/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-340ibt/"
            : "https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-340ibt/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-525ib-mark2/"
            : "https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-525ib/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-530ibx/"
            : "https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-530ibx/",
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
        src: `/images/${locale}/slide14/bateria/carrusel-soplador-bat_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-550ibtx/"
            : "https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-550ibtx/",
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
    gasolina: [
      {
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/gasolina/soprador-125b/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-125b/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/soprador-125-bvx/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-125bvx/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/525bx/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-525bx/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/soprador-345bt/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-345bt/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/soprador-350bt/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-350bt/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/soprador-360bt/"
            : "https://tiendahusqvarna.es/sopladores/soplador-360bt/",
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
        src: `/images/${locale}/slide14/gasolina/carrusel-soplador-gas_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-gasolina/570-bts/"
            : "https://tiendahusqvarna.es/sopladores/soplador-gasolina/soplador-570bts/",
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
    motoazadas: [
      {
        src: `/images/${locale}/slide14/motoazadas/carrusel-motocultor-motoazada_00.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/motoenxadas/tr348/"
            : "https://www.husqvarna.com/pt/motoazadas/tr348/",
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
        src: `/images/${locale}/slide14/motoazadas/carrusel-motocultor-motoazada_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motoenxadas/tf230/"
            : "https://tiendahusqvarna.es/motoazadas/motoazadas-gasolina/motoazada-tf230/",
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
        src: `/images/${locale}/slide14/motoazadas/carrusel-motocultor-motoazada_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motoenxadas/tf338/"
            : "https://tiendahusqvarna.es/motoazadas/motoazadas-gasolina/motoazada-tf338/",
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
    nieve: [
      {
        src: `/images/${locale}/slide14/nieve/carrusel-soplador-nieve_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/limpa-neves/husqvarna-st-227p/"
            : "https://tiendahusqvarna.es/soplanieves/quitanieves-st227p/",
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
        src: `/images/${locale}/slide14/nieve/carrusel-soplador-nieve_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/limpa-neves/st427t/"
            : "https://tiendahusqvarna.es/soplanieves/soplanieves-st-427t/",
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
      <CarouselSlide className="p-[30px] ">
        <div className="flex flex-row gap-4">
          {/* left */}

          <div className="flex flex-col gap-[30px]">
            <Image
              src={`/images/${locale}/slide14/cuidadoSuelo.png`}
              alt="Cuidado del suelo"
              width={535}
              height={510}
            />
            <Image
              src={`/images/${locale}/slide14/cuidadoTerreno.png`}
              alt="Cuidado del terreno"
              width={535}
              height={241}
            />
          </div>
          {/* right */}
          <div className="flex flex-col justify-between h-auto max-h-[842px] z-10 relative">
            <div className="flex flex-row gap-5 z-10">
              <ProductCard
                imageSrc={`/images/${locale}/slide14/sopladoresBateria.png`}
                alt="Sopladores con batería"
                imgClassName="!max-h-[242px] !max-w-[264px] p-30"
                onClick={() => setOpenDialog("bateria")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
              <ProductCard
                imageSrc={`/images/${locale}/slide14/sopladoresGasolina.png`}
                alt="Sopladores con gasolina"
                imgClassName="!max-h-[242px] !max-w-[264px] p-30"
                onClick={() => setOpenDialog("gasolina")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="flex flex-row gap-5 justify-between z-10">
              <ProductCard
                imageSrc={`/images/${locale}/slide14/sopladoresNieve.png`}
                alt="Sopladores con nieve"
                imgClassName="!max-h-[259px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("nieve")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
              <ProductCard
                imageSrc={`/images/${locale}/slide14/motoazadas.png`}
                alt="Motoazadas"
                imgClassName="!max-h-[259px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("motoazadas")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <Image
              src={`/images/${locale}/slide14/background.png`}
              alt="Fondo"
              className="absolute right-[-30px] top-[0px] z-0"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
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
