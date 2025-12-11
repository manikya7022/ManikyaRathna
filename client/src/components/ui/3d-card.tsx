import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export function Card3D({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <div
      className={cn("perspective-1000", containerClassName)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative transition-all duration-200 ease-linear", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Card3DBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl h-full",
        className
      )}
      style={{ transform: "translateZ(20px)" }}
    >
      {children}
    </div>
  );
}

export function Card3DItem({
  as: Component = "div",
  children,
  className,
  translateZ = 50,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateZ?: number | string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
      {...rest}
    >
      {children}
    </Component>
  );
}
