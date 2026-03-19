"use client";
import { Star } from "lucide-react";
import Logo from "@/components/Logo";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
    const { lang } = useLang();
    const T = t[lang];
    const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJwzG_Ds7HBTsR41t9OFCbdf0";

    return (
        <footer className="w-full bg-orion-dark text-orion-light flex flex-col items-center">
            {/* Final CTA Section */}
            <div className="w-full py-16 bg-orion-blue text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{T.footerCta}</h2>
                <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-orion-blue font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                    <Star size={20} className="fill-orion-blue" />
                    {T.writeReview}
                </a>
            </div>

            {/* Main Footer */}
            <div className="w-full py-12 container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6 opacity-90 scale-90">
                    <Logo light={true} />
                </div>
                <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-2">{T.footerTagline}</p>
                <p className="text-sm font-medium text-gray-300">{T.footerNote}</p>
                <div className="mt-10 pt-6 border-t border-gray-700/50 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    <p>© {new Date().getFullYear()} Orion Infoway. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
