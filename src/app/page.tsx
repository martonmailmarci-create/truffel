import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import MentesBanner from "@/components/MentesBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#EDEDEB", position: "relative" }}>
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url('/bg-texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: 0.3,
        pointerEvents: "none",
        zIndex: 0,
      }} />
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <MentesBanner />
      <Footer />
    </main>
  );
}
