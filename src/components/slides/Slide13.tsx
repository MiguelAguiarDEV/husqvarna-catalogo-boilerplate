import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

interface Slide13Props {
  isActive: boolean;
}

export const Slide13: React.FC<Slide13Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    //leftPage
    cortasetosBateria: [
      {
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/aspire/corta-sebes-aspire-h50-p4a/"
            : "https://tiendahusqvarna.com/aspire/kit-cortasetos-aspire-h50-p4a/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/aspire/corta-sebes-aspire-s20-p4a/"
            : "https://tiendahusqvarna.es/aspire/cortasetos-aspire-s20-p4a/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_02.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/corta-sebes/aspire-s20-p4a-aspire-haste-p4a-sem-bateria-e-carregador/"
            : "https://www.husqvarna.com/es/cortasetos/aspire-se20-p4a/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/120itk4-h/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-120itk4-h/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/120itk4-h/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-120itk4-h/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-bateria/kit-aparador215il-cortasebes215ihd45/"
            : "https://tiendahusqvarna.com/desbrozadoras/kit-recortadora-215il/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/kit-aparador215il-cortasebes215ihd45/"
            : "https://tiendahusqvarna.es/desbrozadora-bateria/kit-recortadora-215il-y-cortasetos-215ihd45/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_07.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/corta-sebes-522ihd60/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-522ihd60/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_08.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/corta-sebes-522ihd75/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-522ihd75/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_09.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/520ihe3/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-520ihe3/",
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
        src: `/images/${locale}/slide13/cortasetosBateria/carrusel-cortasetos-bat_10.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/520iht4/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-520iht4/",
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
    recortadorasBateria: [
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/aspire/aparador-de-relva-aspire-t28-p4a/"
            : "https://tiendahusqvarna.es/aspire/recortadora-aspire-t28-p4a/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/110il/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/recortadora-110il-flxi/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/110il/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/kit-recortadora-110il-flxi/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_07.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_08.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/325ir/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-325ir/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_09.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525ilk/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/recortadora-525ilk/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_10.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525ilk/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/recortadora-525ilk/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_11.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525ilxt/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-525ilxt/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_12.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525irxt/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-525irxt/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_13.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/rocadora-bateria-535irx/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-535irx/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
      {
        src: `/images/${locale}/slide13/recortadorasBateria/carrusel-recortadora-bat_14.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/535irxt/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-535irxt/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Recortadoras y desbrozadoras",
          variant: "Recortadoras y desbrozadoras",
        },
      },
    ],
    recortadorasMultifuncion: [
      {
        src: `/images/${locale}/slide13/recortadorasMultifuncion/carrusel-recortadoras_multi_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/rocadora-multifuncoes-129lk/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-129lk-combi/",
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
        src: `/images/${locale}/slide13/recortadorasMultifuncion/carrusel-recortadoras_multi_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-a-gasolina/525lk-somotor/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-525lk/",
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
        src: `/images/${locale}/slide13/recortadorasMultifuncion/carrusel-recortadoras_multi_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/525lk/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-525lk-trimmer/",
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
        src: `/images/${locale}/slide13/recortadorasMultifuncion/carrusel-recortadoras_multi_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/535lk/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-535lk/",
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
    //rightPage
    recortadorasGasolina: [
      {
        src: `/images/${locale}/slide13/recortadorasGasolina/carrusel-recortadoras_desbrozadoras_gasolina_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/aparador-de-relva-122c/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/recortadora-122c/",
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
        src: `/images/${locale}/slide13/recortadorasGasolina/carrusel-recortadoras_desbrozadoras_gasolina_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/aparador-de-relva-122l/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/recortadora-122l/",
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
        src: `/images/${locale}/slide13/recortadorasGasolina/carrusel-recortadoras_desbrozadoras_gasolina_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/122r/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-122r/",
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
        src: `/images/${locale}/slide13/recortadorasGasolina/carrusel-recortadoras_desbrozadoras_gasolina_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/333r/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-333r-ii/",
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
    desbrozadorasProfesionales: [
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/543-rs/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-543rs/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/553-rs/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-553rs/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/535rx/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-535rx/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/rocadora-545-rx/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-545rx/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/545rxt/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-545rxt-autotune/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/555rxt/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-555rxt/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-gasolina/555frm/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-555frm/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/desbrozadorasProfesionales/carrusel-desbrozadoras_pro_07.png`,
        href:
          locale === "pt"
            ? "https://www.husqvarna.com/pt/rocadoras/husqvarna-553rbx/"
            : "https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-gasolina/desbrozadora-553rbx/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
    ],
    cortasetosGasolina: [
      {
        src: `/images/${locale}/slide13/cortasetosGasolina/carrusel-cortasetos_gasolina_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/122hd45/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-122hd45/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/cortasetosGasolina/carrusel-cortasetos_gasolina_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/122hd60/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-122hd60/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
    ],
    cortasetosProfesionales: [
      {
        src: `/images/${locale}/slide13/cortasetosProfesionales/carrusel-cortasetos_pro_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/522hd60x/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-522hd60x/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/cortasetosProfesionales/carrusel-cortasetos_pro_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/522hdr60x/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-522hdr60x/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/cortasetosProfesionales/carrusel-cortasetos_pro_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/522hdr75x/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-522hdr75x/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/cortasetosProfesionales/carrusel-cortasetos_pro_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/corta-sebes-525he3/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/525he3/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
      {
        src: `/images/${locale}/slide13/cortasetosProfesionales/carrusel-cortasetos_pro_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/corta-sebes-525he4/"
            : "https://tiendahusqvarna.es/cortasetos/cortasetos-gasolina/cortasetos-525he4/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Desbrozadoras",
          variant: "Profesionales",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide className="p-[30px]">
        <div className="flex flex-row">
          {/* left */}

          {/* subLeft */}
          <div className="flex flex-col gap-5 w-full max-w-[27.7%]">
            <Image
              src={`/images/${locale}/slide13/encuentraTuDesbrozadora.png`}
              alt="Encuentra tu desbrozadora"
              width={313}
              height={525}
            />
            <Image
              src={`/images/${locale}/slide13/cortarFacil.png`}
              alt="Cortar setos nunca fue tan fácil"
              width={313}
              height={236}
            />
          </div>

          {/* right */}

          <div className="grid grid-cols-3 grid-rows-3 items-center gap-[5%] justify-center pl-[5%] max-w-[72%]">
            {/* first row */}
            <ProductCard
              imageSrc={`/images/${locale}/slide13/recortadorasBateria.jpg`}
              alt="Recortadoras con batería"
              imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              onClick={() => setOpenDialog("recortadorasBateria")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />
            <ProductCard
              imageSrc={`/images/${locale}/slide13/recortadorasGasolina.jpg`}
              alt="Recortadoras a gasolina"
              // imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              imgClassName="!max-h-[246px] !max-w-[268px] p-30"
              onClick={() => setOpenDialog("recortadorasGasolina")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            <ProductCard
              imageSrc={`/images/${locale}/slide13/recortadorasProfesionales.jpg`}
              alt="Desbrozadoras profesionales"
              // imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              imgClassName="!max-h-[246px] !max-w-[268px] p-30"
              onClick={() => setOpenDialog("desbrozadorasProfesionales")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            {/* second row */}
            <ProductCard
              imageSrc={`/images/${locale}/slide13/recortadorasMultifuncion.jpg`}
              alt="Recortadoras multifunción"
              imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              onClick={() => setOpenDialog("recortadorasMultifuncion")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />
            <Image
              src={`/images/${locale}/slide13/accesoriosRecortadoras.jpg`}
              alt="Accesorios recortadoras"
              className="object-cover"
              width={253}
              height={254}
            />
            <Image
              src={`/images/${locale}/slide13/accesoriosDesbrozadoras.jpg`}
              alt="Accesorios desbrozadoras"
              className="object-cover"
              width={253}
              height={254}
            />

            {/* third row */}

            <ProductCard
              imageSrc={`/images/${locale}/slide13/cortasetosBateria.jpg`}
              alt="carousel cortasetos a bateria"
              // imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              //for some reason, the image is not showing the correct right side, so we have to add 43 px to width
              imgClassName="!max-h-[256px] !max-w-[254px] p-30"
              onClick={() => setOpenDialog("cortasetosBateria")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            <ProductCard
              imageSrc={`/images/${locale}/slide13/cortasetosGasolina.jpg`}
              alt="carousel cortasetos a bateria"
              imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              onClick={() => setOpenDialog("cortasetosGasolina")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
            />

            <ProductCard
              imageSrc={`/images/${locale}/slide13/cortasetosProfesionales.jpg`}
              alt="Carousel cortasetos profesionales"
              imgClassName="!max-h-[256px] !max-w-[211px] p-30"
              onClick={() => setOpenDialog("cortasetosProfesionales")}
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
    </>
  );
};
