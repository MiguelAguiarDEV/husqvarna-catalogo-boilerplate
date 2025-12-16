import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog } from "./Dialog";

import { Icon } from "./ui/icon";

type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (page: PageData) => void;
};

export type PageData = {
  slideIndexDesktop: number;
  slideIndexMobile: number;
  text: string;
  image: string; // This would be a URL or path to the image
};

export const SearchDialog = ({
  isOpen,
  onClose,
  onSelect,
}: SearchDialogProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const pagesData = useMemo(
    () => [
      {
        slideIndexDesktop: 1,
        slideIndexMobile: 1,
        text: t("slide2.textSearch_1"),
        image: `/images/${locale}/search/02.jpg`,
      },
      {
        slideIndexDesktop: 1,
        slideIndexMobile: 2,
        text: t("slide2.textSearch_2"),
        image: `/images/${locale}/search/03.jpg`,
      },
      {
        slideIndexDesktop: 2,
        slideIndexMobile: 3,
        text: t("slide3.textSearch_1"),
        image: `/images/${locale}/search/04.jpg`,
      },
      {
        slideIndexDesktop: 2,
        slideIndexMobile: 4,
        text: t("slide3.textSearch_2"),
        image: `/images/${locale}/search/05.jpg`,
      },
      {
        slideIndexDesktop: 3,
        slideIndexMobile: 5,
        text: t("slide4.textSearch_1"),
        image: `/images/${locale}/search/06.jpg`,
      },
      {
        slideIndexDesktop: 3,
        slideIndexMobile: 6,
        text: t("slide4.textSearch_2"),
        image: `/images/${locale}/search/07.jpg`,
      },
      {
        slideIndexDesktop: 4,
        slideIndexMobile: 7,
        text: t("slide5.textSearch_1"),
        image: `/images/${locale}/search/08.jpg`,
      },
      {
        slideIndexDesktop: 4,
        slideIndexMobile: 8,
        text: t("slide5.textSearch_2"),
        image: `/images/${locale}/search/09.jpg`,
      },
      {
        slideIndexDesktop: 5,
        slideIndexMobile: 9,
        text: t("slide6.textSearch_1"),
        image: `/images/${locale}/search/10.jpg`,
      },
      {
        slideIndexDesktop: 5,
        slideIndexMobile: 10,
        text: t("slide6.textSearch_2"),
        image: `/images/${locale}/search/11.jpg`,
      },
      {
        slideIndexDesktop: 6,
        slideIndexMobile: 11,
        text: t("slide7.textSearch_1"),
        image: `/images/${locale}/search/12.jpg`,
      },
      {
        slideIndexDesktop: 6,
        slideIndexMobile: 12,
        text: t("slide7.textSearch_2"),
        image: `/images/${locale}/search/13.jpg`,
      },
      {
        slideIndexDesktop: 7,
        slideIndexMobile: 13,
        text: t("slide8.textSearch_1"),
        image: `/images/${locale}/search/14.jpg`,
      },
      {
        slideIndexDesktop: 7,
        slideIndexMobile: 14,
        text: t("slide8.textSearch_2"),
        image: `/images/${locale}/search/15.jpg`,
      },
      {
        slideIndexDesktop: 8,
        slideIndexMobile: 15,
        text: t("slide9.textSearch_1"),
        image: `/images/${locale}/search/16.jpg`,
      },
      {
        slideIndexDesktop: 8,
        slideIndexMobile: 16,
        text: t("slide9.textSearch_2"),
        image: `/images/${locale}/search/17.jpg`,
      },
      {
        slideIndexDesktop: 9,
        slideIndexMobile: 17,
        text: t("slide10.textSearch_1"),
        image: `/images/${locale}/search/18.jpg`,
      },
      {
        slideIndexDesktop: 9,
        slideIndexMobile: 18,
        text: t("slide10.textSearch_2"),
        image: `/images/${locale}/search/19.jpg`,
      },
      {
        slideIndexDesktop: 10,
        slideIndexMobile: 19,
        text: t("slide11.textSearch_1"),
        image: `/images/${locale}/search/20.jpg`,
      },
      {
        slideIndexDesktop: 10,
        slideIndexMobile: 20,
        text: t("slide11.textSearch_2"),
        image: `/images/${locale}/search/21.jpg`,
      },
      {
        slideIndexDesktop: 11,
        slideIndexMobile: 21,
        text: t("slide12.textSearch_1"),
        image: `/images/${locale}/search/22.jpg`,
      },
      {
        slideIndexDesktop: 11,
        slideIndexMobile: 22,
        text: t("slide12.textSearch_2"),
        image: `/images/${locale}/search/23.jpg`,
      },
      {
        slideIndexDesktop: 12,
        slideIndexMobile: 23,
        text: t("slide13.textSearch_1"),
        image: `/images/${locale}/search/24.jpg`,
      },
      {
        slideIndexDesktop: 12,
        slideIndexMobile: 24,
        text: t("slide13.textSearch_2"),
        image: `/images/${locale}/search/25.jpg`,
      },
      {
        slideIndexDesktop: 13,
        slideIndexMobile: 25,
        text: t("slide14.textSearch_1"),
        image: `/images/${locale}/search/26.jpg`,
      },
      {
        slideIndexDesktop: 13,
        slideIndexMobile: 26,
        text: t("slide14.textSearch_2"),
        image: `/images/${locale}/search/27.jpg`,
      },
      {
        slideIndexDesktop: 14,
        slideIndexMobile: 27,
        text: t("slide15.textSearch_1"),
        image: `/images/${locale}/search/28.jpg`,
      },
      {
        slideIndexDesktop: 14,
        slideIndexMobile: 28,
        text: t("slide15.textSearch_2"),
        image: `/images/${locale}/search/29.jpg`,
      },
      {
        slideIndexDesktop: 15,
        slideIndexMobile: 29,
        text: t("slide16.textSearch_1"),
        image: `/images/${locale}/search/30.jpg`,
      },
      {
        slideIndexDesktop: 15,
        slideIndexMobile: 30,
        text: t("slide16.textSearch_2"),
        image: `/images/${locale}/search/31.jpg`,
      },
      {
        slideIndexDesktop: 16,
        slideIndexMobile: 31,
        text: t("slide17.textSearch_1"),
        image: `/images/${locale}/search/32.jpg`,
      },
      {
        slideIndexDesktop: 16,
        slideIndexMobile: 32,
        text: t("slide17.textSearch_2"),
        image: `/images/${locale}/search/33.jpg`,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  const [searchData, setSearchData] = useState<PageData[]>(pagesData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value.toLowerCase();
      setSearchTerm(term);

      const filteredData = pagesData.filter((page) =>
        page.text.toLowerCase().includes(term)
      );
      setSearchData(filteredData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!isOpen) {
      setSearchData(pagesData);
      setSearchTerm("");
    }
  }, [isOpen, pagesData]);

  const highlightSearchTerm = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, "gi");
    const match = text.match(regex);

    if (!match) return text;

    const index = text.toLowerCase().indexOf(term.toLowerCase());
    const start = Math.max(0, index - 50); // Adjust the number of characters before the term
    const end = Math.min(text.length, index + term.length + 50); // Adjust the number of characters after the term

    const slicedText = text.slice(start, end);
    const highlightedText = slicedText
      .split(regex)
      .map((part, index) =>
        regex.test(part) ? <mark key={index}>{part}</mark> : part
      );

    return (
      <>
        {start > 0 && "..."}
        {highlightedText}
        {end < text.length && "..."}
      </>
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      variant="leftSlide"
      containerClassName="p-0 flex flex-col h-full top-10"
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-xl font-semibold">
          {t("header.search_placeholder")}
        </h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <div className="relative">
          <input
            type="text"
            placeholder={`${t("header.search")}...`}
            className="w-full rounded-md border px-4 py-2 pr-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Icon
            name="search"
            size="20px"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {searchData.map((page, index) => (
            <div
              onClick={() => {
                onSelect(page);
                onClose();
              }}
              key={index}
              className="flex cursor-pointer flex-col rounded-lg border p-2"
            >
              <Image
                src={page.image}
                alt={`Page ${page.slideIndexMobile} preview`}
                className="mb-2 w-full rounded-lg object-contain"
                width={150}
                height={212}
              />
              <p className="font-semibold">
                {t("elements.page")} {page.slideIndexMobile}
              </p>
              <p className="mt-1 line-clamp-3 text-sm text-gray-600">
                {highlightSearchTerm(page.text, searchTerm)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
