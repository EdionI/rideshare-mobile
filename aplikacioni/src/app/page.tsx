import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";

export default function Home() {
  return (
    <main id="permbajtja">
      <p className="eyebrow">SË BASHKU DREJT KAMPUSIT</p>
      <h1>Udhëtimet për AAB<span className="accent">.</span></h1>
      <p className="intro">Zgjidh nisjen që të përshtatet. Lexo detajet para se të kërkosh një vend.</p>
      <div className="list-heading"><h2>Nisjet e disponueshme</h2><span>3 udhëtime fiktive</span></div>
      <div className="trip-list">{udhetimet.map((udhetim) => <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />)}</div>
      <aside className="notice"><strong>Si funksionon?</strong> Hap detajet → kërko vend → shiko gjendjen në pritje. Në këtë javë kërkesa është vetëm simulim.</aside>
    </main>
  );
}
