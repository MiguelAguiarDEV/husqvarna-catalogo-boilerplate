import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { useState } from "react";
import { ProductCard } from "../ProductCard";

export const Slide16_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    motobombas: [
      {
        src: `/images/${locale}/slide16/motobombas/carrusel-motobomba_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motobombas/w50p/"
            : "https://tiendahusqvarna.es/motobombas-generadores/motobombas/motobomba-w50p/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Motobomba",
          variant: "Motobomba",
        },
      },
      {
        src: `/images/${locale}/slide16/motobombas/carrusel-motobomba_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/motobombas/w80p/"
            : "https://tiendahusqvarna.es/motobombas-generadores/motobombas/motobomba-w80p/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Motobomba",
          variant: "Motobomba",
        },
      },
    ],
  };

  return (
    <>
      <CarouselSlide className="p-[30px] pl-0">
        <div className="flex flex-col gap-[15px]">
          <Image
            src={`/images/${locale}/slide16/backgroundRight.png`}
            alt="Triturador eléctrico"
            // width={1130}
            // height={463}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <div className="flex flex-row gap-[30px] justify-between">
            <div className="max-w-[253px] max-h-[297px] w-full h-full">
              <ProductCard
                imageSrc={`/images/${locale}/slide16/motobombas.png`}
                alt="Motobomba"
                imgClassName="!max-h-[297px] !max-w-[100%] p-30"
                onClick={() => setOpenDialog("motobombas")}
                variant="floating"
                buttonText=""
                buttonContainerClassName="!bottom-[10%]"
                buttonClassName="hidden"
              />
            </div>
            <div className="max-w-[253px] max-h-[292px] w-full h-full">
              <Image
                src={`/images/${locale}/slide16/imageTrastoRight.png`}
                alt="Triturador eléctrico"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
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
