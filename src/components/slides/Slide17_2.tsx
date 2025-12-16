import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

export const Slide17_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px]">
        <div className="flex flex-col gap-4">
          <Image
            src={`/images/${locale}/slide17/rightItems/background.png`}
            alt="Sopladora"
            width={535}
            height={384}
          />
          <div className="relative mb-5">
            <Image
              src={`/images/${locale}/slide17/rightItems/TEXTO.png`}
              alt="Texto"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "37.16%", height: "auto" }}
            />

            <Image
              src={`/images/${locale}/slide17/rightItems/imageTrastos.png`}
              alt="Trastos"
              className="absolute top-1/2 transform -translate-y-[57.5%] right-[5.5%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "57.87%", height: "auto" }}
            />
          </div>
          <div className="flex flex-row gap-[30px]">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-1.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/ferramentas-florestais"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/herramientas-forestales/"
                    );
              }}
            />
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-2.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/oleos-e-gasolinas/bidao"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/?s=bidon"
                    );
              }}
            />
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-3.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=xplorer"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/xplorer/"
                    );
              }}
            />
          </div>
          <div className="flex flex-row gap-[30px]">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-4.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/equipamento-arboricultura/"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/equipamiento-arboricultura/"
                    );
              }}
            />
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-5.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/oleos-e-gasolinas"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/aceites-gasolinas/"
                    );
              }}
            />
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-6.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/brinquedos/"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/juguetes/"
                    );
              }}
            />
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
