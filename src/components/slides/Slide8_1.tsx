import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { CarouselSlide } from "../CarouselSlide";
import { Icon } from "../ui/icon";
import { ProductsDialog } from "../ProductsDialog";
import { useState } from "react";

type Props = {
  isActive: boolean;
};

export const Slide8_1: React.FC<Props> = ({ isActive }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openDialog, setOpenDialog] = useState<
    keyof typeof productDialogImages | null
  >(null);

  const productDialogImages = {
    cableDelimitador: [
      {
        src: `/images/${locale}/slide8/casa/01.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Cable delimitador",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    guia: [
      {
        src: `/images/${locale}/slide8/casa/02.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Guía",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    patronCorte: [
      {
        src: `/images/${locale}/slide8/casa/03.jpg`,
        href: "",
        imgClassName: " !max-w-[460px]",
        productData: {
          name: "Patrón de corte selectivo",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    recarga: [
      {
        src: `/images/${locale}/slide8/casa/04.jpg`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Recarga",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
    cicloCorte: [
      {
        src: `/images/${locale}/slide8/casa/05.jpg`,
        href: "",
        imgClassName: "!max-h-[336px] !max-w-[460px]",
        productData: {
          name: "Ciclo de corte",
          id: "",
          price: "",
          category: "Casa",
          variant: "Modal",
        },
      },
    ],
  };
  return (
    <CarouselSlide key="2" className="pt-4">
      <div className="flex flex-col gap-[30px]">
        {/* upper content */}
        <div className="flex align-center items-center w-full h-full max-w-[100%] max-h-[421px] relative">
          <Image
            src={`/images/${locale}/slide8/comoTrabaja.png`}
            alt="como trabaja?"
            className="h-full w-full object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <Icon
            name={"plus"}
            className={`box-content rounded-full bg-white text-[#F25420] absolute top-[13%] left-[32%]`}
            size="16px"
            onClick={() => setOpenDialog("cableDelimitador")}
          />
          <Icon
            name={"plus"}
            className={`box-content rounded-full bg-white text-[#F25420] absolute top-[22.35%] left-[14.7%]`}
            size="16px"
            onClick={() => setOpenDialog("guia")}
          />
          <Icon
            name={"plus"}
            className={`box-content rounded-full bg-white text-[#F25420] absolute top-[14%] right-[26%]`}
            size="24px"
            onClick={() => setOpenDialog("recarga")}
          />
          <Icon
            name={"plus"}
            className={`box-content rounded-full bg-white text-[#F25420] absolute top-[4.5%] right-[21%]`}
            size="24px"
            onClick={() => setOpenDialog("cicloCorte")}
          />
          <Icon
            name={"plus"}
            className={`box-content rounded-full bg-white text-[#F25420] absolute bottom-[-1%] right-[21%]`}
            size="24px"
            onClick={() => setOpenDialog("patronCorte")}
          />
        </div>
        {/* bottom content */}
        <div className="flex flex-row gap-[25px] justify-center pl-10 pr-5 pb-[30px]">
          {/* left */}
          <div className="h-full w-full max-w-[45%] max-h-[368px]">
            <Image
              src={`/images/${locale}/slide8/disenaJardin.jpg`}
              alt="Diseña tu jardín zona por zona"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* right */}
          <div className="h-full w-full max-w-[45%] max-h-[368px]">
            <Image
              src={`/images/${locale}/slide8/descubreNera.jpg`}
              alt="Descubre Nera"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <ProductsDialog
        open={openDialog !== null}
        onClose={() => setOpenDialog(null)}
        images={
          openDialog
            ? productDialogImages[
                openDialog as keyof typeof productDialogImages
              ]
            : []
        }
      />
    </CarouselSlide>
  );
};
