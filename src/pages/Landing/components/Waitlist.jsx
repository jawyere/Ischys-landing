import Button from "../../../components/Button/Button";
import "./Waitlist.css";

function Waitlist() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks — you're on the Ischys early access list!");
    e.target.reset();
  }

  return (
    <section id="waitlist" className="waitlist shell">
      <div className="sideLine"></div>

      <div className="waitlistInner">
        <p className="eyebrow">Early access</p>

        <h2>Join the Ischys alerts list.</h2>

        <p>
          Get prototype updates, launch pricing, and the first chance to test
          the product.
        </p>

        <form onSubmit={handleSubmit} className="signupForm">
          <input type="email" placeholder="Enter your email" required />
          <Button type="submit" variant="primary" className="waitlistSubmit">
            Join
          </Button>
        </form>
      </div>

      <div className="sideLine"></div>
    </section>
  );
}

export default Waitlist;
