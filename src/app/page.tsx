import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import MentesBanner from "@/components/MentesBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#E5E6E0" }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <MentesBanner />
      <Footer />
    </main>
  );
}
