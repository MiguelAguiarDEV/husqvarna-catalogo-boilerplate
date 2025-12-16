import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabelEnum, MenuLabels } from "../Header";
import { motion } from "framer-motion";

interface Slide6_1Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide6_1: React.FC<Slide6_1Props> = ({
  isActive,
  onClickMenu,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  return (
    <>
      <CarouselSlide key="2" className="p-[30px] pr-0">
        <div className="flex flex-col gap-[30px] pr-0">
          {/* upper content */}
          <div className="flex align-center items-center w-full h-full max-w-[1130px] max-h-[511px]">
            <Image
              src={`/images/${locale}/slide6/midBackgroundLeft.png`}
              alt="slide6"
              className="h-full w-full object-cover"
              width={1130}
              height={511}
            />
          </div>
          {/* bottom content */}

          <div className="flex flex-row gap-[15px] w-full items-center justify-center">
            <div className="max-w-[253px] max-h-[231px] w-full h-full">
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.AUTOMOWERS)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide6/automower.jpg`}
                alt="Automower robotic mowers"
                width={253}
                height={231}
              />
            </div>
            <div className="max-w-[253px] max-h-[231px] w-full h-full">
              <motion.img
                onClick={() => onClickMenu(MenuLabelEnum.CORTACESPEDES)}
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                src={`/images/${locale}/slide6/cortacespedes.jpg`}
                alt="Cortacespedes"
                width={253}
                height={231}
              />
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
