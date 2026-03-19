import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center select-none selection:bg-orion-blue selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Feedback />
      <Contact />
      <Footer />
      {/* Mobile floating Call + WhatsApp buttons */}
      <FloatingContact />
    </main>
  );
}
