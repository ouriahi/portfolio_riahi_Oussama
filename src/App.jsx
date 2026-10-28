import { useState, useEffect, useRef } from "react";
import { content } from "./data.js";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

/* Schémas d'architecture techniques en SVG intégrés pour chaque projet */
function ProjectDiagram({ type }) {
  if (type === "microscope") {
    return (
      <div className="arch-diagram" role="img" aria-label="Architecture Microscope OPTO GigE Vision">
        <svg viewBox="0 0 680 170" className="arch-svg">
          <rect x="10" y="25" width="160" height="120" rx="6" className="svg-box" />
          <text x="90" y="55" className="svg-title">PC Hôte Industriel</text>
          <text x="90" y="80" className="svg-sub">eBUS Player / NI MAX</text>
          <text x="90" y="102" className="svg-sub">Vision Builder</text>

          <line x1="170" y1="85" x2="265" y2="85" className="svg-line-main" />
          <text x="217" y="73" className="svg-badge">GigE Vision</text>
          <text x="217" y="103" className="svg-sub">1 câble RJ45</text>

          <rect x="265" y="15" width="200" height="140" rx="6" className="svg-box-highlight" />
          <text x="365" y="42" className="svg-title">Raspberry Pi (Linux)</text>
          <text x="365" y="66" className="svg-sub">Serveur C++ / Qt / GenICam</text>
          <text x="365" y="88" className="svg-sub">Autofocus Sobel Temps Réel</text>
          <text x="365" y="110" className="svg-sub">Auto-détection Ports Série</text>

          <line x1="465" y1="55" x2="525" y2="45" className="svg-line" />
          <line x1="465" y1="85" x2="525" y2="85" className="svg-line" />
          <line x1="465" y1="115" x2="525" y2="125" className="svg-line" />
          <text x="495" y="35" className="svg-sub">RS-232</text>

          <rect x="525" y="20" width="145" height="36" rx="4" className="svg-box" />
          <text x="597" y="43" className="svg-sub">Moteurs Axes XYZ</text>

          <rect x="525" y="67" width="145" height="36" rx="4" className="svg-box" />
          <text x="597" y="90" className="svg-sub">Contrôleur LED</text>

          <rect x="525" y="114" width="145" height="36" rx="4" className="svg-box" />
          <text x="597" y="137" className="svg-sub">Capteur Optique</text>
        </svg>
      </div>
    );
  }
  if (type === "neupis") {
    return (
      <div className="arch-diagram" role="img" aria-label="Architecture NeuPIS Apprentissage Distribué">
        <svg viewBox="0 0 680 165" className="arch-svg">
          <rect x="15" y="18" width="175" height="55" rx="6" className="svg-box" />
          <text x="102" y="42" className="svg-title">Nœud Edge 1 (ARM)</text>
          <text x="102" y="60" className="svg-sub">Couches Bas Niveau (Split)</text>

          <rect x="15" y="92" width="175" height="55" rx="6" className="svg-box" />
          <text x="102" y="116" className="svg-title">Nœud Edge N (ARM)</text>
          <text x="102" y="134" className="svg-sub">Données privées locales</text>

          <line x1="190" y1="45" x2="275" y2="75" className="svg-line-main" />
          <line x1="190" y1="120" x2="275" y2="90" className="svg-line-main" />
          <text x="233" y="53" className="svg-badge">Activations</text>

          <rect x="275" y="25" width="195" height="115" rx="6" className="svg-box-highlight" />
          <text x="372" y="52" className="svg-title">Protocole NeuPIS</text>
          <text x="372" y="76" className="svg-sub">Partitionnement Interactif</text>
          <text x="372" y="98" className="svg-sub">Compression & Agrégation</text>
          <text x="372" y="120" className="svg-sub">Bande passante optimisée</text>

          <line x1="470" y1="82" x2="520" y2="82" className="svg-line-main" />

          <rect x="520" y="35" width="145" height="95" rx="6" className="svg-box" />
          <text x="592" y="65" className="svg-title">Serveur / Cluster</text>
          <text x="592" y="88" className="svg-sub">Couches Profondes</text>
          <text x="592" y="108" className="svg-sub">Convergence Globale</text>
        </svg>
      </div>
    );
  }
  if (type === "fpga") {
    return (
      <div className="arch-diagram" role="img" aria-label="Chaîne de filtrage FPGA VHDL">
        <svg viewBox="0 0 680 140" className="arch-svg">
          <rect x="15" y="40" width="120" height="60" rx="6" className="svg-box" />
          <text x="75" y="66" className="svg-title">Entrée Flux</text>
          <text x="75" y="86" className="svg-sub">ADC / Pixels</text>

          <line x1="135" y1="70" x2="180" y2="70" className="svg-line-main" />

          <rect x="180" y="30" width="150" height="80" rx="6" className="svg-box-highlight" />
          <text x="255" y="58" className="svg-title">Registres Décalage</text>
          <text x="255" y="80" className="svg-sub">Buffers Lignes VHDL</text>
          <text x="255" y="98" className="svg-sub">Fenêtre 3x3 / FIR</text>

          <line x1="330" y1="70" x2="375" y2="70" className="svg-line-main" />

          <rect x="375" y="30" width="150" height="80" rx="6" className="svg-box-highlight" />
          <text x="450" y="58" className="svg-title">Pipeline DSP MAC</text>
          <text x="450" y="80" className="svg-sub">Virgule Fixe Synchrone</text>
          <text x="450" y="98" className="svg-sub">1 éch. / cycle clk</text>

          <line x1="525" y1="70" x2="565" y2="70" className="svg-line-main" />

          <rect x="565" y="40" width="100" height="60" rx="6" className="svg-box" />
          <text x="615" y="66" className="svg-title">Sortie Temps</text>
          <text x="615" y="86" className="svg-sub">Réel &gt;100MHz</text>
        </svg>
      </div>
    );
  }
  return null;
}

/* Démo interactive du Filtre de Sobel & Autofocus */
function SobelDemo({ ui }) {
  const [blur, setBlur] = useState(2);
  const [score, setScore] = useState(0);
  const [customImg, setCustomImg] = useState(null);
  const srcCanvasRef = useRef(null);
  const dstCanvasRef = useRef(null);

  useEffect(() => {
    const srcCanvas = srcCanvasRef.current;
    const dstCanvas = dstCanvasRef.current;
    if (!srcCanvas || !dstCanvas) return;
    const w = 260;
    const h = 180;
    const ctx = srcCanvas.getContext("2d", { willReadFrequently: true });
    const dstCtx = dstCanvas.getContext("2d");

    const processSobel = () => {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const gray = new Float32Array(w * h);

      for (let i = 0; i < w * h; i++) {
        const idx = i * 4;
        gray[i] = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
      }

      // Flou boîte rapide répété pour simuler la défocalisation optique
      let current = gray;
      const radius = Math.round(blur);
      if (radius > 0) {
        for (let pass = 0; pass < 2; pass++) {
          const temp = new Float32Array(w * h);
          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              let sum = 0;
              let count = 0;
              for (let ky = -radius; ky <= radius; ky++) {
                for (let kx = -radius; kx <= radius; kx++) {
                  const nx = x + kx;
                  const ny = y + ky;
                  if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                    sum += current[ny * w + nx];
                    count++;
                  }
                }
              }
              temp[y * w + x] = sum / count;
            }
          }
          current = temp;
        }
      }

      // Réécriture de l'image floutée sur le canvas de gauche
      const blurredImg = ctx.createImageData(w, h);
      for (let i = 0; i < w * h; i++) {
        const val = current[i];
        blurredImg.data[i * 4] = val;
        blurredImg.data[i * 4 + 1] = val;
        blurredImg.data[i * 4 + 2] = val;
        blurredImg.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(blurredImg, 0, 0);

      // Calcul du filtre de Sobel (Gx, Gy)
      const sobelOut = dstCtx.createImageData(w, h);
      let totalEnergy = 0;

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const gx =
            -current[(y - 1) * w + (x - 1)] + current[(y - 1) * w + (x + 1)] +
            -2 * current[y * w + (x - 1)] + 2 * current[y * w + (x + 1)] +
            -current[(y + 1) * w + (x - 1)] + current[(y + 1) * w + (x + 1)];

          const gy =
            -current[(y - 1) * w + (x - 1)] - 2 * current[(y - 1) * w + x] - current[(y - 1) * w + (x + 1)] +
            current[(y + 1) * w + (x - 1)] + 2 * current[(y + 1) * w + x] + current[(y + 1) * w + (x + 1)];

          const mag = Math.min(255, Math.sqrt(gx * gx + gy * gy));
          totalEnergy += mag;

          const idx = (y * w + x) * 4;
          sobelOut.data[idx] = mag * 0.2;
          sobelOut.data[idx + 1] = mag;
          sobelOut.data[idx + 2] = mag * 0.75;
          sobelOut.data[idx + 3] = 255;
        }
      }
      dstCtx.putImageData(sobelOut, 0, 0);
      setScore(Math.round(totalEnergy / (w * h)));
    };

    if (customImg) {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(customImg, 0, 0, w, h);
      processSobel();
    } else {
      // Mire de calibration microscopique synthétique (circuit PCB / damier)
      ctx.fillStyle = "#18222a";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "#eceee9";
      ctx.lineWidth = 3;
      ctx.strokeRect(20, 20, 220, 140);

      // Pistes de circuit imprimé
      ctx.fillStyle = "#eceee9";
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(35 + i * 16, 35, 8, 55);
      }
      ctx.beginPath();
      ctx.arc(185, 65, 28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(185, 65, 12, 0, Math.PI * 2);
      ctx.fill();

      // Grille micrométrique
      ctx.lineWidth = 1.5;
      for (let x = 35; x < 225; x += 14) {
        ctx.beginPath();
        ctx.moveTo(x, 110);
        ctx.lineTo(x, 145);
        ctx.stroke();
      }
      processSobel();
    }
  }, [blur, customImg]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => setCustomImg(img);
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const isSharp = blur <= 1;

  return (
    <div className="sobel-demo">
      <h3>{ui.demoTitle}</h3>
      <p className="org">{ui.demoDesc}</p>

      <div className="sobel-controls">
        <label className="slider-label">
          <span>{ui.demoBlurLabel} <strong>{blur} px</strong></span>
          <input
            type="range"
            min="0"
            max="8"
            step="1"
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
          />
        </label>
        <div className="sobel-actions">
          <label className="btn ghost small-btn">
            {ui.demoUpload}
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </label>
          {customImg && (
            <button type="button" className="btn ghost small-btn" onClick={() => setCustomImg(null)}>
              {ui.demoReset}
            </button>
          )}
        </div>
      </div>

      <div className="sobel-canvases">
        <div className="canvas-card">
          <span className="canvas-label">{ui.demoOriginal}</span>
          <canvas ref={srcCanvasRef} width="260" height="180" />
        </div>
        <div className="canvas-card">
          <span className="canvas-label">{ui.demoSobel}</span>
          <canvas ref={dstCanvasRef} width="260" height="180" />
        </div>
      </div>

      <div className="sobel-Readout">
        <div>
          <span>{ui.demoScoreLabel} </span>
          <strong className="score-val">{score} pts</strong>
        </div>
        <span className={`focus-badge ${isSharp ? "sharp" : "blur"}`}>
          {isSharp ? ui.demoStatusSharp : ui.demoStatusBlur}
        </span>
      </div>
    </div>
  );
}

function Chip({ profile, pinsLeft, pinsRight }) {
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

function List({ label, items }) {
  if (!items?.length) return null;
  return (
    <div className="detail-block">
      <h4>{label}</h4>
      <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}

function Project({ p, ui, onOpenCaseStudy }) {
  const hasDetail = p.goal || p.done || p.results;
  return (
    <li className="project-card">
      <p className="context">{p.context}</p>
      <h3>{p.title}</h3>

      {/* Chiffres clés mesurables par projet */}
      {p.metrics?.length > 0 && (
        <ul className="kpi-row">
          {p.metrics.map((m) => <li key={m} className="kpi-pill">{m}</li>)}
        </ul>
      )}

      {/* Preuve visuelle : image ou schéma d'architecture SVG */}
      {p.image && <img src={p.image} alt={p.title} className="project-img" loading="lazy" />}
      {p.diagramType && <ProjectDiagram type={p.diagramType} />}

      <p>{p.summary}</p>
      <ul className="tags">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>

      <div className="project-actions">
        {p.caseStudy && (
          <button type="button" className="btn small-btn" onClick={() => onOpenCaseStudy(p)}>
            {ui.caseStudyBtn}
          </button>
        )}
        {p.link && (
          <a className="btn ghost small-btn" href={p.link} target="_blank" rel="noreferrer">
            {p.linkLabel || ui.readHal}
          </a>
        )}
      </div>

      {hasDetail && (
        <details>
          <summary>{ui.projectDetails}</summary>
          {p.goal && <div className="detail-block"><h4>{ui.goalLabel}</h4><p>{p.goal}</p></div>}
          <List label={ui.doneLabel} items={p.done} />
          <List label={ui.resultsLabel} items={p.results} />
        </details>
      )}
    </li>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const t = content[lang];

  return (
    <>
      <header className="top">
        <a href="#accueil" className="brand">O. Riahi</a>
        <nav aria-label="Navigation principale">
          <a href="#apropos">{t.nav.about}</a>
          <a href="#projets">{t.nav.projects}</a>
          <a href="#demo">{t.nav.demo}</a>
          <a href="#github">{t.nav.github}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#competences">{t.nav.skills}</a>
          <a href="#articles">{t.nav.articles}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="lang-btn"
            aria-label="Basculer la langue FR/EN"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="lang-btn"
            aria-label="Basculer le thème clair ou sombre"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <Chip profile={t.profile} pinsLeft={t.pinsLeft} pinsRight={t.pinsRight} />
          <p className="intro">{t.profile.intro}</p>
          <p className="cta">
            <a className="btn" href="#projets">{t.hero.seeProjects}</a>
            <a className="btn ghost" href={t.profile.cvUrl} target="_blank" rel="noopener noreferrer">
              {t.hero.downloadCv}
            </a>
            <a className="btn ghost" href={`mailto:${t.profile.email}`}>{t.hero.writeMe}</a>
          </p>
          <p className="org">{t.profile.location}. {t.profile.availability}.</p>
        </section>

        {/* Section À propos + Photo / Avatar & Chiffres */}
        <Section id="apropos" title={t.sections.about}>
          <div className="about-grid">
            <div className="about-avatar">
              <div className="avatar-badge" aria-hidden="true">OR</div>
            </div>
            <div className="about-text">
              <h3>{t.about.headline}</h3>
              {t.about.paragraphs.map((para) => (
                <p key={para} className="about-p">{para}</p>
              ))}
              <ul className="about-stats">
                {t.about.highlights.map((h) => (
                  <li key={h.label}>
                    <strong>{h.value}</strong>
                    <span>{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Projets avec visuels, chiffres et études de cas */}
        <Section id="projets" title={t.sections.projects}>
          <ul className="projects">
            {t.projects.map((p) => (
              <Project
                key={p.id}
                p={p}
                ui={t.ui}
                onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)}
              />
            ))}
          </ul>
        </Section>

        {/* Démo Interactive Filtre de Sobel */}
        <Section id="demo" title={t.sections.demo}>
          <SobelDemo ui={t.ui} />
        </Section>

        {/* Dépôts de code public GitHub */}
        <Section id="github" title={t.sections.github}>
          <div className="repo-grid">
            {t.githubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="repo-card"
              >
                <h4>{repo.name} ↗</h4>
                <p>{repo.desc}</p>
                <ul className="tags">
                  {repo.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </a>
            ))}
          </div>
        </Section>

        {/* Expérience avec KPI */}
        <Section id="experience" title={t.sections.experience}>
          <ol className="timeline">
            {t.experience.map((e) => (
              <li key={e.role}>
                <p className="context">{e.period}</p>
                <h3>{e.role}</h3>
                <p className="org">{e.org}. {e.meta}.</p>
                {e.kpi && <p className="exp-kpi">⚡ {e.kpi}</p>}
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Compétences */}
        <Section id="competences" title={t.sections.skills}>
          <dl className="skills">
            {t.skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <p className="gap"><strong>{t.sections.certs} :</strong> {t.certs.join(" ; ")}.</p>
          <p><strong>{t.sections.languages} :</strong> {t.languages}</p>
        </Section>

        {/* Formation */}
        <Section id="formation" title={t.sections.formation}>
          <ul className="edu">
            {t.education.map((e) => (
              <li key={e.title}>
                <p className="context">{e.year}</p>
                <h3>{e.title}</h3>
                <p className="org">{e.org}. {e.note}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Publication scientifique */}
        <Section id="publication" title={t.sections.publication}>
          <h3>{t.publication.title}</h3>
          <p className="org">{t.publication.venue}, {t.publication.year}</p>
          <p className="gap">
            <a className="btn small-btn" href={t.publication.link} target="_blank" rel="noreferrer">
              {t.ui.readHal}
            </a>
          </p>
        </Section>

        {/* Articles Techniques */}
        <Section id="articles" title={t.sections.articles}>
          <div className="articles-list">
            {t.articles.map((art) => (
              <article key={art.id} className="article-card">
                <p className="context">{art.date} · {art.readTime}</p>
                <h3>{art.title}</h3>
                <p>{art.summary}</p>
                <button
                  type="button"
                  className="btn ghost small-btn gap-top"
                  onClick={() => setActiveArticle(art)}
                >
                  {t.ui.readArticleBtn}
                </button>
              </article>
            ))}
          </div>
        </Section>

        {/* Recommandations */}
        <Section id="recommandations" title={t.sections.testimonials}>
          <div className="testimonials-grid">
            {t.testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>« {item.quote} »</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span className="org">{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.sections.contact}>
          <p className="big"><a href={`mailto:${t.profile.email}`}>{t.profile.email}</a></p>
          <p>
            <a href={t.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}
            <a href={t.profile.github} target="_blank" rel="noreferrer">GitHub</a>
            {" · "}
            <a href={t.profile.cvUrl} target="_blank" rel="noreferrer">CV (PDF)</a>
          </p>
          <p className="org">{t.profile.location}. {t.ui.driverLicense}. {t.profile.availability}.</p>
        </Section>
      </main>

      {/* Modale Étude de Cas */}
      {activeCaseStudy && (
        <div className="modal-backdrop" onClick={() => setActiveCaseStudy(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modal-header">
              <div>
                <p className="context">{activeCaseStudy.context}</p>
                <h2>{activeCaseStudy.title}</h2>
              </div>
              <button type="button" className="btn ghost small-btn" onClick={() => setActiveCaseStudy(null)}>
                ✕ {t.ui.closeModal}
              </button>
            </div>
            {activeCaseStudy.diagramType && <ProjectDiagram type={activeCaseStudy.diagramType} />}
            <div className="modal-body">
              <div className="detail-block">
                <h4>{t.ui.caseProblem}</h4>
                <p>{activeCaseStudy.caseStudy.problem}</p>
              </div>
              <div className="detail-block">
                <h4>{t.ui.caseArch}</h4>
                <p>{activeCaseStudy.caseStudy.architecture}</p>
              </div>
              <div className="detail-block">
                <h4>{t.ui.caseChallenges}</h4>
                <p>{activeCaseStudy.caseStudy.challenges}</p>
              </div>
              <div className="detail-block">
                <h4>{t.ui.caseResults}</h4>
                <p>{activeCaseStudy.caseStudy.results}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale Article Technique */}
      {activeArticle && (
        <div className="modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modal-header">
              <div>
                <p className="context">{activeArticle.date} · {activeArticle.readTime}</p>
                <h2>{activeArticle.title}</h2>
              </div>
              <button type="button" className="btn ghost small-btn" onClick={() => setActiveArticle(null)}>
                ✕ {t.ui.closeModal}
              </button>
            </div>
            <div className="modal-body">
              {activeArticle.body.map((paragraph, idx) => (
                <p key={idx} className="article-p">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="foot">© {new Date().getFullYear()} {t.profile.name}</footer>
    </>
  );
}