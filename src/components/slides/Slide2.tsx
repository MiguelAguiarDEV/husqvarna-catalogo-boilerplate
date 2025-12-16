import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabels } from "../Header";
import { SlideTitle } from "../SlideTitle";
import { ProductsDialog } from "../ProductsDialog";
import { useState } from "react";
import { ProductCard } from "../ProductCard";

interface Slide2Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide2: React.FC<Slide2Props> = ({ isActive, onClickMenu }) => {
  const { t } = useTranslation();
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
    <>
      <style jsx>{`
        .Slide2Content {
          margin-top: 220px;
        }

        @media (max-height: 980px) {
          .Slide2Content {
            margin-top: 80px;
          }
        }
      `}</style>
      <CarouselSlide key="2" className="p-[30px]">
        <div className="flex h-100 w-full gap-4">
          {
            // Left
          }
          <div className="h-full w-full max-w-[67.52%] max-h-[644px] flex flex-col gap-5">
            <div className="h-full w-full max-w-[763px] max-h-[644px]">
              <Image
                src={`/images/${locale}/slide2/background.jpg`}
                alt="slide2"
                className="h-full w-full max-w-[763px] max-h-[644px]"
                width={763}
                height={644}
              />
              <div className="absolute left-[70px] top-[101px]">
                <SlideTitle
                  className="!text-[45px]"
                  variant="bg-transparent"
                  title={t("slide2.title")}
                  isActive={isActive}
                />
                <div className="flex  w-[128px] h-[38px] mt-5  max-w-[261px] border-[1.55px] border-white rounded-[12px] justify-center items-center">
                  <p>{t("slide2.description")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row max-h-[16%] gap-16 max-w-[100%]">
              <div>
                <Image
                  src={`/images/${locale}/slide2/subtitle.png`}
                  alt="Subtitulo"
                  className="w-auto h-auto"
                  width={155}
                  height={13}
                />

                <Image
                  src={`/images/${locale}/slide2/description.png`}
                  alt="Descripción"
                  className="w-auto h-auto mt-[10px]"
                  width={535}
                  height={95}
                />
              </div>
              <Image
                src={`/images/${locale}/slide2/husqvarnaLogo.png`}
                alt="Rider"
                className="w-auto h-auto"
                width={0}
                height={0}
                // width={102}
                // height={118}
                style={{ width: "10%", height: "auto" }}
              />
            </div>
          </div>
          {
            // Right
          }
          {/* Right grid 2x3 images */}
          <div className="max-w-[30%] grid grid-cols-2 gap-4">
            {/* Fila 1 */}

            <ProductCard
              imageSrc={`/images/${locale}/slide2/energia.jpg`}
              alt="gasolina"
              // imgClassName="!max-h-[32.09%] !max-w-[31.59%] p-30"
              imgClassName="!max-h-[251px] !max-w-[169px] p-30"
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
    </>
  );
};
