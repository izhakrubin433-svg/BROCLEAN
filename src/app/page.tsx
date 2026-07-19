import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import MarqueeTicker   from "@/components/MarqueeTicker";
import TrustBar        from "@/components/TrustBar";
import Services        from "@/components/Services";
import StatsSection    from "@/components/StatsSection";
import Process         from "@/components/Process";
import WhyUs           from "@/components/WhyUs";
import Gallery         from "@/components/Gallery";
import Testimonials    from "@/components/Testimonials";
import CTABanner       from "@/components/CTABanner";
import FAQ             from "@/components/FAQ";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress  from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <TrustBar />
      <Services />
      <StatsSection />
      <Process />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
