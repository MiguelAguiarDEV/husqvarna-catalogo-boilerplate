import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { pushBuyProduct } from "@/utils/analytics";

export const Slide9_3: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <CarouselSlide className="h-[calc(100vh-158px)] w-screen">
      <div className="flex h-full w-full flex-col gap-4 pt-4">
        <div className="flex h-[31%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/botas-anticorte.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct(
                "Accesorios",
                locale,
                "Botas anticorte clase 1 (20m/s)"
              );
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/roupa/roupa-de-protecao/botas/botas-protecao-couro-classic-anticorte-classe1/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/ropa/ropa-de-proteccion/botas-seguridad/botas-proteccion-classic-20/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide9/botas-proteccion.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct(
                "Accesorios",
                locale,
                "Botas de protección light 24 clase 2 (24m/s)"
              );
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/roupa/vestuario-protecao/botas-protecao-light-24/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/ropa/ropa-de-proteccion/botas-seguridad/botas-proteccion-light-24/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
        </div>
        <div className="flex h-[31%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/casco.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Casco forestal classic");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/roupa/vestuario-protecao/casaco-florestal-classic/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/ropa/ropa-de-proteccion/cascos-proteccion/casco-forestal-classic/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide9/hacha.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct(
                "Accesorios",
                locale,
                "Hacha Husqvarna camping 36cm"
              );
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/ferramentas-florestais/machado-pequeno-600gramas/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/herramientas-forestales/hacha-pequena-madera/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
        </div>
        <div className="flex h-[31%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/serrucho-plegable.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Serrucho plegable 215mm");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/ferramentas-florestais/serra-poda-dobravel-200p/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/herramientas-forestales/sierra-poda-plegable-200p/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide9/serrucho-curvo.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Serrucho curvo con funda");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/ferramentas-florestais/serra-poda-fixa-300cu/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/herramientas-forestales/sierra-de-poda-curvada-300c/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
