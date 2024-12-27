"use client";

import { Btn } from "@/shared/components/buttons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-center h-svh bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="flex w-full justify-evenly items-center">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681487729805-91f220c7da25?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landing page"
          width={400}
          height={400}
          className="aspect-video w-[500px] rounded-2xl"
        ></Image>
        <Link href="/site">
          <Btn text="Continue" variant="outline" />
        </Link>
      </div>
    </div>
  );
}
