"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const TAG_STYLES: Record<string, string> = {
  Education: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Work: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Milestone: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const DOT_STYLES: Record<string, string> = {
  Education: "bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.4)]",
  Work: "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.4)]",
  Milestone: "bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.4)]",
};

export default function JourneySection() {
  return (
    <div className="relative flex flex-col">
      {/* vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="flex flex-col gap-8">
        {DATA.journey.map((item, idx) => (
          <BlurFade key={idx} delay={BLUR_FADE_DELAY * 13 + idx * 0.07}>
            <div className="relative flex gap-5 pl-1">
              {/* dot */}
              <div className="relative z-10 flex-none mt-1">
                <div
                  className={cn(
                    "size-3.5 rounded-full border-2 border-background",
                    DOT_STYLES[item.tag] ?? "bg-muted"
                  )}
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-1.5 pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs tabular-nums text-muted-foreground font-mono">
                    {item.year}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border",
                      TAG_STYLES[item.tag] ??
                        "bg-muted text-muted-foreground border-border"
                    )}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
