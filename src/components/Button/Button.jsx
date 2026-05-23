import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  href,
  to,
  type = "button",
  variant = "primary",
  className = "",
  target,
  rel,
  ariaLabel,
  onClick,
}) {
  const classes = `siteButton siteButton--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;