"use client";

import { motion, useMotionValue } from "framer-motion";
import HomePageLinks from "@/app/(home)/components/HomePageLinks";
import Image from "next/image";
import LOGO from "@/public/graphene-logo.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const text = "The first carbon to learn coding :D";
  const typingDuration = 0.03 * text.length;
  const rotation = useMotionValue(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ROTATE_SPEED = 0.25;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      const currentRotation = rotation.get();

      if (currentScrollY === 0) {
        rotation.set(0);
        setLastScrollY(currentScrollY);
        return;
      }

      if (scrollDifference > 0) {
        rotation.set(
          currentRotation + Math.abs(scrollDifference) * ROTATE_SPEED,
        );
      } else if (scrollDifference < 0) {
        rotation.set(
          currentRotation - Math.abs(scrollDifference) * ROTATE_SPEED,
        );
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, rotation]);

  return (
    <section className="mx-6 md:mx-16 my-20 grid lg:grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <motion.h1
            aria-label="Hi, I'm Runkang10!"
            className="text-5xl md:text-6xl font-medium text-glow"
            initial={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}
            animate={{
              textShadow: [
                "1px 1px 10px rgba(255, 255, 255, 0.5)",
                "1px 1px 40px rgba(255, 255, 255, 0.5)",
                "1px 1px 10px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            Hi, I&#39;m Runkang10!
          </motion.h1>
          <div className="flex justify-center md:justify-start items-center">
            <motion.span
              className="text-lg md:text-xl text-muted-foreground whitespace-nowrap overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{
                duration: typingDuration,
                ease: "linear",
              }}
            >
              {text}
            </motion.span>
            <motion.span
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 0,
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.5, 0.7, 1],
              }}
            >
              _
            </motion.span>
          </div>
          <br />
          <HomePageLinks />
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <motion.div style={{ rotate: rotation }}>
          <Image src={LOGO} alt="LOGO" width={320} height={320} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
