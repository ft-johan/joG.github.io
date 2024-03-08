import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
<div className="min-h-screen bg-black overflow-hidden ">
  <div className="max-w-7xl mx-auto p-5">
    <Navbar />
    <Hero />
  </div>
</div>
    );
}
