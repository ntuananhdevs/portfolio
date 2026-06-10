"use client";

import { useRef, useEffect, useState } from "react";

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: number; // px per second
  gap?: number;   // gap between repeated copies (px)
}

export function MarqueeText({
  text,
  className = "",
  speed = 18,
  gap = 64,
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    const check = () => {
      const container = containerRef.current;
      const textEl = textRef.current;
      if (!container || !textEl) return;

      const containerWidth = container.clientWidth;
      const textWidth = textEl.scrollWidth;

      setSingleWidth(textWidth);
      setIsOverflowing(textWidth > containerWidth);
    };

    check();
    const observer = new ResizeObserver(check);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text]);

  // one full cycle = travel distance of (singleWidth + gap) px
  const cycleWidth = singleWidth + gap;
  const duration = cycleWidth > 0 ? cycleWidth / speed : 6;

  return (
    <div
      ref={containerRef}
      className={`min-w-0 relative ${className}`}
      style={{
        overflow: "hidden",
        WebkitMaskImage: isOverflowing
          ? "linear-gradient(to right, transparent 0%, black 12%, black 70%, transparent 100%)"
          : undefined,
        maskImage: isOverflowing
          ? "linear-gradient(to right, transparent 0%, black 12%, black 70%, transparent 100%)"
          : undefined,
      }}
    >
      {isOverflowing ? (
        /* Infinite loop: two copies side by side, animate the pair leftward */
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `marquee-loop ${duration}s linear infinite`,
            ["--cycle-width" as string]: `${cycleWidth}px`,
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span ref={textRef} className="inline-block flex-shrink-0">
            {text}
          </span>
          {/* gap separator */}
          <span
            className="inline-block flex-shrink-0"
            style={{ width: gap }}
            aria-hidden
          />
          {/* duplicate for seamless loop */}
          <span className="inline-block flex-shrink-0" aria-hidden>
            {text}
          </span>
          <span
            className="inline-block flex-shrink-0"
            style={{ width: gap }}
            aria-hidden
          />
        </div>
      ) : (
        <span ref={textRef} className="inline-block whitespace-nowrap">
          {text}
        </span>
      )}

      <style>{`
        @keyframes marquee-loop {
          0%   { transform: translate3d(0px, 0, 0); }
          100% { transform: translate3d(calc(-1 * var(--cycle-width)), 0, 0); }
        }
      `}</style>
    </div>
  );
}
