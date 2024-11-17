"use client";
import {
  ArrowUpToLine,
  Bookmark,
  Heart,
  Link,
  Maximize2,
  MessageCircle,
  MessagesSquare,
  Minimize2,
  TableOfContents,
} from "lucide-react";
import { useRef } from "react";
import ThreeOneLayout from "../_components/threeOneLayout";
import { AppToolTip } from "../_components/tooltip";
import { HoverDropdown } from "../_sharedComponents/hover-dropdown";
import { Feed } from "./components/side-feed";
import { CommentsSection } from "./components/comments-section";
import Image from "next/image";
import { FancyBtn } from "../_components/all";

export default function Page() {
  return (
    <ThreeOneLayout className="">
      <Right />
      <Feed />
    </ThreeOneLayout>
  );
}

const Right = () => {
  const commentRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  // const discussionRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconList = [
    {
      icon: <Heart size={20} />,
      tooltip: "Like",
    },
    { icon: <Bookmark size={20} />, tooltip: "Bookmark" },
    {
      icon: (
        <ArrowUpToLine
          onClick={() => {
            handleScroll(topRef);
          }}
          size={20}
        />
      ),
      tooltip: "go to top",
    },
    {
      icon: (
        <MessageCircle
          size={20}
          onClick={() => {
            handleScroll(commentRef);
          }}
        />
      ),
      tooltip: "Comment",
    },
    { icon: <MessagesSquare size={20} />, tooltip: "Discuss / Ask" },
    { icon: <Link size={20} />, tooltip: "Copy Link" },
    { icon: <Maximize2 size={20} />, tooltip: "Expand" },
    { icon: <Minimize2 size={20} />, tooltip: "Collapse" },
  ];

  return (
    <div
      className="border-l-[1px] border-solid border-gray-200 ml-2  divide-y-[1px] divide-solid divide-gray-200"
      ref={topRef}
    >
      <BlogRead />
      <CommentsSection myRef={commentRef} />
      <div className="  fixed text-indigo-400 flex flex-col items-center gap-4 left-0 top-12 border-dashed  px-1 border-blue-300">
        <HoverDropdown
          className="text-sm text-indigo-400"
          trigger={<TableOfContents size={20} />}
        >
          <div className="p-2 ml-4 w-56 text-sm text-indigo-500 space-y-2">
            <div className="flex gap-2">
              <div className="text-sm text-indigo-600 bg-indigo-100 border-solid border-indigo-200 border-[2px] rounded-sm px-1.5 py-[1px]">
                1
              </div>
              <div className="text-sm text-indigo-600  border-solid border-indigo-200 border-[2px] rounded-sm px-1.5 py-[1px]">
                2
              </div>
              <div className="text-sm text-indigo-600  border-solid border-indigo-200 border-[2px] rounded-sm px-1.5 py-[1px]">
                2
              </div>
            </div>
            <a href="#introduction" className="block   hover:bg-gray-100">
              Introduction
            </a>
            <a href="#section-1" className="block   hover:bg-gray-100">
              Section 1: Overview
            </a>
            <a href="#section-2" className="block   hover:bg-gray-100">
              Section 2: Details
            </a>
            <a href="#section-3" className="block   hover:bg-gray-100">
              Section 3: Analysis
            </a>
            <a href="#conclusion" className="block   hover:bg-gray-100">
              Conclusion
            </a>
          </div>
        </HoverDropdown>
        {iconList.map((item, index) => (
          <AppToolTip
            key={index}
            className=" cursor-pointer hover:text-indigo-500"
            trigger={item.icon}
            tooltipContent={item.tooltip}
          />
        ))}
      </div>
    </div>
  );
};

function BlogRead() {
  return (
    <div className="border-dashed border-indigo-300 px-2">
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={400}
        height={10}
        className="h-80 rounded-sm w-full object-cover"
        alt="banner"
      />
      <div className="px-6 py-2 ">
        <PostDetails />
      </div>
    </div>
  );
}

function PostDetails() {
  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
          }
          width={45}
          height={35}
          alt=""
          className="object-cover aspect-square rounded-full "
        />
        <div>
          <p className="font-semibold">Ruheni Alex for Prisma</p>
          <p className="text-sm">
            Posted on Feb 25, 2021 • Updated on Aug 10, 2022
          </p>
        </div>
      </div>
      <h2 className="font-bold text-4xl">
        Building a GraphQL CRUD API for your Database with TypeGraphQL & Prisma
      </h2>
      <p className="text-xs text-gray-500">
        Backend <span className="text-gray-400">{">"}</span> NodeJs{" "}
        <span className="text-gray-400">{">"}</span> Event Emitters
      </p>
      <div className="flex gap-2">
        <FancyBtn color="green" text="# Javascript" />
        <FancyBtn color="pink" text="# Javascript" />
        <FancyBtn text="# Javascript" />
      </div>
    </div>
  );
}
