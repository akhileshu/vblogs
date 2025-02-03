import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppTooltipProps {
  className?: string; // Optional custom class name
  trigger: React.ReactNode; // Trigger element
  tooltipContent: React.ReactNode; // Content to display in the tooltip
}

//todo : clean all shared components , most important jsx should be a children prop not a custom prop ex: here its trigger
export const AppToolTip: React.FC<AppTooltipProps> = ({
  className,
  trigger,
  tooltipContent,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className}>{trigger}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
