import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { ProductsDialog } from "../ProductsDialog";

export const Slide5_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);


  const productDialogImages = {
    herramientasJardin: [
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_00.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_01.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_02.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_03.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_04.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_05.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_06.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_07.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_herramientasJardin/carrusel-herramientajardin_08.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
    bateriasCargadores: [
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_00.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_01.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_02.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_03.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_04.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_bateriasCargadores/carrusel-bateria_05.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
    solucionesAlmacenamiento: [
      {
        src: `/images/${locale}/slide5/carousel_solucionesAlmacenamiento/carrusel-almacenamiento_00_v2.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_solucionesAlmacenamiento/carrusel-almacenamiento_01.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_solucionesAlmacenamiento/carrusel-almacenamiento_02.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_solucionesAlmacenamiento/carrusel-almacenamiento_03.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/carousel_solucionesAlmacenamiento/carrusel-almacenamiento_04_v2.png`,
        href: "",
        imgClassName: "!max-h-[241px] !max-w-[168px]",
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: "18636",
          price: "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
    120: [
      {
        src: `/images/${locale}/slide5/120-dialog/carrusel-podadora_altura_bateria_01.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-a-bateria/podadora-a-bateria-120itk4-p/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/kit-podadora-120itk4p/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 120iTK4-P",
          id: locale === "pt" ? "23386" : "18636",
          price: locale === "pt" ? "379" : "399",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/120-dialog/carrusel-podadora_altura_bateria_02.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-a-bateria/podadora-a-bateria-120itk4-ph/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/kit-120itk4-ph/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Kit Husqvarna 120iTK4-PH",
          id: locale === "pt" ? "23390" : "20120",
          price: locale === "pt" ? "469" : "499",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/120-dialog/carrusel-podadora_altura_bateria_03.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-bateria/podadora-vara-bateria-530ip4/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/podadora-530ip4/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 530iP4",
          id: locale === "pt" ? "10905" : "12770",
          price: locale === "pt" ? "569" : "599",
          category: "Podadora",
          variant: "Podadora",
        },
      },
      {
        src: `/images/${locale}/slide5/120-dialog/carrusel-podadora_altura_bateria_04.jpg`,
        href:
          locale === "pt"
            ? "https://lojahusqvarna.com/motosserras/motosserras-bateria/podadora-vara-bateria-530ipt5/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
            : `https://tiendahusqvarna.com/motosierras/motosierras-bateria/podadora-530ipt5/?utm_source=Folleto${locale.toUpperCase()}&utm_medium=boton&utm_campaign=Otoño24`,
        productData: {
          name: "Husqvarna 530iPT5",
          id: locale === "pt" ? "10907" : "12769",
          price: locale === "pt" ? "669" : "699",
          category: "Podadora",
          variant: "Podadora",
        },
      },
    ],
  };
  return (
    <>
      <CarouselSlide key="2" className="p-[30px] pl-0">
        <div className="flex flex-col gap-[30px]">
          {/* upper content */}
          <div className="flex align-center items-center w-full h-full max-w-[1130px] max-h-[511px]">
            <Image
              src={`/images/${locale}/slide5/midBackgroundRight.png`}
              alt="background nueva gama aspire"
              className="h-full w-full object-cover"
              width={1130}
              height={511}
            />
          </div>
          {/* bottom content */}
          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-row gap-[15px] w-full items-center justify-center">
              <div className="max-w-[168px] max-h-[241px] w-full h-full">
                <ProductCard
                  imageSrc={`/images/${locale}/slide5/carousel_herramientasJardin.png`}
                  alt="Carousel de Herramientas de jardín"
                  imgClassName="!max-h-[241px] !max-w-[168px] p-30"
                  onClick={() => setOpenDialog("herramientasJardin")}
                  variant="floating"
                  buttonText=""
                  buttonContainerClassName="!bottom-[10%]"
                  buttonClassName="hidden"
                />
              </div>
              <div className="max-w-[168px] max-h-[241px] w-full h-full">
                <ProductCard
                  imageSrc={`/images/${locale}/slide5/carousel_bateriasCargadores.png`}
                  alt="Carousel de Herramientas de jardín"
                  imgClassName="!max-h-[241px] !max-w-[168px] p-30"
                  onClick={() => setOpenDialog("bateriasCargadores")}
                  variant="floating"
                  buttonText=""
                  buttonContainerClassName="!bottom-[10%]"
                  buttonClassName="hidden"
                />
              </div>
              <div className="max-w-[168px] max-h-[241px] w-full h-full">
                <ProductCard
                  imageSrc={`/images/${locale}/slide5/carousel_solucionesAlmacenamiento.png`}
                  alt="Carousel de Herramientas de jardín"
                  imgClassName="!max-h-[241px] !max-w-[168px] p-30"
                  onClick={() => setOpenDialog("solucionesAlmacenamiento")}
                  variant="floating"
                  buttonText=""
                  buttonContainerClassName="!bottom-[10%]"
                  buttonClassName="hidden"
                />
              </div>
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
