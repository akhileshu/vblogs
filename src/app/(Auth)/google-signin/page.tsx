"use client";

import { cn } from "@/lib/utils";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

/* 
bug :
if existing user is erased from db , user still loggedin in app , but will cause error in db query/mutation
*/
const GoogleSignIn = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const showLoaderAtStart = true;

  useEffect(() => {
    if (!isLoading && !session) {
      signIn("google");
    }
    if (session) {
      window.close(); // Close the popup when the user signs in
    }
  }, [session, isLoading]);

  return (
    <LoaderErrorWrapper
      isLoading={showLoaderAtStart}
      // error={error}
      className={cn("", { "flex-center h-screen bg-white": showLoaderAtStart })}
    >
      <></>
    </LoaderErrorWrapper>
  );
};

export default GoogleSignIn;
