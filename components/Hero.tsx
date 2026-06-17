"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
    { value: "10+",   label: "лет работы" },
    { value: "5000+", label: "довольных гостей" },
    { value: "20",    label: "лошадей" },
    { value: "3",     label: "маршрута" },
];

export default function Hero() {
    const bgRef      = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const t = setTimeout(() => {
            sectionRef.current?.classList.add("hero-ready");
        }, 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <style>{`
                .hero-section {
                    position: relative; height: 100vh; min-height: 600px; overflow: hidden;
                }

                /* Three-layer overlay: cinematic split + bottom fade + gold glow */
                .hero-ov-split  {
                    position: absolute; inset: 0;
                    background: linear-gradient(108deg,
                        rgba(13,11,9,0.92) 0%,
                        rgba(13,11,9,0.7)  42%,
                        rgba(13,11,9,0.2)  100%);
                }
                .hero-ov-bottom {
                    position: absolute; inset: 0;
                    background: linear-gradient(to bottom,
                        transparent 52%,
                        rgba(13,11,9,0.55) 76%,
                        #0D0B09 100%);
                }
                .hero-ov-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 68% 38%, rgba(201,168,76,0.052), transparent 60%);
                }

                /* Content wrapper */
                .hero-content {
                    position: relative; height: 100%; display: flex; flex-direction: column;
                    justify-content: center;
                    padding: 80px max(2.5rem, calc((100vw - 1200px) / 2)) 152px;
                }

                /* ── Eyebrow ── */
                .hero-eyebrow {
                    display: inline-flex; align-items: center; gap: 0.8rem;
                    margin-bottom: 1.5rem;
                    opacity: 0; transform: translateY(14px);
                    transition: opacity 0s, transform 0s;
                }
                .hero-ready .hero-eyebrow {
                    opacity: 1; transform: translateY(0);
                    transition: opacity 0.85s ease 0.04s, transform 0.85s ease 0.04s;
                }
                .hero-eyebrow-rule {
                    width: 24px; height: 1px; background: #C9A84C; opacity: 0.6; flex-shrink: 0;
                }
                .hero-eyebrow-text {
                    font-family: var(--font-body);
                    font-size: clamp(0.56rem, 1.8vw, 0.64rem); letter-spacing: 0.32em;
                    text-transform: uppercase; color: #C9A84C; font-weight: 600;
                }

                /* ── H1 mask-reveal ── */
                .hero-h1 {
                    font-family: var(--font-cormorant), Georgia, serif;
                    font-size: clamp(2.8rem, 8.5vw, 5.8rem);
                    font-weight: 300; line-height: 1.05;
                    color: #F0EAD6; margin-bottom: 0;
                }
                .hero-line {
                    display: block;
                    overflow: hidden;
                    padding-bottom: 0.07em;
                }
                .hero-line-inner {
                    display: block;
                    transform: translateY(112%);
                    transition: transform 0s;
                }
                .hero-ready .hero-line-inner {
                    transform: translateY(0);
                    transition: transform 1.05s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* ── Subtitle ── */
                .hero-sub-wrap {
                    margin-top: 1.5rem;
                    opacity: 0; transform: translateY(12px);
                    transition: opacity 0s, transform 0s;
                }
                .hero-ready .hero-sub-wrap {
                    opacity: 1; transform: translateY(0);
                    transition: opacity 0.85s ease 0.72s, transform 0.85s ease 0.72s;
                }
                .hero-sub {
                    font-family: var(--font-prose);
                    font-size: clamp(0.875rem, 2.4vw, 1rem); font-weight: 400;
                    color: #8F8270; max-width: 440px; line-height: 1.9;
                    margin-bottom: 2.25rem; letter-spacing: 0.01em;
                }

                /* ── CTAs ── */
                .hero-btns {
                    display: flex; gap: 1rem; flex-wrap: wrap;
                    opacity: 0; transform: translateY(12px);
                    transition: opacity 0s, transform 0s;
                }
                .hero-ready .hero-btns {
                    opacity: 1; transform: translateY(0);
                    transition: opacity 0.85s ease 0.92s, transform 0.85s ease 0.92s;
                }

                @media (max-width: 768px) {
                    .hero-content { padding: 72px 1.5rem 160px; }
                    .hero-scroll-hint { display: none; }
                    .hero-bg-img { object-position: 70% 30% !important; }
                }
                @media (max-width: 600px) {
                    .hero-btns .btn-gold,
                    .hero-btns .btn-outline { width: 100%; justify-content: center; }
                }
            `}</style>

            <section className="hero-section" ref={sectionRef}>
                {/* Parallax photo */}
                <div ref={bgRef} style={{ position: "absolute", inset: "-15%", willChange: "transform" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&auto=format&fit=crop&q=85"
                        alt="Лошадь"
                        fill
                        className="hero-bg-img"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                        priority
                    />
                </div>

                <div className="hero-ov-split" />
                <div className="hero-ov-bottom" />
                <div className="hero-ov-glow" />

                <div className="hero-content">
                    <div style={{ maxWidth: 740 }}>
                        {/* Location badge */}
                        <div className="hero-eyebrow">
                            <span className="hero-eyebrow-rule" />
                            <span className="hero-eyebrow-text">Санкт-Петербург · Парголово · С 2012 года</span>
                        </div>

                        {/* Theatrical heading — each line slides up from a mask */}
                        <h1 className="hero-h1">
                            <span className="hero-line">
                                <span className="hero-line-inner" style={{ transitionDelay: "0.1s" }}>
                                    Конные прогулки
                                </span>
                            </span>
                            <span className="hero-line">
                                <span className="hero-line-inner" style={{ transitionDelay: "0.26s", fontStyle: "italic", color: "#C9A84C" }}>
                                    в сердце
                                </span>
                            </span>
                            <span className="hero-line">
                                <span className="hero-line-inner" style={{ transitionDelay: "0.42s", fontWeight: 600 }}>
                                    Шуваловского
                                </span>
                            </span>
                            <span className="hero-line">
                                <span className="hero-line-inner" style={{ transitionDelay: "0.58s" }}>
                                    парка
                                </span>
                            </span>
                        </h1>

                        {/* Subtitle + CTAs — fade after heading */}
                        <div className="hero-sub-wrap">
                            <p className="hero-sub">
                                Незабываемые впечатления для всей семьи. Опытные инструкторы, ухоженные лошади
                                и живописные маршруты по одному из красивейших парков Петербурга.
                            </p>
                            <div className="hero-btns">
                                <a href="#contact" className="btn-gold">Записаться на прогулку →</a>
                                <a href="#services" className="btn-outline">Наши услуги</a>
                            </div>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div className="hero-stats-bar">
                        {stats.map((s, i) => (
                            <div key={s.label} style={{
                                flex: 1, padding: "1.1rem 0.75rem", textAlign: "center",
                                borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.09)" : "none",
                            }}>
                                <div style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontSize: "clamp(1.4rem,4vw,2rem)", fontWeight: 600,
                                    color: "#C9A84C", lineHeight: 1, marginBottom: "0.25rem",
                                }}>
                                    {s.value}
                                </div>
                                <div style={{
                                    fontSize: "clamp(0.58rem,1.4vw,0.68rem)", letterSpacing: "0.1em",
                                    textTransform: "uppercase", color: "#7A6E5C",
                                }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll hint */}
                    <div className="hero-scroll-hint">
                        <span style={{
                            fontSize: "0.58rem", letterSpacing: "0.22em",
                            textTransform: "uppercase", color: "#4A4035", writingMode: "vertical-rl",
                        }}>
                            Прокрутите вниз
                        </span>
                        <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, #4A4035, transparent)" }} />
                    </div>
                </div>
            </section>
        </>
    );
}
