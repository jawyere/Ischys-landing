import { useRef } from "react";

function MagneticSurface({
  as: Component = "div",
  className = "",
  children,
  strength = 4,
  tiltStrength = 3,
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

    /*
      strength now ONLY controls the magnetic pull movement.

      Example:
      strength={0}  = no cursor-pull movement
      strength={4}  = subtle movement
      strength={10} = stronger movement

      tiltStrength controls the 3D tilt separately.
      Leave tiltStrength alone unless you specifically want more/less tilt.
    */

    const safeStrength = Number.isFinite(Number(strength))
      ? Math.max(0, Number(strength))
      : 0;

    const safeTiltStrength = Number.isFinite(Number(tiltStrength))
      ? Math.max(0, Number(tiltStrength))
      : 0;

    const rotateX = -normalizedY * safeTiltStrength;
    const rotateY = normalizedX * safeTiltStrength;

    const pullMultiplier = 0.8;
    const magneticX = normalizedX * safeStrength * pullMultiplier;
    const magneticY = normalizedY * safeStrength * pullMultiplier;

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