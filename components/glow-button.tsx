import { ArrowRight } from "lucide-react";
import { GlowEffect } from "./motion-primitives/glow-effect";

export function GlowEffectButton() {
  return (
    <div className="relative">
      <GlowEffect
        colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
        mode="colorShift"
        blur="soft"
        duration={3}
        scale={0.9}
      />
      <button className="font-grotesk relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm font-bold text-zinc-50 outline outline-[#fff2f21f] transition-transform duration-300 hover:scale-105 active:scale-100">
        Join WaitList <ArrowRight className="h4 w-4" />
      </button>
    </div>
  );
}
