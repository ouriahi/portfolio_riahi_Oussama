import {
  profile, pinsLeft, pinsRight, projects, experience, skills, publication, education,
} from "./data.js";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Chip() {
  return (
    <div className="chip" aria-label="Compétences clés">
      <ul className="pins pins-left">
        {pinsLeft.map((p, i) => (
          <li key={p} style={{ "--i": i }}><span>{p}</span><i /></li>
        ))}
      </ul>
      <div className="chip-body">
        <span className="chip-dot" />
        <strong>{profile.name}</strong>
        <small>{profile.title}</small>
      </div>
      <ul className="pins pins-right">
        {pinsRight.map((p, i) => (
          <li key={p} style={{ "--i": i + 4 }}><i /><span>{p}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="top">
        <a href="#accueil" className="brand">O. Riahi</a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#experience">Expérience</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <Chip />
          <p className="intro">{profile.intro}</p>
          <p className="cta">
            <a className="btn" href="#projets">Voir mes projets</a>
            <a className="btn ghost" href={`mailto:${profile.email}`}>M'écrire</a>
          </p>
        </section>

        <Section id="projets" title="Projets">
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title}>
                <p className="context">{p.context}</p>
                <h3>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Expérience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="context">{e.period}</p>
                <h3>{e.role}</h3>
                <p className="org">{e.org}</p>
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="competences" title="Compétences">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="formation" title="Formation et publication">
          <h3>{education.title}</h3>
          <p className="org">{education.org}. {education.note}</p>
          <p>{education.certs.join(" ; ")}.</p>
          <h3 className="gap">{publication.title}</h3>
          <p className="org">{publication.venue}, {publication.year}</p>
          <p><a href={publication.link} target="_blank" rel="noreferrer">Lire l'article sur HAL</a></p>
        </Section>

        <Section id="contact" title="Contact">
          <p className="big"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
          <p className="org">{profile.location}. Permis B.</p>
        </Section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
