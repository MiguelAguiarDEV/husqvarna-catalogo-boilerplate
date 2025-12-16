import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { motion } from "framer-motion";
import { MenuLabelEnum, MenuLabels } from "../Header";

interface Slide3Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

const styles = `
  @media (max-height: 980px) {
    .SlideContainer {
      transform: scale(0.95);
      transform-origin: top center;
    }
  }

  @media (max-height: 851px) {
    .SlideContainer {
      transform: scale(0.8);
      transform-origin: top center;
    }
  }

  @media (max-width: 1280px) {
    .SlideContainer {
      transform: scale(0.9);
      transform-origin: top center;
    }
  }

  @media (max-width: 1024px) {
    .SlideContainer {
      transform: scale(0.8);
      transform-origin: top center;
    }
  }
`;

export const Slide3: React.FC<Slide3Props> = ({ isActive, onClickMenu }) => {
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
    <>
      <style jsx>{styles}</style>
      <CarouselSlide key="2" className="p-[30px] !bg-[#EEEEED]">
        <div className="SlideContainer grid grid-cols-2 gap-[60px]">
          {/* left */}

          <div className="flex flex-col gap-[15px]">
            {/* Upper half */}
            <div className="h-full max-h-[384px] w-full max-w-[535px]">
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.CORTE_Y_TALA)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/corteYTala.png`}
                alt="Corte y Tala"
                className={`  cursor-pointer object-fill`}
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
                  className=" cursor-pointer object-fill"
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
                  className=" cursor-pointer object-fill"
                  width={260}
                  height={383}
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-row gap-[15px]">
            {/* LEFT HALF */}
            <div className="flex flex-col gap-[15px]">
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.RECORTE_Y_DESBROCE)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/recorteDesbroce.png`}
                alt="Recorte y desbroce"
                className=" cursor-pointer object-fill"
                width={260}
                height={463}
              />
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.CUIDADO_DEL_SUELO)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/cuidadoSuelo.png`}
                alt="Cuidado del suelo"
                className=" cursor-pointer object-fill"
                width={260}
                height={304}
              />
            </div>
            {/* RIGHT HALF */}
            <div className="flex flex-col gap-[15px]">
              <motion.img
                onClick={() =>
                  onClickMenu(MenuLabelEnum.RESPECTO_A_LA_NATURALEZA)
                }
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/respetoNaturaleza.png`}
                alt="Respeto por la naturaleza"
                className=" cursor-pointer object-fill"
                width={260}
                height={384}
              />
              <motion.img
                onClick={() =>
                  onClickMenu(MenuLabelEnum.GENERADORES_Y_MOTOBOMBAS)
                }
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/generadores.png`}
                alt="Generadores y motobombas"
                className=" cursor-pointer object-fill"
                width={260}
                height={169}
              />
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.ROPA_Y_ACCESORIOS)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide3/ropa.png`}
                alt="Ropa y accesorios"
                className=" cursor-pointer object-fill"
                width={260}
                height={199}
              />
            </div>
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
