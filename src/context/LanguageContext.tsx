"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ml";

interface LangCtx {
    lang: Lang;
    toggleLang: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", toggleLang: () => { } });

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");
    const toggleLang = () => setLang((l) => (l === "en" ? "ml" : "en"));
    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            <div className={lang === "ml" ? "font-malayalam" : ""}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);
