"use client";

import { useRef, useState, useEffect, ReactNode, useCallback } from "react";

const callbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const cb = callbacks.get(entry.target);
                        if (cb) {
                            cb();
                            callbacks.delete(entry.target);
                            sharedObserver?.unobserve(entry.target);
                        }
                    }
                }
            },
            { threshold: 0.1 }
        );
    }
    return sharedObserver;
}

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
}

const transforms: Record<string, string> = {
    up:    "translateY(36px)",
    left:  "translateX(-36px)",
    right: "translateX(36px)",
    scale: "scale(0.97)",
};

export default function Reveal({ children, delay = 0, direction = "up" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const show = useCallback(() => setVisible(true), []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = getObserver();
        callbacks.set(el, show);
        obs.observe(el);
        return () => { callbacks.delete(el); obs.unobserve(el); };
    }, [show]);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : transforms[direction],
                transition: `all 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                willChange: visible ? "auto" : "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}
