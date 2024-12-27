"use client";

import { getLoggedInAuthorBlogs } from "@/features/blog/create/actions/getBlog";
import { Btn, StyledLink } from "@/shared/components/buttons";
import { LoaderWrapper } from "@/shared/components/Loader";
import { getUrl } from "@/shared/lib/get-url";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";
import { CiRead } from "react-icons/ci";
import { FaEdit, FaLink } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export function MyBlogs({
  errorMsg,
  data,
}: {
  errorMsg?: string;
  data?: Awaited<ReturnType<typeof getLoggedInAuthorBlogs>>;
}) {
  const handleDelete = (id: string) => {
    console.log(`Deleting blog with ID: ${id}`);
  };

  return (
    <LoaderWrapper errorMsg={errorMsg}>
      <div className="max-w-3xl mx-auto p-4 border rounded-md text-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Blogs
        </h2>
        <ul className="space-y-4">
          {data?.map((blog) => (
            <li key={blog.id} className="p-2 bg-white  border rounded-md ">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {blog.description || "No description available."}
                </p>
                <div className="mt-2 flex space-x-2">
                  <StyledLink
                    variant="outline"
                    href={getUrl("blogEdit", blog.slug)}
                    className="px-1 text-sm "
                    text={
                      <>
                        <FaEdit /> Edit
                      </>
                    }
                  />
                  <StyledLink
                    variant="outline"
                    href={getUrl("blogRead", blog.slug)}
                    className="px-1 text-sm"
                    text={
                      <>
                        <CiRead /> Read
                      </>
                    }
                  />

                  <Btn
                    className="px-1 text-sm bg-red-500"
                    onClick={() => handleDelete(blog.id)}
                    text={
                      <>
                        <MdDeleteOutline /> Delete
                      </>
                    }
                  />
                  <Btn
                    className="px-1 text-sm"
                    onClick={() =>
                      copyToClipboard(
                        `http://localhost:3000/blog/read/${blog.slug}`
                      )
                    }
                    text={
                      <>
                        <FaLink /> copy link
                      </>
                    }
                  />
                  {/* <SocialShare url={`http://localhost:3000/blog/read/${blog.slug}`} title={blog.title} summary={blog.description??"This blog is created in vBlogs with ❤️"} /> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </LoaderWrapper>
  );
}
