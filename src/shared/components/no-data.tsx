import { cn } from "@/lib/utils";

interface NoDataProps {
  noDataMessage: string;
  children: React.ReactNode;
  noData: boolean;
  className?: string;
}

export const NoData: React.FC<NoDataProps> = ({
  noDataMessage,
  children,
  noData,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      {!children || noData ? <p>{noDataMessage}</p> : children}
    </div>
  );
};
