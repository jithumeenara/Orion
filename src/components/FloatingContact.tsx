"use client";
import { useState } from "react";
import { Phone, X, PhoneCall } from "lucide-react";

const PHONE = "+919645549006";
const WA_LINK = `https://wa.me/919645549006?text=Hi%20Orion%20Infoway%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

export default function FloatingContact() {
    const [open, setOpen] = useState(false);

    return (
        /* ── only visible on mobile ── */
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 md:hidden">

            {/* ── Popup panel (slides up when open) ── */}
            <div
                className={`flex flex-col items-end gap-3 transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                {/* Half-screen click-outside overlay */}
                {open && (
                    <div
                        className="fixed inset-0 z-[-1]"
                        onClick={() => setOpen(false)}
                    />
                )}

                {/* WhatsApp button */}
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-xl active:scale-95 transition-transform"
                    onClick={() => setOpen(false)}
                >
                    {/* WhatsApp SVG logo */}
                    <svg viewBox="0 0 32 32" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.695 4.61 1.898 6.488L4 29l7.725-1.87A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22a10.93 10.93 0 0 1-5.545-1.512l-.397-.233-4.583 1.109 1.16-4.482-.26-.41A10.937 10.937 0 0 1 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm5.797-7.757c-.317-.158-1.875-.925-2.165-1.03-.29-.105-.502-.158-.713.158-.211.316-.817 1.03-1.002 1.241-.184.211-.369.237-.686.079-.317-.158-1.338-.493-2.548-1.572-.942-.84-1.578-1.879-1.763-2.196-.184-.317-.019-.488.139-.645.142-.142.317-.369.475-.554.159-.184.211-.316.317-.527.105-.211.053-.395-.026-.554-.079-.158-.713-1.72-.977-2.354-.257-.617-.52-.533-.713-.542l-.607-.01c-.211 0-.554.079-.844.395-.29.316-1.108 1.083-1.108 2.643s1.134 3.068 1.292 3.279c.158.211 2.233 3.409 5.413 4.779.757.327 1.348.522 1.808.668.76.242 1.451.208 1.998.126.609-.09 1.875-.766 2.139-1.506.264-.74.264-1.374.185-1.506-.079-.132-.29-.211-.607-.369z" />
                    </svg>
                    <span className="font-semibold text-sm">WhatsApp Chat</span>
                </a>

                {/* Phone Call button */}
                <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-3 bg-orion-blue text-white pl-4 pr-5 py-3 rounded-full shadow-xl active:scale-95 transition-transform"
                    onClick={() => setOpen(false)}
                >
                    <PhoneCall size={22} strokeWidth={2} />
                    <span className="font-semibold text-sm">Call Us Now</span>
                </a>
            </div>

            {/* ── Main FAB toggle button ── */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Contact options"
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${open
                    ? "bg-gray-700 rotate-[225deg]"
                    : "bg-orion-blue animate-pulse-ring"
                    }`}
                style={{ boxShadow: open ? undefined : "0 0 0 8px rgba(29,161,207,0.2)" }}
            >
                {open ? (
                    <X size={24} className="text-white rotate-[135deg]" />
                ) : (
                    <Phone size={24} className="text-white" />
                )}
            </button>
        </div>
    );
}
