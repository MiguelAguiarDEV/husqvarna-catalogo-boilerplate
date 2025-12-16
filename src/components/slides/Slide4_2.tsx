import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CarouselSlide } from "../CarouselSlide";

export const Slide4_2: React.FC = () => {
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    115: [
      {
        src: `/images/${locale}/slide4/115-dialog/carrusel-cortasetos-bateria_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-bateria/115ihd45/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/cortasetos/cortasetos-bateria/cortasetos-115ihd45/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 115iHD45",
          id: locale === "pt" ? "10596" : "12224",
          price: locale === "pt" ? "359" : "349",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/115-dialog/carrusel-cortasetos-bateria_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/corta-sebes-522ihd60/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-522ihd60/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 522iHD60",
          id: locale === "pt" ? "29955" : "30501",
          price: locale === "pt" ? "479" : "469",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/115-dialog/carrusel-cortasetos-bateria_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/520ihe3/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-520ihe3/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 520iHE3",
          id: locale === "pt" ? "10922" : "12826",
          price: locale === "pt" ? "629" : "599",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/115-dialog/carrusel-cortasetos-bateria_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-bateria/520iht4/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.es/cortasetos/cortasetos-bateria/cortasetos-520iht4/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 520iHT4",
          id: locale === "pt" ? "11140" : "12980",
          price: locale === "pt" ? "699" : "669",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
    ],
    122: [
      {
        src: `/images/${locale}/slide4/122-dialog/carrusel-cortasetos_domestico_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-gasolina/122hd45/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/cortasetos/cortasetos-gasolina/cortasetos-122hd45/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 122HD45",
          id: locale === "pt" ? "10049" : "12032",
          price: locale === "pt" ? "359" : "349",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/122-dialog/carrusel-cortasetos_domestico_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-gasolina/122hd60/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/cortasetos/cortasetos-gasolina/cortasetos-122hd60/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 122HD60",
          id: locale === "pt" ? "10050" : "12033",
          price: locale === "pt" ? "379" : "369",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/122-dialog/carrusel-cortasetos_domestico_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/corta-sebes/corta-sebes-gasolina/522hd60x/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/cortasetos/cortasetos-gasolina/cortasetos-522hd60x/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 522HD60X",
          id: locale === "pt" ? "11029" : "12883",
          price: locale === "pt" ? "609" : "599",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
      {
        src: `/images/${locale}/slide4/122-dialog/carrusel-cortasetos_domestico_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/corta-sebes/corta-sebes-gasolina/522hdr75x/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/cortasetos/cortasetos-gasolina/cortasetos-522hdr75x/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 522HDR75X",
          id: locale === "pt" ? "11030" : "12880",
          price: locale === "pt" ? "659" : "649",
          category: "Cortasetos",
          variant: "Cortasetos",
        },
      },
    ],
    525: [
      {
        src: `/images/${locale}/slide4/525-dialog/carrusel-desbrozadora_multi_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/525lk/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-525lk-trimmer/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525LK + Trimmer",
          id: locale === "pt" ? "11244" : "13042",
          price: locale === "pt" ? "499" : "529",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/525-dialog/carrusel-desbrozadora_multi_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-a-gasolina/525lk-somotor/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-525lk/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 525LK",
          id: locale === "pt" ? "10400" : "12166",
          price: locale === "pt" ? "399" : "429",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
      {
        src: `/images/${locale}/slide4/525-dialog/carrusel-desbrozadora_multi_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/rocadoras/rocadoras-gasolina/rocadora-multifuncoes-129lk/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/desbrozadoras/desbrozadoras-gasolina/desbrozadora-129lk-combi/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 129LK",
          id: locale === "pt" ? "10471" : "12181",
          price: locale === "pt" ? "429" : "449",
          category: "Desbrozadora",
          variant: "Desbrozadora",
        },
      },
    ],
  };

  return (
    <CarouselSlide key="4_2" className="h-[calc(100vw*1.615)] p-[30px] pr-0">
      <div className="flex flex-col gap-5">
        {/* first row */}
        <div className="pl-8 flex flex-row mb-1">
          <div className=" h-full max-h-[136px] w-full max-w-[293px]">
            <Image
              src={`/images/${locale}/slide4/bateriaFlexible.png`}
              alt="Batería flexible"
              className="object-fill"
              width={293}
              height={136}
            />
          </div>
          <div className="h-full max-h-[184px] w-full max-w-[293px]">
            <Image
              src={`/images/${locale}/slide4/maquinaConBateria.png`}
              alt="Máquina con batería"
              className="object-fill"
              width={293}
              height={184}
            />
          </div>
        </div>
        {/* second row */}
        <div className="pl-1 h-full max-h-[430px] w-full max-w-[564px]">
          <Image
            src={`/images/${locale}/slide4/gustoPorMaquinasBateria.png`}
            alt="Gusto por máquinas con batería"
            className="object-fill"
            width={564}
            height={430}
          />
        </div>
        {/* third row */}
        <div className="pl-6 h-full max-h-[179px] w-full max-w-[553px]">
          <Image
            src={`/images/${locale}/slide4/vidaUtil.png`}
            alt="Prolonga la vida útil"
            className="object-fill"
            width={553}
            height={179}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
