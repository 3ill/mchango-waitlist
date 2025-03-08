"use client";

import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./motion-primitives/accordion";
import { motion } from "framer-motion";

const FaqPage = () => {
  return (
    <section className="section_wrapper via-black-700 min-h-[600px] flex-col bg-radial from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
        className="font-helvetica text-2xl font-extrabold text-white uppercase sm:text-3xl lg:text-5xl"
      >
        FAQs
      </motion.h2>
      <Accordion
        className="mt-[50px] flex w-full flex-col"
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        <AccordionItem value="getting-started" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-white transition-transform duration-200 group-data-expanded:rotate-90" />
              <div className="accordion_title">
                What advantages do I receive as a group administrator?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-w-prose origin-left">
            <p className="accordion_content">
              Beyond having control over group membership and contribution
              management, group administrators are entitled to receive 1% of the
              aggregated contributions for each rotation cycle
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animation-properties" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-white transition-transform duration-200 group-data-expanded:rotate-90" />
              <div className="accordion_title">
                What happens when a participant defaults?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-w-prose origin-left">
            <p className="accordion_content">
              When members default, their collateral is sent to the round
              recipient and they are expelled from the group. Additionally,
              their reputation score decreases and the system logs their
              default. This record will limit their ability to participate in
              future rounds or create/join groups.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="advanced-features" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-white transition-transform duration-200 group-data-expanded:rotate-90" />
              <div className="accordion_title">
                How is the sequence of recipients decided?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-w-prose origin-left">
            <p className="accordion_content">
              The recipient order follows a "first stake, first receive"
              protocol, which means whoever participates earliest in the
              rotation cycle will be the first to collect the aggregated
              contributions from the group.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-support" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-white transition-transform duration-200 group-data-expanded:rotate-90" />
              <div className="accordion_title">
                What type of currency does the round recipient get paid in?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-w-prose origin-left">
            <p className="accordion_content">
              Members get paid in the platform's native currency, while
              collateral deposits are made using USDT or USDC stablecoins.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqPage;
