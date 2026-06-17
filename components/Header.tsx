"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { PiHorse } from "react-icons/pi";

const anchors = [
    { id: "services", label: "Услуги" },
    { id: "contact",  label: "Контакты" },
];


export default function Header() {
    const [scrolled,  setScrolled]  = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const navLinks = [
        ...anchors.map(a => ({ href: isHome ? `#${a.id}` : `/#${a.id}`, label: a.label })),
        { href: "/certificates", label: "Сертификаты" },
        { href: "/lessons",      label: "Обучение" },
        { href: "/husky",        label: "Хаски" },
        { href: "/photo",        label: "Фотосессии" },
    ];

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <>
            <style>{`
                .hdr-bg {
                    position: fixed; top: 0; left: 0; right: 0; height: 72px;
                    z-index: 99; pointer-events: none; transition: all 0.4s ease;
                }
                .hdr-wrap {
                    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
                    height: 72px; display: flex; align-items: center;
                    justify-content: space-between;
                    padding: 0 max(2rem, calc((100vw - 1200px) / 2));
                }

                /* ── Logo ── */
                .hdr-logo {
                    display: flex; align-items: center; gap: 14px;
                    text-decoration: none; flex-shrink: 0;
                }
                .hdr-logo-icon {
                    display: flex; align-items: center; justify-content: center;
                    width: 44px; height: 44px;
                    border: 1px solid rgba(201,168,76,0.3);
                    border-radius: 4px;
                    background: rgba(201,168,76,0.05);
                    transition: border-color 0.3s, background 0.3s;
                }
                .hdr-logo:hover .hdr-logo-icon {
                    border-color: rgba(201,168,76,0.6);
                    background: rgba(201,168,76,0.1);
                }
                .hdr-logo-name {
                    font-family: var(--font-cormorant), Georgia, serif;
                    font-size: 1rem; font-weight: 600; letter-spacing: 0.12em;
                    color: #C9A84C; text-transform: uppercase; line-height: 1.15;
                }
                .hdr-logo-sub {
                    font-size: 0.55rem; letter-spacing: 0.28em;
                    color: rgba(154,139,118,0.7); text-transform: uppercase;
                    margin-top: 2px;
                }

                /* ── Nav ── */
                .hdr-nav-link {
                    font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em;
                    text-transform: uppercase; color: rgba(240,234,214,0.55);
                    text-decoration: none; padding: 4px 0; position: relative;
                    transition: color 0.25s;
                }
                .hdr-nav-link::after {
                    content: ""; position: absolute; bottom: 0; left: 0;
                    width: 0; height: 1px; background: #C9A84C; transition: width 0.3s ease;
                }
                .hdr-nav-link:hover { color: #F0EAD6; }
                .hdr-nav-link:hover::after { width: 100%; }

                /* ── CTA ── */
                .hdr-cta {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 8px 20px;
                    border: 1px solid rgba(201,168,76,0.35);
                    border-radius: 2px;
                    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em;
                    text-transform: uppercase; color: #C9A84C;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .hdr-cta:hover {
                    background: rgba(201,168,76,0.1);
                    border-color: rgba(201,168,76,0.65);
                    color: #E8C96A;
                }

                /* ── Burger ── */
                .hdr-burger {
                    display: none; position: fixed; top: 21px;
                    right: max(2rem, calc((100vw - 1200px) / 2));
                    z-index: 1100; background: none; border: none;
                    cursor: pointer; padding: 6px;
                    flex-direction: column; justify-content: center; gap: 5px;
                }

                /* ── Mobile menu ── */
                .hdr-mobile-menu {
                    position: fixed; inset: 0; background: #0C0B09;
                    z-index: 1050; display: flex; flex-direction: column;
                    align-items: center; justify-content: center; gap: 0;
                }
                .hdr-mobile-link {
                    font-family: var(--font-cormorant), Georgia, serif;
                    font-size: clamp(1.6rem, 5vw, 2.2rem); font-weight: 300;
                    letter-spacing: 0.12em; text-transform: uppercase;
                    color: rgba(240,234,214,0.65); text-decoration: none;
                    padding: 0.6rem 0; border-bottom: 1px solid rgba(201,168,76,0.06);
                    width: 240px; text-align: center; transition: color 0.25s;
                }
                .hdr-mobile-link:last-of-type { border-bottom: none; }
                .hdr-mobile-link:hover { color: #C9A84C; }
                .hdr-mobile-sep {
                    width: 30px; height: 1px; background: rgba(201,168,76,0.2);
                    margin: 2rem 0;
                }

                /* ── Divider ── */
                .hdr-divider {
                    width: 1px; height: 28px; background: rgba(201,168,76,0.15);
                }

                @media (max-width: 900px) {
                    .desktop-nav { display: none !important; }
                    .hdr-burger  { display: flex !important; }
                }
                @media (max-width: 600px) {
                    .hdr-wrap  { padding: 0 1.25rem; }
                    .hdr-burger { right: 1.25rem; }
                }
            `}</style>

            {/* Bg bar */}
            <div className="hdr-bg" style={{
                background: scrolled ? "rgba(12,11,9,0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(201,168,76,0.08)" : "none",
            }} />

            {/* Content */}
            <header className="hdr-wrap">
                {/* Logo */}
                <Link href="/" className="hdr-logo">
                    <div className="hdr-logo-icon">
                        <PiHorse size={26} color="#C9A84C" />
                    </div>
                    <div>
                        <div className="hdr-logo-name">КСК Шуваловский</div>
                        <div className="hdr-logo-sub">Конный клуб · Санкт-Петербург</div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className="hdr-nav-link">{label}</a>
                    ))}
                    <div className="hdr-divider" />
                    <a href="tel:+79523709696" className="hdr-cta">
                        <Phone size={14} strokeWidth={1.5} />
                        +7 (952) 370-96-96
                    </a>
                </nav>
            </header>

            {/* Burger */}
            <button
                className="hdr-burger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Меню"
            >
                {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                        width: 24, height: 1.5,
                        background: menuOpen ? "#C9A84C" : "rgba(240,234,214,0.8)",
                        borderRadius: 1,
                        transition: "all 0.35s cubic-bezier(0.33,1,0.68,1)",
                        transformOrigin: "center",
                        ...(menuOpen && i === 0 ? { transform: "rotate(45deg) translate(0px, 6.5px)" } : {}),
                        ...(menuOpen && i === 1 ? { opacity: 0, transform: "scaleX(0)" } : {}),
                        ...(menuOpen && i === 2 ? { transform: "rotate(-45deg) translate(0px, -6.5px)" } : {}),
                    }} />
                ))}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="hdr-mobile-menu">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="hdr-mobile-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <div className="hdr-mobile-sep" />
                    <a href="tel:+79523709696" className="hdr-cta" onClick={() => setMenuOpen(false)}>
                        <Phone size={14} strokeWidth={1.5} />
                        +7 (952) 370-96-96
                    </a>
                </div>
            )}
        </>
    );
}
