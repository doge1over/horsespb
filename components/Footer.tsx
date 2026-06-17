import Link from "next/link";
import React from "react";
import { PiHorse } from "react-icons/pi";
import { SiVk, SiYoutube, SiTelegram } from "react-icons/si";

const cols = [
    { title: "Услуги",      links: [{ l: "Конные прогулки", h: "#services" }, { l: "Прогулка для двоих", h: "#services" }, { l: "Детские прогулки", h: "#services" }, { l: "Обучение езде", h: "#services" }, { l: "Фотосессии", h: "#services" }, { l: "Подарочные сертификаты", h: "#services" }] },
    { title: "Информация",  links: [{ l: "О клубе", h: "#about" }, { l: "Цены", h: "#pricing" }, { l: "Галерея", h: "#gallery" }, { l: "Отзывы", h: "#reviews" }, { l: "Контакты", h: "#contact" }, { l: "Как добраться", h: "#contact" }] },
    { title: "Правила",     links: [{ l: "Правила посещения", h: "#" }, { l: "Правила безопасности", h: "#" }, { l: "Макс. вес 85 кг", h: "#" }, { l: "Приезжать за 15 мин", h: "#" }, { l: "Способы оплаты", h: "#" }, { l: "Конфиденциальность", h: "#" }] },
];

export default function Footer() {
    return (
        <>
            <style>{`
                .ftr-col-title { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin-bottom: 1.25rem; }
                .ftr-link { font-size: 0.82rem; color: #5A5040; transition: color 0.2s; text-decoration: none; display: block; }
                .ftr-link:hover { color: #9A8B76; }
                .ftr-social { width: 36px; height: 36px; border-radius: 50%; background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.12); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: #5A5040; transition: all 0.2s; text-decoration: none; }
                .ftr-social:hover { border-color: rgba(201,168,76,0.4); color: #C9A84C; background: rgba(201,168,76,0.1); }
                .ftr-bottom { border-top: 1px solid rgba(201,168,76,0.09); padding: 1.25rem max(1.5rem, calc((100vw - 1200px) / 2)); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; }
                .ftr-copy { font-size: 0.72rem; color: #3A3530; letter-spacing: 0.04em; }
                .ftr-bottom-link { font-size: 0.72rem; color: #3A3530; transition: color 0.2s; }
                .ftr-bottom-link:hover { color: #9A8B76; }
            `}</style>

            <footer style={{ background: "#080706", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div className="grid-footer">
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem", textDecoration: "none" }}>
                            <div style={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,76,0.07)", flexShrink: 0, color: "#C9A84C" }}><PiHorse size={22} /></div>
                            <div>
                                <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.1em", color: "#C9A84C", textTransform: "uppercase" }}>КСК Шуваловский</div>
                                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#5A5040", textTransform: "uppercase" }}>Конный клуб</div>
                            </div>
                        </Link>
                        <p style={{ fontSize: "0.82rem", color: "#5A5040", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 260 }}>
                            Конные прогулки, обучение и фотосессии в Шуваловском парке. С 2012 года. Ежедневно 12:00–20:00.
                        </p>
                        <div style={{ display: "flex", gap: "0.6rem" }}>
                            {([
                                { icon: <SiVk size={14} />,       h: "https://vk.com/horse_club_spb" },
                                { icon: <SiTelegram size={14} />, h: "https://t.me/horsespb" },
                                { icon: <SiYoutube size={14} />,  h: "https://www.youtube.com/channel/UCASkrpr5H4JwkkjvDR0sSGw" },
                                { icon: <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "-0.03em" }}>Max</span>, h: "https://max.ru/u/f9LHodD0cOKCWNwduMq4oNj-vsN3H5zqM7pgtk0D2axrCZRMzJ-doIyySTs" },
                            ] as { icon: React.ReactNode; h: string }[]).map((s, i) => (
                                <a key={i} href={s.h} target="_blank" rel="noopener noreferrer" className="ftr-social">{s.icon}</a>
                            ))}
                        </div>
                    </div>

                    {cols.map(col => (
                        <div key={col.title}>
                            <div className="ftr-col-title">{col.title}</div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {col.links.map(link => (
                                    <li key={link.l}><a href={link.h} className="ftr-link">{link.l}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="ftr-bottom">
                    <div className="ftr-copy">© 2012–{new Date().getFullYear()} КСК «Шуваловский». Все права защищены.</div>
                    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                        {["Конфиденциальность", "Правила клуба", "Оплата"].map(t => (
                            <a key={t} href="#" className="ftr-bottom-link">{t}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}
