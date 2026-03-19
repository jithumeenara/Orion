"use client";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Contact() {
    const { lang } = useLang();
    const T = t[lang];

    return (
        <section className="w-full py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-orion-dark mb-4">{T.contactHeading}</h2>
                        <p className="text-gray-600 mb-6">{T.contactSubtitle}</p>
                        <div className="inline-block bg-blue-50 text-orion-blue px-4 py-2 rounded-full font-medium text-sm mb-4">Orion Infoway</div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <a href="https://google.com/maps/place/Orion+Infoway/data=!4m2!3m1!1s0x0:0xfd759b50387d5be3?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-orion-light hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 group">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-orion-blue mt-1 group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-gray-800 group-hover:text-orion-blue transition-colors">{T.visitUs}</h4>
                                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{T.address}</p>
                            </div>
                        </a>

                        <a href="tel:+919645549006" className="flex items-start gap-4 p-4 rounded-xl bg-orion-light hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 group">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-orion-blue mt-1 group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-gray-800 group-hover:text-orion-blue transition-colors">{T.callWhatsApp}</h4>
                                <p className="text-gray-600 text-sm mt-1">+91 9645549006</p>
                            </div>
                        </a>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orion-light hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-orion-blue mt-1"><Mail size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{T.email}</h4>
                                <a href="mailto:info@orioninfoway.com" className="text-gray-600 text-sm mt-1 hover:text-orion-blue transition-colors">info@orioninfoway.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orion-light hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-orion-blue mt-1"><Globe size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{T.website}</h4>
                                <a href="http://www.orioninfoway.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm mt-1 hover:text-orion-blue transition-colors">www.orioninfoway.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
