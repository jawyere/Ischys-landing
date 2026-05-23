import { useRef } from "react";

function MagneticSurface({
  as: Component = "div",
  className = "",
  children,
  strength = 4,
  onMouseMove,
  onMouseLeave,
  ...props
}) {
  const surfaceRef = useRef(null);

  function handleMouseMove(event) {
    const surface = surfaceRef.current;

    if (!surface) {
      return;
    }

    const rect = surface.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    const rotateX = -normalizedY * strength;
    const rotateY = normalizedX * strength;

    /*
      strength now controls two things:
      1. rotateX / rotateY = the 3D tilt angle in degrees
      2. magnetic-x / magnetic-y = the small cursor-pull movement in pixels

      That means strength={0} turns off the magnetic pull/tilt, while strength={10}
      is intentionally obvious. The glow/scale still comes from CSS :hover.
    */
    const pullMultiplier = 0.7;
    const magneticX = normalizedX * strength * pullMultiplier;
    const magneticY = normalizedY * strength * pullMultiplier;

    surface.style.setProperty("--pointer-x", `${x}px`);
    surface.style.setProperty("--pointer-y", `${y}px`);
    surface.style.setProperty("--tilt-x", `${rotateY}deg`);
    surface.style.setProperty("--tilt-y", `${rotateX}deg`);
    surface.style.setProperty("--magnetic-x", `${magneticX}px`);
    surface.style.setProperty("--magnetic-y", `${magneticY}px`);

    onMouseMove?.(event);
  }

  function handleMouseLeave(event) {
    const surface = surfaceRef.current;

    if (!surface) {
      return;
    }

    surface.style.setProperty("--pointer-x", "50%");
    surface.style.setProperty("--pointer-y", "50%");
    surface.style.setProperty("--tilt-x", "0deg");
    surface.style.setProperty("--tilt-y", "0deg");
    surface.style.setProperty("--magnetic-x", "0px");
    surface.style.setProperty("--magnetic-y", "0px");

    onMouseLeave?.(event);
  }

  return (
    <Component
      ref={surfaceRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MagneticSurface;
