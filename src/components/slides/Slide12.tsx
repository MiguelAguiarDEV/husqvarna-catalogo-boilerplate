import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

interface Slide12Props {
  isActive: boolean;
}

export const Slide12: React.FC<Slide12Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    cuidadoArboles: [
      {
        src: `/images/${locale}/slide12/cuidadoArboles/carrusel-motosierra-arboles_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/t435/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-t435/",
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
        src: `/images/${locale}/slide12/cuidadoArboles/carrusel-motosierra-arboles_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/t525/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-t525/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18637",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide12/cuidadoArboles/carrusel-motosierra-arboles_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/540xp-mark-iii/"
            : "https://tiendahusqvarna.es/motosierras/motosierra-t540xp-mark-iii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18638",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide12/cuidadoArboles/carrusel-motosierra-arboles_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/podadora-vara-525p4s/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/podadora-525p4s/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18639",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide12/cuidadoArboles/carrusel-motosierra-arboles_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/525pt5s/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/podadora-525pt5s/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18640",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
    electricasYBateria: [
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/aspire/podador-mao-aspire-p5-p4a/"
            : "https://tiendahusqvarna.es/aspire/podadora-de-mano-aspire-p5-p4a/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_01.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/podadoras-com-vara/aspire-pe5-p4a-sem-bateria-e-carregador/"
            : "https://tiendahusqvarna.es/aspire/podadora-telescopica-aspire-pe5-p4a/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/serra-eletrica-420el/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-electricas/motosierra-420el/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/225i/"
            : "https://tiendahusqvarna.es/motosierras-bateria/motosierra-225i/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_04.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/motosserras/motosserra-225i/"
            : "https://tiendahusqvarna.es/motosierras/kit-motosierra-225i/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_05.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/motosserras/240i-com-bateria-e-carregador/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/motosierra-240i/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/"
            : "https://tiendahusqvarna.es/motosierras/kit-motosierra-240i/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_07.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/bateria/435i/"
            : "https://tiendahusqvarna.es/motosierras/motosierra-435i/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_08.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserra-bateria-535i-xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/motosierra-535i-xp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_09.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/540i-xp/"
            : "https://tiendahusqvarna.es/motosierra-540ixp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_10.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserra-poda-bateria-t535i-xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/motosierra-t535i-xp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_11.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/t540i-xp/"
            : "https://tiendahusqvarna.es/motosierra-t540ixp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_12.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motoserras/motosserras-bateria/542i-xp/"
            : "https://tiendahusqvarna.es/equipamiento-arboricultura/motosierra-542ixp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_13.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/t542i-xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/motosierra-t542ixp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_14.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/podadora-a-bateria-120itk4-p/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/podadora-120itk4-p/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_15.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/corta-sebes/120itk4-h-com-bateria-e-carregador/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/kit-podadora-120itk4p/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_16.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-bateria/podadora-a-bateria-120itk4-ph/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/kit-120itk4-ph/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_17.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/podadora-vara-bateria-530ip4/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/podadora-530ip4/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_18.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/podadora-vara-bateria-530ipx/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/podadora-530ipx/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/electricaBateria/carrusel-motosierra-elbat_19.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-bateria/podadora-vara-bateria-530ipt5/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-bateria/podadora-530ipt5/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
    ],
    hobby: [
      {
        src: `/images/${locale}/slide12/hobby/carrusel-motosierra_hobby_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/120markii/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-120-mark-ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/hobby/carrusel-motosierra_hobby_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/130/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-130/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/hobby/carrusel-motosierra_hobby_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/135markii/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-135-mark-ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
    ],
    multiuso: [
      {
        src: `/images/${locale}/slide12/multiuso/carrusel-motosierra_multiuso_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/motosserra-440/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-440ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/multiuso/carrusel-motosierra_multiuso_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/motosserra-450/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-450-ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/multiuso/carrusel-motosierra_multiuso_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/motosserra-455-e-series-rancher/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-455-rancher/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
      {
        src: `/images/${locale}/slide12/multiuso/carrusel-motosierra_multiuso_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/460rancher/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-460-rancher/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18648",
          price: "399",
          category: "Eléctrica",
          variant: "Eléctrica",
        },
      },
    ],
    profesionales: [
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/545mark2/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-545-mark-ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18664",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/365-x-torq/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-365/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18665",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/565/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-565/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18666",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/540xp-mark-iii/"
            : "https://tiendahusqvarna.es/motosierras/motosierra-t540xp-mark-iii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18667",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/550xp-mark2/"
            : "https://www.husqvarna.com/es/motosierras/550xp-mark-ii/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18668",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/560-xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-560xp-autotune/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18669",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18670",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_07.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/motosserra-372-xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-372xp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18671",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_08.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-gasolina/motosserra-572xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-572xp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18672",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_09.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/585/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-585/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18673",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
      {
        src: `/images/${locale}/slide12/profesionales/carrusel-motosierra_profesional_10.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motosserras/motosserras-a-gasolina/592xp/"
            : "https://tiendahusqvarna.es/motosierras/motosierras-gasolina/motosierra-592-xp/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18674",
          price: "399",
          category: "Profesional",
          variant: "Profesional",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide className="p-[30px] w-[92%]">
        <div className="flex flex-row gap-3 justify-center">
          {/* left */}
          <div className="flex flex-col w-[55%]">
            {/* upper content */}
            <div className="max-w-[535px] max-h-[511px] w-full h-full">
              <Image
                src={`/images/${locale}/slide12/midBackgroundLeft.png`}
                alt="background left"
                className="w-full h-full object-cover"
                width={535}
                height={511}
              />
            </div>
            {/* lower content */}
            <div className="flex flex-row gap-[15px] mt-[5%]">
              <div className="w-[555px] h-[241px]">
                <Image
                  src={`/images/${locale}/slide12/usoMotosierra.jpg`}
                  alt="Toda la información sobre el uso de motosierra"
                  className="object-cover"
                  width={555}
                  height={241}
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="grid grid-cols-2 gap-3 grid-rows-3 items-center justify-center w-[44.64%]">
            {/* first row */}

            <ProductCard
              imageSrc={`/images/${locale}/slide12/carousel_electricasYBateria.jpg`}
              alt="Motosierra eléctrica y motosierra a batería"
              imgClassName=" !max-w-[100%] p-30"
              onClick={() => setOpenDialog("electricasYBateria")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            <ProductCard
              imageSrc={`/images/${locale}/slide12/carousel_hobby.jpg`}
              alt="Motosierra hobby"
              imgClassName=" !max-w-[100%] p-30"
              onClick={() => setOpenDialog("hobby")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            {/* second row */}

            <ProductCard
              imageSrc={`/images/${locale}/slide12/carousel_multiuso.jpg`}
              alt="Motosierra multiuso"
              imgClassName=" !max-w-[100%] p-30"
              onClick={() => setOpenDialog("multiuso")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            <ProductCard
              imageSrc={`/images/${locale}/slide12/carousel_profesionales.jpg`}
              alt="Motosierras profesionales"
              imgClassName=" !max-w-[100%] p-30"
              onClick={() => setOpenDialog("profesionales")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />
            {/* third row */}
            <ProductCard
              imageSrc={`/images/${locale}/slide12/carousel_cuidadoArboles.jpg`}
              alt="Motosierras para el cuidado de árboles"
              imgClassName=" !max-w-[100%] p-30"
              onClick={() => setOpenDialog("cuidadoArboles")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />
            <Image
              src={`/images/${locale}/slide12/carousel_productosRecomendados.jpg`}
              alt="Productos recomendados"
              className="object-contain px-[15px]"
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
