import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { PlusIconTooltip } from "../PlusIconTooltip";
import { ProductsDialog } from "../ProductsDialog";
import { ProductCard } from "../ProductCard";
import { Dialog } from "../Dialog";

interface Slide15Props {
  isActive: boolean;
}

export const Slide15: React.FC<Slide15Props> = ({ isActive }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.query.locale as string;

  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const productDialogImages = {
    trituradorElectrico: [
      {
        src: `/images/${locale}/slide15/trituradorElectrico/carrusel-Triturador electrico_00.png`,
        href:
          locale === "pt"
            ? ""
            : "",
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
      <CarouselSlide className="p-[30px] ">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className="flex flex-row gap-4">
          {/* left */}

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
          {/* right */}
          <div className="relative h-[100%]">
            <Image
              src={`/images/${locale}/slide15/fondo.png`}
              alt="Fondo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
            <div id="header">
              <Image
                src={`/images/${locale}/slide15/tuto.png`}
                alt="Header tutorial"
                className="absolute top-[3.83%] left-[5.6%] right-[5.6%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "88.6%", height: "4.86%" }}
              />
            </div>
            <div id="content">
              <div id="trasto1">
                <Image
                  src={`/images/${locale}/slide15/trasto1/imagenTrasto.png`}
                  alt="Fondo"
                  className="absolute top-[19.82%] left-[20.56%]"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "35.88%", height: "43.78%" }}
                />

                <PlusIconTooltip
                  iconName="number_1"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[17.9%] left-[49.72%]"
                  tooltipText={t("slide15.caracteristicas_delante.1", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_2"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[29.28%] left-[45.42%]"
                  tooltipText={t("slide15.caracteristicas_delante.2", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_3"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[33.02%] left-[41.5%]"
                  tooltipText={t("slide15.caracteristicas_delante.3", {
                    lng: "es",
                  })}
                />

                <PlusIconTooltip
                  iconName="number_4"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[34.14%] left-[30.69%]"
                  tooltipText={t("slide15.caracteristicas_delante.4", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_5"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[41.05%] left-[42.99%]"
                  tooltipText={t("slide15.caracteristicas_delante.5", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_6"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[48.7%] left-[32.89%]"
                  tooltipText={t("slide15.caracteristicas_delante.6", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_7"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute top-[52.55%] left-[32.89%]"
                  tooltipText={t("slide15.caracteristicas_delante.7", {
                    lng: "es",
                  })}
                />
              </div>

              <div id="trasto2">
                <Image
                  src={`/images/${locale}/slide15/trasto2/imagenTrasto.png`}
                  alt="Fondo"
                  className="absolute bottom-[10.87%] right-[12.66%]"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "35.88%", height: "43.78%" }}
                />

                <PlusIconTooltip
                  iconName="number_1"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute bottom-[46.43%] right-[41.5%]"
                  tooltipText={t("slide15.caracteristicas_detras.1", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_2"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute bottom-[34.84%] right-[28.5%]"
                  tooltipText={t("slide15.caracteristicas_detras.2", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_3"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute bottom-[29%] right-[31.59%]"
                  tooltipText={t("slide15.caracteristicas_detras.3", {
                    lng: "es",
                  })}
                />
                <PlusIconTooltip
                  iconName="number_4"
                  tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                  className="absolute bottom-[23.71%] right-[19%]"
                  tooltipText={t("slide15.caracteristicas_detras.4", {
                    lng: "es",
                  })}
                />
              </div>
            </div>
            <div id="footer">
              <Image
                src={`/images/${locale}/slide15/fondoVideo.png`}
                alt="Ver video"
                className="absolute bottom-[3.83%] left-[5.6%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "41.7%", height: "18.3%" }}
              />
              <Image
                src={`/images/${locale}/slide15/verVideo.png`}
                alt="Ver video"
                className="absolute bottom-[10%] left-[14.7%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "23.92%", height: "4.87%" }}
                onClick={() => setIsVideoOpen(true)}
              />
              <Image
                src={`/images/${locale}/slide15/notaPie.png`}
                alt="Nota pie"
                className="absolute bottom-[3.83%] right-[5.6%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "41.5%", height: "2.55%" }}
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
        {/* video: por desgracia el locale aqui no se puede usar porque vimeo lo capa */}
        <Dialog
          open={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          hideIcon={true}
          className={`
            relative h-full max-w-[80%]
            p-18 sm:h-[75vh]
          `}
          containerClassName="py-10"
        >
          {locale !== "pt" ? (
            <iframe
              src={
                "https://player.vimeo.com/video/1039584376?h=48f2c64cbf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              }
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <iframe
              src={
                "https://player.vimeo.com/video/1039584934?h=0606f22aa7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              }
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          )}
        </Dialog>
      </CarouselSlide>
    </>
  );
};
