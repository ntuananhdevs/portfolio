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

export const DATA = {
  name: "ntuananh_",
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

  work: [
    {
      company: "Proxy Machine",
      href: "",
      badges: ["Full-time"],
      location: "Đống Đa, Hanoi, Vietnam (Hybrid)",
      title: "Back End Developer",
      logoUrl: "",
      start: "Jan 2026",
      end: "Mar 2026",
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
      start: "Mar 2025",
      end: "Jan 2026",
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
  projects: [
    {
      title: "Data Pipeline Project",
      href: "https://github.com/your-username/project",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Built a real-time data streaming pipeline using Python, Kafka, and Postgres to process and analyze large volumes of data.",
      technologies: [
        "Python",
        "PostgreSQL",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/your-username/project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
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
