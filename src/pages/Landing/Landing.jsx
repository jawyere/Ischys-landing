import "./Landing.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import AppSection from "./components/AppSection";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function Landing() {
  return (
    <main className="landingPage">
      <Header />
      <Hero />
      <Intro />
      <HowItWorks />
      <AppSection />
      <Waitlist />
      <Pricing />
      <Footer />
    </main>
  );
}

export default Landing;
