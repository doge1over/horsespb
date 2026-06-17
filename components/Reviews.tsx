import Reveal from "@/components/Reveal";

const reviews = [
    { name: "Анастасия К.", date: "Ноябрь 2024", stars: 5, avatar: "А", color: "#8B4A6B", text: "Были с дочкой на детской прогулке — полный восторг! Инструктор очень терпеливый с детьми. Лошадка Дымка такая ласковая, дочь до сих пор вспоминает. Обязательно приедем ещё!" },
    { name: "Дмитрий В.",   date: "Октябрь 2024", stars: 5, avatar: "Д", color: "#4A6B8B", text: "Заказывал прогулку для двоих — жена была в восторге. Шуваловский парк осенью невероятно красив. Лошади ухоженные, инструкторы умелые. Фотки получились потрясающие!" },
    { name: "Елена М.",     date: "Сентябрь 2024", stars: 5, avatar: "Е", color: "#6B8B4A", text: "Снимались на фотосессию с лошадьми — это было нечто! Фотограф знает своё дело, лошади — настоящие красавцы. Снимки превзошли все ожидания. Всем советую!" },
];

export default function Reviews() {
    return (
        <>
            <style>{`
                .rev-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
                    gap: 1.25rem; margin-bottom: 2.5rem;
                }
                .rev-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: var(--radius); padding: 2rem; position: relative;
                    transition: border-color 0.3s;
                }
                .rev-card:hover { border-color: rgba(201,168,76,0.22); }
                .rev-quote {
                    position: absolute; top: 1rem; right: 1.5rem;
                    font-family: Georgia, serif; font-size: 4rem; line-height: 0.8;
                    color: rgba(201,168,76,0.15); font-weight: 700; user-select: none;
                }
                .rev-text {
                    font-family: var(--font-prose);
                    font-size: 0.9rem; color: var(--text-secondary);
                    line-height: 1.9; margin-bottom: 1.5rem; font-style: italic;
                }
            `}</style>

            <section id="reviews" className="section-pad" style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "2rem", right: "max(1.5rem, calc((100vw - 1200px) / 2))", fontFamily: "Georgia, serif", fontSize: "clamp(8rem,20vw,20rem)", lineHeight: 1, color: "rgba(201,168,76,0.04)", userSelect: "none", pointerEvents: "none", fontWeight: 700 }}>
                    "
                </div>

                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <Reveal><div className="section-label" style={{ justifyContent: "center" }}>Что говорят гости</div></Reveal>
                    <Reveal delay={100}><h2 className="section-title">Отзывы <strong>наших гостей</strong></h2></Reveal>
                    <Reveal delay={200}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
                            {"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#C9A84C", fontSize: "1rem" }}>{s}</span>)}
                            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginLeft: "0.25rem" }}>5.0 · Более 200 отзывов</span>
                        </div>
                    </Reveal>
                </div>

                <div className="rev-grid">
                    {reviews.map((r, i) => (
                        <Reveal key={r.name} delay={i * 100}>
                            <div className="rev-card">
                                <div className="rev-quote">"</div>
                                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                                    {Array.from({ length: r.stars }).map((_, i) => <span key={i} style={{ color: "#C9A84C", fontSize: "0.85rem" }}>★</span>)}
                                </div>
                                <p className="rev-text">"{r.text}"</p>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "white", flexShrink: 0 }}>{r.avatar}</div>
                                    <div>
                                        <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</div>
                                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{r.date}</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div style={{ textAlign: "center" }}>
                        <a href="https://vk.com/horsespb" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Читать все отзывы ВКонтакте →
                        </a>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
