import { cn } from "@/utils/misc";
import { Icon } from "./ui/icon";
import { IconName } from "./ui/icons/name";

type Props = {
  className?: string;
  iconName?: string;
  tooltipText: string;
  tooltipContentClassName?: string;
  tooltipClassName?: string;
  tooltipIndicatorClassName?: string;
};
export const PlusIconTooltip = ({
  className,
  iconName,
  tooltipText,
  tooltipContentClassName,
  tooltipClassName,
  tooltipIndicatorClassName,
}: Props) => {
  return (
    <div className={cn("group relative inline-block", className)}>
      <button className="z-[10]">
        <Icon
          name={(iconName as IconName) ?? "plus"}
          className={`box-content rounded-full bg-white text-[#1A355F] w-3 h-3 md:w-6 md:h-6`}
          size="100%"
        />
      </button>
      <div
        className={cn(
          `
            absolute bottom-[calc(100%+10px)] left-[-14px] hidden

            group-hover:block
          `,
          tooltipClassName
        )}
      >
        <div
          className={cn(
            `
              relative z-50 w-[200px] rounded-lg bg-[#EEEEED] px-5 py-4
              text-[15px] text-black
            `,
            tooltipContentClassName
          )}
        >
          {tooltipText}
          <Icon
            size="16px"
            name="chevron-down-filled"
            className={cn(
              `absolute left-[20px] top-full -mt-1.5 text-[#273A60]`,
              tooltipIndicatorClassName
            )}
          />
        </div>
      </div>
    </div>
  );
};
