import { cn } from "@/utils/misc";
import { AnimatePresence, motion } from "framer-motion"; // Add this import
import { type ReactNode, useEffect, useRef } from "react";
import { Icon } from "./ui/icon";

export type DialogProps = {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  hideIcon?: boolean;
  iconClassName?: string;
  closeOnOutsideClick?: boolean;
  variant?: "default" | "leftSlide";
};

const Dialog = ({
  onClose,
  open,
  children,
  className,
  containerClassName,
  iconClassName,
  hideIcon,
  closeOnOutsideClick = true,
  variant = "default",
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
    document.documentElement.classList.add("overflow-hidden");

    // New handler for mousedown events
    const handleMouseDown = (event: MouseEvent) => {
      if (!closeOnOutsideClick) return;

      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleMouseDown);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open, onClose, closeOnOutsideClick]);

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.dialog
          ref={dialogRef}
          onClose={handleClose}
          initial={
            variant === "leftSlide"
              ? { x: "-100%", opacity: 1 }
              : { scale: 0.9, opacity: 0 }
          }
          animate={
            variant === "leftSlide"
              ? { x: 0, opacity: 1 }
              : { scale: 1, opacity: 1 }
          }
          exit={
            variant === "leftSlide"
              ? { x: "-100%", opacity: 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className={cn(
            `
              fixed z-40 grid gap-4 border bg-card max-h-[100vh] overflow-hidden
              p-0 shadow-lg duration-0

              backdrop:bg-[#1E1E1D]/80
            `,
            variant === "default" &&
              `
                inset-0 m-auto w-full max-w-[40rem]

                sm:w-[calc(100%-24px)] sm:rounded-[20px]
              `,
            variant === "leftSlide" &&
              `
                bottom-0 left-0 top-0 m-0 h-screen w-full max-w-none

                sm:w-[400px]
              `,
            className
          )}
        >
          <div
            className={cn(
              `
                h-full max-h-[100vh] space-y-0 overflow-y-auto overflow-x-hidden
                p-6
              `,
              variant === "default" && "sm:max-h-[calc(100vh-24px)]",
              variant === "leftSlide" && "max-h-screen",
              containerClassName
            )}
          >
            {children}
          </div>
          {!hideIcon && (
            <div
              onClick={handleClose}
              className={cn(
                `
                  absolute right-4 top-2 cursor-pointer rounded-full p-1
                  text-black/60
                `
              )}
            >
              <Icon size="24px" name="x" className={iconClassName} />
              <span className="sr-only">Close</span>
            </div>
          )}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export { Dialog };
