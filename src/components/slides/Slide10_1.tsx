import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide10_1Props {
  isActive: boolean;
}

export const Slide10_1: React.FC<Slide10_1Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px] pr-0">
        <div className="flex flex-row max-w-[100%] max-h-[100%] gap-[30px] items-center">
          <div className="flex flex-col gap-[30px]">
            {
              // upper content
            }
            <div className="w-full h-full">
              <Image
                src={`/images/${locale}/slide10/midBackgroundLeft.png`}
                alt="background left"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {
              // lower content
            }
            <div className="flex flex-row gap-[30px] relative overflow-hidden max-w-[100%]">
              <Image
                src={`/images/${locale}/slide10/tractorAdecuado.jpg`}
                alt="tractor adecuado"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "72.2%", height: "auto" }}
              />
              <Image
                src={`/images/${locale}/slide10/adaptaSegunTemporadaLeft.jpg`}
                alt="adapta según temporada"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "22.4%", height: "auto" }}
              />
              <Image
                src={`/images/${locale}/slide10/temporadaRodillo.png`}
                alt="Rodillo para temporada"
                className="object-cover absolute bottom-[8%] right-[-10.26%] "
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "44.77%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
