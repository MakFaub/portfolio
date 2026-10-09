import { projects } from '../data';

function ProjectCard({ project }) {
  const { title, course, summary, contributions, result, tags, repo, demo, pdf, featured } = project;

  return (
    <article
      className={`card border border-base-300 bg-base-100 ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="card-body gap-4">
        <div>
          <h3 className="card-title font-display text-2xl">{title}</h3>
          <p className="text-sm text-base-content/70">{course}</p>
        </div>

        <p>{summary}</p>

        {contributions?.length > 0 && (
          <div>
            <p className="font-semibold">What I built</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-primary">
              {contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {result && (
          <div role="note" className="rounded-field border-l-4 border-accent bg-base-200 px-4 py-3">
            {result}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {(repo || demo || pdf) && (
          <div className="card-actions mt-2">
            {repo && (
              <a href={repo} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                View code
              </a>
            )}
            {demo && (
              <a href={demo} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                Video demo
              </a>
            )}
            {pdf && (
              <a href={`${import.meta.env.BASE_URL}${pdf}`} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                Report PDF
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-base-200 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-bold tracking-tight">Projects</h2>
        <p className="mt-3 max-w-2xl text-lg text-base-content/80">
          Three projects from my computer science coursework at CU Boulder.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
