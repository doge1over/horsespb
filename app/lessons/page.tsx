import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LessonsForm from "@/components/LessonsForm";
import { Phone, Check, Shield, Users, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Обучение верховой езде в Санкт-Петербурге — КСК Шуваловский",
    description: "Уроки верховой езды для взрослых и детей от 5 лет в Шуваловском парке. Опытные тренеры, огороженная площадка. От 3 500 руб. за занятие.",
};

const packages = [
    { duration: "1 час",        type: "Разовое занятие",         price: "3 500",   perH: "3 500" },
    { duration: "4 ч / мес",    type: "Ежемесячный абонемент",   price: "11 000",  perH: "2 750" },
    { duration: "8 ч / мес",    type: "Интенсивный абонемент",   price: "18 000",  perH: "2 250" },
    { duration: "20 ч / год",   type: "Годовой старт",           price: "45 000",  perH: "2 250" },
    { duration: "50 ч / год",   type: "Профессиональный рост",   price: "80 000",  perH: "1 600" },
    { duration: "100 ч / год",  type: "Годовая программа",       price: "100 000", perH: "1 000" },
] as const;

const guide = [
    {
        num: "01",
        title: "Управление лошадью",
        text: "Естественные сигналы подаются руками, ногами и голосом. Дополнительно используют стек и шпоры. На начальном этапе тренер подстраховывает с помощью длинных поводьев — так вы почувствуете уверенность самостоятельного управления.",
    },
    {
        num: "02",
        title: "Как сесть в седло",
        text: "Встаньте с левого бока лошади, поводья держите в левой руке. Правой разверните стременную подножку, поставьте левую ногу в стремя и, перекинув правую ногу через спину лошади, мягко опуститесь в седло.",
    },
    {
        num: "03",
        title: "Правильная посадка",
        text: "Верхняя часть туловища прямая — не наклоняйтесь к шее или хвосту. Удобно сядьте в низкую выемку спины лошади и ногами обхватите её бока по линии стремян. Пальцами ног упритесь в металлические стремена.",
    },
    {
        num: "04",
        title: "Конская упряжь",
        text: "Основные части: седло, уздечка, хомут, стремена, удила и поводья. Все должны хорошо подходить друг к другу. Трензель подходит лучше всего для начинающего наездника. Удила закрепляют с помощью уздечки.",
    },
] as const;

const stats = [
    { num: "2×",  label: "Больше мышц работает даже при шаге, чем при обычной ходьбе" },
    { num: "250", label: "Калорий сжигается за час езды рысью — полноценная кардиотренировка" },
    { num: "110+",label: "Ударов пульса в минуту на рыси, до 170 на галопе" },
    { num: "1–2", label: "Занятия в неделю заменяют изнуряющие тренировки в спортзале" },
] as const;

const features = [
    "Тренировки на огороженной площадке",
    "Лошадь подбирается индивидуально",
    "Возраст от 5 лет — дети и взрослые",
    "Без предварительной подготовки",
    "Уход за лошадью входит в программу",
    "Опытные сертифицированные тренеры",
] as const;

export default function LessonsPage() {
    return (
        <>
            <style>{`
                /* ── Hero ──────────────────────────────────────── */
                .ls-hero { padding-top: 10rem; background: var(--bg-primary); position: relative; overflow: hidden; }
                .ls-hero::after {
                    content: '';
                    position: absolute; inset: 0; pointer-events: none;
                    background:
                        radial-gradient(ellipse 60% 70% at 90% 30%, rgba(201,168,76,0.05) 0%, transparent 55%),
                        radial-gradient(ellipse 45% 55% at 5% 85%, rgba(201,168,76,0.03) 0%, transparent 50%);
                }
                .ls-badge {
                    display: inline-flex; align-items: center; gap: 0.6rem;
                    padding: 0.38rem 1rem; border-radius: 2px;
                    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.22);
                    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.26em;
                    text-transform: uppercase; color: var(--gold); margin-bottom: 2rem;
                }
                .ls-hero-divider { width: 56px; height: 1px; background: rgba(201,168,76,0.22); margin: 2rem 0; }
                .ls-hero-stats {
                    display: flex; gap: 2.5rem; flex-wrap: wrap;
                    padding-top: 1.5rem; margin-top: 4rem;
                    border-top: 1px solid rgba(201,168,76,0.08);
                }
                .ls-stat-num {
                    font-family: var(--font-heading); font-size: 2rem; font-weight: 600;
                    color: var(--gold); line-height: 1;
                }
                .ls-stat-lbl { font-size: 0.67rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.3rem; }

                /* ── Program ───────────────────────────────────── */
                .ls-prog-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
                .ls-prog-img {
                    border-radius: var(--radius-lg); overflow: hidden;
                    aspect-ratio: 4/5; position: relative;
                }
                .ls-prog-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .ls-prog-img::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(to bottom, transparent 50%, rgba(12,11,9,0.55));
                }
                .ls-prog-corner {
                    position: absolute; bottom: -10px; right: -10px;
                    width: 70px; height: 70px;
                    border-right: 2px solid rgba(201,168,76,0.22);
                    border-bottom: 2px solid rgba(201,168,76,0.22);
                    border-bottom-right-radius: 8px; pointer-events: none;
                }
                .ls-features { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
                .ls-feature {
                    display: flex; align-items: center; gap: 0.65rem;
                    font-size: 0.875rem; color: var(--text-secondary);
                }
                .ls-feature-dot {
                    width: 16px; height: 16px; flex-shrink: 0;
                    border-radius: 50%; background: rgba(201,168,76,0.09);
                    border: 1px solid rgba(201,168,76,0.26);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── Pricing ───────────────────────────────────── */
                .ls-pkg-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1px;
                    background: rgba(201,168,76,0.07);
                    border: 1px solid rgba(201,168,76,0.07);
                    border-radius: 2px; overflow: hidden;
                }
                .ls-pkg {
                    background: var(--bg-card);
                    padding: 1.75rem 1.5rem;
                    display: flex; flex-direction: column; gap: 0.3rem;
                    transition: background 0.25s;
                    position: relative;
                }
                .ls-pkg:hover { background: #201D19; }
                .ls-pkg-dur {
                    font-family: var(--font-heading); font-size: 1.25rem; font-weight: 600;
                    color: var(--text-primary);
                }
                .ls-pkg-type { font-size: 0.7rem; letter-spacing: 0.1em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.75rem; }
                .ls-pkg-price {
                    font-family: var(--font-heading); font-size: 2rem; font-weight: 600;
                    color: var(--gold); line-height: 1;
                }
                .ls-pkg-unit { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem; }
                .ls-pkg-perh {
                    font-size: 0.7rem; color: rgba(201,168,76,0.55); letter-spacing: 0.06em;
                }
                .ls-pkg-perh strong { color: rgba(201,168,76,0.8); font-weight: 500; }

                /* ── Form wrap ─────────────────────────────────── */
                .ls-form-wrap {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; padding: 2.5rem;
                    position: relative; overflow: hidden;
                    max-width: 900px; margin: 0 auto;
                }
                .ls-form-topline {
                    position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(to right, transparent, var(--gold), transparent);
                }

                /* ── Guide ─────────────────────────────────────── */
                .ls-guide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
                .ls-guide-card {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.08);
                    border-radius: 2px; padding: 2rem;
                    position: relative; overflow: hidden;
                    transition: border-color 0.3s;
                }
                .ls-guide-card:hover { border-color: rgba(201,168,76,0.2); }
                .ls-guide-num {
                    font-family: var(--font-heading); font-size: 4.5rem; font-weight: 700;
                    color: rgba(201,168,76,0.06); line-height: 1;
                    position: absolute; top: 0.75rem; right: 1.25rem;
                    pointer-events: none; user-select: none;
                }
                .ls-guide-title {
                    font-family: var(--font-heading); font-size: 1.2rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.85rem;
                }
                .ls-guide-text {
                    font-family: var(--font-prose); font-size: 0.875rem;
                    color: var(--text-secondary); line-height: 1.82;
                }
                .ls-guide-bar {
                    width: 28px; height: 2px; background: rgba(201,168,76,0.35);
                    margin-bottom: 1.1rem;
                }

                /* ── Benefits ──────────────────────────────────── */
                .ls-stats-bar {
                    display: grid; grid-template-columns: repeat(4, 1fr);
                    gap: 1px; background: rgba(201,168,76,0.06);
                    border: 1px solid rgba(201,168,76,0.06);
                    border-radius: 2px; overflow: hidden;
                    margin-bottom: 4rem;
                }
                .ls-stat-cell {
                    background: var(--bg-card); padding: 2rem 1.5rem;
                    text-align: center;
                }
                .ls-stat-big {
                    font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 600; color: var(--gold); line-height: 1; margin-bottom: 0.65rem;
                }
                .ls-stat-desc {
                    font-family: var(--font-prose); font-size: 0.8rem;
                    color: var(--text-secondary); line-height: 1.7;
                }
                .ls-benefits-text {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
                    align-items: start;
                }
                .ls-benefit-block { display: flex; flex-direction: column; gap: 1.5rem; }
                .ls-benefit-p {
                    font-family: var(--font-prose); font-size: 0.925rem;
                    color: var(--text-secondary); line-height: 1.88;
                }

                /* ── CTA bar ───────────────────────────────────── */
                .ls-cta-bar {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.1);
                    border-radius: 2px; padding: 2.75rem;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 2rem; flex-wrap: wrap;
                }

                /* ── Responsive ────────────────────────────────── */
                @media (max-width: 1024px) {
                    .ls-prog-grid { gap: 3rem; }
                    .ls-stats-bar { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 900px) {
                    .ls-pkg-grid { grid-template-columns: 1fr 1fr; }
                    .ls-benefits-text { grid-template-columns: 1fr; gap: 1.5rem; }
                }
                @media (max-width: 768px) {
                    .ls-hero { padding-top: 8rem; }
                    .ls-prog-grid { grid-template-columns: 1fr; gap: 2.5rem; }
                    .ls-prog-img { aspect-ratio: 16/9; }
                    .ls-guide-grid { grid-template-columns: 1fr; }
                    .ls-cta-bar { flex-direction: column; text-align: center; }
                }
                @media (max-width: 600px) {
                    .ls-pkg-grid { grid-template-columns: 1fr; }
                    .ls-stats-bar { grid-template-columns: 1fr 1fr; }
                    .ls-hero-stats { gap: 1.5rem; margin-top: 3rem; }
                }
            `}</style>

            <Header />
            <main>

                {/* ── Hero ── */}
                <section className="section-pad ls-hero">
                    <Reveal>
                        <div className="ls-badge">Верховая езда · Шуваловский парк</div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", maxWidth: 700 }}>
                            Обучение <strong>верховой езде</strong> с нуля
                        </h1>
                    </Reveal>
                    <div className="ls-hero-divider" />
                    <Reveal delay={160}>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.88, maxWidth: 580 }}>
                            Научим правильно ездить и управлять лошадью в Шуваловском парке.
                            От пяти лет, любой уровень подготовки — предварительный спортивный опыт не нужен.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
                            <a href="#signup" className="btn-gold">
                                <Phone size={14} strokeWidth={1.5} />
                                Записаться на занятие
                            </a>
                            <a href="#pricing" className="btn-outline">Посмотреть цены</a>
                        </div>
                    </Reveal>
                    <Reveal delay={320}>
                        <div className="ls-hero-stats">
                            <div><div className="ls-stat-num">С 2012</div><div className="ls-stat-lbl">Ведём занятия</div></div>
                            <div><div className="ls-stat-num">От 5 лет</div><div className="ls-stat-lbl">Дети и взрослые</div></div>
                            <div><div className="ls-stat-num">3 500 ₽</div><div className="ls-stat-lbl">Разовое занятие</div></div>
                        </div>
                    </Reveal>
                </section>

                {/* ── About the program ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div className="ls-prog-grid">
                        <Reveal direction="left">
                            <div style={{ position: "relative" }}>
                                <div className="ls-prog-img">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop&q=85"
                                        alt="Обучение верховой езде"
                                    />
                                </div>
                                <div className="ls-prog-corner" />
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div className="section-label">О программе</div>
                            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                                Начнём <strong>с основ</strong> — уверенно к седлу
                            </h2>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "1.25rem" }}>
                                Первоначально вы научитесь ухаживать за лошадью — заботиться о её здоровье и чистоте,
                                приводить в порядок упряжь. Это формирует доверие между всадником и животным.
                            </p>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.88, marginBottom: "2.5rem" }}>
                                Обучение проводится на специально оборудованной площадке на окраине Санкт-Петербурга.
                                Взрослому тренер всегда подберёт лошадь по физическим данным и характеру.
                                Научиться ездить могут все!
                            </p>
                            <ul className="ls-features">
                                {features.map(f => (
                                    <li key={f} className="ls-feature">
                                        <div className="ls-feature-dot">
                                            <Check size={9} strokeWidth={2.5} color="#C9A84C" />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                {/* ── Pricing ── */}
                <section id="pricing" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Стоимость</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Цены и <strong>продолжительность</strong></h2>
                        </Reveal>
                        <Reveal delay={180}>
                            <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.8 }}>
                                Продолжительность занятия — 1 час. Подробная запись по телефону&nbsp;
                                <a href="tel:+79523709696" style={{ color: "var(--gold)" }}>+7 (952) 370-96-96</a>
                            </p>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="ls-pkg-grid">
                            {packages.map((p, i) => (
                                <div key={i} className="ls-pkg">
                                    <div className="ls-pkg-type">{p.type}</div>
                                    <div className="ls-pkg-dur">{p.duration}</div>
                                    <div className="ls-pkg-price">{p.price}</div>
                                    <div className="ls-pkg-unit">руб.</div>
                                    <div className="ls-pkg-perh"><strong>{p.perH} руб.</strong> / час</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ── Sign-up form ── */}
                <section id="signup" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Запись</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Запишитесь <strong>сейчас</strong></h2>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="ls-form-wrap">
                            <div className="ls-form-topline" />
                            <LessonsForm />
                        </div>
                    </Reveal>
                </section>

                {/* ── Guide ── */}
                <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Основы</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Как <strong>управлять</strong> лошадью</h2>
                        </Reveal>
                    </div>
                    <div className="ls-guide-grid">
                        {guide.map((g, i) => (
                            <Reveal key={g.num} delay={i * 90}>
                                <div className="ls-guide-card">
                                    <div className="ls-guide-num">{g.num}</div>
                                    <div className="ls-guide-bar" />
                                    <div className="ls-guide-title">{g.title}</div>
                                    <p className="ls-guide-text">{g.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Benefits ── */}
                <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <Reveal>
                            <div className="section-label" style={{ justifyContent: "center" }}>Польза</div>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="section-title">Верховая езда — <strong>польза для тела и духа</strong></h2>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="ls-stats-bar">
                            {stats.map((s, i) => (
                                <div key={i} className="ls-stat-cell">
                                    <div className="ls-stat-big">{s.num}</div>
                                    <div className="ls-stat-desc">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <div className="ls-benefits-text">
                        <Reveal direction="left">
                            <div className="ls-benefit-block">
                                <p className="ls-benefit-p">
                                    Один-два полноценных урока верховой езды в неделю легко заменят изнуряющие тренировки
                                    в спортзале. Даже когда вы едете шагом, у вас работает вдвое больше мышц, чем при ходьбе,
                                    а пульс учащается до 110 ударов в минуту. На галопе он достигает 170.
                                </p>
                                <p className="ls-benefit-p">
                                    Ускоряется циркуляция крови, внутренние органы лучше снабжаются кислородом.
                                    За час езды рысью вы сожжёте около 250 калорий.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div className="ls-benefit-block">
                                <p className="ls-benefit-p">
                                    Опытный инструктор расскажет, как правильно держать спину, плечи и руки.
                                    Очень скоро это войдёт в привычку — и вы начнёте удивлять знакомых
                                    грациозной и подтянутой осанкой.
                                </p>
                                <p className="ls-benefit-p">
                                    Контакт с добрым и умным животным настроит на положительный лад,
                                    зарядит позитивной энергией на несколько дней вперёд.
                                    После занятия вы не выйдете уставшим — наоборот, почувствуете прилив новых сил.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
                    <Reveal>
                        <div className="ls-cta-bar">
                            <div>
                                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 300, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                                    Готовы сделать <strong>первый шаг</strong>?
                                </div>
                                <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                    Позвоните — поможем выбрать программу и запишем на удобное время.
                                </p>
                            </div>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <a href="tel:+79523709696" className="btn-gold">
                                    <Phone size={14} strokeWidth={1.5} />
                                    +7 (952) 370-96-96
                                </a>
                                <a href="#signup" className="btn-outline">Форма записи</a>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
