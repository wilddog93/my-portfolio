"use client"
import { Greeting } from "@/components/containers/greeting";
import Skills from "@/components/containers/skills";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <Greeting />
      <Skills />
    </section>
  );
}
