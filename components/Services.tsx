import Reveal from "@/components/Reveal";
import { IconHorse, IconUsers, IconChild, IconScroll, IconCamera, IconGift } from "@/components/Icons";
import type { ReactNode } from "react";

const services: { icon: ReactNode; title: string; tag: string; description: string; details: string[] }[] = [
    { icon: <IconHorse />,  title: "Индивидуальная прогулка", tag: "Популярно",  description: "Час наедине с природой. Личный инструктор проведёт вас по живописным тропам Шуваловского парка.", details: ["1 час верховой езды", "Личный инструктор", "Экипировка включена", "Фото на память"] },
    { icon: <IconUsers />,  title: "Прогулка для двоих",      tag: "Романтика",  description: "Романтическая прогулка для пар. Разделите магию верховой езды с близким человеком.",              details: ["1 час для 2 человек", "2 опытных лошади", "Пригодно для новичков", "Красивые маршруты"] },
    { icon: <IconChild />,  title: "Детская прогулка",         tag: "Семейное",   description: "Безопасные и весёлые прогулки для детей от 5 лет. Лошади специально подобраны для малышей.",     details: ["Дети от 5 лет", "Спокойные лошади", "Страховка включена", "Родители рядом"] },
    { icon: <IconScroll />, title: "Обучение верховой езде",   tag: "Обучение",   description: "Профессиональные занятия для начинающих и опытных наездников. Правильная посадка с первого урока.", details: ["Индивидуальные уроки", "Все уровни", "Профи-инструкторы", "Своя программа"] },
    { icon: <IconCamera />, title: "Фотосессии с лошадьми",    tag: "Творчество", description: "Профессиональная съёмка с грациозными лошадьми в антураже исторического парка.",               details: ["Проф. фотограф", "Реквизит включён", "Обработка фото", "Уникальный антураж"] },
    { icon: <IconGift />,   title: "Подарочные сертификаты",   tag: "Подарок",    description: "Подарите незабываемые впечатления близким. Сертификат действует 6 месяцев.",                     details: ["На любую услугу", "Красивое оформление", "6 месяцев действия", "Электронный вариант"] },
];

export default function Services() {
    return (
        <>
            <style>{`
                .srv-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
                    gap: 1.25rem;
                }
                /* Reveal wrapper fills the full grid cell */
                .srv-grid > div { display: flex; }
                .srv-card {
                    background: var(--bg-card);
                    padding: 2rem; position: relative;
                    overflow: hidden;
                    transition: background 0.3s ease;
                    display: flex; flex-direction: column; box-sizing: border-box;
                    width: 100%;
                }
                .srv-card:hover { background: #201D19; }
                /* Gold shimmer top edge on hover */
                .srv-card::before {
                    content: '';
                    position: absolute; top: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent);
                    transform: scaleX(0);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .srv-card:hover::before { transform: scaleX(1); }
                .srv-tag {
                    position: absolute; top: 1.25rem; right: 1.25rem;
                    background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.18);
                    border-radius: 2px; padding: 0.2rem 0.65rem;
                    font-size: 0.58rem; font-weight: 700; letter-spacing: 0.18em;
                    text-transform: uppercase; color: #C9A84C;
                }
                .srv-icon {
                    margin-bottom: 1.25rem; flex-shrink: 0;
                    width: 50px; height: 50px; background: rgba(201,168,76,0.07);
                    border-radius: 6px; display: flex; align-items: center; justify-content: center;
                    border: 1px solid rgba(201,168,76,0.1); color: #C9A84C;
                    transition: border-color 0.3s, background 0.3s;
                }
                .srv-card:hover .srv-icon {
                    border-color: rgba(201,168,76,0.3);
                    background: rgba(201,168,76,0.12);
                }
                .srv-title {
                    font-family: var(--font-cormorant), Georgia, serif;
                    font-size: 1.3rem; font-weight: 600;
                    color: var(--text-primary); margin-bottom: 0.6rem; flex-shrink: 0;
                }
                .srv-desc {
                    font-family: var(--font-prose);
                    font-size: 0.875rem; color: var(--text-secondary);
                    line-height: 1.8; margin-bottom: 1.5rem;
                    flex: 1;
                }
                .srv-divider { height: 1px; background: rgba(201,168,76,0.07); margin-bottom: 1.25rem; flex-shrink: 0; }
                .srv-details { flex-shrink: 0; }
                .srv-detail {
                    display: flex; align-items: center; gap: 0.55rem;
                    font-size: 0.78rem; color: var(--text-secondary);
                }
                .srv-dot { width: 3px; height: 3px; border-radius: 50%; background: #C9A84C; opacity: 0.55; flex-shrink: 0; }
            `}</style>

            <section id="services" className="section-pad" style={{ background: "var(--bg-primary)" }}>
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <Reveal>
                        <div className="section-label" style={{ justifyContent: "center" }}>Что мы предлагаем</div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="section-title">Наши <strong>услуги</strong></h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <p style={{ fontFamily: "var(--font-prose)", fontSize: "0.975rem", color: "var(--text-secondary)", maxWidth: 500, margin: "1.1rem auto 0", lineHeight: 1.85 }}>
                            Каждый визит — особый опыт. Подберём программу под ваши желания и уровень подготовки.
                        </p>
                    </Reveal>
                </div>

                <div className="srv-grid">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={i * 70}>
                            <div className="srv-card">
                                <div className="srv-tag">{s.tag}</div>
                                <div className="srv-icon">{s.icon}</div>
                                <div className="srv-title">{s.title}</div>
                                <div className="srv-desc">{s.description}</div>
                                <div className="srv-divider" />
                                <ul className="srv-details" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {s.details.map(d => (
                                        <li key={d} className="srv-detail">
                                            <span className="srv-dot" />{d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
