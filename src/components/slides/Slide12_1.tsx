import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";

interface Slide12_1 {
  isActive: boolean;
}

export const Slide12_1: React.FC<Slide12_1> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[1px] w-full">
        {/* left */}
        <div className="flex flex-col p-[5.25%] justify-start">
          {/* upper content */}
          <div className="max-h-[511px] w-full h-full mb-[5.25%]">
            <Image
              src={`/images/${locale}/slide12/midBackgroundLeft.png`}
              alt="background left"
              className="w-full h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* lower content */}
          <div className="flex flex-row gap-[15px]">
            <div>
              <Image
                src={`/images/${locale}/slide12/usoMotosierra.jpg`}
                alt="Toda la información sobre el uso de motosierra"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
