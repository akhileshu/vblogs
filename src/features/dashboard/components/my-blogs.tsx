"use client";

import { Blogs } from "@/features/blog/read/components/blogs";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { ErrorWhileFetching } from "@/shared/components/error";
import { Loader } from "@/shared/components/Loader";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function MyBlogs({
  result,
}: {
  result: Awaited<ReturnType<typeof getCachedBlogsByAuthorIdHandler>>;
}) {
  /* 
  todo : for component
 this component is handling session and rendering data from prop , need to improve this 
 dont even allow access to routes like dashboard if not authenticated as author role - do in middleware
 fix this error / loading feedback as we are using loadingerrorwrapper
  */
  const isFirstRender = useRef(true);
  const searchParams = useSearchParams();
  const { data: sessionData, status } = useSession();
  const authorId =
    sessionData?.user.role === "AUTHOR" ? sessionData?.user.id : undefined;
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    revalidateTagUtil(`get-blogs-by-author-id-${authorId}`);
  }, [searchParams, authorId]);

  if ((sessionData?.user && !sessionData.user.id) || status === "loading")
    return (
      <div className="text-center space-y-5 w-fit border rounded-md p-5 m-auto">
        <Loader />
        <div>loading your session details</div>
      </div>
    );
  if (!authorId)
    return <ErrorWhileFetching errorMsg="please login as Author" />;
  return <Blogs result={result} authorId={authorId} />;
}
