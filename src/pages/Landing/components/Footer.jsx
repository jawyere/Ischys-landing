import "./Footer.css";

const INSTAGRAM_URL = "https://www.instagram.com/YOUR_INSTAGRAM_HANDLE";
const TIKTOK_URL = "https://www.tiktok.com/@YOUR_TIKTOK_HANDLE";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <p className="footerBrand">Ischys</p>
          <p className="footerText">
            Smart hydration monitoring built for the bottle you already own.
          </p>
        </div>

        <div className="socialLinks">
          <a
            href={"https://www.instagram.com/ischys_fitness/"}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Ischys on Instagram"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>

          <a
            href={"https://www.tiktok.com/@ischys_fitness"}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Ischys on TikTok"
          >
            <TikTokIcon />
            <span>TikTok</span>
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 Ischys. Concept product in development.</p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="socialIcon"
      fill="none"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="socialIcon"
      fill="none"
    >
      <path
        d="M14 4v10.2a4.2 4.2 0 1 1-3.5-4.14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4c.55 3.05 2.25 4.75 5 5.25"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Footer;