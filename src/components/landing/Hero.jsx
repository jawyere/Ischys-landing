import ProductVisual from "./ProductVisual";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero shell">
      <div className="sideLine"></div>

      <div className="heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">Smart hydration monitoring + forecasting</p>

          <h1 className="heroTitle">
            <span className="heroTitleLine">Track hydration.</span>
            <span className="heroTitleLine">Keep your bottle.</span>
          </h1>

          <p className="heroText">
            Ischys is a sleek sensor base that attaches to your bottle. It
            measures weight changes and connects to an app that tracks,
            forecasts, and guides your hydration throughout the day.
          </p>

          <div className="heroActions">
            <a href="#waitlist" className="primaryBtn">
              Join early access
            </a>

            <a href="#pricing" className="secondaryBtn">
              Reserve founder pricing
            </a>
          </div>
        </div>

        <ProductVisual />
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default Hero;