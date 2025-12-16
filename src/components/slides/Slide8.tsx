import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { ProductsDialog } from "../ProductsDialog";
import Image from "next/image";
import { Icon } from "../ui/icon";

interface Slide8Props {
  isActive: boolean;
}

export const Slide8: React.FC<Slide8Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    cableDelimitador: [
      {
        src: `/images/${locale}/slide8/casa/01.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Cable delimitador",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    guia: [
      {
        src: `/images/${locale}/slide8/casa/02.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Guía",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    patronCorte: [
      {
        src: `/images/${locale}/slide8/casa/03.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Patrón de corte selectivo",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    recarga: [
      {
        src: `/images/${locale}/slide8/casa/04.jpg`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Recarga",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    cicloCorte: [
      {
        src: `/images/${locale}/slide8/casa/05.jpg`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Ciclo de corte",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    automower: [
      {
        src: `/images/${locale}/slide8/automower/carrusel-AM_00.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_01.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_02.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_03.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_04.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_05.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automower/carrusel-AM_06.png`,
        href: "",
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
    automowerX: [
      {
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_00.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_01.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_02.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_03.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_04.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_05.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerX/carrusel-Xline_06.png`,
        href: "",
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
    automowerProfesional: [
      {
        src: `/images/${locale}/slide8/automowerPro/carrusel-AM_pro_00.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerPro/carrusel-AM_pro_01.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerPro/carrusel-AM_pro_02.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerPro/carrusel-AM_pro_03.png`,
        href: "",
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
        src: `/images/${locale}/slide8/automowerPro/carrusel-AM_pro_04.png`,
        href: "",
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
      <CarouselSlide key="2" className=" pl-[40px]">
        <div className="flex flex-row max-w-1/2">
          {/* left */}
          <div className="flex flex-col w-1/2">
            {/* upper content */}
            <div className="flex w-full items-center max-w-[100%] relative mb-[2.7%]">
              <Image
                src={`/images/${locale}/slide8/comoTrabaja.png`}
                alt="como trabaja?"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />

              <Icon
                name={"plus"}
                className={`box-content rounded-full bg-white text-[#F25420] absolute top-[13%] left-[32%]`}
                size="16px"
                onClick={() => setOpenDialog("cableDelimitador")}
              />
              <Icon
                name={"plus"}
                className={`box-content rounded-full bg-white text-[#F25420] absolute top-[22.35%] left-[14.7%]`}
                size="16px"
                onClick={() => setOpenDialog("guia")}
              />
              <Icon
                name={"plus"}
                className={`box-content rounded-full bg-white text-[#F25420] absolute top-[15%] right-[26%]`}
                size="24px"
                onClick={() => setOpenDialog("recarga")}
              />
              <Icon
                name={"plus"}
                className={`box-content rounded-full bg-white text-[#F25420] absolute top-[4.5%] right-[21%]`}
                size="24px"
                onClick={() => setOpenDialog("cicloCorte")}
              />
              <Icon
                name={"plus"}
                className={`box-content rounded-full bg-white text-[#F25420] absolute bottom-0 right-[21%]`}
                size="24px"
                onClick={() => setOpenDialog("patronCorte")}
              />
            </div>
            {/* bottom content */}
            <div className="flex flex-row justify-center gap-[25px]">
              {/* left */}
              <div className="h-full w-full max-w-[250px] max-h-[368px]">
                <Image
                  src={`/images/${locale}/slide8/disenaJardin.jpg`}
                  alt="Diseña tu jardín zona por zona"
                  width={250}
                  height={368}
                />
              </div>
              {/* right */}
              <div className="h-full w-full max-w-[250px] max-h-[368px]">
                <Image
                  src={`/images/${locale}/slide8/descubreNera.jpg`}
                  alt="Descubre Nera"
                  width={250}
                  height={368}
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[30px] w-1/2 items-center pt-[2.7%] px-[2.7%]">
            {/* first element */}
            <div className="w-full max-w-[90%]">
              <ProductCard
                imageSrc={`/images/${locale}/slide8/carousel_automower.jpg`}
                alt="carousel automower"
                imgClassName=" !max-w-[100%] p-30"
                onClick={() => setOpenDialog("automower")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="w-full max-w-[90%]">
              <Image
                src={`/images/${locale}/slide8/separator.png`}
                alt="separador, todo: pasar a componente"
                // width={535}
                // height={2}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {/* second element */}
            <div className="w-full max-w-[90%]">
              <ProductCard
                imageSrc={`/images/${locale}/slide8/carousel_automowerX.jpg`}
                alt="carousel automower x"
                imgClassName=" !max-w-[100%] p-30"
                onClick={() => setOpenDialog("automowerX")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="w-full max-w-[90%]">
              <Image
                src={`/images/${locale}/slide8/separator.png`}
                alt="separador, todo: pasar a componente"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {/* third element */}
            <div className="h-full w-full max-w-[90%]">
              <ProductCard
                imageSrc={`/images/${locale}/slide8/carousel_automowerProfesional.jpg`}
                alt="carousel automower profesional"
                imgClassName=" !max-w-[100%] p-30"
                onClick={() => setOpenDialog("automowerProfesional")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
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
