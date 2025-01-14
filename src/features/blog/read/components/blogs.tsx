"use client";

import { DeleteBlogForm } from "@/features/blog/delete/components/delete-blog-form";
import { SelectSortOption } from "@/features/render-sort-options";
import { cn } from "@/lib/utils";
import { getBlogSearchResultsHandler } from "@/server-actions/prisma-handlers/blog/get-blog-search-results-Handler";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { extractResultData } from "@/server-actions/utils/response";
import { ActionMenu } from "@/shared/components/action-menu";
import { FancyBtn } from "@/shared/components/buttons";
import { AppDropDownMenu } from "@/shared/components/dropdown-menu";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { useBlogSortParams } from "@/shared/hooks/useSortParams";
import { groupSortOptions, singleSortOptions } from "@/shared/lib/blog-sort";
import { getUrl } from "@/shared/lib/get-url";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { IoMdCloseCircleOutline, IoMdMore } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";

export function Blogs({
  result,
  authorId,
}: {
  authorId?: string;
  result:
    | Awaited<ReturnType<typeof getBlogSearchResultsHandler>>
    | Awaited<ReturnType<typeof getCachedBlogsByAuthorIdHandler>>;
}) {
  const { data } = extractResultData(result);
  const { selectedSortKey, setSelectedSortKey } = useBlogSortParams();
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const topicIdsCsv = params?.get("topicIdsCsv");
  const tagIdsCsv = params?.get("tagIdsCsv");
  const currentParams = new URLSearchParams(window.location.search);

  function removeParam(key: string) {
    currentParams.delete(key);
    router.replace(`${pathname}?${currentParams.toString()}`);
  }

  const filters = [
    {
      key: "topicIdsCsv",
      label: "Topics",
      count: topicIdsCsv?.split(",").length ?? 0,
    },
    {
      key: "tagIdsCsv",
      label: "Tags",
      count: tagIdsCsv?.split(",").length ?? 0,
    },
  ];
  const validFilters = filters.filter((filter) => filter.count > 0);

  return (
    <LoaderErrorWrapper result={result}>
      <div className="w-fit mx-auto p-4 border rounded-md text-sm ">
        <div className="flex items-center justify-between  mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 ">
            {authorId ? "My Blogs" : "Blog Search Results"}
          </h2>
          <div className="space-x-2">
            <AppDropDownMenu
              trigger={
                <button className="border rounded-sm px-1">Filters</button>
              }
            >
              <div className="p-1 space-x-2 min-w-56">
                {validFilters.length ? (
                  validFilters.map(({ label, count, key }, index) => {
                    return (
                      <div
                        className="flex items-center justify-between"
                        key={index}
                      >
                        {`${label} (${count})`}{" "}
                        <IoMdCloseCircleOutline
                          className="cursor-pointer"
                          onClick={() => removeParam(key)}
                        />
                      </div>
                    );
                  })
                ) : (
                  <p>No Active Filters !</p>
                )}
              </div>
            </AppDropDownMenu>
            <AppDropDownMenu
              trigger={<button className="border rounded-sm px-1">Sort</button>}
            >
              <SelectSortOption
                className="m-0 border-none"
                defaultSortKey="relevance"
                setSelectedSortKey={setSelectedSortKey}
                selectedSortKey={selectedSortKey}
                singleSortOptions={singleSortOptions}
                groupSortOptions={groupSortOptions}
              />
            </AppDropDownMenu>
          </div>
        </div>
        <ul className="space-y-2 divide-y-[1px] divide-gray-100">
          {data?.map((blog) => {
            const tags = blog.tags?.map((tag) => tag.tag);
            const { topic, views, readTimeInMinutes } = blog;
            const list = [
              [
                {
                  label: "Tags",
                  content: tags?.map(({ id, title }) => (
                    <Link
                      href={getUrl(
                        "blogSearchResults",
                        undefined,
                        `tagIdsCsv=${id}`
                      )}
                      key={id}
                    >
                      <FancyBtn text={title} />
                    </Link>
                  )),
                },
                {
                  label: "Topic",
                  content: (
                    <Link
                      className="text-blue-500 hover:text-blue-700"
                      href={getUrl(
                        "blogSearchResults",
                        undefined,
                        `topicIdsCsv=${topic?.id}`
                      )}
                    >
                      {topic?.title}
                    </Link>
                  ),
                },
              ],
              [
                { label: "Views", content: views },
                {
                  label: "Read Time",
                  content: `${readTimeInMinutes} min`,
                },
              ],
            ];
            return (
              <li
                key={blog.id}
                className="p-2 pt-2 bg-white flex justify-between  group relative"
              >
                <div className="max-w-3xl">
                  <div className="flex justify-between">
                    <Link className="" href={getUrl("blogRead", blog.slug)}>
                      <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                        {blog.title}
                      </h3>
                    </Link>
                    {authorId ? (
                      <ActionMenu
                        className="invisible group-hover:visible absolute top-2 right-64 bg-white"
                        withTooltip
                        actionItems={[
                          {
                            type: "link",
                            label: "Edit",
                            href: getUrl("blogEdit", blog.slug),
                            icon: <BsFillPencilFill />,
                          },
                          // {
                          //   type: "link",
                          //   label: "Read",
                          //   href: getUrl("blogRead", blog.slug),
                          //   icon: <CiRead />,
                          // },
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
                              <DeleteBlogForm
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
                    ) : null}
                  </div>
                  <p className="text-gray-600 mt-2">
                    {blog.description || "No description available."}
                  </p>
                  <RenderInline list={list} />
                </div>
                <div className="relative w-56 h-32 aspect-video">
                  <Image
                    className="object-cover rounded-md"
                    alt={blog.title}
                    src="https://images.unsplash.com/photo-1636051028886-0059ad2383c8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </LoaderErrorWrapper>
  );
}

function RenderInline({
  list,
}: {
  list: {
    label: string;
    content: ReactNode;
  }[][];
}) {
  return list.map((group, groupIndex) => {
    return (
      <div key={groupIndex} className="flex gap-2 divide-x-2">
        {group.map(({ label, content }, index) => (
          <span
            className={cn("", {
              "pl-2": index > 0,
            })}
            key={index}
          >
            {label} : {content}
          </span>
        ))}
      </div>
    );
  });
}
