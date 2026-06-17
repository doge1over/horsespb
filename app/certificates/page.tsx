import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Gift, MapPin, Mail, Truck, CreditCard, Check, Clock, Users, Calendar, Star, Phone } from "lucide-react";
import { PiHorse } from "react-icons/pi";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Подарочные сертификаты на конные прогулки — КСК Шуваловский",
    description: "Подарочный сертификат на конную прогулку или обучение верховой езде в Шуваловском парке. Доставка в день заказа. От 2 900 руб.",
};

const certificates = [
    {
        tag: "Популярное",
        title: "Индивидуальная конная прогулка",
        price: "2 900",
        unit: "руб.",
        features: [
            "1 час верховой езды",
            "Для 1 человека",
            "Действует 3 месяца",
            "Личный инструктор",
            "Экипировка включена",
        ],
        addon: "+ 5 500 руб. — Фотосессия с лошадьми",
        cta: "Заказать сертификат",
        featured: false,
    },
    {
        tag: "Романтика",
        title: "Романтическая прогулка для двоих",
        price: "5 800",
        unit: "руб.",
        features: [
            "1 час верховой езды",
            "Для двух человек",
            "Действует 3 месяца",
            "2 инструктора",
            "Живописные маршруты",
        ],
        addon: "+ 5 500 руб. — Фотосессия с лошадьми",
        cta: "Заказать сертификат",
        featured: true,
    },
    {
        tag: "Обучение",
        title: "Обучение верховой езде",
        price: "3 500",
        priceTo: "100 000",
        unit: "руб.",
        tiers: [
            { label: "1 час", price: "3 500" },
            { label: "4 ч / месяц", price: "11 000" },
            { label: "8 ч / месяц", price: "18 000" },
            { label: "20 ч / месяц", price: "45 000" },
            { label: "50 ч / год", price: "80 000" },
            { label: "100 ч / год", price: "100 000" },
        ],
        cta: "Заказать сертификат",
        featured: false,
    },
] as const;

const deliveryMethods = [
    {
        Icon: Truck,
        title: "Курьерская доставка",
        desc: "Доставим сертификат в любую точку Санкт-Петербурга в день заказа.",
        note: "400 руб. по городу",
    },
    {
        Icon: MapPin,
        title: "Самовывоз",
        desc: "Получите сертификат лично по адресу: Каменноостровский просп., д. 26-28.",
        note: "Будние дни, 10:00–18:00",
    },
    {
        Icon: Mail,
        title: "На электронную почту",
        desc: "Пришлём красиво оформленный PDF-сертификат в течение 10–15 минут после оплаты.",
        note: "Бесплатно · мгновенно",
    },
] as const;

const reviews = [
    {
        name: "Елена Смирнова",
        cert: "Индивидуальная прогулка",
        rating: 5,
        text: "Купила сертификат мужу на день рождения. Он был в восторге — сказал, что это лучший подарок за несколько лет. Лошадь досталась очень спокойная и красивая, инструктор всё объяснил. Спасибо!",
    },
    {
        name: "Дмитрий Козлов",
        cert: "Романтическая прогулка",
        rating: 5,
        text: "Взял романтический сертификат для подруги. Прогулка прошла потрясающе — Шуваловский парк осенью выглядит сказочно. Добавили фотосессию и ни капли не пожалели, снимки получились невероятные.",
    },
    {
        name: "Ирина Петрова",
        cert: "Индивидуальная прогулка",
        rating: 5,
        text: "Дочке исполнялось 8 лет, купила сертификат как главный подарок. Ребёнок был счастлив! Лошади там добрые, персонал очень внимательный. Уже думаем брать курс обучения.",
    },
    {
        name: "Алексей Новиков",
        cert: "Обучение верховой езде",
        rating: 5,
        text: "Взял сертификат на курс обучения — 8 часов в месяц. Результат превзошёл ожидания: тренер работает очень профессионально, техника посадки поставлена с первого занятия. Продолжаю заниматься.",
    },
    {
        name: "Мария Волкова",
        cert: "Романтическая прогулка",
        rating: 5,
        text: "Сделала сюрприз родителям — они никогда не ездили верхом. Оба сказали, что это незабываемо. Доставку оформила за день до и всё пришло вовремя, красиво оформлено. Буду советовать всем.",
    },
] as const;

export default function CertificatesPage() {
    return (
        <>
            <style>{`
                /* ── Hero ──────────────────────────────────────── */
                .ch-hero {
                    padding-top: 10rem;
                    background: var(--bg-primary);
                    position: relative; overflow: hidden;
                }
                .ch-hero::after {
                    content: '';
                    position: absolute; inset: 0;
                    background:
                        radial-gradient(ellipse 55% 70% at 85% 40%, rgba(201,168,76,0.055) 0%, transparent 55%),
                        radial-gradient(ellipse 40% 50% at 10% 80%, rgba(201,168,76,0.025) 0%, transparent 50%);
                    pointer-events: none;
                }
                .ch-badge {
                    display: inline-flex; align-items: center; gap: 0.6rem;
                    padding: 0.38rem 1rem;
                    background: rgba(201,168,76,0.07);
                    border: 1px solid rgba(201,168,76,0.22);
                    border-radius: 2px;
                    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.26em;
                    text-transform: uppercase; color: var(--gold);
                    margin-bottom: 2rem;
                }
                .ch-hero-divider {
                    width: 56px; height: 1px; background: rgba(201,168,76,0.22); margin: 2rem 0;
                }
                .ch-hero-actions {
                    display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2.5rem;
                }
                .ch-hero-stat {
                    padding: 1.5rem 0; border-top: 1px solid rgba(201,168,76,0.08);
                    display: flex; gap: 3rem; flex-wrap: wrap; margin-top: 4rem;
                }
                .ch-stat-num {
                    font-family: var(--font-heading); font-size: 2rem; font-weight: 600;
                    color: var(--gold); line-height: 1;
                }
                .ch-stat-label {
                    font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
                    color: var(--text-muted); margin-top: 0.3rem;
                }

                /* ── Certificate Cards ─────────────────────────── */
                .ch-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
                    gap: 1.25rem;
                }
                /* Reveal wrapper stretches to full row height */
                .ch-cards-grid > div { display: flex; flex-direction: column; }
                .ch-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px;
                    position: relative; overflow: hidden;
                    display: flex; flex-direction: column;
                    transition: border-color 0.3s, background 0.3s;
                    flex: 1;
                }
                .ch-card:hover { border-color: rgba(201,168,76,0.22); background: #201D19; }
                .ch-card-featured {
                    border-color: rgba(201,168,76,0.28);
                    background: #1F1B15;
                }
                .ch-card-featured:hover { border-color: rgba(201,168,76,0.5); }
                .ch-card-top {
                    height: 2px;
                    background: linear-gradient(to right, transparent 5%, rgba(201,168,76,0.2) 40%, rgba(201,168,76,0.2) 60%, transparent 95%);
                }
                .ch-card-featured .ch-card-top {
                    background: linear-gradient(to right, transparent 5%, var(--gold) 40%, var(--gold) 60%, transparent 95%);
                }
                .ch-card-body { padding: 2rem 2rem 2.25rem; flex: 1; display: flex; flex-direction: column; }
                .ch-tag {
                    display: inline-block; margin-bottom: 1.2rem;
                    background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.18);
                    border-radius: 2px; padding: 0.18rem 0.65rem;
                    font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em;
                    text-transform: uppercase; color: var(--gold);
                }
                .ch-card-featured .ch-tag {
                    background: rgba(201,168,76,0.14); border-color: rgba(201,168,76,0.38);
                }
                .ch-card-title {
                    font-family: var(--font-heading);
                    font-size: 1.45rem; font-weight: 300; line-height: 1.18;
                    color: var(--text-primary); margin-bottom: 1.6rem;
                }
                .ch-card-featured .ch-card-title { font-weight: 400; }
                .ch-price-row { display: flex; align-items: baseline; gap: 0.45rem; margin-bottom: 0.25rem; }
                .ch-price {
                    font-family: var(--font-heading); font-size: 2.7rem; font-weight: 600;
                    color: var(--gold); line-height: 1;
                }
                .ch-price-to {
                    font-family: var(--font-heading); font-size: 1.5rem; font-weight: 300;
                    color: rgba(201,168,76,0.5);
                }
                .ch-price-unit { font-size: 0.78rem; color: var(--text-muted); letter-spacing: 0.04em; }
                .ch-divider { height: 1px; background: rgba(201,168,76,0.07); margin: 1.5rem 0; }
                .ch-features { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; flex: 1; margin-bottom: 1.5rem; }
                .ch-feature {
                    display: flex; align-items: center; gap: 0.6rem;
                    font-size: 0.83rem; color: var(--text-secondary);
                }
                .ch-check {
                    width: 15px; height: 15px; flex-shrink: 0;
                    border-radius: 50%; background: rgba(201,168,76,0.09);
                    border: 1px solid rgba(201,168,76,0.24);
                    display: flex; align-items: center; justify-content: center;
                }
                .ch-addon {
                    font-size: 0.74rem; color: var(--text-muted);
                    padding: 0.6rem 0.85rem;
                    background: rgba(201,168,76,0.04);
                    border: 1px solid rgba(201,168,76,0.07);
                    border-radius: 2px; margin-bottom: 1.25rem;
                }
                .ch-addon strong { color: var(--gold); font-weight: 500; }
                .ch-cta-outline {
                    display: block; width: 100%; padding: 0.88rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; cursor: pointer; border-radius: 2px;
                    text-decoration: none; transition: all 0.3s;
                    background: transparent; color: var(--text-primary);
                    border: 1px solid rgba(240,234,214,0.12);
                }
                .ch-cta-outline:hover {
                    border-color: var(--gold); color: var(--gold);
                    background: rgba(201,168,76,0.04);
                }
                .ch-cta-gold {
                    display: block; width: 100%; padding: 0.9rem; text-align: center;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; cursor: pointer; border-radius: 2px;
                    text-decoration: none; transition: all 0.3s;
                    background: linear-gradient(135deg, #9A7830, #C9A84C, #E8C96A, #C9A84C);
                    background-size: 200% 200%; background-position: 0% 50%;
                    color: #0D0B09; border: none;
                    box-shadow: 0 4px 20px rgba(201,168,76,0.3);
                }
                .ch-cta-gold:hover {
                    background-position: 100% 50%;
                    transform: translateY(-1px);
                    box-shadow: 0 8px 32px rgba(201,168,76,0.45);
                }
                .ch-watermark {
                    position: absolute; bottom: -30px; right: -30px;
                    color: rgba(201,168,76,0.025); pointer-events: none;
                }
                .ch-tiers { display: flex; flex-direction: column; flex: 1; margin-bottom: 1.5rem; }
                .ch-tier {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 0.6rem 0;
                    border-bottom: 1px solid rgba(201,168,76,0.06);
                    font-size: 0.82rem;
                }
                .ch-tier:last-child { border-bottom: none; }
                .ch-tier-label { color: var(--text-secondary); }
                .ch-tier-price { color: var(--gold); font-weight: 500; font-family: var(--font-heading); font-size: 0.98rem; }

                /* ── Delivery ──────────────────────────────────── */
                .ch-del-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
                    gap: 1.25rem;
                }
                .ch-del-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 2rem;
                    transition: border-color 0.3s;
                }
                .ch-del-card:hover { border-color: rgba(201,168,76,0.2); }
                .ch-del-icon {
                    width: 48px; height: 48px; border-radius: 6px;
                    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.1);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--gold); margin-bottom: 1.25rem;
                    transition: background 0.3s, border-color 0.3s;
                }
                .ch-del-card:hover .ch-del-icon {
                    background: rgba(201,168,76,0.12); border-color: rgba(201,168,76,0.28);
                }
                .ch-del-title {
                    font-family: var(--font-heading); font-size: 1.15rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.55rem;
                }
                .ch-del-desc {
                    font-family: var(--font-prose); font-size: 0.84rem;
                    color: var(--text-secondary); line-height: 1.78; margin-bottom: 0.85rem;
                }
                .ch-del-note {
                    font-size: 0.7rem; color: var(--gold); letter-spacing: 0.08em;
                    display: flex; align-items: center; gap: 0.4rem;
                }
                .ch-del-note::before { content: '✦'; font-size: 0.45rem; opacity: 0.65; }

                /* ── Payment ───────────────────────────────────── */
                .ch-pay-grid {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;
                    max-width: 820px; margin: 0 auto;
                }
                .ch-pay-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 2.25rem 2rem;
                    display: flex; flex-direction: column; gap: 1.1rem;
                    transition: border-color 0.3s;
                }
                .ch-pay-card:hover { border-color: rgba(201,168,76,0.2); }
                .ch-pay-header { display: flex; align-items: center; gap: 0.85rem; }
                .ch-pay-icon {
                    width: 44px; height: 44px; flex-shrink: 0;
                    border-radius: 6px; background: rgba(201,168,76,0.07);
                    border: 1px solid rgba(201,168,76,0.1);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--gold);
                }
                .ch-pay-name {
                    font-family: var(--font-heading); font-size: 1.2rem; font-weight: 600;
                    color: var(--text-primary); line-height: 1.15;
                }
                .ch-pay-sub {
                    font-size: 0.67rem; letter-spacing: 0.1em; color: var(--text-muted);
                    text-transform: uppercase; margin-top: 0.2rem;
                }
                .ch-pay-text {
                    font-family: var(--font-prose); font-size: 0.875rem;
                    color: var(--text-secondary); line-height: 1.78; flex: 1;
                }

                /* ── Reviews ───────────────────────────────────── */
                .ch-rev-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.25rem;
                }
                .ch-rev-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 1.75rem;
                    display: flex; flex-direction: column;
                    transition: border-color 0.3s;
                }
                .ch-rev-card:hover { border-color: rgba(201,168,76,0.18); }
                .ch-rev-stars { display: flex; gap: 3px; margin-bottom: 1rem; }
                .ch-rev-text {
                    font-family: var(--font-prose);
                    font-size: 0.875rem; color: var(--text-secondary);
                    line-height: 1.82; flex: 1;
                    font-style: italic;
                }
                .ch-rev-footer {
                    margin-top: 1.25rem; padding-top: 1rem;
                    border-top: 1px solid rgba(201,168,76,0.06);
                }
                .ch-rev-name {
                    font-family: var(--font-heading); font-size: 0.98rem; font-weight: 600;
                    color: var(--text-primary);
                }
                .ch-rev-cert {
                    font-size: 0.63rem; letter-spacing: 0.14em; text-transform: uppercase;
                    color: var(--gold); opacity: 0.65; margin-top: 0.2rem;
                }

                /* ── Responsive ────────────────────────────────── */
                @media (max-width: 900px) {
                    .ch-rev-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 768px) {
                    .ch-pay-grid { grid-template-columns: 1fr; max-width: 100%; }
                    .ch-hero { padding-top: 8rem; }
                    .ch-hero-stat { gap: 2rem; margin-top: 3rem; }
                }
                @media (max-width: 600px) {
                    .ch-rev-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <Header />
            <main>

                {/* ── Hero ── */}
                <section className="section-pad ch-hero">
                    <Reveal>
                        <div className="ch-badge">
                            <Gift size={11} strokeWidth={1.5} />
                            Подарочные сертификаты
                        </div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", maxWidth: 660 }}>
                            Подарите <strong>незабываемые</strong> впечатления
                        </h1>
                    </Reveal>
                    <div className="ch-hero-divider" />
                    <Reveal delay={160}>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.88, maxWidth: 560 }}>
                            Сертификат на конную прогулку или обучение верховой езде в Шуваловском парке —
                            подарок, который запомнится на всю жизнь.
                            Доставка в день заказа.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div className="ch-hero-actions">
                            <a href="tel:+79523709696" className="btn-gold">
                                <Phone size={14} strokeWidth={1.5} />
                                Позвонить и заказать
                            </a>
                            <a href="#certificates" className="btn-outline">Выбрать сертификат</a>
                        </div>
                    </Reveal>
                    <Reveal delay={320}>
                        <div className="ch-hero-stat">
                            <div>
                                <div className="ch-stat-num">5 000+</div>
                                <div className="ch-stat-label">Довольных получателей</div>
                            </div>
                            <div>
                                <div className="ch-stat-num">3 мес</div>
                                <div className="ch-stat-label">Срок действия</div>
                            </div>
                            <div>
                                <div className="ch-stat-num">≤ 15 мин</div>
                                <div className="ch-stat-label">Доставка на почту</div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* ── Certificate Cards ── */}
                <section id="certificates" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Выберите подарок</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Виды <strong>сертификатов</strong></h2>
                        </Reveal>
                    </div>
                    <div className="ch-cards-grid">
                        {certificates.map((cert, i) => (
                            <Reveal key={cert.title} delay={i * 100}>
                                <div className={`ch-card ${cert.featured ? "ch-card-featured" : ""}`}>
                                    <div className="ch-card-top" />
                                    <div className="ch-card-body">
                                        <div className="ch-tag">{cert.tag}</div>
                                        <div className="ch-card-title">{cert.title}</div>

                                        <div className="ch-price-row">
                                            <span className="ch-price">{cert.price}</span>
                                            {"priceTo" in cert && cert.priceTo && (
                                                <span className="ch-price-to"> — {cert.priceTo}</span>
                                            )}
                                            <span className="ch-price-unit">{cert.unit}</span>
                                        </div>

                                        <div className="ch-divider" />

                                        {"tiers" in cert && cert.tiers ? (
                                            <div className="ch-tiers">
                                                {cert.tiers.map(tier => (
                                                    <div key={tier.label} className="ch-tier">
                                                        <span className="ch-tier-label">{tier.label}</span>
                                                        <span className="ch-tier-price">{tier.price} руб.</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <ul className="ch-features">
                                                {"features" in cert && cert.features.map(f => (
                                                    <li key={f} className="ch-feature">
                                                        <div className="ch-check">
                                                            <Check size={8} strokeWidth={2.5} color="#C9A84C" />
                                                        </div>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {"addon" in cert && cert.addon && (
                                            <div className="ch-addon">
                                                <strong>{cert.addon.split(" — ")[0]}</strong>
                                                {" — "}{cert.addon.split(" — ")[1]}
                                            </div>
                                        )}

                                        <a
                                            href="tel:+79523709696"
                                            className={cert.featured ? "ch-cta-gold" : "ch-cta-outline"}
                                        >
                                            {cert.cta}
                                        </a>
                                    </div>
                                    <div className="ch-watermark">
                                        <PiHorse size={200} />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── How to get ── */}
                <section id="delivery" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Доставка</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Как <strong>получить</strong> сертификат</h2>
                        </Reveal>
                    </div>
                    <div className="ch-del-grid">
                        {deliveryMethods.map((m, i) => (
                            <Reveal key={m.title} delay={i * 100}>
                                <div className="ch-del-card">
                                    <div className="ch-del-icon"><m.Icon size={22} strokeWidth={1.5} /></div>
                                    <div className="ch-del-title">{m.title}</div>
                                    <div className="ch-del-desc">{m.desc}</div>
                                    <div className="ch-del-note">{m.note}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Payment ── */}
                <section id="payment" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Оплата</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Как <strong>оплатить</strong></h2>
                        </Reveal>
                    </div>
                    <div className="ch-pay-grid">
                        <Reveal>
                            <div className="ch-pay-card">
                                <div className="ch-pay-header">
                                    <div className="ch-pay-icon"><MapPin size={20} strokeWidth={1.5} /></div>
                                    <div>
                                        <div className="ch-pay-name">Наличными</div>
                                        <div className="ch-pay-sub">При самовывозе</div>
                                    </div>
                                </div>
                                <p className="ch-pay-text">
                                    Оплата при получении сертификата по адресу:<br />
                                    <strong style={{ color: "var(--text-primary)", fontStyle: "normal" }}>
                                        Каменноостровский просп., д. 26-28
                                    </strong>
                                </p>
                                <a
                                    href="https://yandex.ru/maps/?text=%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+26-28+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                    style={{ textAlign: "center", marginTop: "auto" }}
                                >
                                    Открыть на карте
                                </a>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div className="ch-pay-card">
                                <div className="ch-pay-header">
                                    <div className="ch-pay-icon"><CreditCard size={20} strokeWidth={1.5} /></div>
                                    <div>
                                        <div className="ch-pay-name">Электронная оплата</div>
                                        <div className="ch-pay-sub">Онлайн, любой картой</div>
                                    </div>
                                </div>
                                <p className="ch-pay-text">
                                    Оплатите онлайн и получите сертификат на почту в течение 10–15 минут.
                                    Принимаем карты Visa, Mastercard и МИР.
                                </p>
                                <a
                                    href="/pay"
                                    className="btn-gold"
                                    style={{ textAlign: "center", marginTop: "auto" }}
                                >
                                    Оплатить онлайн
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ── Reviews ── */}
                <section id="cert-reviews" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Отзывы</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Покупатели о <strong>сертификатах</strong></h2>
                        </Reveal>
                        <Reveal delay={180}>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.8 }}>
                                Реальные впечатления тех, кто уже подарил незабываемые эмоции.
                            </p>
                        </Reveal>
                    </div>
                    <div className="ch-rev-grid">
                        {reviews.map((r, i) => (
                            <Reveal key={r.name} delay={i * 80}>
                                <div className="ch-rev-card">
                                    <div className="ch-rev-stars">
                                        {Array.from({ length: r.rating }).map((_, j) => (
                                            <Star key={j} size={13} fill="#C9A84C" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <p className="ch-rev-text">«{r.text}»</p>
                                    <div className="ch-rev-footer">
                                        <div className="ch-rev-name">{r.name}</div>
                                        <div className="ch-rev-cert">{r.cert}</div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* CTA bar */}
                    <Reveal delay={200}>
                        <div style={{
                            marginTop: "4rem", padding: "2.5rem",
                            background: "var(--bg-card)", border: "1px solid rgba(201,168,76,0.1)",
                            borderRadius: "2px", textAlign: "center",
                        }}>
                            <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 300, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                                Готовы сделать <strong>незабываемый подарок?</strong>
                            </div>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.75rem" }}>
                                Позвоните нам — поможем выбрать и оформим доставку в тот же день.
                            </p>
                            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                                <a href="tel:+79523709696" className="btn-gold">
                                    <Phone size={14} strokeWidth={1.5} />
                                    +7 (952) 370-96-96
                                </a>
                                <a href="/#contact" className="btn-outline">Написать нам</a>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
