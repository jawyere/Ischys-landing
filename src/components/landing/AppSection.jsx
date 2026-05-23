import "./AppSection.css";

function AppSection() {
  return (
    <section id="app" className="appSection shell">
      <div className="sideLine"></div>

      <div className="appGrid">
        <div>

         

          <p className="eyebrow">The app</p>

          <h1 className="appTitle">
            <span className="appTitleLine">Free to use.</span>
            <span className="appTitleLine">Gain vast insights.</span>
          </h1>

          <p>
            Start with a free app supported by ads. Offer a paid premium plan
            for people who want ad-free tracking and family dashboards.
          </p>
        </div>

        <div className="featurePanel">
          <div className="featureRow">
            <strong>Free app</strong>
            <span>Daily intake, goals, reminders, progress</span>
          </div>

          <div className="featureRow">
            <strong>Premium</strong>
            <span>Ad-free, forecasts, family tracking, reports</span>
          </div>

          <div className="featureRow">
            <strong>Hardware</strong>
            <span>Sleek base, rechargeable, bottle-friendly design</span>
          </div>
        </div>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default AppSection;