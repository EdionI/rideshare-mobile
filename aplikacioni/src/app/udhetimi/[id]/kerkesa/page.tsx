import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export default async function Kerkesa({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const udhetim = gjejUdhetimin(id);
  if (!udhetim) notFound();

  return (
    <main id="permbajtja">
      <Link className="back-link" href={`/udhetimi/${id}`}>← Kthehu te detajet</Link>
      <section className="status-panel">
        <span className="status-icon" aria-hidden="true">{udhetim.vende > 0 ? "◷" : "—"}</span>
        <p className="eyebrow">DEMONSTRIM I RRJEDHËS</p>
        {udhetim.vende > 0 ? <>
          <h1>Simulim: Në pritje</h1>
          <p className="intro">Kërkesa për {udhetim.nisja} → {udhetim.destinacioni}, në orën {udhetim.ora}, <strong>nuk është dërguar te shoferi.</strong></p>
          <p>Nuk është ruajtur rezervim dhe numri i vendeve nuk ka ndryshuar. Ruajtja dhe pranimi real shtohen në javët e ardhshme.</p>
        </> : <>
          <h1>Nuk ka vende të lira</h1>
          <p className="intro">Ky udhëtim është i plotë. Nuk është krijuar asnjë kërkesë. Zgjidh një udhëtim tjetër nga lista.</p>
        </>}
        <Link className="action" href="/">Kthehu te lista</Link>
      </section>
    </main>
  );
}
