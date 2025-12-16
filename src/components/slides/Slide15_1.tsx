import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductsDialog } from "../ProductsDialog";
import { useState } from "react";
import { ProductCard } from "../ProductCard";

interface Slide15_1 {
  isActive: boolean;
}

export const Slide15_1: React.FC<Slide15_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    trituradorElectrico: [
      {
        src: `/images/${locale}/slide15/trituradorElectrico/carrusel-Triturador electrico_00.png`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Triturador eléctrico",
          variant: "Triturador eléctrico",
        },
      },
    ],
    aspiradores: [
      {
        src: `/images/${locale}/slide15/aspiradores/carrusel-aspiradores_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/aspiradores/aspirador-wdc-220/"
            : "https://tiendahusqvarna.es/aspiradoras/wdc-220/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Aspirador",
          variant: "Aspirador",
        },
      },
      {
        src: `/images/${locale}/slide15/aspiradores/carrusel-aspiradores_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/aspiradores/aspirador-wdc-325l/"
            : "https://tiendahusqvarna.es/aspiradoras/wdc-325l/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Aspirador",
          variant: "Aspirador",
        },
      },
    ],
    hidrolimpiadoras: [
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_00.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/pw130/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-130/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_01.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/pw240/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-240/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_02.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-alta-pressao/pw-345c/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-345c/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_03.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/lavadoras-alta-pressao/pw-350/"
            : "https://tiendahusqvarna.com/hidrolimpiadoras/hidrolimpiadora-pw-350/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_04.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-alta-pressao/pw-360/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-360/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_05.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/pw370/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-370/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_06.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/pw480/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-480/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
      {
        src: `/images/${locale}/slide15/hidrolimpiadores/carrusel-hidro_07.png`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/pw490/"
            : "https://tiendahusqvarna.es/hidrolimpiadoras/hidrolimpiadora-pw-490/",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Hidrolimpiadora",
          variant: "Hidrolimpiadora",
        },
      },
    ],
  };

  return (
    <>
      <CarouselSlide className="p-[30px]">
        <div className="flex flex-col gap-3 ">
          <Image
            src={`/images/${locale}/slide15/hidrolimpiadoras.png`}
            alt="Fondo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "95%", height: "auto" }}
          />

          <div className="flex flex-row gap-3 justify-between">
            <ProductCard
              imageSrc={`/images/${locale}/slide15/aspiradores.png`}
              alt="Aspiradores"
              imgClassName="!max-h-[210px] !max-w-[100%] p-30"
              onClick={() => setOpenDialog("aspiradores")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
              className="w-full max-w-[37.53%]"
            />
            <ProductCard
              imageSrc={`/images/${locale}/slide15/hidrolimpiadorasPresion.png`}
              alt="Hidrolimpiadoras a presión"
              imgClassName="!max-h-[210px] !max-w-[100%] p-30"
              onClick={() => setOpenDialog("hidrolimpiadoras")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
              className="w-full max-w-[37.53%]"
            />
            <ProductCard
              imageSrc={`/images/${locale}/slide15/descubreAccesorios.png`}
              alt="Descubre accesorios"
              imgClassName="!max-h-[210px] !max-w-[100%] p-30"
              onClick={() =>
                window.open(
                  locale !== "pt"
                    ? "https://tiendahusqvarna.es/hidrolimpiadoras/accesorios-hidrolimpiadoras/"
                    : "https://lojahusqvarna.pt/lavadoras-a-alta-pressao/acessorios-de-lavadoras-a-alta-pressao/"
                )
              }
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
              className="w-full max-w-[37.53%]"
            />
          </div>
          <div className="flex flex-row gap-0 w-full justify-between">
            <Image
              src={`/images/${locale}/slide15/imagenTioJardin.png`}
              alt="Aspiradores"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "48%", height: "auto" }}
            />

            <ProductCard
              imgClassName="!max-h-[161px] !max-w-[100%]"
              onClick={() => setOpenDialog("trituradorElectrico")}
              variant="floating"
              buttonText=""
              buttonContainerClassName="!bottom-[10%]"
              buttonClassName="hidden"
              imageSrc={`/images/${locale}/slide15/trituradorElectrico.png`}
              alt="Hidrolimpiadoras a presión"
              className="ml-[-20px]"
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
    </>
  );
};
