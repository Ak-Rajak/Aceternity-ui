"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Integrating Liveblocks for real-time collaborative features in Next.js has been smooth. The Three.js whiteboard canvas is rendering beautifully, and the Liveblocks presence APIs are handling concurrent user actions effectively. We've optimized for performance, especially with complex Three.js scenes.",
    name: "Preeti Ranjan",
    title: "Frontend Developer (Next.js/Liveblocks/Three.js)",
  },
  {
    quote:
      "Firebase Authentication and Firestore are providing a robust backend for user management and data storage. We're leveraging AWS S3 for scalable storage of assignment files and Cloud Functions for serverless backend logic. The integration between Firebase and AWS is working seamlessly.",
    name: "Dhiraj Gupta",
    title: "Backend Developer (Firebase/AWS)",
  },
  {
    quote:
      "The Liveblocks API has been crucial for managing real-time cursors, selections, and drawing updates. We've implemented optimistic UI updates to minimize perceived latency, and the Liveblocks room state is maintaining consistency across all clients. The integration with our video-meeting components is also very stable.",
    name: "Hemanand Swamy",
    title: "Real-time API Specialist (Liveblocks Integration)",
  },
  {
    quote:
      "We've deployed the application on AWS using a combination of EC2, Lambda, and S3, ensuring high availability and scalability. We've configured auto-scaling groups to handle peak loads and implemented CloudFront for efficient content delivery. Firebase's integration with AWS has allowed for a clean and efficient deployment pipeline.",
    name: "Satyajyoti Mohanty",
    title: "Cloud Infrastructure Engineer (AWS Optimization)",
  },
  {
    quote:
      "The combination of Next.js, Firebase, Liveblocks, Three.js, and AWS has proven to be a powerful stack for this project. We've maintained clear communication between the frontend, backend, and infrastructure teams, ensuring a cohesive development process. Testing across these technologies has been thorough, and we're confident in the project's stability and scalability.",
    name: "Atul Kumar Rajak",
    title: "Project Manager (Tech Stack Coordination)",
  },
];

export function Testimonials() {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden dark:bg-black dark:bg-grid-white/[0.2]">
      <h2 className="z-10 mb-8 text-center text-3xl font-bold">
        Here&apos;s What Our Students Say
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
