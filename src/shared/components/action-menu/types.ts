import React, { ReactNode } from "react";

export interface ActionItemOptions {
  type: "link" | "button" | "dropdown";
  label?: string;
  icon?: React.ReactNode;
  href?: string; // For links
  onClick?: () => void; // For buttons
  dropdownOptions?: ActionItem[]; // For dropdown
  className?: string;
}

export type ActionItem = ActionItemOptions | ReactNode;

export interface ActionMenuProps {
  actionItems: ActionItem[];
  className?: string;
  withTooltip?: boolean;
}

export const IsActionItemOptions = (
  action: ActionItem
): action is ActionItemOptions => {
  return typeof action === "object" && action !== null && "type" in action;
};

