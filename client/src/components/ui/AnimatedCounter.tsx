import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export default function AnimatedCounter({
    end,
    suffix = "",
    duration = 2000,
    className = ""
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);

                        let startTime: number | null = null;

                        const animate = (currentTime: number) => {
                            if (!startTime) startTime = currentTime;
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Easing function for smooth deceleration
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                            setCount(Math.floor(easeOutQuart * end));

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                setCount(end); // Ensure it ends at exact value
                            }
                        };

                        requestAnimationFrame(animate);
                    }
                });
            },
            { threshold: 0.5, rootMargin: "0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
}
