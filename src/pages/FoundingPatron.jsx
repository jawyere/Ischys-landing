import "./FoundingPatron.css";
import FoundingPatronHero from "../components/founding-patron/FoundingPatronHero";
import FoundingPatronCard from "../components/founding-patron/FoundingPatronCard";

function FoundingPatron() {
  return (
    <main className="fpPage">
      <section className="fpSection">
        <div className="fpGlow fpGlowOne"></div>
        <div className="fpGlow fpGlowTwo"></div>

        <div className="fpShell">
          <a
            href="/landing#pricing"
            className="fpBackLink"
            aria-label="Back to pricing"
          >
            ← Back to pricing
          </a>

          <div className="fpGrid">
            <FoundingPatronHero />
            <FoundingPatronCard />
          </div>
        </div>
      </section>
    </main>
  );
}

export default FoundingPatron;