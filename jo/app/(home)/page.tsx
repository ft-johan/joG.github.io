import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
<div className="min-h-screen bg-black ">
  <div className="max-w-7xl mx-auto sm:p-5 overflow-hidden">
    <Navbar />
    <Hero />
  </div>
</div>
    );
}
