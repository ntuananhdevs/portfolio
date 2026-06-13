"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const CATEGORY_ACCENT: Record<string, string> = {
  "Daily Tools": "text-sky-400",
  DevOps: "text-orange-400",
  Cloud: "text-violet-400",
};

export default function ToolStackSection() {
  return (
    <div className="flex flex-col gap-5">
      {DATA.toolStack.map((group, groupIdx) => (
        <div key={group.category} className="flex flex-col gap-2.5">
          {/* Category label */}
          <BlurFade delay={BLUR_FADE_DELAY * 11 + groupIdx * 0.06}>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest",
                CATEGORY_ACCENT[group.category] ?? "text-muted-foreground"
              )}
            >
              {group.category}
            </p>
          </BlurFade>

          {/* Tool chips */}
          <div className="flex flex-wrap gap-2">
            {group.items.map((tool, toolIdx) => (
              <BlurFade
                key={tool.name}
                delay={
                  BLUR_FADE_DELAY * 11 + groupIdx * 0.08 + toolIdx * 0.03
                }
              >
                <span className="inline-flex items-center rounded-md border border-border bg-muted/40 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-foreground/20 cursor-default select-none">
                  {tool.name}
                </span>
              </BlurFade>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
