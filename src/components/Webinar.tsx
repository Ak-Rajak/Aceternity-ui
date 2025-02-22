"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export function Webinar() {
  const featuredWebinars = [
    {
      title: "Understanding Theory",
      description:
        "Dive deep into the fundamentals of theory and enhance your collaborative skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of together writing",
      description:
        "Learn the craft of writing together with fellow college and experience virtual reality.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Communication Skills",
      description:
        "Advanced techniques to master your communication skills with technologies.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Learning Essentials",
      description:
        "Get started with AI assistance with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "AI Assistance in real-time collaboration",
      description:
        "AI assistance make you work easy the digital world.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="bg-gray-900 p-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED TO EXPERIENCE 
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Enhance Your Collaboration Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

            {/* Button removed  */}
        {/* <div className="mt-10 text-center">
          <Link
            href="/"
            className="rounded border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
          >
            View All features
          </Link>
        </div> */}
      </div>
    </div>
  );
}
