import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { CarouselSlide } from "../CarouselSlide";
import { /*MenuLabelEnum,*/ MenuLabels } from "../Header";
import { SlideTitle } from "../SlideTitle";

interface Slide2_1Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide2_1: React.FC<Slide2_1Props> = ({
  isActive,
  onClickMenu,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <CarouselSlide key="2_1" className={`h-auto p-[30px] pr-0 !justify-end`}>
      <div className="flex flex-col gap-5 relative">
        <Image
          loading="lazy"
          src={`/images/${locale}/slide2/background_1.png`}
          alt="slide2_1 background"
          className="h-[75%] w-full max-h-[644px]"
          width={565}
          height={644}
        />

        <div>
          <Image
            src={`/images/${locale}/slide2/subtitle.png`}
            alt="Subtitulo"
            className="w-auto h-auto"
            width={155}
            height={13}
          />

          <Image
            src={`/images/${locale}/slide2/description.png`}
            alt="Descripción"
            className="w-auto h-auto mt-[10px]"
            width={535}
            height={95}
          />
        </div>

        <div className="absolute left-[7%] top-[13%] max-w-[40%]">
          <SlideTitle
            className="sm:!text-[45px] !text-[30px]"
            variant="bg-transparent"
            title={t("slide2.title")}
            isActive={isActive}
          />
          <div className="flex  w-[43.5%] h-[38px] mt-5 md:text-base text-sm max-w-[261px] border-[1.55px] border-white rounded-[12px] justify-center items-center">
            <p>{t("slide2.description")}</p>
          </div>
        </div>
      </div>
    </CarouselSlide>
  );
};
