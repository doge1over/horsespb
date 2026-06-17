"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { IconMapPin, IconPhone, IconMail, IconClock } from "@/components/Icons";
import { SiVk, SiYoutube, SiInstagram } from "react-icons/si";
import { CircleCheck } from "lucide-react";

const contactItems: { icon: ReactNode; label: string; value: string; sub?: string; href?: string }[] = [
    { icon: <IconMapPin />, label: "Адрес",        value: "пос. Парголово, ул. Пляжевая д. 7", sub: "Санкт-Петербург" },
    { icon: <IconPhone />,  label: "Телефон",      value: "+7 (952) 370-96-96", href: "tel:+79523709696" },
    { icon: <IconMail />,   label: "E-mail",       value: "dogride@yandex.ru",  href: "mailto:dogride@yandex.ru" },
    { icon: <IconClock />,  label: "Режим работы", value: "Пн–Вс, 12:00–20:00", sub: "Без выходных" },
];

const field: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.15)", borderRadius: 4,
    padding: "0.9rem 1.1rem", fontSize: "0.875rem", color: "#F0EAD6",
    outline: "none", transition: "border-color 0.25s", fontFamily: "inherit",
};

export default function Contact() {
    const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
    const [sent, setSent] = useState(false);

    return (
        <>
            <style>{`
                .cnt-item {
                    display: flex; gap: 1rem; background: var(--bg-card);
                    border: 1px solid rgba(201,168,76,0.08); border-radius: var(--radius);
                    padding: 1.1rem; align-items: flex-start;
                }
                .cnt-icon {
                    width: 38px; height: 38px; background: rgba(201,168,76,0.08);
                    border-radius: 9px; display: flex; align-items: center;
                    justify-content: center; flex-shrink: 0;
                    color: #C9A84C;
                }
                .cnt-ilabel { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.2rem; }
                .cnt-ivalue { font-size: 0.875rem; color: var(--text-primary); font-weight: 500; }
                .cnt-isub   { font-size: 0.72rem; color: var(--text-muted); margin-top: 0.1rem; }
                .cnt-ilink  { font-size: 0.875rem; color: #C9A84C; font-weight: 500; transition: color 0.2s; }
                .cnt-ilink:hover { color: #E8C96A; }
                .cnt-form-wrap {
                    background: var(--bg-card); border: 1px solid rgba(201,168,76,0.12);
                    border-radius: var(--radius-lg); padding: clamp(1.5rem,4vw,2.5rem);
                    position: relative; overflow: hidden;
                }
                .cnt-form-top { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, transparent, #C9A84C, transparent); }
                .cnt-flabel { display: block; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; }
                input:focus, select:focus, textarea:focus { border-color: rgba(201,168,76,0.45) !important; }
                .cnt-social-pill {
                    display: flex; align-items: center; gap: 0.4rem;
                    background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.12);
                    border-radius: 2px; padding: 0.4rem 0.75rem; font-size: 0.75rem;
                    color: var(--text-secondary); transition: all 0.2s; text-decoration: none;
                }
                .cnt-social-pill:hover { border-color: rgba(201,168,76,0.35); color: #C9A84C; }
            `}</style>

            <section id="contact" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <Reveal><div className="section-label" style={{ justifyContent: "center" }}>Связаться с нами</div></Reveal>
                    <Reveal delay={100}><h2 className="section-title">Запишитесь <strong>на прогулку</strong></h2></Reveal>
                    <Reveal delay={200}><p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 400, margin: "1rem auto 0", lineHeight: 1.8 }}>Оставьте заявку и мы свяжемся в течение 30 минут.</p></Reveal>
                </div>

                <div className="grid-contact">
                    {/* Info */}
                    <Reveal direction="left">
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            {contactItems.map(it => (
                                <div key={it.label} className="cnt-item">
                                    <span className="cnt-icon">{it.icon}</span>
                                    <div>
                                        <div className="cnt-ilabel">{it.label}</div>
                                        {it.href
                                            ? <a href={it.href} className="cnt-ilink">{it.value}</a>
                                            : <div className="cnt-ivalue">{it.value}</div>}
                                        {it.sub && <div className="cnt-isub">{it.sub}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: "var(--bg-card)", border: "1px solid rgba(201,168,76,0.08)", borderRadius: "var(--radius)", padding: "1.25rem" }}>
                            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.85rem" }}>Мы в соцсетях</div>
                            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                                {([
                                    { l: "ВКонтакте", icon: <SiVk size={13} />,        h: "https://vk.com/horsespb" },
                                    { l: "YouTube",   icon: <SiYoutube size={13} />,   h: "#" },
                                    { l: "Instagram", icon: <SiInstagram size={13} />, h: "#" },
                                ] as { l: string; icon: ReactNode; h: string }[]).map(s => (
                                    <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" className="cnt-social-pill">
                                        {s.icon}{s.l}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Form */}
                    <Reveal direction="right">
                        <div className="cnt-form-wrap">
                            <div className="cnt-form-top" />

                            {sent ? (
                                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                                        <CircleCheck size={52} strokeWidth={1.25} color="#C9A84C" />
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.75rem", fontWeight: 600, color: "#C9A84C", marginBottom: "0.75rem" }}>Заявка отправлена!</h3>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>Мы свяжемся с вами в течение 30 минут.<br />До встречи в Шуваловском парке!</p>
                                </div>
                            ) : (
                                <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                                    <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>Оставить заявку</h3>

                                    <div className="form-two-col">
                                        <div>
                                            <label className="cnt-flabel">Ваше имя *</label>
                                            <input type="text" required placeholder="Анна" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={field} />
                                        </div>
                                        <div>
                                            <label className="cnt-flabel">Телефон *</label>
                                            <input type="tel" required placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={field} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="cnt-flabel">Услуга</label>
                                        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...field, cursor: "pointer" }}>
                                            <option value="" style={{ background: "#1A1815" }}>Выберите услугу</option>
                                            <option value="individual" style={{ background: "#1A1815" }}>Индивидуальная прогулка — 2 900 руб.</option>
                                            <option value="couple"     style={{ background: "#1A1815" }}>Прогулка для двоих — 5 800 руб.</option>
                                            <option value="children"   style={{ background: "#1A1815" }}>Детская прогулка — 2 900 руб.</option>
                                            <option value="training"   style={{ background: "#1A1815" }}>Обучение верховой езде — от 3 000 руб.</option>
                                            <option value="photo"      style={{ background: "#1A1815" }}>Фотосессия — от 8 400 руб.</option>
                                            <option value="cert"       style={{ background: "#1A1815" }}>Подарочный сертификат — от 2 900 руб.</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="cnt-flabel">Пожелания</label>
                                        <textarea rows={3} placeholder="Предпочтительная дата, особые пожелания..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...field, resize: "vertical", minHeight: 90, lineHeight: 1.6 }} />
                                    </div>

                                    <button type="submit" className="btn-gold" style={{ justifyContent: "center" }}>Отправить заявку →</button>

                                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6 }}>
                                        Нажимая кнопку, вы соглашаетесь с{" "}
                                        <a href="#" style={{ color: "var(--text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>политикой конфиденциальности</a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
