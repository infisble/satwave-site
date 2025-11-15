import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Mission from "@/components/Mission";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main suppressHydrationWarning>
        <Hero />
        <Featured />
        <Testimonials />
        <HowItWorks />
        <Features />
        <Mission />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
