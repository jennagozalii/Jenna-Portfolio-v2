import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import { DownloadIcon } from "@/components/Icons";
import { profile, projects, experience, education, certificateGroups, extras } from "@/lib/data";

function SectionTitle({ title, eyebrow, children }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span className="eyebrow gradient-text">{eyebrow}</span>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.featured - b.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="page">
      <img className="mesh" src="/images/mesh-bg.webp" alt="" aria-hidden="true" />

      {/* Hero */}
      <section className="hero wrap">
        <img className="avatar" src={profile.photo} alt="Portrait of Jenna Gozali" width="196" height="196" />
        <h1>Jenna Gozali</h1>
        <p className="tagline">
          I build the dashboard, <span className="gradient-text">then ask what it means.</span>
        </p>
        <p className="hero-intro">
          Data analyst at Chubb Insurance in Kuala Lumpur, with four years across insurance, fintech and banking. Now
          I'm moving closer to the decisions themselves: what gets built, why, and how it ships.
        </p>
        <div className="btn-row">
          <a href={profile.cv} className="btn btn-solid" download>
            <DownloadIcon /> Download my CV
          </a>
          <a href="#contact" className="btn">Contact me</a>
        </div>
        <p className="open-to">Open to Business Analyst, Product and Project roles in APAC</p>
      </section>

      {/* About */}
      <section id="about" className="section wrap about">
        <SectionTitle title="About me" eyebrow="Who I am" />
        <div className="read">
          <p>
            For four years I've been the one who builds the dashboard and then asks what it actually means for the
            business. At Chubb I turn requirements from underwriting, claims, operations and finance into reporting
            people use. Before that I spent time in fintech and banking at Juris Technologies and iMoney, building
            models, pipelines and the dashboards that sat on top of them.
          </p>
          <p>
            Over the past few months, at dibimbing's Business Analyst and Product Strategy Bootcamp, I've been learning
            the other side: deciding what gets built in the first place. Requirements, PRDs, backlogs, budgets, risk
            registers and test plans. I'm Indonesian, based in KL, and open to relocating.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section wrap">
        <SectionTitle title="Projects" eyebrow="Top 3">
          The three that show best how I work end to end: finding the problem in the numbers, deciding what to build,
          and planning how it actually gets delivered.
        </SectionTitle>
        <FeaturedProjects projects={featured} />

        <h3 className="subhead" id="other-projects">Other projects</h3>
        <OtherProjects projects={others} />
      </section>

      {/* Experience */}
      <section id="experience" className="section wrap">
        <SectionTitle title="Experience" eyebrow="Where I've worked" />
        <ol className="jobs">
          {experience.map((job) => (
            <li key={job.role + job.org} className="job">
              <div className="job-head">
                <h3>
                  {job.org} <span className="role">/ {job.role}</span>
                </h3>
                <span className="job-when">
                  {job.when}, {job.where}
                </span>
              </div>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {job.skills && (
                <ul className="tags" aria-label="Tools">
                  {job.skills.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <h3 className="subhead">Education</h3>
        <div className="cards-2 edu">
          {education.map((e) => (
            <div key={e.title} className="card">
              <h3>{e.title}</h3>
              <span className="muted">
                {e.org}, {e.when}
              </span>
              <p>{e.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates and awards */}
      <section id="certificates" className="section wrap">
        <SectionTitle title="Certificates" eyebrow="Always learning" />
        <div className="cards-3">
          {certificateGroups.map((g) => (
            <div key={g.group} className="card">
              <h3>{g.group}</h3>
              <ul className="plain-list">
                {g.items.map((c) => (
                  <li key={c.name}>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer">
                        <strong>{c.name}</strong>
                      </a>
                    ) : (
                      <strong>{c.name}</strong>
                    )}
                    <span className="muted">
                      {c.issuer}
                      {c.when ? `, ${c.when}` : ""}
                      {c.href ? " · verified link" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="subhead">Awards and leadership</h3>
        <div className="card" style={{ maxWidth: 820, margin: "0 auto" }}>
          <ul className="plain-list">
            {extras.map((x) => (
              <li key={x.title}>
                {x.href ? (
                  <a href={x.href} target="_blank" rel="noreferrer">
                    <strong>{x.title}</strong>
                  </a>
                ) : (
                  <strong>{x.title}</strong>
                )}
                <span className="muted">{x.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section wrap contact">
        <SectionTitle title="Let's talk" eyebrow="Say hello" />
        <p>
          I'm looking for Business Analyst, Product and Project roles, especially in financial services, insurance and
          tech. If something here is useful to your team, or you just want to trade notes on how you run sprints, I'd
          like to hear from you.
        </p>
        <div className="btn-row">
          <a className="btn btn-solid" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.cv} download>
            <DownloadIcon /> Download my CV
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
