"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card } from "@/components/Card";
import { PageNavigationButtons } from "@/components/PageNavigationButtons";
import PageTransition from "@/components/ui/PageTransition";
import data from "@/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Projects() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Redirect only once on initial mount if opened directly on desktop
    if (window.innerWidth >= 1024) {
      router.replace("/");
    }
  }, [router]);

  if (!mounted) {
    return null;
  }

  return (
    <PageTransition>
      <main
        id="projects-page"
        className="bg-(--dark-bg-primary) w-full min-h-screen pt-25"
      >
        <Navbar />
        <section className="px-7.5 mb-12.5">
          <h5 className="text-(--dark-text) font-extrabold text-[13px] jakart"></h5>
          <div
            id="cards-wrapper"
            className="flex flex-col gap-7.5 md:grid md:grid-cols-2 md:gap-1 lg:gap-2"
          >
            {data.map((project, index) => (
              <Card key={index} data={project} screen="mobile" />
            ))}
          </div>
          <PageNavigationButtons page={"projects"} />
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
}