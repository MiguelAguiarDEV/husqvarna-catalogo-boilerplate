import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide4Props {
  isActive: boolean;
}

export const Slide4: React.FC<Slide4Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  return (
    <CarouselSlide key="2" className="pl-[20px] pt-[20px]">
      <div className="flex flex-row ">
        {/* left content */}
        <div className="flex flex-col  justify-center w-1/2">
          <Image
            src={`/images/${locale}/slide4/futuroMejor.jpg`}
            alt="Por un futuro mejor"
            className="object-fill"
            // width={535}
            // height={647}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "95%", height: "auto" }}
          />

          <Image
            src={`/images/${locale}/slide4/footerIcons.jpg`}
            alt="Iconos del pie de página"
            className="object-fill mt-[3%]"
            // width={535}
            // height={105}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "95%", height: "auto" }}
          />
        </div>
        {/* right content */}
        <div className="flex flex-col w-1/2">
          {/* first row */}
          <div className="flex flex-row mb-1 justify-between max-w-[100%]">
            <Image
              src={`/images/${locale}/slide4/bateriaFlexible.png`}
              alt="Batería flexible"
              className="object-fill"
              // width={293}
              // height={136}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "auto" }}
            />
            <Image
              src={`/images/${locale}/slide4/maquinaConBateria.png`}
              alt="Máquina con batería"
              className="object-fill"
              // width={293}
              // height={184}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
          {/* second row */}
          <div className="pl-1 h-full max-h-[430px] w-full max-w-[100%] pr-[30px] mt-[3.5%]">
            <Image
              src={`/images/${locale}/slide4/gustoPorMaquinasBateria.png`}
              alt="Gusto por máquinas con batería"
              className="object-fill"
              // width={564}
              // height={430}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "95%", height: "auto" }}
            />
          </div>
          {/* third row */}
          <div className="pl-6 h-full max-h-[179px] w-full max-w-[100%] pr-[30px] mt-[3.5%]">
            <Image
              src={`/images/${locale}/slide4/vidaUtil.png`}
              alt="Prolonga la vida útil"
              className="object-fill"
              // width={553}
              // height={179}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "95%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
