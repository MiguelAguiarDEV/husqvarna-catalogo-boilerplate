import { Carousel } from "@/components/Carousel";
import { Header, MenuItem, MenuLabels } from "@/components/Header";
import { PageData } from "@/components/SearchDialog";
import { useRouter } from "next/router";
import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide2_1 } from "@/components/slides/Slide2_1";
import { Slide2_2 } from "@/components/slides/Slide2_2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide3_1 } from "@/components/slides/Slide3_1";
import { Slide3_2 } from "@/components/slides/Slide3_2";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide4_1 } from "@/components/slides/Slide4_1";
import { Slide4_2 } from "@/components/slides/Slide4_2";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide5_1 } from "@/components/slides/Slide5_1";
import { Slide5_2 } from "@/components/slides/Slide5_2";
import { Slide6 } from "@/components/slides/Slide6";
import { Slide6_1 } from "@/components/slides/Slide6_1";
import { Slide6_2 } from "@/components/slides/Slide6_2";
import { Slide7 } from "@/components/slides/Slide7";
import { Slide7_1 } from "@/components/slides/Slide7_1";
import { Slide7_2 } from "@/components/slides/Slide7_2";
import { Slide8 } from "@/components/slides/Slide8";
import { Slide8_1 } from "@/components/slides/Slide8_1";
import { Slide8_2 } from "@/components/slides/Slide8_2";
import { Slide9 } from "@/components/slides/Slide9";
import { Slide9_1 } from "@/components/slides/Slide9_1";
import { Slide9_2 } from "@/components/slides/Slide9_2";
import { Slide10 } from "@/components/slides/Slide10";
import { Slide10_1 } from "@/components/slides/Slide10_1";
import { Slide10_2 } from "@/components/slides/Slide10_2";
import { Slide11 } from "@/components/slides/Slide11";
import { Slide11_1 } from "@/components/slides/Slide11_1";
import { Slide11_2 } from "@/components/slides/Slide11_2";
import { Slide12 } from "@/components/slides/Slide12";
import { Slide12_1 } from "@/components/slides/Slide12_1";
import { Slide12_2 } from "@/components/slides/Slide12_2";
import { Slide13 } from "@/components/slides/Slide13";
import { Slide13_1 } from "@/components/slides/Slide13_1";
import { Slide13_2 } from "@/components/slides/Slide13_2";
import { Slide14 } from "@/components/slides/Slide14";
import { Slide14_1 } from "@/components/slides/Slide14_1";
import { Slide14_2 } from "@/components/slides/Slide14_2";
import { Slide15 } from "@/components/slides/Slide15";
import { Slide15_1 } from "@/components/slides/Slide15_1";
import { Slide15_2 } from "@/components/slides/Slide15_2";
import { Slide16 } from "@/components/slides/Slide16";
import { Slide16_1 } from "@/components/slides/Slide16_1";
import { Slide16_2 } from "@/components/slides/Slide16_2";
import { Slide17 } from "@/components/slides/Slide17";
import { Slide17_1 } from "@/components/slides/Slide17_1";
import { Slide17_2 } from "@/components/slides/Slide17_2";
import { Meta } from "@/layouts/Meta";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getStaticPaths, makeStaticProps } from "../../i18n/getStatic";
import { pushPageImpression, pushProductsToDataLayer } from "@/utils/analytics";

export default function Index() {
  const { t } = useTranslation();
  console.log(t);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const previousActiveSlide = useRef<number | undefined>(undefined);
  const router = useRouter();
  const locale = router.query.locale as string;

  const menuItemsMobile: MenuItem[] = [
    { label: t("header.menu.CORTE_Y_TALA", { lng: "es" }), slideIndex: [21] },
    {
      label: t("header.menu.CUIDADO_DEL_CESPED", { lng: "es" }),
      slideIndex: [9],
    },
    { label: t("header.menu.LIMPIEZA", { lng: "es" }), slideIndex: [27] },
    {
      label: t("header.menu.RECORTE_Y_DESBROCE", { lng: "es" }),
      slideIndex: [23],
    },
    {
      label: t("header.menu.CUIDADO_DEL_SUELO", { lng: "es" }),
      slideIndex: [25],
    },
    {
      label: t("header.menu.RESPECTO_A_LA_NATURALEZA", { lng: "es" }),
      slideIndex: [5],
    },
    {
      label: t("header.menu.GENERADORES_Y_MOTOBOMBAS", { lng: "es" }),
      slideIndex: [29],
    },
    {
      label: t("header.menu.ROPA_Y_ACCESORIOS", { lng: "es" }),
      slideIndex: [31],
    },
  ];

  const itemsHiddenDesktop: MenuItem[] = [
    { label: t("header.menu.AUTOMOWERS", { lng: "es" }), slideIndex: [6] },
    { label: t("header.menu.CORTACESPEDES", { lng: "es" }), slideIndex: [8] },
    { label: t("header.menu.TRACTORES", { lng: "es" }), slideIndex: [9] },
    { label: t("header.menu.RIDERS", { lng: "es" }), slideIndex: [10] },
  ];
  const itemsHiddenMobile: MenuItem[] = [
    { label: t("header.menu.AUTOMOWERS", { lng: "es" }), slideIndex: [11] },
    { label: t("header.menu.CORTACESPEDES", { lng: "es" }), slideIndex: [15] },
    { label: t("header.menu.TRACTORES", { lng: "es" }), slideIndex: [17] },
    { label: t("header.menu.RIDERS", { lng: "es" }), slideIndex: [19] },
  ];

  const menuItemsDesktop: MenuItem[] = [
    { label: t("header.menu.CORTE_Y_TALA", { lng: "es" }), slideIndex: [11] },
    {
      label: t("header.menu.CUIDADO_DEL_CESPED", { lng: "es" }),
      slideIndex: [5],
    },
    { label: t("header.menu.LIMPIEZA", { lng: "es" }), slideIndex: [14] },
    {
      label: t("header.menu.RECORTE_Y_DESBROCE", { lng: "es" }),
      slideIndex: [12],
    },
    {
      label: t("header.menu.CUIDADO_DEL_SUELO", { lng: "es" }),
      slideIndex: [13],
    },
    {
      label: t("header.menu.RESPECTO_A_LA_NATURALEZA", { lng: "es" }),
      slideIndex: [3],
    },
    {
      label: t("header.menu.GENERADORES_Y_MOTOBOMBAS", { lng: "es" }),
      slideIndex: [15],
    },
    {
      label: t("header.menu.ROPA_Y_ACCESORIOS", { lng: "es" }),
      slideIndex: [16],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChangeMenu = (label: MenuLabels) => {
    if (menuItemsHidden.some((item) => item.label === label)) {
      setActiveSlide(
        menuItemsHidden.find((item) => item.label === label)?.slideIndex[0] || 0
      );
    } else {
      setActiveSlide(
        menuItems.find((item) => item.label === label)?.slideIndex[0] || 0
      );
    }
  };

  useEffect(() => {
    if (previousActiveSlide.current !== activeSlide) {
      pushPageImpression(locale);
      const adjustedSlide = isMobile ? Math.ceil(activeSlide / 2) : activeSlide;
      let products: any[] = [];
      switch (adjustedSlide) {
        case 2:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide3.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide3.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide3.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide3.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide3.section"), products);
          break;
        case 3:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide4.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide4.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide4.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide4.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide4.section"), products);
          break;
        case 4:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide5.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide5.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide5.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide5.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide5.section"), products);
          break;
        case 5:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide6.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide6.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide6.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide6.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide6.section"), products);
          break;
        case 6:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide7.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide7.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide7.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide7.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide7.section"), products);
          break;
        case 7:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide8.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide8.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide8.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide8.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide8.section"), products);
          break;
        case 8:
          if (isMobile) {
            if (activeSlide % 2 === 0) {
              products = [
                ...((t("common:slide9.productsSecondPage", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            } else {
              products = [
                ...((t("common:slide9.products", {
                  returnObjects: true,
                }) as any[]) || []),
              ];
            }
          } else {
            products = [
              ...((t("common:slide9.products", {
                returnObjects: true,
              }) as any[]) || []),
              ...((t("common:slide9.productsSecondPage", {
                returnObjects: true,
              }) as any[]) || []),
            ];
          }
          pushProductsToDataLayer(locale, t("common:slide9.section"), products);
          break;
        default:
          break;
      }
      previousActiveSlide.current = activeSlide;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  const slidesDesktop = [
    <Slide1 key={0} />,
    <Slide2
      key={1}
      isActive={activeSlide === 1}
      onClickMenu={handleChangeMenu}
    />,
    <Slide3
      key={2}
      isActive={activeSlide === 2}
      onClickMenu={handleChangeMenu}
    />,
    <Slide4 key={3} isActive={activeSlide === 3} />,
    <Slide5 key={4} isActive={activeSlide === 4} />,
    <Slide6
      key={5}
      isActive={activeSlide === 5}
      onClickMenu={handleChangeMenu}
    />,
    <Slide7 key={6} isActive={activeSlide === 6} />,
    <Slide8 key={7} isActive={activeSlide === 7} />,
    <Slide9 key={8} isActive={activeSlide === 8} />,
    <Slide10 key={9} isActive={activeSlide === 9} />,
    <Slide11 key={10} isActive={activeSlide === 10} />,
    <Slide12 key={11} isActive={activeSlide === 11} />,
    <Slide13 key={12} isActive={activeSlide === 12} />,
    <Slide14 key={13} isActive={activeSlide === 13} />,
    <Slide15 key={14} isActive={activeSlide === 14} />,
    <Slide16 key={15} isActive={activeSlide === 15} />,
    <Slide17 key={16} isActive={activeSlide === 16} />,
  ];

  const slidesMobile = [
    <Slide1 key={0} />,
    <Slide2_1
      key={1}
      isActive={activeSlide === 1}
      onClickMenu={handleChangeMenu}
    />,
    <Slide2_2 key={2} onClickMenu={handleChangeMenu} />,
    <Slide3_1
      key={3}
      isActive={activeSlide === 3}
      onClickMenu={handleChangeMenu}
    />,
    <Slide3_2 key={4} onClickMenu={handleChangeMenu} />,
    <Slide4_1 key={5} isActive={activeSlide === 5} />,
    <Slide4_2 key={6} />,
    <Slide5_1 key={7} isActive={activeSlide === 7} />,
    <Slide5_2 key={8} />,
    <Slide6_1
      key={9}
      isActive={activeSlide === 9}
      onClickMenu={handleChangeMenu}
    />,
    <Slide6_2 key={10} onClickMenu={handleChangeMenu} />,
    <Slide7_1 key={11} isActive={activeSlide === 11} />,
    <Slide7_2 key={12} />,
    <Slide8_1 key={13} isActive={activeSlide === 13} />,
    <Slide8_2 key={14} />,
    <Slide9_1 key={15} isActive={activeSlide === 15} />,
    <Slide9_2 key={16} />,
    <Slide10_1 key={17} isActive={activeSlide === 17} />,
    <Slide10_2 key={18} />,
    <Slide11_1 key={19} isActive={activeSlide === 19} />,
    <Slide11_2 key={20} />,
    <Slide12_1 key={21} isActive={activeSlide === 21} />,
    <Slide12_2 key={22} />,
    <Slide13_1 key={23} isActive={activeSlide === 23} />,
    <Slide13_2 key={24} />,
    <Slide14_1 key={25} isActive={activeSlide === 25} />,
    <Slide14_2 key={26} />,
    <Slide15_1 key={27} isActive={activeSlide === 27} />,
    <Slide15_2 key={28} />,
    <Slide16_1 key={29} isActive={activeSlide === 29} />,
    <Slide16_2 key={30} />,
    <Slide17_1 key={31} isActive={activeSlide === 31} />,
    <Slide17_2 key={32} />,
  ];

  const slides = isMobile ? slidesMobile : slidesDesktop;
  const menuItems = isMobile ? menuItemsMobile : menuItemsDesktop;
  const menuItemsHidden = isMobile ? itemsHiddenMobile : itemsHiddenDesktop;

  const handleSearchSelect = (page: PageData) => {
    setActiveSlide(isMobile ? page.slideIndexMobile : page.slideIndexDesktop);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <Meta />
      <Header
        onSearchSelect={handleSearchSelect}
        menuItems={menuItems}
        currentIndex={activeSlide}
        totalSlides={slides.length}
        onActiveIndexChange={(index) => setActiveSlide(index)}
      />
      <Carousel
        className="bg-[url('/images/background.jpg')] bg-cover"
        slides={slides}
        spaceBetween={0}
        slidesPerView={1}
        activeIndex={activeSlide}
        onActiveIndexChange={(index) => setActiveSlide(index)}
        noSwipingSelector="dialog"
      />
    </div>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
