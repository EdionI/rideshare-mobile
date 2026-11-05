import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { GabimDatabaze } from "@/components/GabimDatabaze";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  let udhetimet: Udhetim[];
  try { udhetimet = await lexoUdhetimet(); }
  catch { return <GabimDatabaze />; }
  return (
    <main id="permbajtja">
      <p className="eyebrow">SË BASHKU DREJT KAMPUSIT</p>
      <h1>Udhëtimet për AAB<span className="accent">.</span></h1>
      <p className="intro">Zgjidh nisjen që të përshtatet. Lexo detajet para se të kërkosh një vend.</p>
      <div className="list-heading"><h2>Nisjet e disponueshme</h2><span>{udhetimet.length} udhëtime · Burimi: Neon</span></div>
      {udhetimet.length === 0 ? <p className="notice" role="status">Nuk ka udhëtime për momentin.</p> : <div className="trip-list">{udhetimet.map((udhetim) => <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />)}</div>}
      <aside className="notice"><strong>Si funksionon?</strong> Hap detajet → kërko vend → shiko gjendjen në pritje. Në këtë javë kërkesa është vetëm simulim.</aside>
    </main>
  );
}
