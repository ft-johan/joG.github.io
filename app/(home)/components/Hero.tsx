import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className=" min-h-[80vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi nice to meet you
          <br />
          I am Johan
        </h1>
        <p className="md:w-96 text-lg text-gray-300">{"Based in India , I'm a Fullstack Developer a Btech Sophmore"}</p>
        <Link href={"mailto:johangeorge201203@gmail.com"} className="inline-block">
          <div >
            <h1 className="text-3xl font-bold hover:text-teal-600 transition-all">Contact me</h1>
          </div>
        </Link>
      </div>
       <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
