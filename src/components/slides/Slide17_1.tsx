import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide17_1 {
  isActive: boolean;
}

export const Slide17_1: React.FC<Slide17_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px]">
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
              style={{ width: "35%", height: "auto" }}
            />

            <Image
              src={`/images/${locale}/slide17/leftItems/imageTrastos.png`}
              alt="Trastos"
              className="absolute top-1/2 transform -translate-y-[60%] right-[-5.5%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "77%", height: "auto" }}
            />
          </div>
          <div className="flex flex-row gap-[30px]">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-1.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-2.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-3.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
          <div className="flex flex-row gap-[30px]">
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-4.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-5.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
            <Image
              src={`/images/${locale}/slide17/leftItems/ficha-6.png`}
              alt="Ficha 1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
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
        </div>
      </CarouselSlide>
    </>
  );
};
