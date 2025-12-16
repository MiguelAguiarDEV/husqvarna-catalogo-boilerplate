import { useRouter } from "next/router";
import { useState } from "react";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabelEnum, MenuLabels } from "../Header";
import { motion } from "framer-motion";

interface Slide3_2Props {
  onClickMenu: (label: MenuLabels) => void;
}
export const Slide3_2: React.FC<Slide3_2Props> = ({ onClickMenu }) => {
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    540: [
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/540xp-mark-iii/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/motosierra-540xp-mark-iii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 540 XP Mark III",
          id: locale === "pt" ? "27003" : "9457",
          price: locale === "pt" ? "" : "399",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/540i-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierra-540ixp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 540i XP",
          id: locale === "pt" ? "11116" : "30213",
          price: locale === "pt" ? "539" : "569",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/545mark2/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-545-mark-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 545 Mark II",
          id: locale === "pt" ? "11040" : "12882",
          price: locale === "pt" ? "679" : "699",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserra-bateria-535i-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/motosierra-535i-xp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 535i XP",
          id: locale === "pt" ? "10913" : "12875",
          price: locale === "pt" ? "429" : "449",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_05.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/550xp-mark2/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-550-xp-mark-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 550 XP Mark II",
          id: locale === "pt" ? "11038" : "12910",
          price: locale === "pt" ? "729" : "769",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/540-dialog/carrousel-motosierra_profesional_06.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/365-x-torq/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-365/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 365",
          id: locale === "pt" ? "10070" : "12040",
          price: locale === "pt" ? "769" : "829",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
    372: [
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/motosserra-372-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-372xp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 372 XP",
          id: locale === "pt" ? "9469" : "11721",
          price: locale === "pt" ? "849" : "899",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/motosserra-572xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-572xp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 572 XP",
          id: locale === "pt" ? "10660" : "12731",
          price: locale === "pt" ? "949" : "999",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/560-xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-560xp-autotune/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 560 XP",
          id: locale === "pt" ? "10097" : "12054",
          price: locale === "pt" ? "1129" : "1199",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/562xp-mark2/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-562xp-mark2/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 562 XP",
          id: locale === "pt" ? "10478" : "12179",
          price: locale === "pt" ? "1219" : "1219",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_05.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/585/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-585/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 585",
          id: locale === "pt" ? "23766" : "18634",
          price: locale === "pt" ? "1299" : "1399",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/372-dialog/carrusel-motosierra_profesional_forestal_06.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/592xp/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-592-xp/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 592 XP",
          id: locale === "pt" ? "23771" : "18631",
          price: locale === "pt" ? "1499" : "1599",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
  };

  return (
    <CarouselSlide key="4_2" className="p-[30px]  !bg-[#EEEEED]">
      <div className="flex flex-row gap-[15px]">
        {/* LEFT HALF */}
        <div className="flex flex-col gap-[15px]">
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.RECORTE_Y_DESBROCE)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/recorteDesbroce.png`}
            alt="Recorte y desbroce"
            className=" object-fill"
            width={260}
            height={463}
          />
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.CUIDADO_DEL_SUELO)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/cuidadoSuelo.png`}
            alt="Cuidado del suelo"
            className=" object-fill"
            width={260}
            height={304}
          />
        </div>
        {/* RIGHT HALF */}
        <div className="flex flex-col gap-[15px]">
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.RESPECTO_A_LA_NATURALEZA)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/respetoNaturaleza.png`}
            alt="Respeto por la naturaleza"
            className=" object-fill"
            width={260}
            height={384}
          />
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.GENERADORES_Y_MOTOBOMBAS)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/generadores.png`}
            alt="Generadores y motobombas"
            className=" object-fill"
            width={260}
            height={169}
          />
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.ROPA_Y_ACCESORIOS)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/ropa.png`}
            alt="Ropa y accesorios"
            className=" object-fill"
            width={260}
            height={199}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
