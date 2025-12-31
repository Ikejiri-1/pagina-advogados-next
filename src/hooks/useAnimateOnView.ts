"use client";

import { useEffect, useRef } from "react";

interface UseAnimateOnViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationClass?: string;
}

export function useAnimateOnView<T extends HTMLElement>({
  threshold = 0.4,
  rootMargin = "0px",
  once = true,
  animationClass = "animate",
}: UseAnimateOnViewOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass);
          if (once) observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once, animationClass]);

  return ref;
}
