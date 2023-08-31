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

  return <></>;
}
