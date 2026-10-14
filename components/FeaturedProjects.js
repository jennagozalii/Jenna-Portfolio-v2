import Link from "next/link";

export default function FeaturedProjects({ projects }) {
  return (
    <ol className="featured-list">
      {projects.map((p, i) => (
        <li key={p.slug} className="feature">
          <Link href={`/work/${p.slug}`} className="feature-media" tabIndex={-1} aria-hidden="true">
            <img src={p.thumb} alt="" loading={i === 0 ? "eager" : "lazy"} />
          </Link>
          <div className="feature-body">
            <span className="feature-num gradient-text">{String(i + 1).padStart(2, "0")} / {p.format}</span>
            <h3>
              <Link href={`/work/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.short}</p>
            {p.shows && (
              <ul className="tags" aria-label="What this project shows">
                {p.shows.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            )}
            {p.margin && <p className="feature-note">{p.margin}</p>}
            <Link href={`/work/${p.slug}`} className="feature-link">
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
