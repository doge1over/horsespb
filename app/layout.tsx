import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, PT_Serif } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    subsets: ["cyrillic", "latin"],
    weight: ["300", "400", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

const jost = Jost({
    subsets: ["cyrillic", "latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-jost",
    display: "swap",
});

const ptSerif = PT_Serif({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    variable: "--font-pt",
    display: "swap",
});

export const metadata: Metadata = {
    title: "КСК Шуваловский — Конные прогулки в Санкт-Петербурге",
    description:
        "Конные прогулки, обучение верховой езде и фотосессии с лошадьми в Шуваловском парке, Парголово. Работаем с 2012 года.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={`${jost.variable} ${cormorant.variable} ${ptSerif.variable} ${jost.className}`}>
                {children}
            </body>
        </html>
    );
}
