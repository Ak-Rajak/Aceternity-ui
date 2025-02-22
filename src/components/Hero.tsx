import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

export default function Hero() {
  return (
    <section className="md-h-[40rem] relative mx-auto flex h-auto min-h-screen flex-col items-center justify-center overflow-hidden rounded-md py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
      <div className="relative z-10 w-full p-8 text-center">
        <h1 className="mt-20 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl">
          Sync-Student
        </h1>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="absolute inset-0 z-0 mx-auto size-full"
          particleColor="#FFFFFF"
        />
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 md:text-lg">
        Why get bored alone when you can get bored together?
        Make friends, learn together, and turn boredom into fun!
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-black dark:text-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
