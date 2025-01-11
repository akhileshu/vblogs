"use client";

import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import { ActionMenu } from "@/shared/components/action-menu";
import { Loader, LoaderWrapper } from "@/shared/components/Loader";
import { getUrl } from "@/shared/lib/get-url";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";
import { BsFillPencilFill } from "react-icons/bs";
import { CiRead } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { DeleteBlog } from "./delete-blog";
import { IoAnalytics } from "react-icons/io5";
import { FancyBtn } from "@/shared/components/buttons";
import Link from "next/link";
import { AppDropDownMenu } from "@/shared/components/dropdown-menu";
import { SelectSortOption } from "@/features/render-sort-options";
import { useBlogSortParams } from "@/shared/hooks/useSortParams";
import {
  groupSortOptions,
  singleSortOptions,
  SortKey,
} from "@/shared/lib/blog-sort";
import { useRouter, useSearchParams } from "next/navigation";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { ErrorWhileFetching } from "@/shared/components/error";

export function MyBlogs({
  errorMsg,
  data,
}: {
  errorMsg?: string;
  data?: Awaited<ReturnType<BlogServiceImplementation["getBlogsByAuthorId"]>>;
}) {
  const isFirstRender = useRef(true);
  const { getSortParams, selectedSortKey, setSelectedSortKey } =
    useBlogSortParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  //todo : dont even allow access to routes like dashboard if not authenticated as author role - do in
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
  return (
    <LoaderWrapper errorMsg={errorMsg}>
      <div className="max-w-3xl  mx-auto p-4 border rounded-md text-sm">
        <div className="flex items-center justify-between  mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 ">
            My Blogs
          </h2>
          <AppDropDownMenu
            trigger={<button className="border rounded-sm px-1">Sort</button>}
          >
            <SelectSortOption
              className="m-0 border-none"
              onSortChange={(sortKey: SortKey) => {
                router.push(
                  getUrl("authorDashboard", undefined, getSortParams(sortKey))
                );
              }}
              defaultSortKey="relevance"
              setSelectedSortKey={setSelectedSortKey}
              selectedSortKey={selectedSortKey}
              singleSortOptions={singleSortOptions}
              groupSortOptions={groupSortOptions}
            />
          </AppDropDownMenu>
        </div>
        <ul className="space-y-2 divide-y-[1px] divide-gray-100">
          {data?.map((blog) => {
            const tags = blog.tags?.map((tag) => tag.tag);
            const { topic, views, readTimeInMinutes } = blog;
            return (
              <li key={blog.id} className="p-2 pt-2 bg-white   group">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {blog.title}
                    </h3>
                    <ActionMenu
                      className="invisible group-hover:visible"
                      withTooltip
                      actionItems={[
                        {
                          type: "link",
                          label: "Edit",
                          href: getUrl("blogEdit", blog.slug),
                          icon: <BsFillPencilFill />,
                        },
                        {
                          type: "link",
                          label: "Read",
                          href: getUrl("blogRead", blog.slug),
                          icon: <CiRead />,
                        },
                        {
                          type: "button",
                          label: "Copy Link",
                          icon: <FaLink />,
                          onClick: () =>
                            copyToClipboard(
                              `http://localhost:3000/blog/read/${blog.slug}`
                            ),
                        },
                        {
                          type: "dropdown",
                          icon: <IoMdMore />,
                          dropdownOptions: [
                            <DeleteBlog
                              className="hover:bg-red-200 bg-red-100 text-red-500 border border-red-300  w-full flex min-h-[28px] gap-1 items-center px-[6px] py-1 rounded-sm"
                              key={blog.id}
                              blogId={blog.id}
                              authorId={authorId}
                            />,
                            {
                              type: "link",
                              href: "/analytics",
                              label: "view analytics",
                              icon: <IoAnalytics />,
                            },
                          ],
                        },
                      ]}
                    />
                  </div>

                  <p className="text-gray-600 mt-2">
                    {blog.description || "No description available."}
                  </p>
                  <div className="flex gap-2 divide-x-2">
                    <div>
                      <span className="mr-1">Tags :</span>
                      {tags?.map(({ id, title }) => {
                        //todo : enable link - renders all blogs with this tag
                        return <FancyBtn key={id} text={title} />;
                      })}
                    </div>
                    <div className="pl-2">
                      <span className="mr-1">Topic :</span>
                      <Link
                        className="text-blue-500 hover:text-blue-700"
                        href={"/allBlogsWithThisThisTopics"}
                      >
                        {topic?.title}
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 divide-x-2">
                    <div>
                      <span>Views : {views}</span>
                    </div>
                    <div className="pl-2">
                      <span>Read Time : {readTimeInMinutes} min</span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </LoaderWrapper>
  );
}
