"use client";

import MobileLayout from "@/components/home/MobileLayout";
import DesktopLayout from "@/components/home/DesktopLayout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-[var(--dark-bg-primary)]">
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </main>
    );
  }

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
