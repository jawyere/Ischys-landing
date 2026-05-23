import "./Landing.css";

import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import AppSection from "./components/AppSection";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function Landing() {
  return (
    <main className="landingPage">
      <Header />

      <ScrollReveal className="heroReveal" delay={40}>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <Intro />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <AppSection />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Waitlist />
      </ScrollReveal>

      <Footer />
    </main>
  );
}

export default Landing;
