"use client"

import { cn } from "cn"
import { motion, type MotionProps, useScroll } from "motion/react"
import { HTMLAttributes, Ref } from "react"

interface ScrollProgressProps extends Omit<HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: Ref<HTMLDivElement>
}

export function ScrollProgress({ className, ref, ...props }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 z-40 h-px origin-left bg-linear-to-r from-primary to-secondary",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
