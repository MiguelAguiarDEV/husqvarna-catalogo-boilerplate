import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide5Props {
  isActive: boolean;
}

export const Slide5_1: React.FC<Slide5Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    435: [
      {
        src: `/images/${locale}/slide5/435-dialog/carrusel-motosierra_poda_profesional_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/t435/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-t435/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna T435",
          id: locale === "pt" ? "9476" : "11727",
          price: locale === "pt" ? "379" : "399",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide5/435-dialog/carrusel-motosierra_poda_profesional_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/t525/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-t525/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna T525",
          id: locale === "pt" ? "10625" : "12259",
          price: locale === "pt" ? "429" : "449",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide5/435-dialog/carrusel-motosierra_poda_profesional_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/540xp-mark-iii/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/motosierra-540xp-mark-iii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna T540XP Mark III",
          id: locale === "pt" ? "27003" : "9457",
          price: locale === "pt" ? "669" : "669",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
    535: [
      {
        src: `/images/${locale}/slide5/535-dialog/carrusel-motosierra_poda_profesional_bateria_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserra-poda-bateria-t535i-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/motosierra-t535i-xp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 535i XP",
          id: locale === "pt" ? "10913" : "12827",
          price: locale === "pt" ? "539" : "569",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide5/535-dialog/carrusel-motosierra_poda_profesional_bateria_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/t540i-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierra-t540ixp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 540i XP",
          id: locale === "pt" ? "11116" : "12827",
          price: locale === "pt" ? "569" : "599",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide key="2" className="p-[30px] pr-0">
        <div className="flex flex-col gap-[30px]">
          {/* upper content */}
          <div className="flex align-center items-center w-full h-full max-w-[1130px] max-h-[511px]">
            <Image
              src={`/images/${locale}/slide5/midBackgroundLeft.png`}
              alt="background nueva gama aspire"
              className="h-full w-full object-cover"
              width={1130}
              height={511}
            />
          </div>
          {/* bottom content */}
          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-row gap-[15px] w-full items-center justify-center">
              <div className="max-w-[260px] max-h-[241px] w-full h-full">
                <Image
                  src={`/images/${locale}/slide5/pruebaSistema.jpg`}
                  alt="Prueba el sistema de energía variable"
                  width={260}
                  height={241}
                />
              </div>
              <div className="max-w-[260px] max-h-[241px] w-full h-full">
                <Image
                  src={`/images/${locale}/slide5/queAutonomia.jpg`}
                  alt="¿Que autonomía tiene la batería?"
                  width={260}
                  height={241}
                />
              </div>
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
