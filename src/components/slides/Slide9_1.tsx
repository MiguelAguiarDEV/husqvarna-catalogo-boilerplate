import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide9_1Props {
  isActive: boolean;
}

export const Slide9_1: React.FC<Slide9_1Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <CarouselSlide className="max-w-[100vw] p-[30px]">
      <div className="flex flex-col">
        {/* upper content */}

        <Image
          src={`/images/${locale}/slide9/midBackgroundLeft.png`}
          alt="background left"
          className="w-full h-full object-cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />

        {/* lower content */}
        <div className="flex flex-row flex-grow items-start justify-between max-w-[100%] mt-[5.65%]">
          <Image
            src={`/images/${locale}/slide9/corteAltoNivel.jpg`}
            alt="corte de algo nivel con un cortacesped Husqvarna"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "48.6%", height: "auto" }}
          />

          <Image
            src={`/images/${locale}/slide9/resistentesFiables.jpg`}
            alt="resistentes y fiables"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "48%", height: "auto" }}
          />
        </div>
      </div>
    </CarouselSlide>
  );
};
