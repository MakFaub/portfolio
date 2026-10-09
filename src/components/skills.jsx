import { skillGroups } from '../data';

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-base-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-bold tracking-tight">Skills</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={`badge badge-soft badge-lg ${group.color}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
