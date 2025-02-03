"use client";

import { SelectSortOption } from "@/features/render-sort-options";
import { cn } from "@/lib/utils";
import { deleteBlogHandler } from "@/server-actions/prisma-handlers/blog";
import { getBlogSearchResultsHandler } from "@/server-actions/prisma-handlers/blog/get-blog-search-results-Handler";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { extractResultData } from "@/server-actions/utils/response";
import { ActionMenu } from "@/shared/components/action-menu";
import { DeletionForm } from "@/shared/components/delete-form";
import { AppDropDownMenu } from "@/shared/components/dropdown-menu";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { AppLink } from "@/shared/components/standard-components";
import { useRevalidateOnParamChange as useRevalidateOnFilterOrSortParamChange } from "@/shared/hooks/useRevalidateOnParamChange";
import { useBlogSortParams } from "@/shared/hooks/useSortParams";
import { groupSortOptions, singleSortOptions } from "@/shared/lib/blog-sort";
import { getUrl } from "@/shared/lib/get-url";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { IoMdCloseCircleOutline, IoMdMore } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";

function useFilters(): {
  filters: { key: string; label: string; count: number }[];
  removeFilterParam: (key: string) => void;
} {
  const params = useSearchParams();
  const filters = [
    {
      key: "topicIdsCsv",
      label: "Topics",
      count: params.get("topicIdsCsv")?.split(",").length ?? 0,
    },
    {
      key: "tagIdsCsv",
      label: "Tags",
      count: params.get("tagIdsCsv")?.split(",").length ?? 0,
    },
  ].filter((filter) => filter.count > 0);

  const pathname = usePathname();
  const router = useRouter();
  const currentParams = new URLSearchParams(window.location.search);

  function removeFilterParam(key: string) {
    currentParams.delete(key);
    router.replace(`${pathname}?${currentParams.toString()}`);
  }

  return { filters, removeFilterParam };
}

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
  const {filters,removeFilterParam} = useFilters();

  useRevalidateOnFilterOrSortParamChange(
    authorId ? `get-blogs-by-author-id-${authorId}` : undefined
  );

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
                {filters.length ? (
                  filters.map(({ label, count, key }, index) => {
                    return (
                      <div
                        className="flex items-center justify-between"
                        key={index}
                      >
                        {`${label} (${count})`}{" "}
                        <IoMdCloseCircleOutline
                          className="cursor-pointer"
                          onClick={() => removeFilterParam(key)}
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
            if(!topic?.title)return
            const list = [
              [
                {
                  label: "Tags",
                  content: tags?.map(({ id, title }) => (
                    <AppLink
                      href={getUrl(
                        "blogSearchResults",
                        undefined,
                        `tagIdsCsv=${id}`
                      )}
                      key={id}
                    >
                      {`#${title}`}
                    </AppLink>
                  )),
                },
                {
                  label: "Topic",
                  content: (
                    <AppLink
                      className="text-blue-500 hover:text-blue-700"
                      href={getUrl(
                        "blogSearchResults",
                        undefined,
                        `topicIdsCsv=${topic?.id}`
                      )}
                    >
                      {topic.title}
                    </AppLink>
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
                data-test-id={`blog-item-${blog.id}`}
                className="p-2 pt-2 bg-white flex justify-between  group relative"
              >
                <div className="max-w-3xl">
                  <div className="flex justify-between">
                    <AppLink
                      data-test-id={`blog-link-${blog.id}`}
                      className="text-xl font-semibold"
                      href={getUrl("blogRead", blog.slug)}
                    >
                      {blog.title}
                    </AppLink>
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
                              <DeletionForm
                                key={blog.id}
                                actionHandler={deleteBlogHandler}
                                hiddenFields={{ blogId: blog.id }}
                                tagToRevalidate={`get-blogs-by-author-id-${authorId}`}
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
                <Banner
                  className="relative w-56 h-32 aspect-video"
                  title={blog.title}
                />
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

function Banner({ className, title }: { className: string; title: string }) {
  return (
    <div className={cn(className)}>
      <Image
        className="object-cover rounded-md"
        alt={title}
        src="https://images.unsplash.com/photo-1636051028886-0059ad2383c8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
