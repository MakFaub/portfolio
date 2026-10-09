import { profile } from '../data';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary py-24 text-primary-content">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Get in touch</h2>
        <p className="mt-4 max-w-xl text-lg opacity-90">
          I'm interested in roles that combine retail or store management with software, data, and
          operations. Email is the fastest way to reach me.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn border-0 bg-primary-content text-primary hover:opacity-90">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
