import { GlowEffectButton } from "./glow-button";
import { TextEffect } from "./motion-primitives/text-effect";

const Hero = () => {
  return (
    <section className="section_wrapper bg-grid-neutral-50/[0.03]">
      <div className="flex_end">
        <GlowEffectButton />
      </div>

      <div className="flex_center relative mt-28 w-full gap-5">
        <TextEffect
          per="char"
          preset="fade-in-blur"
          speedReveal={0.5}
          className="font-bebas relative text-7xl font-extrabold tracking-wider text-neutral-300 font-stretch-90% sm:text-9xl lg:text-[200px]"
        >
          Mchango
        </TextEffect>

        <TextEffect
          per="word"
          preset="fade-in-blur"
          speedReveal={0.7}
          delay={0.5}
          className="font-grotesk text-center text-sm font-light text-neutral-300 capitalize lg:text-lg"
        >
          Eliminate trust from group savings and contributions
        </TextEffect>

        <div className="flex_center mt-5 w-full">
          <GlowEffectButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
