import Reveal from "@/components/Reveal";
import { Users, Heart, Check } from "lucide-react";
import { PiHorse } from "react-icons/pi";
import type { ReactNode } from "react";

const pIc = { size: 28, strokeWidth: 1.5 } as const;

const plans: { name: string; icon: ReactNode; price: number; unit: string; note?: string; popular: boolean; features: string[] }[] = [
    {
        name: "Индивидуальная прогулка",
        icon: <PiHorse size={28} />,
        price: 2900, unit: "руб.",
        popular: false,
        features: ["1 час верховой езды", "Инструктор в сопровождении", "Маршрут по Шуваловскому парку", "Пн–Вс, 12:00–20:00", "Макс. вес наездника 85 кг"],
    },
    {
        name: "Романтическая прогулка",
        icon: <Heart {...pIc} />,
        price: 5800, unit: "руб.", note: "за двух человек",
        popular: true,
        features: ["1 час верховой езды", "2 человека", "Инструктор в сопровождении", "Маршрут по Шуваловскому парку", "Пн–Вс, 12:00–20:00", "Макс. вес наездника 85 кг"],
    },
    {
        name: "Детская прогулка",
        icon: <Users {...pIc} />,
        price: 2900, unit: "руб.",
        popular: false,
        features: ["1 час верховой езды", "Инструктор в сопровождении", "Маршрут по Шуваловскому парку", "Пн–Вс, 12:00–20:00", "Макс. вес наездника 85 кг"],
    },
];

export default function Pricing() {
    return (
        <>
            <style>{`
                .prc-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
                    gap: 1.5rem; max-width: 960px; margin: 0 auto; align-items: center;
                }
                .prc-card {
                    border-radius: var(--radius); padding: 2rem; position: relative;
                    transition: box-shadow 0.3s ease;
                    display: flex; flex-direction: column;
                }
                .prc-card-default {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                }
                .prc-card-popular {
                    background: linear-gradient(145deg, #1E1A14, #2A2218);
                    border: 1px solid rgba(201,168,76,0.4);
                    box-shadow: 0 0 60px rgba(201,168,76,0.12), 0 24px 56px rgba(0,0,0,0.5);
                    padding: 2.75rem 2rem 2rem;
                    z-index: 1;
                }
                .prc-badge {
                    position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
                    background: linear-gradient(135deg, #9A7830, #C9A84C);
                    color: #0D0B09; padding: 0.28rem 1.1rem; border-radius: 2px;
                    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.18em;
                    text-transform: uppercase; white-space: nowrap;
                }
                .prc-top-line {
                    position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(to right, transparent, #C9A84C, transparent);
                    border-radius: 20px 20px 0 0;
                }
                .prc-divider-default { height: 1px; background: rgba(201,168,76,0.08); margin-bottom: 1.5rem; }
                .prc-divider-popular  { height: 1px; background: rgba(201,168,76,0.2);  margin-bottom: 1.5rem; }
                .prc-divider-default { height: 1px; background: rgba(201,168,76,0.07); margin-bottom: 1.5rem; }
                .prc-divider-popular  { height: 1px; background: rgba(201,168,76,0.2);  margin-bottom: 1.5rem; }
                .prc-feature { display: flex; align-items: center; gap: 0.7rem; font-size: 0.85rem; color: var(--text-secondary); }
            `}</style>

            <section id="pricing" className="section-pad" style={{ background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80vw", height: "80vw", background: "radial-gradient(circle, rgba(201,168,76,0.03), transparent 70%)", pointerEvents: "none" }} />

                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <Reveal><div className="section-label" style={{ justifyContent: "center" }}>Стоимость услуг</div></Reveal>
                    <Reveal delay={100}><h2 className="section-title">Прозрачные <strong>цены</strong></h2></Reveal>
                    <Reveal delay={200}><p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 400, margin: "1rem auto 0", lineHeight: 1.8 }}>Без скрытых платежей. Всё включено.</p></Reveal>
                </div>

                <div className="prc-grid">
                    {plans.map((p, i) => (
                        <Reveal key={p.name} delay={i * 100}>
                            <div className={`prc-card ${p.popular ? "prc-card-popular" : "prc-card-default"}`}>
                                {p.popular && <><div className="prc-badge">✦ Популярное</div><div className="prc-top-line" /></>}

                                <div style={{ marginBottom: "1.5rem" }}>
                                    <div style={{ color: p.popular ? "#C9A84C" : "var(--text-muted)", marginBottom: "0.75rem", display: "flex" }}>{p.icon}</div>
                                    <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: p.popular ? "#C9A84C" : "var(--text-muted)" }}>{p.name}</div>
                                </div>

                                <div style={{ marginBottom: "2rem" }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", flexWrap: "wrap" }}>
                                        <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem,6vw,3rem)", fontWeight: 600, color: p.popular ? "#C9A84C" : "var(--text-primary)", lineHeight: 1 }}>
                                            {p.price.toLocaleString("ru-RU")}
                                        </span>
                                        <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{p.unit}</span>
                                    </div>
                                    {p.note && <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.25rem", letterSpacing: "0.04em" }}>{p.note}</div>}
                                </div>

                                <div className={p.popular ? "prc-divider-popular" : "prc-divider-default"} />

                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                                    {p.features.map(f => (
                                        <li key={f} className="prc-feature">
                                            <Check size={13} strokeWidth={2} color="#C9A84C" style={{ flexShrink: 0 }} />{f}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className={p.popular ? "btn-gold" : "btn-outline"} style={{ width: "100%", justifyContent: "center", display: "flex", marginTop: "auto" }}>
                                    Выбрать
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={200}>
                    <p style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        * Обучение верховой езде от 3 500 руб/час. Фотосессии с лошадьми от 8 000 руб.
                    </p>
                </Reveal>
            </section>
        </>
    );
}
