"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ZoomIn, X } from "lucide-react";

type Photo = { url: string; alt: string; span: string };

const SPANS = ["tall", "normal", "normal", "wide", "normal", "normal"] as const;

const DEFAULTS: Photo[] = [
    { url: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop&q=85", alt: "Тёмная лошадь",  span: "tall"   },
    { url: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=800&auto=format&fit=crop&q=85", alt: "Лошадь в парке", span: "normal" },
    { url: "https://images.unsplash.com/photo-1581974944026-5d6ed762f617?w=800&auto=format&fit=crop&q=85", alt: "Лошади на лугу", span: "normal" },
    { url: "https://images.unsplash.com/photo-1525879000488-bff3b341d73e?w=800&auto=format&fit=crop&q=85", alt: "Белая лошадь",   span: "wide"   },
    { url: "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=800&auto=format&fit=crop&q=85", alt: "Верховая езда",  span: "normal" },
    { url: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&auto=format&fit=crop&q=85", alt: "Зимняя прогулка",span: "normal" },
];

export default function Gallery() {
    const [photos, setPhotos] = useState<Photo[]>(DEFAULTS);
    const [lightbox, setLightbox] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/gallery")
            .then(r => r.json())
            .then(({ images }: { images: string[] }) => {
                if (images.length > 0) {
                    setPhotos(images.map((f, i) => ({
                        url: `/gallery/${f}`,
                        alt: `Фото ${i + 1}`,
                        span: SPANS[i % SPANS.length] ?? "normal",
                    })));
                }
            })
            .catch(() => {});
    }, []);

    return (
        <>
            <style>{`
                .glr-item { position: relative; overflow: hidden; border-radius: 2px; cursor: zoom-in; background: var(--bg-card); }
                .glr-item img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
                .glr-item:hover img { transform: scale(1.07); }
                .glr-overlay {
                    position: absolute; inset: 0; background: rgba(13,11,9,0);
                    display: flex; align-items: center; justify-content: center;
                    transition: background 0.35s ease;
                }
                .glr-item:hover .glr-overlay { background: rgba(13,11,9,0.45); }
                .glr-overlay span {
                    opacity: 0; transform: scale(0.8);
                    transition: opacity 0.35s ease, transform 0.35s ease;
                }
                .glr-item:hover .glr-overlay span { opacity: 1; transform: scale(1); }
                .glr-lightbox {
                    position: fixed; inset: 0; background: rgba(0,0,0,0.96);
                    z-index: 99999; display: flex; align-items: center; justify-content: center;
                    cursor: zoom-out; backdrop-filter: blur(12px); padding: 1rem;
                }
            `}</style>

            <section id="gallery" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <Reveal><div className="section-label" style={{ justifyContent: "center" }}>Фотогалерея</div></Reveal>
                    <Reveal delay={100}><h2 className="section-title">Моменты <strong>красоты</strong></h2></Reveal>
                    <Reveal delay={200}><p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 440, margin: "1rem auto 0", lineHeight: 1.8 }}>Каждая прогулка оставляет незабываемые воспоминания.</p></Reveal>
                </div>

                <div className="grid-gallery">
                    {photos.map((p, i) => (
                        <Reveal key={p.url} delay={i * 60}>
                            <div
                                className={`glr-item ${p.span === "tall" ? "gallery-tall" : ""} ${p.span === "wide" ? "gallery-wide" : ""}`}
                                style={{ height: "100%" }}
                                onClick={() => setLightbox(p.url)}
                            >
                                <Image src={p.url} alt={p.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 33vw" />
                                <div className="glr-overlay"><span><ZoomIn size={22} color="rgba(240,234,214,0.85)" strokeWidth={1.5} /></span></div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={100}>
                    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                        <a href="https://vk.com/horse_club_spb" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Больше фото ВКонтакте →
                        </a>
                    </div>
                </Reveal>
            </section>

            {lightbox && (
                <div className="glr-lightbox" onClick={() => setLightbox(null)}>
                    <img src={lightbox} alt="" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "var(--radius)", boxShadow: "0 30px 80px rgba(0,0,0,0.8)" }} />
                    <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "50%", width: 44, height: 44, cursor: "pointer", color: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={18} strokeWidth={1.5} /></button>
                </div>
            )}
        </>
    );
}
