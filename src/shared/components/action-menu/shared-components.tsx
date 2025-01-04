import { cn } from "@/lib/utils";
import { ActionItemOptions } from "./types"; 
import { AppToolTip } from "../tooltip";

export function StyledButton({
  withLabel,
  options,
  className,
}: {
  withLabel?: boolean;
  options: ActionItemOptions;
  className?: string;
}) {
  const { icon, onClick, label } = options;
  return (
    <button
      onClick={onClick}
      className={cn(
        "border flex gap-1 items-center hover:bg-gray-100 px-[6px] py-1 rounded-sm  min-h-[26px]",
        className,
        options.className
      )}
    >
      {icon} {withLabel && label && <span>{label}</span>}
    </button>
  );
}


export function WithOptionalTooltip({
  withTooltip,
  label,
  componentWithLabel,
  tooltipTrigger,
}: {
  withTooltip?: boolean;
  label?: string;
  componentWithLabel: React.ReactNode;
  tooltipTrigger: React.ReactNode;
}) {
  return withTooltip ? (
    <AppToolTip tooltipContent={label} trigger={tooltipTrigger} />
  ) : (
    componentWithLabel
  );
}
