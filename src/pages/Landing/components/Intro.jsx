import './Intro.css'


function Intro() {
  return (
    <section className="intro shell">
      <div className="sideLine"></div>

      <div className="introInner">
        <h2>Hydration tracking made automatic.</h2>

        <p>
          No manual logging. No expensive smart bottle. Just a smart base, your
          existing bottle, and a simple app for tracking.
        </p>

        <div className="chips">
          <span>Family Tracking</span>
          <span>Smart Reminders</span>
          <span>Forecasts</span>
          <span>Personalized Goals</span>
          <span>Daily Streaks</span>
        </div>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default Intro;