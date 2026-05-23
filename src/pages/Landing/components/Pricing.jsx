import "./Pricing.css";
import Button from "../../../components/Button/Button";

function Pricing() {
  return (
    <section id="pricing" className="pricing shell">
      <div className="sideLine"></div>

      <div className="pricingInner">
        <p className="eyebrow">Pre-Release Founder Offer</p>

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
              Put down $10 now and receive an additional <strong>$10 off</strong>{" "}
              the initial hardware release, plus early founder status.
            </p>

            <ul className="perkList">
              <li>$10 off first hardware release</li>
              <li>Founder Access status</li>
              <li>Early product updates</li>
              <li>First access to preorder</li>
            </ul>

            <Button
              href="https://buy.stripe.com/test_bJe3cw5vmc9jeEEc28eUU00"
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="siteButton--wide"
            >
              Reserve for $10
            </Button>

            <small>Best for early users who want first access.</small>
          </div>

          <div className="priceCard featuredPriceCard supportCard">
            <div className="limitedBadge">Optional support tier</div>

            <p className="tierLabel">Founding Patron</p>

            <h3>Help support the first build</h3>

            <p>
              Founding Patron is for people who want to give extra support to
              help Ischys get started. It helps fund early prototype development,
              testing, production setup, and launch costs.
            </p>

            <p>
              This is <strong>not required</strong> to receive Founder Access or
              early pricing. The regular $10 Founder Access option is the best
              choice if you only want to reserve your spot and get the early
              supporter discount.
            </p>

            <ul className="perkList">
              <li>Founding Patron status</li>
              <li>Priority first-batch access</li>
              <li>Name listed on founder thank-you page</li>
              <li>Early feedback invite before launch</li>
              <li>Behind-the-scenes prototype updates</li>
            </ul>

            <Button to="/founding-patron" variant="secondary" className="siteButton--wide">
              Learn More
            </Button>

            <small>
              Optional patron support for people who want to help bring Ischys
              to life.
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
