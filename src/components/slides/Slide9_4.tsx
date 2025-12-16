import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { ProductCard } from "../ProductCard";
import { pushBuyProduct } from "@/utils/analytics";

export const Slide9_4: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <CarouselSlide className="h-[calc(100vh-158px)] w-screen">
      <div className="flex h-full w-full flex-col gap-4 pt-4">
        <div className="flex h-[31%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/gasolina.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Gasolina XP power 2 (5L)");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/oleos-e-gasolinas/gasolinas/gasolina-husqvarna-xp-power-2-tempos/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/aceites-gasolinas/gasolinas/gasolina-xp-power/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide9/aceite-ls.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Aceite LS (1L)");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/oleos-e-gasolinas/motor-2-tempos/oleo-2-tempos-ls-1l/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/aceites-gasolinas/motor-2-tiempos/aceite-2tiempos-ls/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
        </div>
        <div className="flex h-[31%]">
          <ProductCard
            imageSrc={`/images/${locale}/slide9/aceite-cadena.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct(
                "Accesorios",
                locale,
                "Aceite cadena X-guard (1L)"
              );
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/oleos-e-gasolinas/corrente-motosserra/oleo-corrente-x-guard-bio/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/aceites-gasolinas/cadena-motosierra/aceite-cadena-x-guard/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
          <ProductCard
            imageSrc={`/images/${locale}/slide9/bidon.png`}
            buttonText={t("elements.shop_now")}
            className="w-1/2 gap-0"
            imgClassName="w-full max-w-[326px]"
            onClick={() => {
              pushBuyProduct("Accesorios", locale, "Bidón combustible");
              locale === "pt"
                ? window.open(
                    "https://lojahusqvarna.pt/oleos-gasolinas/bidao-combi-5l/?utm_source=FolletoPT&utm_medium=boton&utm_campaign=Otoño24"
                  )
                : window.open(
                    "https://tiendahusqvarna.es/aceites-gasolinas/bidon-combi-5litros/?utm_source=FolletoES&utm_medium=boton&utm_campaign=Otoño24"
                  );
            }}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
