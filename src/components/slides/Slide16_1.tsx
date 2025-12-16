import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { ProductsDialog } from "../ProductsDialog";

interface Slide16_1 {
  isActive: boolean;
}

export const Slide16_1: React.FC<Slide16_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    generadores: [
      {
        src: `/images/${locale}/slide16/generadores/carrusel-generador_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/geradores/g2500p"
            : "https://tiendahusqvarna.com/motobombas-generadores/generador-g2500p",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Generador",
          variant: "Generador",
        },
      },
      {
        src: `/images/${locale}/slide16/generadores/carrusel-generador_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/geradores/g3200p"
            : "https://tiendahusqvarna.com/motobombas-generadores/generador-g3200p",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Generador",
          variant: "Generador",
        },
      },
    ],
  };

  return (
    <>
      <CarouselSlide className="p-[30px] pr-0">
        <div className="flex flex-col gap-[15px]">
          <Image
            src={`/images/${locale}/slide16/backgroundLeft.png`}
            alt="Triturador eléctrico"
            // width={1130}
            // height={463}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <div className="flex flex-row gap-[30px] justify-between">
            <div className="max-w-[253px] max-h-[292px] w-full h-full">
              <Image
                src={`/images/${locale}/slide16/imageTrastoLeft.png`}
                alt="Triturador eléctrico"
                // width={253}
                // height={292}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="max-w-[253px] max-h-[297px] w-full h-full">
              <ProductCard
                imageSrc={`/images/${locale}/slide16/generadores.png`}
                alt="Generador"
                imgClassName="!max-h-[297px] !max-w-[253px] p-30"
                onClick={() => setOpenDialog("generadores")}
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
