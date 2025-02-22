"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export function FeatureCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <section>
      <div className="my-8 bg-gray-900 py-12">
        <div>
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
              FEATURES
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
              Learn With the Best Collaboration Experience
            </p>
          </div>
        </div>
        <div className="mx-8 mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.slice(0,3).map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                  <div className="flex grow flex-col items-center p-4 text-center sm:p-6">
                    <p className="mb-2 mt-4 text-lg text-black dark:text-neutral-200 sm:text-xl">
                      {course.title}
                    </p>
                    <p className="grow text-sm text-neutral-600 dark:text-neutral-400">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href="/courses"
            className="rounded border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
          >
            View all features
          </Link>
        </div>
      </div>
    </section>
  );
}
