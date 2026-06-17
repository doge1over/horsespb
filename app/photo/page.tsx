import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PhotoForm from "@/components/PhotoForm";
import { Phone, Clock, MapPin, Users, Camera, Check, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Фотосессии с лошадьми в Шуваловском парке — КСК Шуваловский",
    description: "Профессиональные фотосессии с лошадьми в Шуваловском парке Санкт-Петербурга. Индивидуальные и семейные. В стоимость входит работа фотографа и аренда лошади. От 8 000 руб.",
};

const sessions = [
    {
        tag: "Индивидуальная",
        title: "Фотосессия с лошадью",
        subtitle: "для одного",
        price: "8 000",
        details: [
            { Icon: Clock,  text: "Продолжительность — 1 час" },
            { Icon: Users,  text: "1 человек (+ 2 500 руб. за доп. человека)" },
            { Icon: MapPin, text: "Шуваловский парк" },
            { Icon: Camera, text: "Работа фотографа + аренда лошади" },
        ],
        note: null,
        featured: false,
    },
    {
        tag: "Семейная",
        title: "Семейная фотосессия",
        subtitle: "для двоих",
        price: "10 500",
        details: [
            { Icon: Clock,  text: "Продолжительность — 1 час" },
            { Icon: Users,  text: "2 человека" },
            { Icon: MapPin, text: "Шуваловский парк" },
            { Icon: Camera, text: "Фотограф + аренда 2-х лошадей" },
        ],
        note: "+ 1 900 руб. за каждую дополнительную лошадь",
        featured: true,
    },
] as const;

const steps = [
    {
        num: "01",
        title: "Позвоните администратору",
        text: "Согласуйте день и удобное время. Мы работаем ежедневно с 12:00 до 20:00.",
    },
    {
        num: "02",
        title: "Обсудите детали с фотографом",
        text: "Выберите образ: костюмированная, семейная, детская или персональная фотосессия. По вопросам одежды фотограф подскажет.",
    },
    {
        num: "03",
        title: "Приезжайте и снимайте",
        text: "Шуваловский парк создаст неповторимый фон — сосновый лес, большие пруды, красивейшие поместья и церкви.",
    },
] as const;

const tips = [
    {
        num: "01",
        title: "Как вести себя рядом с лошадью",
        text: "Большинство моделей допускают ошибки: совершают резкие движения, громко говорят или выражают явное недовольство животным. Лошадь чувствует настроение человека — спокойствие и мягкость гарантируют лучший результат.",
    },
    {
        num: "02",
        title: "Костюмированная фотосессия",
        text: "О проведении костюмированной съёмки необходимо сообщить заблаговременно, чтобы обсудить все детали мероприятия с фотографом и подготовить реквизит.",
    },
    {
        num: "03",
        title: "Особенности поведения лошади",
        text: "Лошадь — своенравное животное. Она будет постоянно перемещаться и не всегда принимать нужную позу. Это нормально — закладывайте запас времени на съёмку, и тогда удачный кадр обязательно получится.",
    },
] as const;

export default function PhotoPage() {
    return (
        <>
            <style>{`
                /* ── Hero ──────────────────────────────────────── */
                .pp-hero { padding-top: 10rem; background: var(--bg-primary); position: relative; overflow: hidden; }
                .pp-hero::after {
                    content: ''; position: absolute; inset: 0; pointer-events: none;
                    background:
                        radial-gradient(ellipse 60% 65% at 92% 20%, rgba(201,168,76,0.055) 0%, transparent 55%),
                        radial-gradient(ellipse 45% 55% at 0% 85%, rgba(201,168,76,0.03) 0%, transparent 50%);
                }
                .pp-badge {
                    display: inline-flex; align-items: center; gap: 0.6rem;
                    padding: 0.38rem 1rem; border-radius: 2px;
                    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.22);
                    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.26em;
                    text-transform: uppercase; color: var(--gold); margin-bottom: 2rem;
                }
                .pp-divider { width: 56px; height: 1px; background: rgba(201,168,76,0.22); margin: 2rem 0; }
                .pp-hero-stats {
                    display: flex; gap: 2.5rem; flex-wrap: wrap;
                    padding-top: 1.5rem; margin-top: 4rem;
                    border-top: 1px solid rgba(201,168,76,0.08);
                }
                .pp-stat-num { font-family: var(--font-heading); font-size: 2rem; font-weight: 600; color: var(--gold); line-height: 1; }
                .pp-stat-lbl { font-size: 0.67rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.3rem; }

                /* ── Session cards ─────────────────────────────── */
                .pp-cards-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }
                .pp-cards-grid > div { display: flex; flex-direction: column; }
                .pp-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; position: relative; overflow: hidden;
                    display: flex; flex-direction: column; flex: 1;
                    transition: border-color 0.3s, background 0.3s;
                }
                .pp-card:hover { border-color: rgba(201,168,76,0.22); background: #201D19; }
                .pp-card-featured { border-color: rgba(201,168,76,0.28); background: #1F1B15; }
                .pp-card-featured:hover { border-color: rgba(201,168,76,0.5); }
                .pp-card-top {
                    height: 2px;
                    background: linear-gradient(to right, transparent 5%, rgba(201,168,76,0.2) 40%, rgba(201,168,76,0.2) 60%, transparent 95%);
                }
                .pp-card-featured .pp-card-top {
                    background: linear-gradient(to right, transparent 5%, var(--gold) 40%, var(--gold) 60%, transparent 95%);
                }
                .pp-card-body { padding: 2rem; flex: 1; display: flex; flex-direction: column; }
                .pp-tag {
                    display: inline-block; margin-bottom: 1.25rem;
                    background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.18);
                    border-radius: 2px; padding: 0.18rem 0.65rem;
                    font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em;
                    text-transform: uppercase; color: var(--gold);
                }
                .pp-card-featured .pp-tag { background: rgba(201,168,76,0.14); border-color: rgba(201,168,76,0.38); }
                .pp-card-title {
                    font-family: var(--font-heading); font-size: 1.5rem; font-weight: 300;
                    line-height: 1.15; color: var(--text-primary); margin-bottom: 0.2rem;
                }
                .pp-card-sub { font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.6rem; }
                .pp-price-row { display: flex; align-items: baseline; gap: 0.4rem; margin-bottom: 1.5rem; }
                .pp-price { font-family: var(--font-heading); font-size: 2.7rem; font-weight: 600; color: var(--gold); line-height: 1; }
                .pp-price-unit { font-size: 0.78rem; color: var(--text-muted); }
                .pp-details { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; margin-bottom: 1.25rem; }
                .pp-detail { display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.84rem; color: var(--text-secondary); }
                .pp-detail-icon { color: var(--gold); opacity: 0.65; flex-shrink: 0; margin-top: 1px; }
                .pp-note {
                    font-size: 0.74rem; color: var(--text-muted);
                    background: rgba(201,168,76,0.04); border: 1px solid rgba(201,168,76,0.07);
                    border-radius: 2px; padding: 0.6rem 0.85rem; margin-bottom: 1.25rem;
                }
                .pp-schedule {
                    font-size: 0.72rem; color: var(--text-muted);
                    display: flex; align-items: center; gap: 0.4rem;
                    margin-bottom: 1.5rem;
                }
                .pp-schedule::before { content: '✦'; color: var(--gold); font-size: 0.42rem; opacity: 0.55; }
                .pp-cta-outline {
                    display: block; padding: 0.88rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; border-radius: 2px; text-decoration: none;
                    background: transparent; color: var(--text-primary);
                    border: 1px solid rgba(240,234,214,0.12); transition: all 0.3s;
                }
                .pp-cta-outline:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.04); }
                .pp-cta-gold {
                    display: block; padding: 0.9rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; border-radius: 2px; text-decoration: none;
                    background: linear-gradient(135deg, #9A7830, #C9A84C, #E8C96A, #C9A84C);
                    background-size: 200% 200%; background-position: 0% 50%;
                    color: #0D0B09; border: none; box-shadow: 0 4px 20px rgba(201,168,76,0.3);
                    transition: all 0.3s;
                }
                .pp-cta-gold:hover { background-position: 100% 50%; transform: translateY(-1px); box-shadow: 0 8px 32px rgba(201,168,76,0.45); }
                .pp-card-watermark {
                    position: absolute; bottom: -20px; right: -20px;
                    color: rgba(201,168,76,0.025); pointer-events: none;
                }

                /* ── Form wrap ─────────────────────────────────── */
                .pp-form-wrap {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; padding: 2.5rem;
                    position: relative; overflow: hidden;
                }
                .pp-form-top {
                    position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(to right, transparent, var(--gold), transparent);
                }

                /* ── Steps ─────────────────────────────────────── */
                .pp-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
                .pp-steps > div { display: flex; flex-direction: column; }
                .pp-step {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 2rem;
                    position: relative; overflow: hidden;
                    flex: 1;
                }
                .pp-step-num {
                    font-family: var(--font-heading); font-size: 4.5rem; font-weight: 700;
                    color: rgba(201,168,76,0.05); line-height: 1;
                    position: absolute; top: 0.5rem; right: 1rem;
                    pointer-events: none; user-select: none;
                }
                .pp-step-bar { width: 28px; height: 2px; background: rgba(201,168,76,0.35); margin-bottom: 1.1rem; }
                .pp-step-title {
                    font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.75rem;
                }
                .pp-step-text {
                    font-family: var(--font-prose); font-size: 0.86rem;
                    color: var(--text-secondary); line-height: 1.8;
                }

                /* ── Tips ──────────────────────────────────────── */
                .pp-tips-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
                .pp-tips-grid > div { display: flex; flex-direction: column; }
                .pp-tip {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 2rem;
                    position: relative; overflow: hidden;
                    transition: border-color 0.3s;
                    flex: 1;
                }
                .pp-tip:hover { border-color: rgba(201,168,76,0.2); }
                .pp-tip-num {
                    font-family: var(--font-heading); font-size: 4.5rem; font-weight: 700;
                    color: rgba(201,168,76,0.05); line-height: 1;
                    position: absolute; top: 0.5rem; right: 1rem;
                    pointer-events: none; user-select: none;
                }
                .pp-tip-bar { width: 28px; height: 2px; background: rgba(201,168,76,0.2); margin-bottom: 1.1rem; }
                .pp-tip-title {
                    font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.75rem;
                }
                .pp-tip-text {
                    font-family: var(--font-prose); font-size: 0.86rem;
                    color: var(--text-secondary); line-height: 1.8;
                }

                /* ── CTA bar ───────────────────────────────────── */
                .pp-cta-bar {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; padding: 2.75rem;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 2rem; flex-wrap: wrap;
                }

                /* ── Responsive ────────────────────────────────── */
                @media (max-width: 860px) {
                    .pp-steps { grid-template-columns: 1fr; }
                    .pp-tips-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 768px) {
                    .pp-hero { padding-top: 8rem; }
                    .pp-cards-grid { grid-template-columns: 1fr; }
                    .pp-cta-bar { flex-direction: column; text-align: center; }
                    .pp-hero-stats { gap: 1.5rem; margin-top: 3rem; }
                }
            `}</style>

            <Header />
            <main>

                {/* ── Hero ── */}
                <section className="section-pad pp-hero">
                    <Reveal>
                        <div className="pp-badge">
                            <Camera size={11} strokeWidth={1.5} />
                            Фотосессии · Шуваловский парк
                        </div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", maxWidth: 680 }}>
                            Фотосессии <strong>с лошадьми</strong> в Шуваловском парке
                        </h1>
                    </Reveal>
                    <div className="pp-divider" />
                    <Reveal delay={160}>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.88, maxWidth: 580 }}>
                            Потрясающий сосновый лес, большие пруды, красивейшие поместья и церкви —
                            такой пейзаж станет фоном для ваших снимков.
                            Работа фотографа и аренда лошади включены в стоимость.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
                            <a href="#signup" className="btn-gold">
                                <Camera size={14} strokeWidth={1.5} />
                                Заказать фотосессию
                            </a>
                            <a href="tel:+79523709696" className="btn-outline">
                                <Phone size={14} strokeWidth={1.5} />
                                +7 (952) 370-96-96
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={320}>
                        <div className="pp-hero-stats">
                            <div><div className="pp-stat-num">1 час</div><div className="pp-stat-lbl">Продолжительность</div></div>
                            <div><div className="pp-stat-num">8 000 ₽</div><div className="pp-stat-lbl">Индивидуальная</div></div>
                            <div><div className="pp-stat-num">10 500 ₽</div><div className="pp-stat-lbl">Семейная</div></div>
                        </div>
                    </Reveal>
                </section>

                {/* ── Session cards ── */}
                <section id="sessions" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Виды фотосессий</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Выберите <strong>формат</strong></h2>
                        </Reveal>
                    </div>
                    <div className="pp-cards-grid">
                        {sessions.map((s, i) => (
                            <Reveal key={s.tag} delay={i * 100}>
                                <div className={`pp-card ${s.featured ? "pp-card-featured" : ""}`}>
                                    <div className="pp-card-top" />
                                    <div className="pp-card-body">
                                        <div className="pp-tag">{s.tag}</div>
                                        <div className="pp-card-title">{s.title}</div>
                                        <div className="pp-card-sub">{s.subtitle}</div>
                                        <div className="pp-price-row">
                                            <span className="pp-price">{s.price}</span>
                                            <span className="pp-price-unit">руб.</span>
                                        </div>
                                        <ul className="pp-details">
                                            {s.details.map((d, j) => (
                                                <li key={j} className="pp-detail">
                                                    <d.Icon size={14} strokeWidth={1.5} className="pp-detail-icon" style={{ color: "var(--gold)", opacity: 0.65, flexShrink: 0, marginTop: 1 }} />
                                                    {d.text}
                                                </li>
                                            ))}
                                        </ul>
                                        {s.note && <div className="pp-note">{s.note}</div>}
                                        <div className="pp-schedule">Пн–Вс, с 12:00 до 20:00</div>
                                        <a href="#signup" className={s.featured ? "pp-cta-gold" : "pp-cta-outline"}>
                                            Заказать фотосессию
                                        </a>
                                    </div>
                                    <div className="pp-card-watermark">
                                        <Camera size={180} strokeWidth={0.4} />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Sign-up form ── */}
                <section id="signup" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Запись</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Закажите <strong>фотосессию</strong> сейчас</h2>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="pp-form-wrap">
                            <div className="pp-form-top" />
                            <PhotoForm />
                        </div>
                    </Reveal>
                </section>

                {/* ── How to start ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Процесс</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">С чего <strong>начать</strong></h2>
                        </Reveal>
                    </div>
                    <div className="pp-steps">
                        {steps.map((s, i) => (
                            <Reveal key={s.num} delay={i * 100}>
                                <div className="pp-step">
                                    <div className="pp-step-num">{s.num}</div>
                                    <div className="pp-step-bar" />
                                    <div className="pp-step-title">{s.title}</div>
                                    <p className="pp-step-text">{s.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Tips ── */}
                <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Советы</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Важные <strong>особенности</strong></h2>
                        </Reveal>
                    </div>
                    <div className="pp-tips-grid">
                        {tips.map((t, i) => (
                            <Reveal key={t.num} delay={i * 90}>
                                <div className="pp-tip">
                                    <div className="pp-tip-num">{t.num}</div>
                                    <div className="pp-tip-bar" />
                                    <div className="pp-tip-title">{t.title}</div>
                                    <p className="pp-tip-text">{t.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <Reveal>
                        <div className="pp-cta-bar">
                            <div>
                                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 300, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                                    Готовы к <strong>незабываемым снимкам</strong>?
                                </div>
                                <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                    Позвоните или оставьте заявку — согласуем дату и время.
                                </p>
                            </div>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <a href="tel:+79523709696" className="btn-gold">
                                    <Phone size={14} strokeWidth={1.5} />
                                    +7 (952) 370-96-96
                                </a>
                                <a href="#signup" className="btn-outline">Форма заявки</a>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
