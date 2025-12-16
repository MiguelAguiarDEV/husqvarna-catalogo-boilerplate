import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabelEnum, MenuLabels } from "../Header";
import { motion } from "framer-motion";
interface Slide6_2Props {
  onClickMenu: (label: MenuLabels) => void;
}
export const Slide6_2: React.FC<Slide6_2Props> = ({ onClickMenu }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    120: [
      {
        src: `/images/${locale}/slide6/120-dialog/carrusel-soplador_bateria_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-bateria/120ib/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-bateria/kit-soplador-120ib/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 120iB",
          id: locale === "pt" ? "11120" : "12966",
          price: locale === "pt" ? "359" : "349",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/120-dialog/carrusel-soplador_bateria_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-bateria/soprador-folhas-a-bateria-525ib/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-bateria/soplador-525ib/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525iB",
          id: locale === "pt" ? "10929" : "12792",
          price: locale === "pt" ? "279" : "269",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/120-dialog/carrusel-soplador_bateria_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-530ibx/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-530ibx/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 530iBX",
          id: locale === "pt" ? "10661" : "12733",
          price: locale === "pt" ? "459" : "449",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/120-dialog/carrusel-soplador_bateria_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/sopradores/sopradores-bateria/soprador-folhas-a-bateria-550ibtx/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/sopladores/soplador-bateria/soplador-550ibtx/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 550iBTX",
          id: locale === "pt" ? "10930" : "12881",
          price: locale === "pt" ? "639" : "629",
          category: "Soplador",
          variant: "Soplador",
        },
      },
    ],
    125: [
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/gasolina/soprador-125b/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-125b/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 125B",
          id: locale === "pt" ? "9696" : "11896",
          price: locale === "pt" ? "229" : "219",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/525bx/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-525bx/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525BX",
          id: locale === "pt" ? "10427" : "12172",
          price: locale === "pt" ? "399" : "399",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/soprador-360bt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-345bt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 345BT",
          id: locale === "pt" ? "27145" : "25469",
          price: locale === "pt" ? "399" : "399",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/soprador-350bt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-350bt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 350BT",
          id: locale === "pt" ? "9699" : "11899",
          price: locale === "pt" ? "499" : "499",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_05.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/soprador-345bt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-360bt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 360BT",
          id: locale === "pt" ? "27142" : "25473",
          price: locale === "pt" ? "599" : "599",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_06.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/570-bts/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-570bts/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 570BTS",
          id: locale === "pt" ? "10074" : "12042",
          price: locale === "pt" ? "699" : "699",
          category: "Soplador",
          variant: "Soplador",
        },
      },
      {
        src: `/images/${locale}/slide6/125-dialog/carrusel-soplador_07.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/sopradores/sopradores-gasolina/580-bts/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/sopladores/soplador-gasolina/soplador-580bts/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 580BTS",
          id: locale === "pt" ? "10075" : "12043",
          price: locale === "pt" ? "799" : "749",
          category: "Soplador",
          variant: "Soplador",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide key="2" className="p-[30px] pl-0">
        <div className="flex flex-col gap-[30px] pr-0">
          {/* upper content */}
          <div className="flex align-center items-center w-full h-full max-w-[1130px] max-h-[511px]">
            <Image
              src={`/images/${locale}/slide6/midBackgroundRight.png`}
              alt="slide6"
              className="h-full w-full object-cover"
              width={1130}
              height={511}
            />
          </div>
          {/* bottom content */}
          <div className="flex flex-row gap-[30px]">
            {/* right page content */}
            <div className="flex flex-row gap-[15px] w-full items-center justify-center">
              <div className="max-w-[253px] max-h-[231px] w-full h-full">
                <motion.img
                  onClick={() => onClickMenu(MenuLabelEnum.TRACTORES)}
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                  src={`/images/${locale}/slide6/tractores.jpg`}
                  alt="Tractores"
                  width={253}
                  height={231}
                />
              </div>
              <div className="max-w-[253px] max-h-[231px] w-full h-full">
                <motion.img
                  onClick={() => onClickMenu(MenuLabelEnum.RIDERS)}
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                  src={`/images/${locale}/slide6/riders.jpg`}
                  alt="Riders"
                  width={253}
                  height={231}
                />
              </div>
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
