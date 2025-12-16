import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

export const Slide7_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const [popupSlide, setPopupSlide] = useState<number>(0);

  const productDialogImages = {
    popUp0: [
      {
        src: `/images/${locale}/slide7/popUps/popup_00.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp1: [
      {
        src: `/images/${locale}/slide7/popUps/popup_01.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp2: [
      {
        src: `/images/${locale}/slide7/popUps/popup_02.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp3: [
      {
        src: `/images/${locale}/slide7/popUps/popup_03.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp4: [
      {
        src: `/images/${locale}/slide7/popUps/popup_04.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp5: [
      {
        src: `/images/${locale}/slide7/popUps/popup_05.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp6: [
      {
        src: `/images/${locale}/slide7/popUps/popup_06.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
    popUp7: [
      {
        src: `/images/${locale}/slide7/popUps/popup_07.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "PopUp",
          variant: "PopUp",
        },
      },
    ],
  };

  return (
    <CarouselSlide key="2" className="p-[7.5%] pl-0">
      <div className="flex flex-col items-end max-w-[100%]">
        {/* upper content */}
        <div className="relative">
          <Image
            src={`/images/${locale}/slide7/midBackgroundRight.png`}
            alt="slide7-2"
            className="h-full w-full object-cover max-w-[100%] max-h-[auto]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide7/cespedSanoYPerfecto.png`}
            alt="Recarga continua"
            className="absolute top-[45%] right-[10%] max-w-[33%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(2);
              setOpenDialog("popUp2");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide7/sinRuidosEscapes.png`}
            alt="Sin ruidos ni escapes"
            className="absolute bottom-[7%] right-[15%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(6);
              setOpenDialog("popUp6");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide7/temporizadorClimatologia.png`}
            alt="Temporizador climatología"
            className="absolute bottom-[5.5%] left-[29.5%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(4);
              setOpenDialog("popUp4");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide7/recargaContinua.png`}
            alt="Recarga continua"
            className="absolute bottom-[7%] left-[0%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(7);
              setOpenDialog("popUp7");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>
        <Image
          src={`/images/${locale}/slide7/cuidadoEnPalma.jpg`}
          alt="cuidado en tu palma"
          className="h-full w-full object-cover pl-[7.5%] mt-[7%]"
          width={560}
          height={243}
        />
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
        defaultActiveSlide={popupSlide}
      />
    </CarouselSlide>
  );
};
