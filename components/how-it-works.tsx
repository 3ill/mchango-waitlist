"use client";
import { motion } from "framer-motion";
import {
  Icon3dRotate,
  IconBrandTether,
  IconHomeEco,
} from "@tabler/icons-react";

const HowItWorks = () => {
  return (
    <section className="section_wrapper bg-opacity-80 bg-neutral-900 backdrop-blur-md">
      <div className="flex w-full flex-col gap-2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
          className="font-helvetica text-2xl font-extrabold text-white uppercase sm:text-3xl lg:text-5xl"
        >
          How It Works
        </motion.h2>
        <p className="work_description">
          We eliminate the need for trust and provide a default tolerant system
          for group savings and contributions by leveraging the power of
          blockchain technology.
        </p>

        {/* Step 1 */}
        <div className="flex_end mt-[100px] w-full flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
            className="flex max-w-prose"
          >
            <motion.h3 className="work_header !bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Step 1: Create / Join a group
            </motion.h3>
          </motion.div>

          <p className="work_description">
            Create or join from a list of secure groups
          </p>
          <div className="motion-preset-expand motion-duration-1000 flex">
            <IconHomeEco className="h-[100px] w-[100px] text-yellow-500 sm:h-[200px] sm:w-[200px]" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex_start mt-[50px] w-full flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
            className="flex max-w-prose"
          >
            <motion.h3 className="work_header bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
              Step 2: Stake ERC20 Collateral
            </motion.h3>
          </motion.div>

          <p className="work_description">
            Stake your ERC20 tokens to be eligible to participate in rotations.
          </p>
          <div className="motion-preset-expand motion-duration-1000 flex">
            <IconBrandTether className="h-[100px] w-[100px] text-green-500 sm:h-[200px] sm:w-[200px]" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex_end mt-[100px] w-full flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", type: "tween" }}
            className="flex max-w-prose"
          >
            <motion.h3 className="work_header !bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-nowrap text-transparent">
              Step 3: Rotations
            </motion.h3>
          </motion.div>

          <p className="work_description">
            Enjoy seamless contributions and rotations
          </p>
          <div className="motion-preset-expand motion-duration-1000 flex">
            <Icon3dRotate className="h-[100px] w-[100px] text-blue-500 sm:h-[200px] sm:w-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
