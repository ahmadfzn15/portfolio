"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Page() {
  const project = useRef(null);

  useEffect(() => {
    gsap.from(project.current, {
      y: 50,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <main className="w-full min-h-screen p-10 text-white">
      <h1 className="text-center pb-10 text-3xl font-semibold">My Projects</h1>
      <div
        className="max-w-[calc(100vw-10rem)] w-full mx-auto grid grid-cols-3 gap-10"
        ref={project}
      >
        <div className="w-full flex flex-col border border-slate-600 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointe">
          <Image
            src="/img/algram.png"
            alt="Projects"
            width="400"
            height="400"
            className="shrink-0"
          />
          <div className="p-4">
            <h1 className="text-lg">Social Media Application</h1>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nostrum voluptates voluptatem itaque eligendi sit non
              dolor tenetur in numquam!
            </p>
          </div>
        </div>
        <div className="border border-slate-600 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
          <Image
            src="/img/algram.png"
            alt="Projects"
            width="400"
            height="400"
          />
        </div>
        <div className="border border-slate-600 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
          <Image
            src="/img/algram.png"
            alt="Projects"
            width="400"
            height="400"
          />
        </div>
      </div>
    </main>
  );
}
