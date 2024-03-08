"use client";
import React from 'react'
import Title from './Title'
import { SiReact } from 'react-icons/si'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function Skills() {
    const skills = [
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

    <div>
        <Title text='Skills' className="flex flex-col items-center justify-center rotate-6"/>
        <HoverEffect items={skills} /> 
    </div>
  )
}
