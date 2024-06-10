"use client"
import { Greeting } from "@/components/containers/greeting";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <Greeting />
    </section>
  );
}
