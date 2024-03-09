"use client";
import React from 'react'
import Title from './Title'
import { SiAbletonlive, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function Skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Kotlin",
            Icon: SiKotlin,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Firebase",
            Icon: SiFirebase,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "HTML5",
            Icon: SiHtml5,
        },
        {
            text: "CSS3",
            Icon: SiCss3,
        },

    ]
  return (

    <div className="max-w-5xl mx-auto px-8">
        <Title text='Skills' className="flex flex-col items-center justify-center rotate-6"/>
        <HoverEffect items={skills} /> 
    </div>
  )
}
