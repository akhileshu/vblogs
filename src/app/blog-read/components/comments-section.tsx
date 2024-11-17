import { Btn } from "@/app/_components/all";
import { HoverDropdown } from "@/app/_sharedComponents/hover-dropdown";
import { ArrowDownUp, Reply, Trash2 } from "lucide-react";
import Image from "next/image";

export function CommentsSection({myRef}) {
  const comments = [];

  return (
    <div ref={myRef} className="border-dashed border-indigo-300  p-4 space-y-10  divide-y-2 divide-solid divide-slate-300">
      <div className="rounded-xl p-4 bg-indigo-100 space-y-10">
        <p>No comments yet. Be the first to comment!</p>

        <div className="flex justify-between">
          <div className="border-dashed border-indigo-300 border-2 rounded-sm h-8 w-56"></div>
          <Btn text="Submit" />
        </div>
      </div>
      <div>
        <CommentsCountAndSort />
        <div className="space-y-2 divide-y-[1px] divide-solid divide-gray-200 text-sm">

        <CommentWithReplys />
        <CommentWithReplys />
        <CommentWithReplys />
        </div>
      </div>
    </div>
  );
}

function CommentsCountAndSort() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-sm">
        Comments{" "}
        <span className="bg-indigo-400 text-white rounded-md px-2 py-0.5">
          25
        </span>
      </div>
      <div>
        <div>
          <HoverDropdown
            className="text-sm text-indigo-400"
            trigger={
              <>
                <ArrowDownUp size={18} />{" "}
                <span className="ml-2">Most Recent</span>
              </>
            }
          >
            <div className="p-2 ml-4 w-56 text-sm text-indigo-500 space-y-2">
              {" "}
              <a href="#introduction" className="block   hover:bg-gray-100">
                Introduction
              </a>
              <a href="#section-1" className="block   hover:bg-gray-100">
                Section 1: Overview
              </a>
            </div>
          </HoverDropdown>
        </div>
      </div>
    </div>
  );
}

function CommentWithReplys() {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
          }
          width={35}
          height={35}
          alt=""
          className="object-cover aspect-square rounded-full "
        />
        <p className="font-semibold">Akhilesh Upadhyay</p>
        <p className="text-sm text-gray-500">58 minutes ago</p>
      </div>
      <div className="ml-10">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          nesciunt?
        </p>
        <div className="flex gap-2 items-center ">
          <Reply size={18} />
          <Trash2 size={18} />
        </div>
        <CommentReply />
      </div>
    </div>
  );
}

function CommentReply() {
  return (
    <div className="ml-10 mt-4">
      <div className="flex gap-2 items-center">
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
          }
          width={35}
          height={35}
          alt=""
          className="object-cover aspect-square rounded-full "
        />
        <p className="font-semibold">Akhilesh Upadhyay</p>
        <p className="text-sm text-gray-500">58 minutes ago</p>
      </div>
      <div className="ml-10">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          nesciunt?
        </p>
        <div className="flex gap-2 items-center ">
          <Trash2 size={18} />
        </div>
      </div>
    </div>
  );
}
