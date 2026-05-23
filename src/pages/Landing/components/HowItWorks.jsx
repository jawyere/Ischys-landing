import Step from "./Step";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section id="how" className="how shell">
      <div className="sideLine"></div>

      <div className="sectionContent">
        <div className="sectionHeading">
          <p className="eyebrow">How it works</p>
          <h2>A simple base. A smarter hydration app.</h2>
        </div>

        <div className="steps">
          <Step
            title="Attach"
            text="Attach your bottle to the Ischys base. The thin attachment is designed to easily stick to your bottle."
          />

          <Step
            title="Measure"
            text="The base approximates intake by tracking bottle weight changes throughout the day."
          />

          <Step
            title="Guide"
            text="The app shows your progress, forecasts your end-of-day intake, and reminds you when you are falling behind."
          />
        </div>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default HowItWorks;