"use client";
import { useState } from "react";
import { Frown, Meh, Smile, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Feedback() {
    const { lang } = useLang();
    const T = t[lang];
    const googleReviewUrl = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review";
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rating: "excellent" | "good" | "poor") => {
        if (rating === "excellent") {
            window.open(googleReviewUrl, "_blank", "noopener noreferrer");
        } else {
            setShowForm(true);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="w-full py-16 bg-orion-light">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                {!showForm && !submitted ? (
                    <div>
                        <h2 className="text-3xl font-bold text-orion-dark mb-10">{T.feedbackHeading}</h2>
                        <div className="flex justify-center gap-6 md:gap-10">
                            <button onClick={() => handleRating("excellent")} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 focus:outline-none">
                                <div className="bg-white p-4 rounded-full shadow-sm group-hover:shadow-md border-2 border-transparent group-hover:border-green-400 transition-all">
                                    <Smile size={64} className="text-green-500" strokeWidth={1.5} />
                                </div>
                                <span className="font-semibold text-gray-700">{T.excellent}</span>
                            </button>
                            <button onClick={() => handleRating("good")} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 focus:outline-none">
                                <div className="bg-white p-4 rounded-full shadow-sm group-hover:shadow-md border-2 border-transparent group-hover:border-yellow-400 transition-all">
                                    <Meh size={64} className="text-yellow-500" strokeWidth={1.5} />
                                </div>
                                <span className="font-semibold text-gray-700">{T.good}</span>
                            </button>
                            <button onClick={() => handleRating("poor")} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 focus:outline-none">
                                <div className="bg-white p-4 rounded-full shadow-sm group-hover:shadow-md border-2 border-transparent group-hover:border-red-400 transition-all">
                                    <Frown size={64} className="text-red-500" strokeWidth={1.5} />
                                </div>
                                <span className="font-semibold text-gray-700">{T.needsImprovement}</span>
                            </button>
                        </div>
                    </div>
                ) : submitted ? (
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center animate-in fade-in zoom-in duration-500">
                        <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-orion-dark mb-2">{T.thankYou}</h3>
                        <p className="text-gray-600 text-lg">{T.thankYouMsg}</p>
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded-2xl shadow-sm md:p-10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold text-orion-dark mb-6 text-center">{T.helpImprove}</h2>
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{T.nameLabel}</label>
                                <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orion-blue focus:border-orion-blue outline-none transition-colors" placeholder={T.namePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{T.phoneLabel}</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orion-blue focus:border-orion-blue outline-none transition-colors" placeholder={T.phonePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{T.messageLabel}</label>
                                <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orion-blue focus:border-orion-blue outline-none transition-colors resize-none" placeholder={T.messagePlaceholder}></textarea>
                            </div>
                            <button type="submit" className="mt-4 flex items-center justify-center gap-2 w-full bg-orion-dark hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                <Send size={18} /> {T.sendFeedback}
                            </button>
                        </form>
                        <button onClick={() => setShowForm(false)} className="mt-4 w-full text-center text-sm text-gray-500 hover:text-orion-blue transition-colors">{T.cancel}</button>
                    </div>
                )}
            </div>
        </section>
    );
}
