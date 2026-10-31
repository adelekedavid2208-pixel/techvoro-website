
"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-3xl bg-white/[0.03] md:h-[580px]" />
  ),
});

export default function HeroSceneLoader() {
  return <HeroScene />;
}
