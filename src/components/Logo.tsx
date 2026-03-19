import Image from "next/image";

export default function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
    // If light is true (dark bg, like Footer), use the transparent logo
    // If light is false (light bg, like Header), use the regular logo or transparent based on preference.
    // The user provided "logo.png" (with bg) and "logo-transparent.png"
    const src = light ? "/assets/logo-transparent.png" : "/assets/Logo.svg";

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <Image
                src={src}
                alt="Orion Infoway Logo"
                width={400}
                height={150}
                className="object-contain w-auto h-20 sm:h-24 md:h-28"
                priority
            />
        </div>
    );
}
