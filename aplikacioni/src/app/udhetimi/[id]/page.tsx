import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";
import { GabimDatabaze } from "@/components/GabimDatabaze";

export const dynamic = "force-dynamic";

export default async function Detajet({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let udhetim;
  try { udhetim = await gjejUdhetimin(id); }
  catch { return <GabimDatabaze />; }
  if (!udhetim) notFound();

  return (
    <main id="permbajtja">
      <Link className="back-link" href="/">← Kthehu te lista</Link>
      <p className="eyebrow">DETAJET E UDHËTIMIT</p>
      <h1>{udhetim.nisja} <span className="accent">→</span> {udhetim.destinacioni}</h1>
      <p className="intro">Kontrollo orën, vendtakimin dhe vendet e lira para kërkesës.</p>
      <section className="detail-panel" aria-label="Të dhënat e udhëtimit">
        <dl>
          <div><dt>Ora e nisjes</dt><dd>{udhetim.ora}</dd></div>
          <div><dt>Vendtakimi</dt><dd>{udhetim.vendtakimi}</dd></div>
          <div><dt>Vende të lira</dt><dd>{udhetim.vende}</dd></div>
        </dl>
        {udhetim.vende > 0 ? <Link className="action" href={`/udhetimi/${id}/kerkesa`}>Provo kërkesën (simulim) <span aria-hidden="true">→</span></Link> : <button className="action" type="button" disabled>Nuk ka vende të lira</button>}
      </section>
      <aside className="notice">Ky është udhëtim fiktiv. Kërkesa në hapin tjetër nuk dërgohet te një shofer dhe nuk rezervon vend.</aside>
    </main>
  );
}
