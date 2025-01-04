"use client";

import { BlogService } from "@/services/prisma/blog/blog-service";
import { ActionMenu } from "@/shared/components/action-menu/ActionMenu";
import { LoaderWrapper } from "@/shared/components/Loader";
import { getUrl } from "@/shared/lib/get-url";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";
import { BsFillPencilFill } from "react-icons/bs";
import { CiRead } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { DeleteBlog } from "./delete-blog";

export function MyBlogs({
  errorMsg,
  data,
}: {
  errorMsg?: string;
  data?: Awaited<ReturnType<BlogService["getBlogsByAuthorId"]>>;
}) {
  const handleDelete = (id: string) => {
    console.log(`Deleting blog with ID: ${id}`);
  };

  return (
    <LoaderWrapper errorMsg={errorMsg}>
      <div className="max-w-3xl  mx-auto p-4 border rounded-md text-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Blogs
        </h2>
        <ul className="space-y-2 divide-y-[1px] divide-gray-100">
          {data?.map((blog) => (
            <li key={blog.id} className="p-2 pt-2 bg-white   ">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <ActionMenu
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
                          <DeleteBlog key={blog.id} blogId={blog.id} />,
                        ],
                      },
                    ]}
                  />
                </div>

                <p className="text-gray-600 mt-2">
                  {blog.description || "No description available."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </LoaderWrapper>
  );
}
