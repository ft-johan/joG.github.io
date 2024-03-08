import React from "react";
import { SiCss3, SiHtml5, SiReact, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "e learn",
      tech: [SiReact, SiTailwindcss, SiHtml5, SiCss3],
      link: "https",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover
              imageUrl={project.cover}
              className="w-full space-y-5 cursor-pointer">
                <h1>{project.title}</h1>
              </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
