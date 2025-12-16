import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";

interface Slide7Props {
  isActive: boolean;
}

export const Slide7: React.FC<Slide7Props> = ({ isActive }) => {
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
    <>
      <style jsx>{`
        .Slide7Content {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1318px;
          height: 967px;
        }

        @media (max-height: 1000px) {
          .Slide7Content {
            transform: translateX(-50%) scale(0.85);
            transform-origin: top center;
          }
        }

        @media (max-height: 851px) {
          .Slide7Content {
            transform: translateX(-50%) scale(0.8);
            transform-origin: top center;
            margin-top: 16px;
          }
          .Slide7Grid {
            height: auto;
          }
        }

        @media (max-width: 1280px) {
          .Slide7Content {
            transform: translateX(-50%) scale(0.9);
            transform-origin: top center;
          }
        }

        @media (max-width: 1024px) {
          .Slide7Content {
            transform: translateX(-50%) scale(0.8);
            transform-origin: top center;
          }
        }
      `}</style>
      <CarouselSlide key="2" className="py-[30px]">
        <div className="flex flex-col pr-[30px]">
          {/* upper content */}
          <div className="max-w-[1130px] max-h-[511px] pl-[30px] w-full h-full relative">
            <Image
              src={`/images/${locale}/slide7/midBackground.png`}
              alt="slide7-1"
              className="h-full w-full object-cover pl-1"
              width={1130}
              height={511}
            />

            {/* Left images*/}
            <ProductCard
              imageSrc={`/images/${locale}/slide7/deteccionPasillos.png`}
              alt="Detección de pasillos"
              className="absolute top-[43%] left-[9%] max-w-[15%]"
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
              className="absolute bottom-[7%] left-[12.5%] max-w-[15%]"
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
              className="absolute bottom-[7%] left-[25%] max-w-[15%]"
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
              className="absolute bottom-[7%] left-[35.5%] max-w-[15%]"
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

            {/* Right images*/}
            <ProductCard
              imageSrc={`/images/${locale}/slide7/cespedSanoYPerfecto.png`}
              alt="Recarga continua"
              className="absolute top-[43%] right-[6%] max-w-[15%]"
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
              className="absolute bottom-[7%] right-[7%] max-w-[15%]"
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
              className="absolute bottom-[7%] right-[23%] max-w-[15%]"
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
              className="absolute bottom-[7%] right-[35.5%] max-w-[15%]"
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
          {/* bottom content */}
          <div className="flex flex-row justify-between mt-[2%]">
            {/* left content */}

            <Image
              src={`/images/${locale}/slide7/limitesVirtuales.jpg`}
              alt="limites virtuales"
              className="h-full w-full object-cover"
              width={0}
              height={0}
              // width={560}
              // height={243}
              style={{ width: "47%", height: "auto" }}
            />

            {/* right content */}
            <Image
              src={`/images/${locale}/slide7/cuidadoEnPalma.jpg`}
              alt="cuidado del césped en la palma de tu mano"
              className="h-full w-full object-cover"
              width={0}
              height={0}
              // width={560}
              // height={243}
              style={{ width: "47%", height: "auto" }}
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
          defaultActiveSlide={popupSlide}
        />
      </CarouselSlide>
    </>
  );
};
