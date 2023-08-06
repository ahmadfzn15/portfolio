"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Main() {
  const profileImage = useRef(null);

  useEffect(() => {
    gsap.from(profileImage.current, {
      y: 100,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <div
        className="max-w-[calc(100%-10rem)] mx-auto h-[calc(100vh-5rem)] p-10 flex items-center justify-between"
        id="main"
      >
        <div className="flex flex-col">
          <h1 className="text-3xl font-thin text-slate-400">Hello, I'm</h1>
          <h1 className="text-6xl font-bold text-slate-300">Ahmad Fauzan</h1>
          <h1 className="text-4xl font-semibold text-slate-400">
            A web developer
            <br />
            and programming lover
          </h1>
        </div>
        <div className="">
          <div
            className="w-[400px] h-[400px] rounded-full overflow-hidden ring ring-blue flex justify-center items-center"
            ref={profileImage}
          >
            <Image src="/img/lusi.jpeg" alt="Photos" width="400" height="400" />
          </div>
        </div>
      </div>
    </>
  );
}
