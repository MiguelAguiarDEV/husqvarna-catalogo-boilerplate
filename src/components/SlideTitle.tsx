import { cn } from "@/utils/misc";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  isActive: boolean;
  className?: string;
  titleClassName?: string;
  variant?: "bg-transparent" | "bg-black";
};

export const SlideTitle = ({
  title,
  isActive,
  className,
  titleClassName,
  variant = "bg-black",
}: Props) => {
  return (
    <div
      className={cn(
        `
          flex min-h-[82px] max-w-[293px] overflow-hidden text-[30px] sm:text-[40px] font-bold
          leading-[120%]
        `,
        variant === "bg-black" &&
          `
            min-h-[50px] w-fit max-w-none items-center rounded-bl-[15px]
            rounded-tr-[15px] bg-[#1E1E1D] px-4 py-0.5 text-[20px] sm:text-[30px] uppercase
            leading-[120%]
          `,
        className
      )}
    >
      <AnimatePresence>
        {isActive && (
          <motion.span
            className={cn("w-full", titleClassName)}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
