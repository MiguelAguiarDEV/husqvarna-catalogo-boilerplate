import Image from "next/image";
import { useRouter } from "next/router";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabels } from "../Header";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";

interface Slide2_2Props {
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide2_2: React.FC<Slide2_2Props> = ({ onClickMenu }) => {
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const [popupSlide, setPopupSlide] = useState<number>(0);

  const productDialogImages = {
    popUp1: [
      {
        src: `/images/${locale}/slide2/popup/popup_00.png`,
        href: "",
        imgClassName: "!max-w-[460px]",
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
        src: `/images/${locale}/slide2/popup/popup_01.png`,
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
        src: `/images/${locale}/slide2/popup/popup_02.png`,
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
        src: `/images/${locale}/slide2/popup/popup_03.png`,
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
        src: `/images/${locale}/slide2/popup/popup_04.png`,
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
        src: `/images/${locale}/slide2/popup/popup_05.png`,
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
    <CarouselSlide key="2_2" className="p-[30px] pl-0">
      <div className="flex flex-row w-full gap-[15px]">
        {
          // Left
        }

        <div className="h-full w-full max-w-[34.7%] max-h-[100%] flex flex-col items-center gap-5">
          <Image
            src={`/images/${locale}/slide2/backgroundRight.png`}
            alt="slide2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <Image
            src={`/images/${locale}/slide2/husqvarnaLogo.png`}
            alt="Rider"
            className="w-auto h-auto max-w-[102px] max-h-[118px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "51.5%", height: "auto" }}
          />
        </div>

        {
          // Right
        }
        {/* Right grid 2x3 images */}
        <div className="max-w-[65.3%] grid grid-cols-2 gap-4">
          {/* Fila 1 */}

          <ProductCard
            imageSrc={`/images/${locale}/slide2/energia.jpg`}
            alt="gasolina"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(0);
              setOpenDialog("popUp1");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />

          <ProductCard
            imageSrc={`/images/${locale}/slide2/maquinaria.jpg`}
            alt="Maquinaria innovadora"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(1);
              setOpenDialog("popUp2");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          {/* Fila 2 */}
          <ProductCard
            imageSrc={`/images/${locale}/slide2/reputacion.jpg`}
            alt="Reputación internacional"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(2);
              setOpenDialog("popUp3");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide2/innovacion.jpg`}
            alt="Innovación en motosierras"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(3);
              setOpenDialog("popUp4");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          {/* Fila 3 */}
          <ProductCard
            imageSrc={`/images/${locale}/slide2/pioneros.jpg`}
            alt="Pioneros en el mercado"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(4);
              setOpenDialog("popUp5");
            }}
            variant="floating"
            buttonText=""
            buttonContainerClassName="!bottom-[10%]"
            buttonClassName="hidden"
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide2/soluciones.jpg`}
            alt="Soluciones sostenibles"
            // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
            imgClassName="!max-h-[251px] !max-w-[169px] p-30"
            onClick={() => {
              setPopupSlide(5);
              setOpenDialog("popUp6");
            }}
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
        defaultActiveSlide={popupSlide}
      />
    </CarouselSlide>
  );
};
