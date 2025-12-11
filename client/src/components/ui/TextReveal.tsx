import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Props {
    children: string;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export default function TextReveal({ children, className = "", direction = "up" }: Props) {
    const element = useRef(null);

    // Split text into words
    const words = children.split(" ");

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                delay: i * 0.05, // Stagger effect
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9] as any, // Custom cubic-bezier
            },
        }),
    };

    return (
        <div ref={element} className={`overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-wrap"
            >
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={variants}
                        className="mr-[0.25em] inline-block"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}
