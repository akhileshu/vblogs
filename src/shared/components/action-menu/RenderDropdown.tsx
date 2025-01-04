import { cn } from "@/lib/utils";
import { AppDropDownMenu } from "../dropdown-menu";
import { ActionItemOptions } from "./types";
import { StyledButton, WithOptionalTooltip } from "./shared-components";
import { processActionItem } from "./helpers";

export function RenderDropdown({
  options,
  withTooltip,
}: {
  options: ActionItemOptions;
  withTooltip?: boolean;
}) {
  return (
    <AppDropDownMenu
      trigger={
        <WithOptionalTooltip
          withTooltip={withTooltip}
          label={options.label || "More"}
          tooltipTrigger={
            <StyledButton className="py-[1px]" options={options} />
          }
          componentWithLabel={
            <StyledButton className="py-[1px]" withLabel options={options} />
          }
        />
      }
    >
      <div className="flex flex-col gap-1 text-sm min-w-32">
        {options.dropdownOptions?.map((itemOrOptions, index) =>
          processActionItem(itemOrOptions, (opt) => (
            <DropdownOptionItem key={index} options={opt} />
          ))
        )}
      </div>
    </AppDropDownMenu>
  );
}

function DropdownOptionItem({ options }: { options: ActionItemOptions }) {
  const { onClick, icon, label } = options;
  return (
    <button
      onClick={onClick}
      className={cn(
        "hover:bg-gray-100 flex min-h-[28px] gap-1 items-center px-[6px] py-1 rounded-sm",
        options.className
      )}
    >
      {icon} {label}
    </button>
  );
}
