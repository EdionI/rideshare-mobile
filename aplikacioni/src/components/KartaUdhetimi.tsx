import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

export function KartaUdhetimi({ udhetim }: { udhetim: Udhetim }) {
  return (
    <article className="trip-card">
      <div className="card-topline">
        <span className="trip-time">{udhetim.ora}</span>
        <span className={`badge ${udhetim.vende === 0 ? "badge-full" : ""}`}>
          {udhetim.vende === 0 ? "Pa vende të lira" : `${udhetim.vende} ${udhetim.vende === 1 ? "vend i lirë" : "vende të lira"}`}
        </span>
      </div>
      <h2>{udhetim.nisja} <span aria-hidden="true">→</span> {udhetim.destinacioni}</h2>
      <p className="muted">{udhetim.vendtakimi}</p>
      <Link className="action" href={`/udhetimi/${udhetim.id}`} aria-label={`Shiko detajet: ${udhetim.nisja} → ${udhetim.destinacioni}`}>
        Shiko detajet <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
