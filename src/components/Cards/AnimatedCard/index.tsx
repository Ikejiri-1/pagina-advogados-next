"use client";
import { useEffect, useRef } from "react";
import "./animatedcard.css";

interface AnimatedCardProps {
  children: React.ReactNode;
}

export const AnimatedCard = ({ children }: AnimatedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="animated-card">
      {children}
    </div>
  );
};
