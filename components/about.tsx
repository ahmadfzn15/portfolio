"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const profileImage = useRef(null);

  useEffect(() => {
    const showProfile = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        gsap.from(profileImage.current, {
          x: -50,
          duration: 1,
          opacity: 0,
        });
      }
    };

    window.addEventListener("scroll", showProfile);

    return () => {
      window.removeEventListener("scroll", showProfile);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-slate-950 min-h-screen" id="about">
        <div className="max-w-[calc(100%-10rem)] mx-auto flex justify-center h-screen p-10">
          <h1 className="font-semibold text-2xl">Who Me</h1>
        </div>
      </div>
      <div className="min-h-screen"></div>
    </>
  );
}
