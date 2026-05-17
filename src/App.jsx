import "./styles/global.css";
import "./styles/layout.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import HowItWorks from "./components/HowItWorks";
import AppSection from "./components/AppSection";
import Pricing from "./components/Pricing";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Intro />
      <HowItWorks />
      <AppSection />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
}

export default App;