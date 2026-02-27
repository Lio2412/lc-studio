import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
