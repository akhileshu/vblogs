import React from "react";
import { cn } from "@/lib/utils";

type ErrorWhileFetchingProps = {
  className?: string;
  errorMsg: string;
};

export const ErrorWhileFetching: React.FC<ErrorWhileFetchingProps> = ({className,errorMsg}) => {
  return (
    <div className={cn("text-red-500 border rounded-md m-2 p-2", className)}>
      <p>Error while fetching data: {errorMsg}</p>
    </div>
  );
};


type NoDataMessageProps = {
  className?: string;
  message: string;
};
export const NoDataMessage: React.FC<NoDataMessageProps> = ({
  className,
  message,
}) => {
  return (
    <div className={cn("text-red-500 border rounded-md m-2 p-2", className)}>
      <p>{message}</p>
    </div>
  );
};




