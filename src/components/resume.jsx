import { education, experience, profile } from '../data';

function Resume() {
  return (
    <section id="resume" className="scroll-mt-16 bg-base-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold tracking-tight">Resume</h2>
          <a href={profile.resumeFile} className="btn btn-primary" download>
            Download PDF
          </a>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[3fr_2fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold">Experience</h3>
            <ol className="mt-6 border-l-2 border-base-300">
              {experience.map((job) => (
                <li key={`${job.role}-${job.dates}`} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-base-100"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-base-content/70">{job.dates}</p>
                  <p className="font-display text-xl font-semibold">{job.role}</p>
                  <p className="text-base-content/80">{job.org}</p>
                  {job.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-primary">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold">Education and certificates</h3>
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="text-sm text-base-content/70">{item.dates}</p>
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="text-base-content/80">{item.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
