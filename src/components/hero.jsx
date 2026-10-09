import { profile } from '../data';

// Contour rings pushed out of shape by SVG noise, so they read as a topographic map
function TopoBackground() {
  const rings = Array.from({ length: 16 }, (_, i) => 30 + i * 46);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-25"
      viewBox="0 0 1400 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="contour-wobble" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.007" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="110" />
        </filter>
      </defs>
      <g filter="url(#contour-wobble)" fill="none" stroke="currentColor" strokeWidth="1.25">
        {rings.map((rx) => (
          <ellipse key={rx} cx="1000" cy="360" rx={rx} ry={rx * 0.62} />
        ))}
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-base-100 pt-16"
    >
      <TopoBackground />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-xl text-base-content/80 sm:text-2xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a href={profile.resumeFile} className="btn btn-outline" download>
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
