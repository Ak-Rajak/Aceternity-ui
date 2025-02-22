"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Preeti Ranjan",
    title: "Software Technology Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Dhiraj Gupta",
    title: "Software Technology Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Hemanand Swamy",
    title: "UI/UX Design Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Satyajyoti Mohanty",
    title: "Cloud Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Rakesh Kumar",
    title: "Java Student",
  },
];

export function Testimonials() {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden dark:bg-black dark:bg-grid-white/[0.2]">
      <h2 className="z-10 mb-8 text-center text-3xl font-bold">
        Here's What Our Students Say
      </h2>
      <div className="flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
