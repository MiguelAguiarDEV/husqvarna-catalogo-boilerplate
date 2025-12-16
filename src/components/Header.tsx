import { EnumObjectValues } from "@/utils/misc";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageData, SearchDialog } from "./SearchDialog"; // Assume this component exists
import { Icon } from "./ui/icon";

type Props = {
  currentIndex: number;
  totalSlides: number;
  onActiveIndexChange: (index: number) => void;
  menuItems: MenuItem[];
  onSearchSelect: (page: PageData) => void;
};

export const MenuLabelEnum = {
  CORTE_Y_TALA: "Corte y tala",
  CUIDADO_DEL_CESPED: "Cuidado del césped",
  LIMPIEZA: "Limpieza",
  RECORTE_Y_DESBROCE: "Recorte y desbroce",
  CUIDADO_DEL_SUELO: "Cuidado del suelo",
  RESPECTO_A_LA_NATURALEZA: "Respeto a la naturaleza",
  GENERADORES_Y_MOTOBOMBAS: "Generadores y motobombas",
  ROPA_Y_ACCESORIOS: "Ropa y accesorios",
  AUTOMOWERS: "Automowers",
  CORTACESPEDES: "Cortacespedes",
  TRACTORES: "Tractores",
  RIDERS: "Riders",
} as const;
export type MenuLabels = EnumObjectValues<typeof MenuLabelEnum>;

export type MenuItem = {
  label: MenuLabels;
  slideIndex: number[];
};

export const Header = ({
  currentIndex = 1,
  totalSlides = 1,
  onActiveIndexChange,
  menuItems,
  onSearchSelect,
}: Props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matchingItem = menuItems.find((item) =>
      item.slideIndex.includes(currentIndex)
    );
    setActiveItem(matchingItem ? matchingItem.label : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    const activeTabElement = tabsContainerRef.current?.querySelector(
      `[data-tab="${activeItem}"]`
    ) as HTMLElement | null;

    if (activeTabElement && tabsContainerRef.current) {
      const containerRect = tabsContainerRef.current.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();

      if (
        tabRect.left < containerRect.left ||
        tabRect.right > containerRect.right
      ) {
        tabsContainerRef.current.scrollTo({
          left:
            activeTabElement.offsetLeft -
            containerRect.width / 2 +
            tabRect.width / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeItem]);

  const handleItemClick = (item: MenuItem) => {
    setActiveItem(item.label);
    onActiveIndexChange(item.slideIndex[0] ?? 0);
  };

  const handleSearchClick = () => {
    setIsSearchDialogOpen(true);
  };

  return (
    <>
      <div className="relative z-10 bg-white shadow-sm">
        {" "}
        {/* Added z-10 */}
        <div className="grid h-[54px] grid-cols-3 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleSearchClick}
              className={`
              mr-8 hidden h-[54px] w-[64px] flex-col items-center justify-center

              hover:bg-[#273a60]/20

              md:flex
            `}
            >
              <Icon name="search" size="20px" className="mb-1 text-[#273a60]" />
              <p className="text-[12px] leading-none text-[#273a60]">
                {t("header.search")}
              </p>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/husqvarna-blue.png"
              alt="Husqvarna Logo"
              className="mr-2 h-8"
            />
          </div>
          <div className="text-center text-sm text-[#484848]">
            <span className="rounded-[16px] bg-[#f0f0f0] px-3 py-1">
              <span className="font-medium">{currentIndex + 1}</span> /{" "}
              {totalSlides}
            </span>
          </div>
          <div
            className={`
            flex justify-end

            md:hidden
          `}
          >
            <button
              onClick={handleSearchClick}
              className={`
              flex h-[54px] w-[64px] flex-col items-center justify-center

              hover:bg-[#273a60]/20

              md:hidden
            `}
            >
              <Icon name="search" size="20px" className="mb-1 text-[#273a60]" />
              <p className="text-[12px] leading-none text-[#273a60]">
                {t("header.search")}
              </p>
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
          absolute ${isMenuOpen ? "bottom-[-83px]" : "bottom-[-16px]"
            } left-1/2 z-10 flex h-[28px] w-[28px]
          -translate-x-1/2 items-center justify-center rounded-full bg-[#f25421]
          p-1 transition-all duration-300 ease-in-out

          ${isMenuOpen ? "rotate-180" : ""}

          active:bg-[#d94813]

          hover:bg-[#f47a51]
        `}
        >
          <Icon name="chevron-down" size="20px" className="text-white" />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden absolute w-full bg-white"
            >
              <div className="flex justify-center">
                <div
                  className="relative w-full overflow-x-hidden py-4"
                  ref={tabsContainerRef}
                >
                  <ul
                    className={`
                    flex justify-start space-x-4 overflow-x-auto px-4
                    scrollbar-hide

                    md:justify-center
                  `}
                  >
                    {menuItems.map((item) => (
                      <li key={item.label} className="flex-shrink-0">
                        <button
                          onClick={() => handleItemClick(item)}
                          className={`
                          relative whitespace-nowrap rounded px-4 py-2 text-base

                          ${item.slideIndex.includes(currentIndex)
                              ? "font-bold"
                              : "font-medium"
                            }

                          text-[#f25421] transition-colors duration-300
                          ease-in-out

                          hover:bg-[#e6e6e6]
                        `}
                          data-tab={item.label}
                        >
                          {item.label}
                          {item.slideIndex.includes(currentIndex) && (
                            <motion.span
                              className={`
                              absolute bottom-0 left-0 h-[3px] bg-[#f25421]
                            `}
                              layoutId="activeTab"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                              style={{ width: "100%" }}
                            />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <SearchDialog
          isOpen={isSearchDialogOpen}
          onClose={() => setIsSearchDialogOpen(false)}
          onSelect={onSearchSelect}
        />
      </div>
    </>
  );
};
