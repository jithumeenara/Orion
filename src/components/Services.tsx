"use client";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

/* ── Animated SVG Icons (unchanged) ── */
const CctvIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes cctvSweep{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}@keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}.cctv-arm{transform-origin:18px 40px;animation:cctvSweep 4s ease-in-out infinite}.rec-dot{animation:blink 1.2s ease-in-out infinite}`}</style>
        <rect x="14" y="20" width="8" height="40" rx="4" fill="#64748B" />
        <g className="cctv-arm">
            <path d="M38 40 L75 16 A48 48 0 0 1 75 64 Z" fill="url(#cone1)" opacity="0.5" />
            <rect x="22" y="30" width="30" height="20" rx="8" fill="#1DA1CF" />
            <rect x="44" y="33" width="12" height="14" rx="4" fill="#0F172A" />
            <circle cx="50" cy="40" r="5" fill="#1E293B" />
            <circle cx="51" cy="39" r="2" fill="#7DD3FC" />
            <circle cx="27" cy="35" r="3" fill="#EF4444" className="rec-dot" />
        </g>
        <defs><linearGradient id="cone1" x1="38" y1="40" x2="75" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#38BDF8" stopOpacity="0.9" /><stop offset="1" stopColor="#38BDF8" stopOpacity="0" /></linearGradient></defs>
    </svg>
);
const GateIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes slideLeft{0%,20%{transform:translateX(0)}50%,70%{transform:translateX(-16px)}90%,100%{transform:translateX(0)}}@keyframes slideRight{0%,20%{transform:translateX(0)}50%,70%{transform:translateX(16px)}90%,100%{transform:translateX(0)}}.gl{animation:slideLeft 5s ease-in-out infinite}.gr{animation:slideRight 5s ease-in-out infinite}`}</style>
        <rect x="4" y="12" width="10" height="56" rx="3" fill="#475569" /><rect x="66" y="12" width="10" height="56" rx="3" fill="#475569" />
        <g className="gl"><rect x="14" y="18" width="26" height="44" rx="2" fill="#1DA1CF" opacity="0.9" /><rect x="17" y="24" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /><rect x="17" y="34" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /><rect x="17" y="44" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /></g>
        <g className="gr"><rect x="40" y="18" width="26" height="44" rx="2" fill="#0EA5E9" opacity="0.9" /><rect x="43" y="24" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /><rect x="43" y="34" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /><rect x="43" y="44" width="20" height="6" rx="2" fill="#E0F2FE" opacity="0.5" /></g>
        <circle cx="9" cy="17" r="3" fill="#10B981"><animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" /></circle>
    </svg>
);
const BiometricIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes scanLine{0%{transform:translateY(-26px);opacity:0.8}100%{transform:translateY(26px);opacity:0.2}}.scan{animation:scanLine 2s ease-in-out infinite alternate}`}</style>
        <path d="M40 14 C55 14 66 24 66 40" stroke="#1DA1CF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M40 21 C51 21 59 29 59 40" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M40 28 C47 28 52 33 52 40" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M40 14 C25 14 14 24 14 40" stroke="#1DA1CF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M40 21 C29 21 21 29 21 40" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M40 28 C33 28 28 33 28 40" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M35 40 Q40 52 45 40" stroke="#7DD3FC" strokeWidth="2.5" fill="none" />
        <path d="M28 40 Q40 62 52 40" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
        <path d="M21 40 Q40 68 59 40" stroke="#1DA1CF" strokeWidth="2.5" fill="none" />
        <g className="scan" style={{ transformOrigin: "40px 40px" }}><rect x="12" y="39" width="56" height="3" rx="1.5" fill="#1DA1CF" opacity="0.6" /></g>
    </svg>
);
const HomeAutoIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M40 14 L65 35 L65 66 L15 66 L15 35 Z" fill="#F0F9FF" stroke="#1DA1CF" strokeWidth="3" strokeLinejoin="round" />
        <path d="M30 66 L30 50 Q40 44 50 50 L50 66 Z" fill="#BAE6FD" />
        <path d="M40 30 m-14 0 a14 14 0 0 1 28 0" stroke="#1DA1CF" strokeWidth="2.5" strokeLinecap="round" fill="none"><animate attributeName="opacity" values="0;1;0" dur="2s" begin="0s" repeatCount="indefinite" /></path>
        <path d="M40 30 m-9 0 a9 9 0 0 1 18 0" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none"><animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" /></path>
        <path d="M40 30 m-4 0 a4 4 0 0 1 8 0" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" fill="none"><animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" /></path>
        <circle cx="40" cy="30" r="2.5" fill="#1DA1CF" />
    </svg>
);
const LaptopIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes typeLine{0%{width:0}60%{width:28px}100%{width:28px}}@keyframes typeLine2{0%{width:0}60%{width:20px}100%{width:20px}}.tl1{animation:typeLine 2s ease forwards infinite}.tl2{animation:typeLine2 2s 0.5s ease forwards infinite}.tl3{animation:typeLine 2s 1s ease forwards infinite}`}</style>
        <rect x="12" y="10" width="56" height="38" rx="4" fill="#0F172A" stroke="#1DA1CF" strokeWidth="2.5" />
        <clipPath id="scr"><rect x="12" y="10" width="56" height="38" rx="4" /></clipPath>
        <g clipPath="url(#scr)"><rect x="18" y="20" height="4" rx="2" fill="#38BDF8" className="tl1" width="28" /><rect x="18" y="28" height="4" rx="2" fill="#7DD3FC" className="tl2" width="20" /><rect x="18" y="36" height="4" rx="2" fill="#38BDF8" className="tl3" width="28" /></g>
        <path d="M8 48 L72 48 L68 64 L12 64 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
        <rect x="28" y="55" width="24" height="4" rx="2" fill="#94A3B8" />
    </svg>
);
const BatteryIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="22" width="54" height="36" rx="6" fill="#F1F5F9" stroke="#1DA1CF" strokeWidth="3" />
        <rect x="62" y="32" width="10" height="16" rx="3" fill="#1DA1CF" />
        <rect x="12" y="26" width="46" height="28" rx="3" fill="#E0F2FE"><animate attributeName="width" values="0;46;46;0" dur="3s" repeatCount="indefinite" /></rect>
        <path d="M46 22 L34 44 L42 44 L34 62 L48 38 L40 38 Z" fill="#FBBF24" opacity="0.9" />
    </svg>
);
const CablingIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M10 30 Q40 20 70 30" stroke="#CBD5E1" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M10 42 Q40 52 70 42" stroke="#CBD5E1" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M10 54 Q40 44 70 54" stroke="#CBD5E1" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle r="4" fill="#1DA1CF"><animateMotion dur="1.8s" repeatCount="indefinite" path="M10 30 Q40 20 70 30" /></circle>
        <circle r="4" fill="#38BDF8"><animateMotion dur="2s" begin="0.6s" repeatCount="indefinite" path="M10 42 Q40 52 70 42" /></circle>
        <circle r="4" fill="#7DD3FC"><animateMotion dur="2.2s" begin="1.2s" repeatCount="indefinite" path="M10 54 Q40 44 70 54" /></circle>
        <rect x="4" y="24" width="10" height="12" rx="2" fill="#475569" /><rect x="66" y="24" width="10" height="12" rx="2" fill="#475569" />
        <rect x="4" y="36" width="10" height="12" rx="2" fill="#475569" /><rect x="66" y="36" width="10" height="12" rx="2" fill="#475569" />
        <rect x="4" y="48" width="10" height="12" rx="2" fill="#475569" /><rect x="66" y="48" width="10" height="12" rx="2" fill="#475569" />
    </svg>
);
const PrinterIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes paperOut{0%,30%{transform:translateY(0)}70%,100%{transform:translateY(14px)}}.paper{animation:paperOut 2.5s ease-in-out infinite}`}</style>
        <rect x="10" y="30" width="60" height="30" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <rect x="18" y="43" width="44" height="5" rx="2" fill="#94A3B8" />
        <circle cx="60" cy="37" r="4" fill="#10B981"><animate attributeName="fill" values="#10B981;#34D399;#10B981" dur="2s" repeatCount="indefinite" /></circle>
        <g className="paper">
            <rect x="22" y="22" width="36" height="28" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="28" y="28" width="24" height="3" rx="1" fill="#1DA1CF" opacity="0.6" />
            <rect x="28" y="34" width="18" height="3" rx="1" fill="#7DD3FC" opacity="0.6" />
            <rect x="28" y="40" width="22" height="3" rx="1" fill="#1DA1CF" opacity="0.4" />
        </g>
        <rect x="20" y="18" width="40" height="14" rx="3" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
    </svg>
);

export default function Services() {
    const { lang } = useLang();
    const T = t[lang];

    const services = [
        { title: T.s1, Anim: CctvIcon },
        { title: T.s2, Anim: GateIcon },
        { title: T.s3, Anim: BiometricIcon },
        { title: T.s4, Anim: HomeAutoIcon },
        { title: T.s5, Anim: LaptopIcon },
        { title: T.s6, Anim: BatteryIcon },
        { title: T.s7, Anim: CablingIcon },
        { title: T.s8, Anim: PrinterIcon },
    ];

    return (
        <section className="w-full py-20 bg-white relative flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orion-blue opacity-5 blur-[100px] rounded-full animate-float-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0ea5e9] opacity-5 blur-[120px] rounded-full animate-float-delayed" />
            </div>
            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <h2 className="text-3xl font-bold text-orion-dark mb-16 relative inline-block">
                    {T.servicesHeading}
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-orion-blue rounded-full" />
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
                    {services.map(({ title, Anim }, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(29,161,207,0.15)] transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-100 group">
                            <div className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300"><Anim /></div>
                            <h3 className="text-sm md:text-base font-bold text-gray-800 leading-snug">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
