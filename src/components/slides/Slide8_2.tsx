import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";

export const Slide8_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
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
    <CarouselSlide key="2" className=" py-11 px-[30px]">
      {/*h-[calc(100vw*1.625)]*/}
      <div className="flex flex-col max-w-[100%] items-center gap-[30px]">
        {/* first element */}
        <div className="h-full w-full max-w-[449px] max-h-[210px]">
          <ProductCard
            imageSrc={`/images/${locale}/slide8/carousel_automower.jpg`}
            alt="carousel automower"
            imgClassName="!max-h-[210px] !max-w-[449px] p-30"
            onClick={() => setOpenDialog("automower")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>
        <div className="w-full max-w-[535px] h-full max-h-[2px]">
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
        <div className="h-full w-full max-w-[449px] max-h-[210px]">
          <ProductCard
            imageSrc={`/images/${locale}/slide8/carousel_automowerX.jpg`}
            alt="carousel automower x"
            imgClassName="!max-h-[210px] !max-w-[449px] p-30"
            onClick={() => setOpenDialog("automowerX")}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>
        <div className="w-full max-w-[535px] h-full max-h-[2px]">
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
        {/* third element */}
        <div className="h-full w-full max-w-[449px] max-h-[210px]">
          <ProductCard
            imageSrc={`/images/${locale}/slide8/carousel_automowerProfesional.jpg`}
            alt="carousel automower profesional"
            imgClassName="!max-h-[210px] !max-w-[449px] p-30"
            onClick={() => setOpenDialog("automowerProfesional")}
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
  );
};
