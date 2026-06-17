"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const fieldStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.15)", borderRadius: 4,
    padding: "0.9rem 1.1rem", fontSize: "0.875rem", color: "#F0EAD6",
    outline: "none", transition: "border-color 0.25s", fontFamily: "inherit",
};

export default function LessonsForm() {
    const [name, setName]   = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate]   = useState("");
    const [sent, setSent]   = useState(false);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        const text = `Запись на обучение верховой езде\nИмя: ${name}\nТелефон: ${phone}${date ? `\nДата: ${date}` : ""}`;
        window.open(`https://wa.me/79523709696?text=${encodeURIComponent(text)}`, "_blank");
        setSent(true);
    }

    return (
        <>
            <style>{`
                .lf-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr auto;
                    gap: 1rem; align-items: end;
                }
                .lf-label {
                    display: block; font-size: 0.67rem; font-weight: 600;
                    letter-spacing: 0.16em; text-transform: uppercase;
                    color: var(--text-muted); margin-bottom: 0.45rem;
                }
                input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.4); cursor: pointer; }
                @media (max-width: 860px) { .lf-grid { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 540px) { .lf-grid { grid-template-columns: 1fr; } }
            `}</style>

            {sent ? (
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.5rem 0" }}>
                    <CheckCircle size={28} strokeWidth={1.5} color="#C9A84C" />
                    <div>
                        <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--text-primary)" }}>Заявка отправлена в WhatsApp</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                            Не открылось? Позвоните: <a href="tel:+79523709696" style={{ color: "var(--gold)" }}>+7 (952) 370-96-96</a>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={submit}>
                    <div className="lf-grid">
                        <div>
                            <label className="lf-label">Ваше имя</label>
                            <input
                                style={fieldStyle} type="text" placeholder="Введите имя"
                                value={name} onChange={e => setName(e.target.value)} required
                                onFocus={e => (e.target.style.borderColor = "rgba(201,168,76,0.45)")}
                                onBlur={e  => (e.target.style.borderColor = "rgba(201,168,76,0.15)")}
                            />
                        </div>
                        <div>
                            <label className="lf-label">Телефон</label>
                            <input
                                style={fieldStyle} type="tel" placeholder="+7 (___) ___-__-__"
                                value={phone} onChange={e => setPhone(e.target.value)} required
                                onFocus={e => (e.target.style.borderColor = "rgba(201,168,76,0.45)")}
                                onBlur={e  => (e.target.style.borderColor = "rgba(201,168,76,0.15)")}
                            />
                        </div>
                        <div>
                            <label className="lf-label">Желаемая дата</label>
                            <input
                                style={fieldStyle} type="date"
                                value={date} onChange={e => setDate(e.target.value)}
                                onFocus={e => (e.target.style.borderColor = "rgba(201,168,76,0.45)")}
                                onBlur={e  => (e.target.style.borderColor = "rgba(201,168,76,0.15)")}
                            />
                        </div>
                        <button type="submit" className="btn-gold">
                            <Send size={14} strokeWidth={1.5} />
                            Записаться
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
