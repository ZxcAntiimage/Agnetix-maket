"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style/Parallax.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  scrollContainerRef?: RefObject<HTMLElement>;
}

const Parallax = ({
  children,
  speed = -0.2,
  className = "",
  scrollContainerRef,
}: ParallaxProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const tween = gsap.fromTo(
      inner,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          scroller,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed, scrollContainerRef]);

  return (
    <div ref={wrapperRef} className={`parallax-wrapper ${className}`}>
      <div ref={innerRef} className="parallax-inner">
        {children}
      </div>
    </div>
  );
};

export default Parallax;