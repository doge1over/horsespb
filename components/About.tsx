import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ShieldCheck, Heart, TreePine, Trophy } from "lucide-react";
import type { ReactNode } from "react";

const ic = { size: 17, strokeWidth: 1.5, color: "#C9A84C" } as const;

const features: { icon: ReactNode; title: string; text: string }[] = [
    { icon: <ShieldCheck {...ic} />, title: "Безопасность",      text: "Все инструкторы сертифицированы, лошади проверены и спокойны." },
    { icon: <Heart       {...ic} />, title: "Любовь к лошадям",  text: "Заботимся о каждой лошади. Счастливые животные — добрый нрав." },
    { icon: <TreePine    {...ic} />, title: "Природный антураж", text: "Живописные тропы Шуваловского парка в любое время года." },
    { icon: <Trophy      {...ic} />, title: "Опыт с 2012 года",  text: "За 10+ лет приняли тысячи гостей. Знаем как сделать незабываемо." },
];

export default function About() {
    return (
        <>
            <style>{`
                .abt-feat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
                    gap: 0.85rem;
                }
                .abt-feat-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: var(--radius); padding: 1.1rem;
                }
                .abt-feat-title {
                    font-family: var(--font-cormorant), Georgia, serif;
                    font-size: 0.95rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.35rem;
                }
                .abt-feat-text { font-family: var(--font-prose); font-size: 0.78rem; color: var(--text-secondary); line-height: 1.65; }
                .abt-corner {
                    position: absolute; bottom: -10px; left: -10px;
                    width: 80px; height: 80px;
                    border-left: 2px solid rgba(201,168,76,0.25);
                    border-bottom: 2px solid rgba(201,168,76,0.25);
                    border-bottom-left-radius: 8px; pointer-events: none;
                }
                .abt-gallery-link {
                    font-size: 0.8rem; color: var(--text-secondary);
                    text-decoration: underline; text-underline-offset: 4px;
                    text-decoration-color: rgba(154,139,118,0.4);
                    transition: color 0.2s;
                }
                .abt-gallery-link:hover { color: #C9A84C; }
            `}</style>

            <section id="about" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                <div className="grid-about">
                    {/* Left — images */}
                    <Reveal direction="left">
                        <div style={{ position: "relative" }}>
                            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
                                <Image
                                    src="/gallery/ka9nYMvkByczUvDqPZiwfTYHCs4sJoh9jJI9cRFk5996RM_OnDFevMWypyBfyNVpFOcR3-caqe9NIUFGYnfABnYv.jpg"
                                    alt="Верховая езда в Шуваловском парке"
                                    fill style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(12,11,9,0.6))" }} />
                            </div>

                            <div className="about-float-badge">
                                <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>5000+</div>
                                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A8B76", marginTop: "0.25rem" }}>Счастливых гостей</div>
                            </div>

                            <div className="abt-corner" />
                        </div>
                    </Reveal>

                    {/* Right — text */}
                    <Reveal direction="right">
                        <div className="section-label">О конном клубе</div>
                        <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                            Мы создаём<br /><strong>воспоминания</strong><br />на всю жизнь
                        </h2>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "1.25rem" }}>
                            КСК «Шуваловский» — семейный конный клуб в самом сердце одноимённого парка.
                            С 2012 года принимаем гостей всех возрастов — от малышей до поклонников верховой езды со стажем.
                        </p>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "2.5rem" }}>
                            Лошади подбираются под характер каждого всадника. Работаем круглый год —
                            зимние прогулки по заснеженному парку это отдельный вид магии.
                        </p>

                        <div className="abt-feat-grid">
                            {features.map(f => (
                                <div key={f.title} className="abt-feat-card">
                                    <div style={{ marginBottom: "0.5rem", display: "flex" }}>{f.icon}</div>
                                    <div className="abt-feat-title">{f.title}</div>
                                    <div className="abt-feat-text">{f.text}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                            <a href="#contact" className="btn-gold">Познакомиться с клубом</a>
                            <a href="#gallery" className="abt-gallery-link">
                                Смотреть галерею →
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
