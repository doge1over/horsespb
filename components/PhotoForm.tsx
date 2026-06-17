"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const f: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.15)", borderRadius: 4,
    padding: "0.9rem 1.1rem", fontSize: "0.875rem", color: "#F0EAD6",
    outline: "none", transition: "border-color 0.25s", fontFamily: "inherit",
};

const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(201,168,76,0.45)");
const blur  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(201,168,76,0.15)");

export default function PhotoForm() {
    const [type,  setType]  = useState("Индивидуальная");
    const [name,  setName]  = useState("");
    const [phone, setPhone] = useState("");
    const [date,  setDate]  = useState("");
    const [sent,  setSent]  = useState(false);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        const text = `Запись на фотосессию с лошадьми\nТип: ${type}\nИмя: ${name}\nТелефон: ${phone}${date ? `\nДата: ${date}` : ""}`;
        window.open(`https://wa.me/79523709696?text=${encodeURIComponent(text)}`, "_blank");
        setSent(true);
    }

    return (
        <>
            <style>{`
                .pf-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr auto;
                    gap: 1rem; align-items: end;
                }
                .pf-label {
                    display: block; font-size: 0.67rem; font-weight: 600;
                    letter-spacing: 0.16em; text-transform: uppercase;
                    color: var(--text-muted); margin-bottom: 0.45rem;
                }
                select option { background: #1C1915; color: #F0EAD6; }
                input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.4); cursor: pointer; }
                @media (max-width: 960px) { .pf-grid { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 540px) { .pf-grid { grid-template-columns: 1fr; } }
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
                    <div className="pf-grid">
                        <div>
                            <label className="pf-label">Тип фотосессии</label>
                            <select style={{ ...f, cursor: "pointer" }} value={type} onChange={e => setType(e.target.value)} onFocus={focus} onBlur={blur}>
                                <option>Индивидуальная</option>
                                <option>Семейная</option>
                            </select>
                        </div>
                        <div>
                            <label className="pf-label">Ваше имя</label>
                            <input style={f} type="text" placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)} required onFocus={focus} onBlur={blur} />
                        </div>
                        <div>
                            <label className="pf-label">Телефон</label>
                            <input style={f} type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} required onFocus={focus} onBlur={blur} />
                        </div>
                        <div>
                            <label className="pf-label">Дата фотосессии</label>
                            <input style={f} type="date" value={date} onChange={e => setDate(e.target.value)} onFocus={focus} onBlur={blur} />
                        </div>
                        <button type="submit" className="btn-gold">
                            <Send size={14} strokeWidth={1.5} />
                            Заказать
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
