/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import JourneySection from "@/components/section/journey-section";
import { ArrowUpRight } from "lucide-react";
import { MarqueeText } from "@/components/ui/marquee-text";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-10 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="-mt-6 md:-mt-5">
        <div className="flex min-h-0 flex-col gap-y-1">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center gap-x-3">
                  {/* Logo */}
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt={education.school}
                      className="size-8 md:size-10 p-1 border border-border rounded-full ring-2 ring-border/20 bg-background overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div className="size-8 md:size-10 border border-border rounded-full ring-2 ring-border/20 bg-background flex-none" />
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    {/* Row 1: school + date(md+) */}
                    <div className="font-semibold leading-none flex items-center gap-1 min-w-0">
                      <MarqueeText text={education.school} className="flex-1" />
                      {/* Date: chỉ hiện trên md+ cùng hàng */}
                      <span className="hidden md:inline-flex items-center text-xs tabular-nums text-muted-foreground font-normal flex-shrink-0 ml-1">
                        {education.start} - {education.end}
                      </span>
                    </div>
                    {/* Row 2: degree + date(mobile) */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </span>
                      {/* Date: chỉ hiện trên mobile */}
                      <span className="md:hidden text-xs tabular-nums text-muted-foreground flex-shrink-0">
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.skills.map((category, catId) => (
              <div key={category.category} className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, id) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + catId * 0.1 + id * 0.05}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">My Journey</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <JourneySection />
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
