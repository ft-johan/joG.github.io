"use client";
import React from 'react'
import Title from './Title'
import { SiAbletonlive, SiKotlin, SiReact, SiTailwindcss } from 'react-icons/si'
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
            text: "Ableton",
            Icon: SiAbletonlive,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        },

    ]
  return (

    <div className="max-w-5xl mx-auto px-8">
        <Title text='Skills' className="flex flex-col items-center justify-center rotate-6"/>
        <HoverEffect items={skills} /> 
    </div>
  )
}
