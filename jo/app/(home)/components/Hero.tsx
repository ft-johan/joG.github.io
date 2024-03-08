import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className=" min-h-[80vh] flex items-center justify-between">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi nice to meet you
          <br />
          I'm Johan
        </h1>
        <p className="md:w-96 text-lg text-gray-300">{"Based in India , I'm a Fullstack Developer a Btech Sophmore"}</p>
        <Link href={"mailto:johangeorge201203@gmail.com"}>
          <div>
            <h1>Contact me</h1>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-5">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
