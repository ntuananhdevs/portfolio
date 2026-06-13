"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const TAG_COLORS: Record<string, string> = {
  "Daily Tools": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  DevOps: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Cloud: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function ToolStackSection() {
  return (
    <div className="flex flex-col gap-6">
      {DATA.toolStack.map((group, groupIdx) => (
        <div key={group.category} className="flex flex-col gap-2">
          <BlurFade delay={BLUR_FADE_DELAY * 11 + groupIdx * 0.05}>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${
                TAG_COLORS[group.category] ??
                "bg-muted text-muted-foreground border-border"
              }`}
            >
              {group.category}
            </span>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {group.items.map((tool, toolIdx) => (
              <BlurFade
                key={tool.name}
                delay={BLUR_FADE_DELAY * 11 + groupIdx * 0.08 + toolIdx * 0.04}
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-card-foreground text-sm font-medium shadow-sm hover:border-foreground/30 hover:shadow-md transition-all duration-200 cursor-default select-none">
                  <span>{tool.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
