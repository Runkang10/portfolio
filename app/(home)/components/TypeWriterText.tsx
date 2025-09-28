"use client";

import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypeWriterTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  children?: ReactNode;
}

const TypeWriterText = ({ text, children, ...props }: TypeWriterTextProps) => {
  const [chars, setChar] = useState("");

  useEffect(() => {
    text.split("").map((char) => {
      setChar(chars + char);
    });
  }, [chars, text]);

  return (
    <div {...props}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {chars}
      </motion.span>
      {chars.length === text.length ? children : null}
    </div>
  );
};

export default TypeWriterText;
