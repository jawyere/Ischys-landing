import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

function ScrollReveal({
  children,
  delay = 0,
  className = "",
  once = true,
  threshold = 0.18,
}) {
  const revealRef = useRef(null);

  useEffect(() => {
    const node = revealRef.current;

    if (!node) {
      return undefined;
    }

    const readyFrame = requestAnimationFrame(() => {
      node.classList.add("isRevealReady");
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("isVisible");

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          node.classList.remove("isVisible");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(node);

    return () => {
      cancelAnimationFrame(readyFrame);
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <div
      ref={revealRef}
      className={`scrollReveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
