import { about, profile } from '../data';

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-base-200 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[auto_1fr] md:items-start">
        <div className="avatar avatar-placeholder">
          {/* Swap this for a photo: <img src="/headshot.jpg" alt="Makaela Fauber" /> */}
          <div className="w-40 rounded-box bg-primary text-primary-content md:w-52">
            <span className="font-display text-5xl font-bold md:text-6xl">{profile.initials}</span>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight">About me</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-base-content/70">Based in {profile.location}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
