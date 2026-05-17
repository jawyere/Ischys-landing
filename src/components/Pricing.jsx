import "./Pricing.css";

function Pricing() {
  return (
    <section id="pricing" className="pricing shell">
      <div className="sideLine"></div>

      <div className="pricingInner">
        <p className="eyebrow">Founder offer</p>

        <h2>Help bring Ischys to life.</h2>

        <p className="pricingIntro">
          Reserve founder access before the first release. Early supporters help
          validate demand, fund prototype development, and shape the product
          before launch.
        </p>

        <div className="pricingCards">
          <div className="priceCard">
            <p className="tierLabel">Founder Access</p>

            <p className="price">$10</p>

            <h3>Reserve your spot now</h3>

            <p>
              Put down $10 now and receive an additional <strong>$10 off</strong> the initial
              hardware release, plus early founder status.
            </p>

            <ul className="perkList">
              <li>$10 off first hardware release</li>
              <li>Founder Access status</li>
              <li>Early product updates</li>
              <li>First access to preorder</li>
            </ul>

            <a
              href="https://buy.stripe.com/test_bJe3cw5vmc9jeEEc28eUU00"
              target="_blank"
              rel="noreferrer"
              className="primaryBtn wide"
            >
              Reserve for $10
            </a>

            <small>Best for early users who want first access.</small>
          </div>

          <div className="priceCard featuredPriceCard">
            <div className="limitedBadge">Only 50 spots</div>

            <p className="tierLabel">Core Founder</p>

            <p className="price">$400</p>

            <h3>Support the first build</h3>

            <p>
              Core Founder is an optional way to give extra support to Ischys as
              a small business. This is NOT required by any means. It is
              for people who want to help fund the prototype, production setup,
              testing, and launch.
            </p>

            <ul className="perkList">
              <li>Core Founder status</li>
              <li>Priority first-batch access</li>
              <li>Name listed on founder thank-you page</li>
              <li>Early feedback invite before launch</li>
              <li>Behind-the-scenes prototype updates</li>
            </ul>

            <a
              href="https://buy.stripe.com/7sYeVfgxjezBc6N5aZ2Fa01"
              target="_blank"
              rel="noreferrer"
              className="primaryBtn wide"
            >
              Become a Core Founder
            </a>

            <small>
              Extra support tier. Founder Access is enough if you only want to
              reserve early pricing.
            </small>
          </div>
        </div>

        <p className="pricingNote">
          Founder payments support early development. Final product pricing,
          timeline, and availability will be announced before the first release.
        </p>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default Pricing;