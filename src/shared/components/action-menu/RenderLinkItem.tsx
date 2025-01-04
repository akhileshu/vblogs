"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ActionItemOptions } from "./types";
import { WithOptionalTooltip } from "./shared-components";

function StyledLink({
  withLabel,
  options,
}: {
  withLabel?: boolean;
  options: ActionItemOptions;
}) {
  const { href, label, icon } = options;
  return (
    <Link
      href={href!}
      className={cn(
        "flex gap-1 items-center border hover:bg-gray-100 px-[6px] py-1 rounded-sm min-h-[26px]",
        options.className
      )}
    >
      {icon} {withLabel && label && <span>{label}</span>}
    </Link>
  );
}

export function RenderLinkItem({
  options,
  withTooltip,
}: {
  options: ActionItemOptions;
  withTooltip?: boolean;
}) {
  return (
    <WithOptionalTooltip
      withTooltip={withTooltip}
      label={options.label}
      tooltipTrigger={<StyledLink options={options} />}
      componentWithLabel={<StyledLink options={options} withLabel />}
    />
  );
}
