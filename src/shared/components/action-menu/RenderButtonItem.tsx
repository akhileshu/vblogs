import { StyledButton, WithOptionalTooltip } from "./shared-components";
import { ActionItemOptions } from "./types";

export function RenderButtonItem({
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
      tooltipTrigger={<StyledButton options={options} />}
      componentWithLabel={<StyledButton options={options} withLabel />}
    />
  );
}
