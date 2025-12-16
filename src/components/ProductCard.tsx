import { cn } from "@/utils/misc";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

interface ProductCardProps {
  imageSrc: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  variant?: "default" | "floating" | "no-butto";
  buttonText?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  alt = "product",
  className,
  imgClassName,
  variant = "default",
  buttonText = "Ver más ofertas",
  buttonContainerClassName,
  buttonClassName,
  onClick,
}) => {
  const { t } = useTranslation();
  const translatedButtonText =
    !buttonText || buttonText === "Ver más ofertas"
      ? t("elements.see_more_offers") // Traducimos usando la clave correspondiente
      : buttonText;
  return (
    <div
      className={cn(
        `
          flex w-fit cursor-pointer flex-col items-center justify-center gap-5
          p-2 transition-all duration-300 ease-in-out
        `,
        variant === "default" && "hover:scale-105 hover:shadow-lg",
        variant === "floating" &&
          `
            relative p-0

            hover:scale-105
          `,
        className
      )}
      onClick={onClick}
    >
      <Image
        loading="lazy"
        src={imageSrc}
        alt={alt}
        className={cn("h-full w-full", imgClassName)}
        width={245}
        height={349}
      />
      {variant === "default" ? (
        <Button className={buttonClassName}>{translatedButtonText}</Button>
      ) : (
        <div
          className={cn(
            "absolute bottom-[4%] flex w-full justify-center",
            buttonContainerClassName
          )}
        >
          <Button className={cn(buttonClassName)}>
            {translatedButtonText}
          </Button>
        </div>
      )}
    </div>
  );
};
