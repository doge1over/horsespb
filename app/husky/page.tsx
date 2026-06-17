import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Phone, Clock, MapPin, Users, Calendar, Gift, Camera, Check, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Катание на хаски в Санкт-Петербурге — КСК Шуваловский",
    description: "Катание на собачьих упряжках зимой в Парголово. Пять трасс от 500 м до 2 км. Запись по телефону. От 2 300 руб.",
};

const routes = [
    {
        label: "Короткая трасса",
        duration: "10 мин",
        distance: "500 м",
        price: "2 300",
    },
    {
        label: "Средняя трасса",
        duration: "15–20 мин",
        distance: "1 км",
        price: "3 000",
        featured: true,
    },
    {
        label: "Длинная трасса",
        duration: "25–30 мин",
        distance: "2 км",
        price: "5 000",
    },
] as const;

const dogFeatures = [
    "Умны, дисциплинированы, слушаются каюра",
    "Взращены в заботе и хороших условиях",
    "Верны и преданны человеку",
    "Один из самых дружелюбных пород",
] as const;

const infoCards = [
    {
        Icon: Calendar,
        title: "7 дней в неделю",
        text: "Работаем без выходных в зимний сезон. Предварительная запись обязательна.",
    },
    {
        Icon: Users,
        title: "1 человек + инструктор",
        text: "В каждой упряжке один гость и инструктор-каюр. Дети до 2 лет — на руках у родителей.",
    },
    {
        Icon: MapPin,
        title: "5 трасс в Парголово",
        text: "На выбор пять маршрутов от 500 м до 2 км по живописным дорожкам парка.",
    },
    {
        Icon: Phone,
        title: "Запись по телефону",
        text: "Принимаем заявки по телефону ежедневно. Подберём удобное время.",
    },
] as const;

export default function HuskyPage() {
    return (
        <>
            <style>{`
                /* ── Hero ──────────────────────────────────────── */
                .hk-hero { padding-top: 10rem; background: var(--bg-primary); position: relative; overflow: hidden; }
                .hk-hero::after {
                    content: '';
                    position: absolute; inset: 0; pointer-events: none;
                    background:
                        radial-gradient(ellipse 55% 65% at 90% 25%, rgba(160,200,240,0.035) 0%, transparent 55%),
                        radial-gradient(ellipse 50% 60% at 0% 80%, rgba(201,168,76,0.03) 0%, transparent 50%);
                }
                .hk-badge {
                    display: inline-flex; align-items: center; gap: 0.6rem;
                    padding: 0.38rem 1rem; border-radius: 2px;
                    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.22);
                    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.26em;
                    text-transform: uppercase; color: var(--gold); margin-bottom: 2rem;
                }
                .hk-hero-divider { width: 56px; height: 1px; background: rgba(201,168,76,0.22); margin: 2rem 0; }
                .hk-hero-stats {
                    display: flex; gap: 2.5rem; flex-wrap: wrap;
                    padding-top: 1.5rem; margin-top: 4rem;
                    border-top: 1px solid rgba(201,168,76,0.08);
                }
                .hk-stat-num { font-family: var(--font-heading); font-size: 2rem; font-weight: 600; color: var(--gold); line-height: 1; }
                .hk-stat-lbl { font-size: 0.67rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.3rem; }

                /* ── About ─────────────────────────────────────── */
                .hk-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
                .hk-img-wrap { border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 4/5; position: relative; }
                .hk-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .hk-img-wrap::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(to bottom, transparent 55%, rgba(12,11,9,0.5));
                }
                .hk-corner {
                    position: absolute; bottom: -10px; right: -10px;
                    width: 70px; height: 70px;
                    border-right: 2px solid rgba(201,168,76,0.22);
                    border-bottom: 2px solid rgba(201,168,76,0.22);
                    border-bottom-right-radius: 8px; pointer-events: none;
                }
                .hk-features { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
                .hk-feature { display: flex; align-items: center; gap: 0.65rem; font-size: 0.875rem; color: var(--text-secondary); }
                .hk-check {
                    width: 16px; height: 16px; flex-shrink: 0; border-radius: 50%;
                    background: rgba(201,168,76,0.09); border: 1px solid rgba(201,168,76,0.26);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── Routes ────────────────────────────────────── */
                .hk-routes-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }
                /* equal height */
                .hk-routes-grid > div { display: flex; flex-direction: column; }
                .hk-route {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; position: relative; overflow: hidden;
                    display: flex; flex-direction: column; flex: 1;
                    transition: border-color 0.3s, background 0.3s;
                }
                .hk-route:hover { border-color: rgba(201,168,76,0.22); background: #201D19; }
                .hk-route-featured { border-color: rgba(201,168,76,0.28); background: #1F1B15; }
                .hk-route-featured:hover { border-color: rgba(201,168,76,0.5); }
                .hk-route-top {
                    height: 2px;
                    background: linear-gradient(to right, transparent 5%, rgba(201,168,76,0.2) 40%, rgba(201,168,76,0.2) 60%, transparent 95%);
                }
                .hk-route-featured .hk-route-top {
                    background: linear-gradient(to right, transparent 5%, var(--gold) 40%, var(--gold) 60%, transparent 95%);
                }
                .hk-route-body { padding: 2rem; flex: 1; display: flex; flex-direction: column; }
                .hk-route-label {
                    font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em;
                    text-transform: uppercase; color: var(--gold);
                    background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.18);
                    border-radius: 2px; padding: 0.18rem 0.65rem;
                    display: inline-block; margin-bottom: 1.25rem;
                }
                .hk-route-featured .hk-route-label { background: rgba(201,168,76,0.14); border-color: rgba(201,168,76,0.38); }
                .hk-route-meta { display: flex; flex-direction: column; gap: 0.65rem; flex: 1; margin-bottom: 1.75rem; }
                .hk-route-row { display: flex; align-items: center; gap: 0.65rem; font-size: 0.875rem; color: var(--text-secondary); }
                .hk-route-row-icon { color: var(--gold); opacity: 0.7; flex-shrink: 0; }
                .hk-divider { height: 1px; background: rgba(201,168,76,0.07); margin-bottom: 1.5rem; }
                .hk-price-row { display: flex; align-items: baseline; gap: 0.4rem; margin-bottom: 0.25rem; }
                .hk-price {
                    font-family: var(--font-heading); font-size: 2.6rem; font-weight: 600;
                    color: var(--gold); line-height: 1;
                }
                .hk-price-unit { font-size: 0.78rem; color: var(--text-muted); }
                .hk-route-people { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1.5rem; }
                .hk-cta-outline {
                    display: block; padding: 0.88rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; border-radius: 2px; text-decoration: none;
                    background: transparent; color: var(--text-primary);
                    border: 1px solid rgba(240,234,214,0.12); transition: all 0.3s;
                }
                .hk-cta-outline:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.04); }
                .hk-cta-gold {
                    display: block; padding: 0.9rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; border-radius: 2px; text-decoration: none;
                    background: linear-gradient(135deg, #9A7830, #C9A84C, #E8C96A, #C9A84C);
                    background-size: 200% 200%; background-position: 0% 50%;
                    color: #0D0B09; border: none; box-shadow: 0 4px 20px rgba(201,168,76,0.3);
                    transition: all 0.3s;
                }
                .hk-cta-gold:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 32px rgba(201,168,76,0.45); }
                .hk-route-bg-num {
                    position: absolute; bottom: -20px; right: -10px;
                    font-family: var(--font-heading); font-size: 7rem; font-weight: 700;
                    color: rgba(201,168,76,0.03); line-height: 1;
                    pointer-events: none; user-select: none;
                }

                /* ── Info cards ────────────────────────────────── */
                .hk-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
                    gap: 1.25rem;
                }
                .hk-info-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 1.75rem;
                    transition: border-color 0.3s;
                }
                .hk-info-card:hover { border-color: rgba(201,168,76,0.2); }
                .hk-info-icon {
                    width: 44px; height: 44px; border-radius: 6px;
                    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.1);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--gold); margin-bottom: 1.1rem;
                    transition: background 0.3s, border-color 0.3s;
                }
                .hk-info-card:hover .hk-info-icon { background: rgba(201,168,76,0.12); border-color: rgba(201,168,76,0.28); }
                .hk-info-title { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; }
                .hk-info-text { font-family: var(--font-prose); font-size: 0.83rem; color: var(--text-secondary); line-height: 1.75; }

                /* ── Extras ────────────────────────────────────── */
                .hk-extras-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; max-width: 760px; margin: 0 auto; }
                .hk-extra {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 1.75rem;
                    display: flex; align-items: flex-start; gap: 1rem;
                    transition: border-color 0.3s;
                }
                .hk-extra:hover { border-color: rgba(201,168,76,0.2); }
                .hk-extra-icon { color: var(--gold); flex-shrink: 0; margin-top: 2px; }

                /* ── CTA bar ───────────────────────────────────── */
                .hk-cta-bar {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; padding: 2.75rem;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 2rem; flex-wrap: wrap;
                }

                /* ── Responsive ────────────────────────────────── */
                @media (max-width: 900px) {
                    .hk-routes-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
                }
                @media (max-width: 768px) {
                    .hk-hero { padding-top: 8rem; }
                    .hk-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
                    .hk-img-wrap { aspect-ratio: 16/9; }
                    .hk-extras-grid { grid-template-columns: 1fr; max-width: 100%; }
                    .hk-cta-bar { flex-direction: column; text-align: center; }
                }
                @media (max-width: 600px) {
                    .hk-routes-grid { max-width: 100%; }
                    .hk-hero-stats { gap: 1.5rem; margin-top: 3rem; }
                }
            `}</style>

            <Header />
            <main>

                {/* ── Hero ── */}
                <section className="section-pad hk-hero">
                    <Reveal>
                        <div className="hk-badge">Зимний сезон · Парголово</div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", maxWidth: 680 }}>
                            Катание на <strong>хаски</strong> в Санкт-Петербурге
                        </h1>
                    </Reveal>
                    <div className="hk-hero-divider" />
                    <Reveal delay={160}>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.88, maxWidth: 580 }}>
                            Разнообразьте свободное время в выходные — катание на собачьих упряжках
                            в Парголово в компании одних из самых дружелюбных собак на свете.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
                            <a href="tel:+79523709696" className="btn-gold">
                                <Phone size={14} strokeWidth={1.5} />
                                Записаться по телефону
                            </a>
                            <a href="#routes" className="btn-outline">Посмотреть трассы</a>
                        </div>
                    </Reveal>
                    <Reveal delay={320}>
                        <div className="hk-hero-stats">
                            <div><div className="hk-stat-num">5</div><div className="hk-stat-lbl">Трасс на выбор</div></div>
                            <div><div className="hk-stat-num">7 дней</div><div className="hk-stat-lbl">Работаем без выходных</div></div>
                            <div><div className="hk-stat-num">2 300 ₽</div><div className="hk-stat-lbl">Минимальная цена</div></div>
                        </div>
                    </Reveal>
                </section>

                {/* ── About ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div className="hk-about-grid">
                        <Reveal direction="left">
                            <div style={{ position: "relative" }}>
                                <div className="hk-img-wrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="https://images.unsplash.com/photo-1547561017-9e5f1b8f0e79?w=800&auto=format&fit=crop&q=85"
                                        alt="Катание на хаски в Парголово"
                                    />
                                </div>
                                <div className="hk-corner" />
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div className="section-label">О наших хаски</div>
                            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                                Верные и <strong>преданные</strong> компаньоны
                            </h2>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "1.25rem" }}>
                                Наши собаки умны, дисциплинированы и всегда слушаются команд каюра.
                                Они взращены в заботе, внимании и хороших условиях.
                            </p>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "2.5rem" }}>
                                Отличительная черта наших хаски — верность и преданность человеку.
                                Общение с этими животными оставит тёплые впечатления надолго.
                            </p>
                            <ul className="hk-features">
                                {dogFeatures.map(f => (
                                    <li key={f} className="hk-feature">
                                        <div className="hk-check">
                                            <Check size={9} strokeWidth={2.5} color="#C9A84C" />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                {/* ── Routes ── */}
                <section id="routes" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Трассы и цены</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Выберите <strong>маршрут</strong></h2>
                        </Reveal>
                        <Reveal delay={180}>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: 460, margin: "1rem auto 0", lineHeight: 1.8 }}>
                                В упряжке едет один гость и инструктор-каюр. Пять трасс
                                от&nbsp;500&nbsp;м до&nbsp;2&nbsp;км.
                            </p>
                        </Reveal>
                    </div>
                    <div className="hk-routes-grid">
                        {routes.map((r, i) => (
                            <Reveal key={r.label} delay={i * 100}>
                                <div className={`hk-route ${"featured" in r && r.featured ? "hk-route-featured" : ""}`}>
                                    <div className="hk-route-top" />
                                    <div className="hk-route-body">
                                        <div className="hk-route-label">{r.label}</div>
                                        <div className="hk-route-meta">
                                            <div className="hk-route-row">
                                                <Clock size={14} strokeWidth={1.5} className="hk-route-row-icon" style={{ color: "var(--gold)", opacity: 0.7, flexShrink: 0 }} />
                                                {r.duration}
                                            </div>
                                            <div className="hk-route-row">
                                                <MapPin size={14} strokeWidth={1.5} style={{ color: "var(--gold)", opacity: 0.7, flexShrink: 0 }} />
                                                {r.distance}
                                            </div>
                                            <div className="hk-route-row">
                                                <Users size={14} strokeWidth={1.5} style={{ color: "var(--gold)", opacity: 0.7, flexShrink: 0 }} />
                                                1 человек + инструктор
                                            </div>
                                        </div>
                                        <div className="hk-divider" />
                                        <div className="hk-price-row">
                                            <span className="hk-price">{r.price}</span>
                                            <span className="hk-price-unit">руб.</span>
                                        </div>
                                        <a
                                            href="tel:+79523709696"
                                            className={"featured" in r && r.featured ? "hk-cta-gold" : "hk-cta-outline"}
                                            style={{ marginTop: "1.5rem" }}
                                        >
                                            Записаться
                                        </a>
                                    </div>
                                    <div className="hk-route-bg-num">{i + 1}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Info ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Важно знать</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Как <strong>подготовиться</strong></h2>
                        </Reveal>
                    </div>
                    <div className="hk-info-grid">
                        {infoCards.map((c, i) => (
                            <Reveal key={c.title} delay={i * 80}>
                                <div className="hk-info-card">
                                    <div className="hk-info-icon"><c.Icon size={20} strokeWidth={1.5} /></div>
                                    <div className="hk-info-title">{c.title}</div>
                                    <div className="hk-info-text">{c.text}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Extras ── */}
                <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Дополнительно</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Также <strong>доступно</strong></h2>
                        </Reveal>
                    </div>
                    <div className="hk-extras-grid">
                        <Reveal>
                            <div className="hk-extra">
                                <Gift size={22} strokeWidth={1.5} className="hk-extra-icon" />
                                <div>
                                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                                        Подарочные сертификаты
                                    </div>
                                    <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                                        Подарите катание на хаски близким. Доставка в день заказа.
                                    </p>
                                    <a href="/certificates" style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                        Выбрать сертификат →
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div className="hk-extra">
                                <Camera size={22} strokeWidth={1.5} className="hk-extra-icon" />
                                <div>
                                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                                        Фотосессии
                                    </div>
                                    <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                                        Профессиональные снимки с хаски в зимнем парке. Уточняйте при записи.
                                    </p>
                                    <a href="tel:+79523709696" style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                        Узнать подробнее →
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <Reveal>
                        <div className="hk-cta-bar">
                            <div>
                                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 300, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                                    Готовы к <strong>незабываемой прогулке</strong>?
                                </div>
                                <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                    Запись обязательна — звоните в любой день.
                                </p>
                            </div>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <a href="tel:+79523709696" className="btn-gold">
                                    <Phone size={14} strokeWidth={1.5} />
                                    +7 (952) 370-96-96
                                </a>
                                <a href="#routes" className="btn-outline">Выбрать трассу</a>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
