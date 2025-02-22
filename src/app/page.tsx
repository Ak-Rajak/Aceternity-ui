import { FeatureCourses } from "@/components/FeatureCourses";
import Hero from "@/components/Hero";
import { Instructors } from "@/components/Instructor";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Testimonials } from "@/components/Testimonials";
import { Webinar } from "@/components/Webinar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function page() {
  return (
    <main className="bg-black/[0.96] bg-grid-white/[0.02]">
      <MaxWidthWrapper>
        <Hero />
        <FeatureCourses />
        {/* <WhyChooseUs /> */}
        <Testimonials />
        <Webinar />
      </MaxWidthWrapper>
      <Instructors />
    </main>
  );
}
