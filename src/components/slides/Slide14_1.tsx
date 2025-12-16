import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide14_1 {
  isActive: boolean;
}

export const Slide14_1: React.FC<Slide14_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px]">
        <div className="flex flex-col gap-[30px]">
          <Image
            src={`/images/${locale}/slide14/cuidadoSuelo.png`}
            alt="Cuidado del suelo"
            width={535}
            height={510}
          />
          <Image
            src={`/images/${locale}/slide14/cuidadoTerreno.png`}
            alt="Cuidado del terreno"
            width={535}
            height={241}
          />
        </div>
      </CarouselSlide>
    </>
  );
};
