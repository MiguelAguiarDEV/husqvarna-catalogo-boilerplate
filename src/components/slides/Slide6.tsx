import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { MenuLabelEnum, MenuLabels } from "../Header";
import { motion } from "framer-motion";
interface Slide6Props {
  isActive: boolean;
  onClickMenu: (label: MenuLabels) => void;
}

export const Slide6: React.FC<Slide6Props> = ({ isActive, onClickMenu }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  return (
    <>
      <CarouselSlide key="2" className="p-[30px] pb-[50px]">
        <div className="flex flex-col gap-[30px]">
          {/* upper content */}
          <div className="flex align-center items-center w-full h-full max-w-[1130px] max-h-[511px]">
            <Image
              src={`/images/${locale}/slide6/midBackground.png`}
              alt="slide6"
              className="h-full w-full object-cover"
              width={1130}
              height={511}
            />
          </div>
          {/* bottom content */}
          <div className="flex flex-row gap-[30px]">
            {/* left page content */}
            <div className="flex flex-row gap-[15px] w-1/2 items-center justify-center">
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
            {/* right page content */}
            <div className="flex flex-row gap-[15px] w-1/2 items-center justify-center">
              <div className="max-w-[253px] max-h-[231px] w-full h-full">
                <motion.img
                  onClick={() => onClickMenu(MenuLabelEnum.TRACTORES)}
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                  src={`/images/${locale}/slide6/tractores.jpg`}
                  alt="Tractores"
                  width={253}
                  height={231}
                />
              </div>
              <div className="max-w-[253px] max-h-[231px] w-full h-full">
                <motion.img
                  onClick={() => onClickMenu(MenuLabelEnum.RIDERS)}
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                  src={`/images/${locale}/slide6/riders.jpg`}
                  alt="Riders"
                  width={253}
                  height={231}
                />
              </div>
            </div>
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
