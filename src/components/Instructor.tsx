"use client";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Preeti Ranjan",
    designation: "Leader",
    image:
      "/pics/Preeti.png",
  },
  {
    id: 2,
    name: "Dhiraj Gupta",
    designation: "Developer",
    image:
      "/pics/Dhiraj.jpg",
  },
  {
    id: 3,
    name: "Satyajyoti Mohanty",
    designation: "Developer",
    image:
      "/pics/satya.jpeg",
  },
  {
    id: 4,
    name: "Atul Kumar Rajak",
    designation: "Developer",
    image:
      "/pics/Atul.jpg",
  },
  {
    id: 5,
    name: "Hemanand Swamy",
    designation: "Developer",
    image:"/pics/1.jpeg",
  },
];

export function Instructors() {
  return (
    <div className="relative flex h-[40rem] items-center justify-center overflow-hidden">
      <WavyBackground className="mx-auto flex size-full max-w-7xl flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Meet Our Developers
        </h2>
        <p className="mb-4 text-center text-base text-white md:text-lg">
          Discover the talented professionals who will guide you in yours collaboration
          journey
        </p>
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}
