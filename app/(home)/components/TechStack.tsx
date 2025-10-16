"use client";

import Image from "next/image";
import KOTLIN from "@/public/tech-stack/kotlin.png";
import TYPESCRIPT from "@/public/tech-stack/typescript.svg";
import PYTHON from "@/public/tech-stack/python.svg";
import RUST from "@/public/tech-stack/rust.svg";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/templates/tooltip";

const ImageData = [
  {
    label: "Kotlin",
    description: "Java alternative but better.",
    imageData: KOTLIN,
  },
  {
    label: "TypeScript",
    description: "Typed JavaScript but better.",
    imageData: TYPESCRIPT,
  },
  {
    label: "Python",
    description: "My first programming language ever learned.",
    imageData: PYTHON,
  },
  {
    label: "Rust",
    description: "I don't know why I learned this...",
    imageData: RUST,
  },
];

const TechStack = () => (
  <section className="flex flex-col items-center gap-4">
    <h2
      aria-label="My Tech Stack"
      className="font-medium text-4xl text-center text-glow"
    >
      My Tech Stack
    </h2>
    <div className="w-max grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-4">
      {ImageData.map((image) => (
        <Tooltip key={image.label}>
          <TooltipTrigger asChild>
            <motion.div
              className="p-4 rounded-2xl"
              style={{
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
              }}
              whileHover={{
                scale: 1.2,
              }}
            >
              <Image
                src={image.imageData}
                alt={image.label}
                width={64}
                height={64}
              />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>{image.description}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  </section>
);

export default TechStack;
