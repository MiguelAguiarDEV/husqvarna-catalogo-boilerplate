import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { PlusIconTooltip } from "../PlusIconTooltip";

export const Slide15_2: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  return (
    <>
      <CarouselSlide className="p-[30px]">
        <div className="relative h-[100%]">
          <Image
            src={`/images/${locale}/slide15/fondo.png`}
            alt="Fondo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
          />
          <div id="header">
            <Image
              src={`/images/${locale}/slide15/tuto.png`}
              alt="Header tutorial"
              className="absolute top-[3.83%] left-[5.6%] right-[5.6%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "88.6%", height: "4.86%" }}
            />
          </div>
          <div id="content">
            <div id="trasto1">
              <Image
                src={`/images/${locale}/slide15/trasto1/imagenTrasto.png`}
                alt="Fondo"
                className="absolute top-[19.82%] left-[20.56%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35.88%", height: "43.78%" }}
              />

              <PlusIconTooltip
                iconName="number_1"
                tooltipContentClassName="w-[300px] bg-[#273A60] text-white"
                className="absolute top-[22%] left-[49.72%]"
                tooltipText={t("slide15.caracteristicas_delante.1", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_2"
                tooltipContentClassName="w-[315px] bg-[#273A60] text-white"
                className="absolute top-[29.28%] left-[45.42%]"
                tooltipText={t("slide15.caracteristicas_delante.2", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_3"
                tooltipContentClassName="w-[220px] bg-[#273A60] text-white"
                className="absolute top-[33.02%] left-[41.5%]"
                tooltipText={t("slide15.caracteristicas_delante.3", {
                  lng: "es",
                })}
              />

              <PlusIconTooltip
                iconName="number_4"
                tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                className="absolute top-[34.14%] left-[30.69%]"
                tooltipText={t("slide15.caracteristicas_delante.4", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_5"
                tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                className="absolute top-[41.05%] left-[42.99%]"
                tooltipText={t("slide15.caracteristicas_delante.5", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_6"
                tooltipContentClassName="w-[225px] bg-[#273A60] text-white"
                className="absolute top-[48.7%] left-[32.89%]"
                tooltipText={t("slide15.caracteristicas_delante.6", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_7"
                tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                className="absolute top-[52.55%] left-[32.89%]"
                tooltipText={t("slide15.caracteristicas_delante.7", {
                  lng: "es",
                })}
              />
            </div>

            <div id="trasto2">
              <Image
                src={`/images/${locale}/slide15/trasto2/imagenTrasto.png`}
                alt="Fondo"
                className="absolute bottom-[10.87%] right-[12.66%]"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35.88%", height: "43.78%" }}
              />

              <PlusIconTooltip
                iconName="number_1"
                tooltipContentClassName="w-[275px] bg-[#273A60] text-white"
                className="absolute bottom-[46.43%] right-[41.5%]"
                tooltipText={t("slide15.caracteristicas_detras.1", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_2"
                tooltipContentClassName="w-[200px] bg-[#273A60] text-white"
                className="absolute bottom-[34.84%] right-[28.5%]"
                tooltipText={t("slide15.caracteristicas_detras.2", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_3"
                tooltipContentClassName="w-[225px] bg-[#273A60] text-white"
                className="absolute bottom-[29%] right-[31.59%]"
                tooltipText={t("slide15.caracteristicas_detras.3", {
                  lng: "es",
                })}
              />
              <PlusIconTooltip
                iconName="number_4"
                tooltipContentClassName="w-[150px] bg-[#273A60] text-white"
                className="absolute bottom-[23.71%] right-[19%]"
                tooltipText={t("slide15.caracteristicas_detras.4", {
                  lng: "es",
                })}
              />
            </div>
          </div>
          <div id="footer">
            <Image
              src={`/images/${locale}/slide15/fondoVideo.png`}
              alt="Ver video"
              className="absolute bottom-[3.83%] left-[5.6%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "41.7%", height: "18.3%" }}
            />
            <Image
              src={`/images/${locale}/slide15/verVideo.png`}
              alt="Ver video"
              className="absolute bottom-[10%] left-[14.7%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "23.92%", height: "4.87%" }}
            />
            <Image
              src={`/images/${locale}/slide15/notaPie.png`}
              alt="Nota pie"
              className="absolute bottom-[3.83%] right-[5.6%]"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "41.5%", height: "2.55%" }}
            />
          </div>
        </div>
      </CarouselSlide>
    </>
  );
};
