import { useState } from "react";
import Button from "../../../components/Button/Button";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <nav className="pillNav">
        <a href="#home" className="navBrand" onClick={closeMenu}>
          <span className="brandDot"></span>
          Ischys
        </a>

        <div className="navLinks">
          <a href="#how">How it works</a>
          <a href="#app">App</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <Button href="#waitlist" variant="primary" className="navButton">
          Join waitlist
        </Button>

        <button
          className="menuButton"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobileMenu">
          <a href="#how" onClick={closeMenu}>
            How it works
          </a>

          <a href="#app" onClick={closeMenu}>
            App
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#waitlist" onClick={closeMenu} className="mobileMenuCta">
            Join waitlist
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
