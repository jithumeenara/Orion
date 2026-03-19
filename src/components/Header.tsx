"use client";
import Logo from "@/components/Logo";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Header() {
    const { lang, toggleLang } = useLang();
    const T = t[lang];

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 relative flex flex-col items-center justify-center">
                {/* Centered logo + subtitle */}
                <Logo />
                <p className="text-sm font-medium text-gray-500 mt-1 tracking-wide uppercase text-center">
                    {T.subtitle}
                </p>

                {/* Language toggle — small icon, absolute, doesn't shift logo */}
                <button
                    onClick={toggleLang}
                    aria-label="Toggle language"
                    title={lang === "en" ? "Switch to Malayalam" : "Switch to English"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-orion-blue text-orion-blue font-bold text-sm flex items-center justify-center hover:bg-orion-blue hover:text-white transition-all duration-200 select-none leading-none"
                >
                    {lang === "en" ? "മ" : "A"}
                </button>
            </div>
        </header>
    );
}
