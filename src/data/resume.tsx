import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Php } from "@/components/ui/svgs/php";
import { Aws } from "@/components/ui/svgs/aws";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Redis } from "@/components/ui/svgs/redis";
import { Javascript } from "@/components/ui/svgs/javascript";
import { N8n } from "@/components/ui/svgs/n8n";

export const DATA = {
  name: "ntuananh",
  initials: "TA",
  url: "https://ntuananh.site",
  location: "Hanoi, Vietnam",
  locationLink: "https://www.google.com/maps/place/hanoi",
  description:
    "Software Engineer | Cloud & Data Systems",
  summary:
    "Software Engineer specializing in Cloud architecture and Data Engineering. I focus on building scalable web applications, designing efficient data pipelines, and deploying robust cloud-native solutions.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: Python },
        { name: "Go", icon: Golang },
        { name: "PHP", icon: Php },
        { name: "JavaScript", icon: Javascript },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Laravel", icon: Laravel },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Postgres", icon: Postgresql },
        { name: "MySQL", icon: Mysql },
        { name: "Redis", icon: Redis },
      ],
    },
    {
      category: "Tools & Cloud",
      items: [
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "AWS", icon: Aws },
        { name: "n8n", icon: N8n },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ntuananhdevs",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ntuanan25",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ntuananh_",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  toolStack: [
    {
      category: "Daily Tools",
      items: [
        { name: "VS Code" },
        { name: "Postman" },
        { name: "TablePlus" },
        { name: "Figma" },
        { name: "Git" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "GitHub Actions" },
        { name: "Terraform" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS" },
        { name: "Vercel" },
        { name: "Cloudflare" },
      ],
    },
  ],
  journey: [
    {
      year: "2023",
      title: "Started at FPT Polytechnic",
      description: "Enrolled in Information Technology program. Wrote my first lines of code and fell in love with backend development.",
      tag: "Education",
    },
    {
      year: "2025",
      title: "Joined CO-PRODUCTION",
      description: "First full-time role as a Laravel Developer. Built full-stack web applications and collaborated with cross-functional teams.",
      tag: "Work",
    },
    {
      year: "2025",
      title: "Graduated with Excellence",
      description: "Completed Bachelor's degree at FPT Polytechnic with an excellent grade, recognizing academic and practical achievements.",
      tag: "Education",
    },
    {
      year: "2025",
      title: "Joined Proxy Machine",
      description: "Stepped into Golang and built production-grade backend services and APIs. Deepened expertise in distributed systems.",
      tag: "Work",
    },
    {
      year: "2026",
      title: "Enrolled at HUBT",
      description: "Continuing education at Hanoi University of Business and Technology, pursuing a Bachelor's in Information Technology.",
      tag: "Education",
    },
  ],
  work: [
    {
      company: "Proxy Machine",
      href: "",
      badges: ["Full-time"],
      location: "Đống Đa, Hanoi, Vietnam (Hybrid)",
      title: "Back End Developer",
      logoUrl: "",
      start: "Nov 2025",
      end: "May 2026",
      description:
        "Developed backend services and APIs using Golang and MySQL. Participated in architectural design and system optimizations.",
    },
    {
      company: "CO-PRODUCTION",
      href: "",
      badges: ["Full-time"],
      location: "Vinh, Nghe An, Vietnam (On-site)",
      title: "Laravel Developer",
      logoUrl: "",
      start: "May 2025",
      end: "Nov 2025",
      description:
        "Built full-stack web applications using Laravel and JavaScript. Collaborated with cross-functional teams to deliver new features and improve user experience.",
    },
  ],
  education: [
    {
      school: "Hanoi University of Business and Technology (HUBT)",
      href: "https://hubt.edu.vn",
      degree: "Bachelor of Information Technology (Engineer)",
      logoUrl: "/Logo_HUBT.png",
      start: "2026",
      end: "2028 (Expected)",
    },
    {
      school: "FPT Polytechnic Hanoi",
      href: "https://caodang.fpt.edu.vn",
      degree: "Bachelor of Information Technology (Graduated with Excellence)",
      logoUrl: "/fpt.png",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [] as Array<{
    title: string;
    href?: string;
    dates?: string;
    active?: boolean;
    description: string;
    technologies: readonly string[];
    links?: readonly { type: string; href: string; icon?: React.ReactNode }[];
    image?: string;
    video?: string;
  }>,
  hackathons: [
    {
      title: "Data Hackathon",
      dates: "November 23rd - 25th, 2023",
      location: "Hanoi, Vietnam",
      description:
        "Developed a predictive model and data visualization dashboard using Python.",
      image: "",
      links: [] as { href: string; title: string; icon?: React.ReactNode }[],
    },
  ],
} as const;
