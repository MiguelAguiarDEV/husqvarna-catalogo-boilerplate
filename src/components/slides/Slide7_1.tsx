import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";

interface Slide7_1Props {
  isActive: boolean;
}

export const Slide7_1: React.FC<Slide7_1Props> = ({ isActive }) => {
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
    <CarouselSlide key="2" className="p-[7.5%] pr-0">
      <div className="flex flex-col items-end max-w-[100%]">
        {/* upper content */}
        <div className="relative">
          <Image
            src={`/images/${locale}/slide7/midBackgroundLeft.png`}
            alt="slide7-1"
            className="h-full w-full object-cover max-w-[100%] max-h-[auto]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide7/deteccionPasillos.png`}
            alt="Detección de pasillos"
            className="absolute top-[43%] left-[16%] max-w-[26%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(0);
              setOpenDialog("popUp0");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide7/navegacionAvanzada.png`}
            alt="Navegación avanzada"
            className="absolute bottom-[7%] left-[20.5%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(3);
              setOpenDialog("popUp3");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide7/formaSegura.png`}
            alt="Forma segura"
            className="absolute bottom-[7%] left-[45%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(1);
              setOpenDialog("popUp1");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide7/superaPendientes.png`}
            alt="Supera pendientes"
            className="absolute bottom-[7%] left-[65%] max-w-[30%]"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(5);
              setOpenDialog("popUp5");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
        </div>
        <Image
          src={`/images/${locale}/slide7/limitesVirtuales.jpg`}
          alt="limites virtuales"
          className="h-full w-full object-cover pr-[7.5%] mt-[7%]"
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
