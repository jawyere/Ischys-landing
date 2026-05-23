import "./FoundingPatronCard.css";

function FoundingPatronCard() {
  return (
    <aside className="fpCard" aria-label="Founding Patron support card">
      <div className="fpCardTop">
        <p className="fpTierPill">Founding Patron</p>
        <p className="fpLimitedText">Limited early supporter circle</p>
      </div>

      <div className="fpPriceBlock">
        <span className="fpPatronPrice">$400</span>
        <span className="fpPriceSubtext">one-time optional support</span>
      </div>

      <p className="fpCardDescription">
        This is for people who want to contribute more than the standard founder
        reservation and help Ischys get started.
      </p>

      <ul className="fpPerks">
        <li>
          <span>✓</span>
          Founding Patron status
        </li>
        <li>
          <span>✓</span>
          Priority first-batch access
        </li>
        <li>
          <span>✓</span>
          Name listed on founder thank-you page
        </li>
        <li>
          <span>✓</span>
          Early feedback invite before launch
        </li>
        <li>
          <span>✓</span>
          Behind-the-scenes prototype updates
        </li>
      </ul>

      <a
        href="https://buy.stripe.com/7sYeVfgxjezBc6N5aZ2Fa01"
        target="_blank"
        rel="noreferrer"
        className="fpButton"
        aria-label="Support Ischys as a Founding Patron for 400 dollars"
      >
        Support as a Founding Patron
      </a>

      <p className="fpFinePrint">
        Founding Patron support helps fund early development. It does not
        guarantee final product timing, pricing, or availability.
      </p>
    </aside>
  );
}

export default FoundingPatronCard;