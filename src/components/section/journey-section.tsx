"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function JourneySection() {
  return (
    <div className="relative ml-1">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      <ul className="flex flex-col gap-7">
        {DATA.journey.map((item, idx) => (
          <BlurFade key={idx} delay={BLUR_FADE_DELAY * 13 + idx * 0.07}>
            <li className="relative flex gap-4 pl-5">
              {/* Dot */}
              <span className="absolute left-0 top-[5px] size-[11px] rounded-full border border-border bg-background z-10 flex-none" />

              {/* Content */}
              <div className="flex flex-col gap-0.5 min-w-0 pb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    {item.year}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {item.tag}
                  </span>
                </div>
                <p className="font-semibold text-sm leading-snug">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            </li>
          </BlurFade>
        ))}
      </ul>
    </div>
  );
}
