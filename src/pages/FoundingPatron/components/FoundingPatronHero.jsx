import "./FoundingPatronHero.css";

function FoundingPatronHero() {
  return (
    <div className="fpHeroContent">
      <p className="fpEyebrow">Optional support tier</p>

      <h1 className="fpHeroTitle">
        <span className="fpTitleMuted">Become a</span>{" "}
        <span className="fpTitleAccent">Founding Patron</span>{" "}
        <span className="fpTitleMuted">of Ischys.</span>
      </h1>

      <p className="fpIntro">
        Founding Patron is for people who want to help Ischys move from idea to
        real product. This optional support helps fund early prototype
        development, testing, production setup, and launch.
      </p>

      <div className="fpReminder" role="note">
        <strong>This is not required.</strong>
        <span>
          If you only want early access and the founder discount, the regular
          $10 Founder Access option is the better choice.
        </span>
      </div>

      <div className="fpStats" aria-label="Founding Patron highlights">
        <div>
          <strong>$400</strong>
          <span>Optional support</span>
        </div>

        <div>
          <strong>50</strong>
          <span>Patron spots</span>
        </div>

        <div>
          <strong>Early</strong>
          <span>Feedback invite</span>
        </div>
      </div>
    </div>
  );
}

export default FoundingPatronHero;