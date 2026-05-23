import "../styles/global.css";
import "../styles/layout.css";

import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import HowItWorks from "../components/landing/HowItWorks";
import Pricing from "../components/landing/Pricing";
import Waitlist from "../components/landing/Waitlist";

function Landing() {
  return (
    <div className="landingPage">
      <Header />
      <Hero />
      <Intro />
      <HowItWorks />
      <Pricing />
      <Waitlist />
    </div>
  );
}

export default Landing;