"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { processActionItem } from "./helpers";
import { RenderButtonItem } from "./RenderButtonItem";
import { RenderDropdown } from "./RenderDropdown";
import { RenderLinkItem } from "./RenderLinkItem";
import { ActionItem, ActionMenuProps } from "./types";

const renderItem = (item: ActionItem, withTooltip?: boolean, index?: number) =>
  processActionItem(item, (options) => {
    switch (options.type) {
      case "link":
        return (
          <RenderLinkItem
            key={index}
            withTooltip={withTooltip}
            options={options}
          />
        );
      case "button":
        return (
          <RenderButtonItem
            key={index}
            withTooltip={withTooltip}
            options={options}
          />
        );
      case "dropdown":
        return (
          <RenderDropdown
            key={index}
            withTooltip={withTooltip}
            options={options}
          />
        );
      default:
        return null;
    }
  });

export const ActionMenu: React.FC<ActionMenuProps> = ({
  actionItems,
  className,
  withTooltip,
}) => (
  <div className={cn("flex items-center gap-2 text-xs", className)}>
    {actionItems.map((item, index) => renderItem(item, withTooltip, index))}
  </div>
);
