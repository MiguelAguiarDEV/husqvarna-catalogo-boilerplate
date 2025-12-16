import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { CarouselSlide } from "../CarouselSlide";
import { motion } from "framer-motion";
import { MenuLabelEnum, MenuLabels } from "../Header";

interface Slide3_1Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide3_1: React.FC<Slide3_1Props> = ({
  isActive,
  onClickMenu,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);
  const productDialogImages = {
    120: [
      {
        src: `/images/${locale}/slide3/120-dialog/carrousel-motosierra_uso_residencial_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/120markii/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-120-mark-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Motosierra 120 Mark II",
          id: locale === "pt" ? "10667" : "12732",
          price: locale === "pt" ? "179" : "199",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/120-dialog/carrousel-motosierra_uso_residencial_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/135markii/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-135-mark-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Motosierra 135 Mark II",
          id: locale === "pt" ? "11083" : "12732",
          price: locale === "pt" ? "279" : "299",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/120-dialog/carrousel-motosierra_uso_residencial_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/225i/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/motosierras/kit-motosierra-225i/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 225i",
          id: locale === "pt" ? "25523" : "25523",
          price: locale === "pt" ? "399" : "429",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
    440: [
      {
        src: `/images/${locale}/slide3/440-dialog/carrousel-motosierra_uso_intensivo_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/motosserra-440/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-440ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 440 II",
          id: locale === "pt" ? "9457" : "9457",
          price: locale === "pt" ? "379" : "399",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/440-dialog/carrousel-motosierra_uso_intensivo_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/545mark2/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-545-mark-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 450 II",
          id: locale === "pt" ? "11040" : "11718",
          price: locale === "pt" ? "479" : "499",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/440-dialog/carrousel-motosierra_uso_intensivo_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/motosserra-455-e-series-rancher/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-455-rancher/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 455 Rancher",
          id: locale === "pt" ? "9461" : "12220",
          price: locale === "pt" ? "579" : "599",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
      {
        src: `/images/${locale}/slide3/440-dialog/carrousel-motosierra_uso_intensivo_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-gasolina/460rancher/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-gasolina/motosierra-460-rancher/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 460 Rancher",
          id: locale === "pt" ? "9462" : "11720",
          price: locale === "pt" ? "679" : "699",
          category: "Motosierra",
          variant: "Motosierra",
        },
      },
    ],
  };

  return (
    <CarouselSlide key="4_1" className="p-[30px] !bg-[#EEEEED]">
      <div className="flex flex-col gap-[15px]">
        {/* Upper half */}
        <div className="h-full max-h-[384px] w-full max-w-[535px]">
          <motion.img
            onClick={() => onClickMenu(MenuLabelEnum.CORTE_Y_TALA)}
            whileHover={{ scale: 1.1 }}
            loading="lazy"
            src={`/images/${locale}/slide3/corteYTala.png`}
            alt="Corte y Tala"
            className="h-full w-full object-fill"
            width={535}
            height={384}
          />
        </div>
        {/* Lower half */}
        <div className="flex flex-row gap-[15px]">
          <div className="h-full max-h-[383px] w-full max-w-[260px]">
            <motion.img
              onClick={() => onClickMenu(MenuLabelEnum.CUIDADO_DEL_CESPED)}
              whileHover={{ scale: 1.1 }}
              loading="lazy"
              src={`/images/${locale}/slide3/ciudadoCesped.png`}
              alt="Cuidado del césped"
              className="h-full w-full object-fill"
              width={260}
              height={383}
            />
          </div>
          <div className="h-full max-h-[383px] w-full max-w-[260px]">
            <motion.img
              onClick={() => onClickMenu(MenuLabelEnum.LIMPIEZA)}
              whileHover={{ scale: 1.1 }}
              loading="lazy"
              src={`/images/${locale}/slide3/limpieza.png`}
              alt="Limpieza"
              className="h-full w-full object-fill"
              width={260}
              height={383}
            />
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
