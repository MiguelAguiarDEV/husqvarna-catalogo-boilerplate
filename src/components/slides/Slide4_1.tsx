import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide4_1Props {
  isActive: boolean;
}

export const Slide4_1: React.FC<Slide4_1Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    110: [
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/110il/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/kit-recortadora-110il-flxi/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 110iL",
          id: locale === "pt" ? "26983" : "25425",
          price: locale === "pt" ? "279" : "279",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-bateria/kit-aparador215il-cortasebes215ihd45/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/kit-recortadora-215il/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 215iL",
          id: locale === "pt" ? "26986" : "25442",
          price: locale === "pt" ? "349" : "369",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525ilxt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-525ilxt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525iLXT",
          id: locale === "pt" ? "27000" : "30880",
          price: locale === "pt" ? "399" : "419",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/525irxt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-525irxt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525iRXT",
          id: locale === "pt" ? "26999" : "30742",
          price: locale === "pt" ? "479" : "499",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_05.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/rocadora-bateria-535irx/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-535irx/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 535iRX",
          id: locale === "pt" ? "11136" : "12976",
          price: locale === "pt" ? "589" : "619",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/110-dialog/carrusel-desbrozadora_bateria_06.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/rocadoras/rocadoras-bateria/535irxt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/desbrozadoras/desbrozadoras-bateria/desbrozadora-535irxt/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525iRXT",
          id: locale === "pt" ? "11137" : "12979",
          price: locale === "pt" ? "699" : "729",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
    ],
    333: [
      {
        src: `/images/${locale}/slide4/333-dialog/carrusel-desbrozadora_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/333r/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-333r-ii/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 333R II",
          id: locale === "pt" ? "10054" : "16678",
          price: locale === "pt" ? "369" : "399",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/333-dialog/carrusel-desbrozadora_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/543-rs/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-543rs/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 543RS",
          id: locale === "pt" ? "10330" : "12139",
          price: locale === "pt" ? "499" : "549",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/333-dialog/carrusel-desbrozadora_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/553-rs/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-553rs/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 553RS",
          id: locale === "pt" ? "10331" : "12140",
          price: locale === "pt" ? "649" : "679",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/333-dialog/carrusel-desbrozadora_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/rocadora-545-rx/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-545rx/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 545RX",
          id: locale === "pt" ? "9310" : "11634",
          price: locale === "pt" ? "899" : "969",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/333-dialog/carrusel-desbrozadora_05.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/545rxt/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-545rxt-autotune/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 545RXT",
          id: locale === "pt" ? "10603" : "12239",
          price: locale === "pt" ? "1129" : "1199",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
    ],
  };

  return (
    <CarouselSlide key="2" className="h-[calc(100vw*1.615)] p-[30px]">
      <div className="flex flex-col gap-[30px]">
        <div className="h-full max-h-[647px] w-full max-w-[535px]">
          <Image
            src={`/images/${locale}/slide4/futuroMejor.jpg`}
            alt="Por un futuro mejor"
            className="object-fill"
            width={535}
            height={647}
          />
        </div>
        <div className="h-full max-h-[105px] w-full max-w-[535px]">
          <Image
            src={`/images/${locale}/slide4/footerIcons.jpg`}
            alt="Iconos del pie de página"
            className="object-fill"
            width={535}
            height={105}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
