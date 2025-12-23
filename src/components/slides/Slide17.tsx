import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide17Props {
  isActive: boolean;
}

export const Slide17: React.FC<Slide17Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px] ">
        <div className="flex flex-row gap-4">
          {/* left */}

          <div className="flex flex-col gap-4">
            <Image
              src={`/images/${locale}/slide17/leftItems/background.png`}
              alt="Sopladora"
              width={535}
              height={384}
            />
            <div className="relative">
              <Image
                src={`/images/${locale}/slide17/leftItems/TEXTO.png`}
                alt="Texto"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "37.16%", height: "auto" }}
              />

              <Image
                src={`/images/${locale}/slide17/leftItems/imageTrastos.png`}
                alt="Trastos"
                className="absolute top-1/2 transform -translate-y-[53%] right-[-5.5%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "77%", height: "auto" }}
              />
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-6">
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
          </div>
        </div>
        {/* lower part */}
        {/* first row */}
        <div className="flex flex-row flex-wrap gap-1 md:gap-[30px] mt-0 md:mt-[15px]">
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-1.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=luvas"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/guantes-trabajo/"
                    );
              }}
            />
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-2.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=capacetes"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/cascos-proteccion/"
                    );
              }}
            />
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-3.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=botas"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/botas-seguridad/"
                    );
              }}
            />
          </div>

          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-1.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-2.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-3.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
        </div>
        {/* second row */}
        <div className="flex flex-row flex-wrap gap-1 md:gap-[30px] mt-0 md:mt-[15px]">
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-4.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=roupa-de-protecao"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/chaquetas-pantalones/"
                    );
              }}
            />
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-5.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/?s=protetor+auricular"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/auriculares/"
                    );
              }}
            />
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-6.png`}
              alt="Ficha 1"
              width={158}
              height={75}
              onClick={() => {
                locale === "pt"
                  ? window.open(
                      "https://lojahusqvarna.pt/roupa/?_categoria_ropa_pt=oculos"
                    )
                  : window.open(
                      "https://tiendahusqvarna.com/ropa/ropa-de-proteccion/gafas-proteccion/"
                    );
              }}
            />
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-4.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-5.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
          </div>
          <div className="w-[15%] md:max-w-[158px] md:max-h-[75px] md:w-full h-full hover:scale-105">
            <Image
              src={`/images/${locale}/slide17/rightItems/ficha-6.png`}
              alt="Ficha 1"
              width={158}
              height={75}
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
