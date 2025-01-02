import Link from "next/link";
import { toast } from "sonner";

export const appToast = {
  success(message: string, description?: string) {
    return toast.success(message, {
      description,
    });
  },


/* 
todo:introduce errorType in response , it can be used as message , errorMsg can be used as description
export type Failure<Schema> = {
  success: false;
  errorMsg: string; // Primary user-facing error message
  errorType?: string; // Optional, for categorization or debugging
  fieldErrors?: FieldErrors<Schema>;
};
 */
  error(message: string, description?: string) {
    return toast.error(message, {
      description,
    });
  },

  info(message: string, description?: string) {
    return toast.info(message, {
      description,
    });
  },

  warning(message: string, description?: string) {
    return toast.warning(message, {
      description,
    });
  },

  redirectOnSuccess(
    message: string,
    onAutoClose: () => void,
    description?: string
  ) {
    return toast.success(message, {
      description,
      onAutoClose,
      duration: 2000,
    });
  },
  redirect(message: string, onAutoClose: () => void, description?: string) {
    return toast.info(message, {
      description,
      onAutoClose,
      duration: 2000,
    });
  },

  withRedirectLink(
    message: string,
    description?: string,
    redirectPath?: string
  ) {
    return toast.success(
      <div>
        <p>{message}</p>
        <p>{description}</p>
        {redirectPath ? (
          <Link
            href={redirectPath}
            style={{ color: "#007185", textDecoration: "underline" }}
          >
            Go to the page
          </Link>
        ) : null}
      </div>,
      {
        duration: 10000,
        closeButton: true,
      }
    );
  },
};
