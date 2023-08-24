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
      <div className="w-full bg-slate-950 min-h-screen relative" id="about">
        <div className="max-w-[calc(100%-10rem)] mx-auto flex flex-col justify-center items-center gap-10 h-screen p-10">
          <h1 className="font-semibold text-4xl">Who Me</h1>
          <div className="flex gap-10">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden ring ring-blue flex justify-center items-center shadow-profile shrink-0">
              <Image
                src="/img/lusi.jpg"
                alt="Photos"
                width="400"
                height="400"
              />
            </div>
            <p className="text-right text-lg first-letter:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam
              nemo distinctio error eos dignissimos suscipit accusantium,
              quaerat ipsa quisquam officiis nesciunt reiciendis, aut veritatis
              cupiditate pariatur qui quibusdam consectetur nulla perspiciatis
              temporibus fugiat eum laudantium. Rerum et consectetur, ex
              expedita commodi omnis aliquam quasi. Dolorem nemo nobis cumque
              ipsam id assumenda omnis, repellat nesciunt nam veritatis
              voluptatum, ex sunt maiores ab doloribus voluptas magni in nisi
              provident voluptates! Explicabo dicta quibusdam quaerat quis ex
              quidem distinctio officia cumque! In quod similique ad
              consectetur, commodi ducimus magnam quae natus nobis sapiente
              vitae earum aliquam fugit enim aliquid voluptatem maxime
              reprehenderit! Veniam dignissimos nulla atque natus enim dicta,
              eius, dolore molestiae eligendi doloremque et porro aspernatur!
              Voluptate minima ullam labore sed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
