"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function OtherProjects({ projects }) {
  const [active, setActive] = useState("all");
  // only show filter buttons that actually have projects behind them
  const used = categories.filter((c) => c.id === "all" || projects.some((p) => p.tags.includes(c.id)));
  const shown = active === "all" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by skill">
        {used.map((c) => (
          <button key={c.id} type="button" aria-pressed={active === c.id} onClick={() => setActive(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      <ul className="other-grid">
        {shown.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="mini">
              <img src={p.thumb} alt="" loading="lazy" />
              <div>
                <p className="meta">{p.kind === "side" ? "Side project" : p.format}</p>
                <h3>{p.title}</h3>
                <p>{p.short}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
