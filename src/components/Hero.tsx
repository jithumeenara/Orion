"use client";
import { Star, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const NODES = [
    { top: "8%", left: "5%", size: 3, delay: "0s", dur: "6s" },
    { top: "15%", left: "90%", size: 4, delay: "1s", dur: "7s" },
    { top: "60%", left: "3%", size: 2, delay: "2s", dur: "5s" },
    { top: "75%", left: "88%", size: 5, delay: "0.5s", dur: "8s" },
    { top: "40%", left: "92%", size: 3, delay: "3s", dur: "6.5s" },
    { top: "85%", left: "10%", size: 4, delay: "1.5s", dur: "7.5s" },
];

const LINES = [
    { x1: "5%", y1: "15%", x2: "25%", y2: "35%", delay: "0s" },
    { x1: "80%", y1: "10%", x2: "95%", y2: "55%", delay: "1s" },
    { x1: "10%", y1: "70%", x2: "30%", y2: "90%", delay: "2s" },
    { x1: "60%", y1: "70%", x2: "90%", y2: "85%", delay: "0.5s" },
];

export default function Hero() {
    const { lang } = useLang();
    const T = t[lang];
    const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJwzG_Ds7HBTsR41t9OFCbdf0";

    return (
        <section className="relative w-full py-16 md:py-32 overflow-hidden flex flex-col items-center justify-center bg-[#f0f8ff]">

            {/* Animated Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute rounded-full" style={{ width: "60vw", height: "60vw", top: "-20vw", left: "-10vw", background: "radial-gradient(circle, rgba(29,161,207,0.18) 0%, transparent 70%)", animation: "orbDrift1 12s ease-in-out infinite alternate" }} />
                <div className="absolute rounded-full" style={{ width: "50vw", height: "50vw", bottom: "-15vw", right: "-10vw", background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)", animation: "orbDrift2 14s ease-in-out infinite alternate" }} />
                <div className="absolute rounded-full" style={{ width: "35vw", height: "35vw", top: "30%", left: "40%", background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)", animation: "orbDrift3 10s ease-in-out infinite alternate" }} />

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {LINES.map((l, i) => (
                        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#1DA1CF" strokeWidth="1" strokeOpacity="0" strokeDasharray="4 6">
                            <animate attributeName="stroke-opacity" values="0;0.3;0" dur="4s" begin={l.delay} repeatCount="indefinite" />
                        </line>
                    ))}
                </svg>

                {NODES.map((n, i) => (
                    <div key={i} className="absolute rounded-full bg-orion-blue" style={{ top: n.top, left: n.left, width: n.size * 4, height: n.size * 4, boxShadow: `0 0 ${n.size * 5}px rgba(29,161,207,0.8)`, animation: `float-slow ${n.dur} ${n.delay} ease-in-out infinite alternate` }} />
                ))}

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{ top: "22%", left: "-20%", width: "60%", transform: "rotate(-12deg)", opacity: 0.35, animation: "streakLeft 7s linear infinite" }} />
                    <div className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" style={{ top: "55%", right: "-20%", width: "50%", transform: "rotate(10deg)", opacity: 0.25, animation: "streakRight 9s linear infinite 2s" }} />
                </div>

                <svg className="absolute top-[5%] right-[6%] w-28 h-28 opacity-10 animate-spin" style={{ animationDuration: "30s" }} viewBox="0 0 100 100"><polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="#1DA1CF" strokeWidth="2" /></svg>
                <svg className="absolute bottom-[8%] left-[4%] w-20 h-20 opacity-10" style={{ animation: "spin 40s linear infinite reverse" }} viewBox="0 0 100 100"><polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="#0EA5E9" strokeWidth="2" /></svg>

                <style>{`
                    @keyframes orbDrift1{from{transform:translate(0,0)scale(1)}to{transform:translate(5vw,4vw)scale(1.08)}}
                    @keyframes orbDrift2{from{transform:translate(0,0)scale(1)}to{transform:translate(-4vw,-3vw)scale(1.06)}}
                    @keyframes orbDrift3{from{transform:translate(0,0)scale(1)}to{transform:translate(3vw,5vw)scale(1.12)}}
                    @keyframes streakLeft{from{transform:translateX(-60%)rotate(-12deg)}to{transform:translateX(160vw)rotate(-12deg)}}
                    @keyframes streakRight{from{transform:translateX(60%)rotate(10deg)}to{transform:translateX(-160vw)rotate(10deg)}}
                    @keyframes badgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
                    @keyframes glowPulse{0%,100%{box-shadow:0 0 0 0 rgba(29,161,207,0.35)}60%{box-shadow:0 0 0 14px rgba(29,161,207,0)}}
                    @keyframes starPop{0%,100%{transform:scale(1)}40%{transform:scale(1.45)rotate(10deg)}}
                    @keyframes gLogoSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                `}</style>
            </div>

            {/* Corner brackets */}
            <svg width="48" height="48" className="absolute top-3 left-3 opacity-25 z-0" viewBox="0 0 48 48"><path d="M0 16 L0 0 L16 0" fill="none" stroke="#1DA1CF" strokeWidth="2.5" /></svg>
            <svg width="48" height="48" className="absolute top-3 right-3 opacity-25 z-0" viewBox="0 0 48 48"><path d="M48 16 L48 0 L32 0" fill="none" stroke="#1DA1CF" strokeWidth="2.5" /></svg>
            <svg width="48" height="48" className="absolute bottom-3 left-3 opacity-25 z-0" viewBox="0 0 48 48"><path d="M0 32 L0 48 L16 48" fill="none" stroke="#1DA1CF" strokeWidth="2.5" /></svg>
            <svg width="48" height="48" className="absolute bottom-3 right-3 opacity-25 z-0" viewBox="0 0 48 48"><path d="M48 32 L48 48 L32 48" fill="none" stroke="#1DA1CF" strokeWidth="2.5" /></svg>

            {/* Content */}
            <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-orion-dark mb-4 leading-tight">
                    {lang === "en" ? (
                        <>{T.heroTitle1} <br className="hidden md:block" /><span className="text-orion-blue">{T.heroTitle2}</span></>
                    ) : (
                        <><span className="text-orion-blue">{T.heroTitle1}</span><br className="hidden md:block" />{T.heroTitle2}</>
                    )}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">{T.heroSubtitle}</p>

                {/* Animated Google Badge */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full border border-gray-100" style={{ animation: "badgeFloat 3s ease-in-out infinite, glowPulse 3s ease-in-out infinite" }}>
                        <span className="absolute inset-0 rounded-full border-2 border-orion-blue/20 animate-ping" style={{ animationDuration: "2.8s" }} />
                        <div style={{ animation: "gLogoSpin 8s linear infinite" }}>
                            <svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={`g-star-${star}`} size={15} className="text-yellow-400 fill-yellow-400" style={{ animation: `starPop 2.5s ease-in-out ${star * 0.18}s infinite` }} />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-0.5">Google Reviews</span>
                        </div>
                    </div>
                </div>

                <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-orion-blue hover:bg-blue-600 text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-11/12 sm:w-auto">
                    {T.heroCta}
                    <ArrowRight size={20} className="animate-bounce-x" />
                </a>

                <p className="text-sm text-gray-500 mt-4 italic mb-8 md:mb-0">&quot;{T.heroTagline}&quot;</p>

                {/* Mobile scroll prompt */}
                <div className="pt-8 md:hidden flex flex-col items-center justify-center text-orion-blue opacity-80 animate-bounce">
                    <span className="text-xs font-semibold tracking-wider uppercase mb-1">{T.scrollPrompt}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>
        </section>
    );
}
