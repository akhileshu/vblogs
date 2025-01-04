import { isValidElement } from "react";
import { ActionItem, ActionItemOptions, IsActionItemOptions } from "./types";

export function processActionItem(
  itemOrOptions: ActionItem,
  render: (options: ActionItemOptions) => React.ReactNode
): React.ReactNode {
  if (isValidElement(itemOrOptions)) return itemOrOptions;
  if (IsActionItemOptions(itemOrOptions)) return render(itemOrOptions);
  return null;
}
