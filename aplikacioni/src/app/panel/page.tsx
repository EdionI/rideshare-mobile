import Link from "next/link";
import Hyrja from "@/components/Hyrja";
import { profiliIm, oraEPronarit } from "@/lib/lejet";
import { ruajOren } from "./actions";

export const dynamic = "force-dynamic";
const mesazhet: Record<string, string> = {
  hyr: "Hyr në llogari para se të ndryshosh udhëtimin.",
  ndaluar: "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.",
  fushe: "Shkruaj një orë të vlefshme, p.sh. 08:25. ID duhet të jetë 1, 2 ose 3.",
  ruajtur: "Ora u ruajt me sukses. Kontrollo listën dhe detajet.",
  databaza: "Nuk u lidhëm me databazën. Provo përsëri.",
};

export default async function Panel({ searchParams }: { searchParams: Promise<{ m?: string; error?: string }> }) {
  const { m, error } = await searchParams;
  let profil;
  let ora: string | null = null;
  try {
    profil = await profiliIm();
    if (profil?.roli === "shofer") ora = await oraEPronarit(profil.id);
  } catch {
    return <main id="permbajtja"><h1>Paneli im</h1><p className="notice" role="alert">{mesazhet.databaza}</p><a className="action" href="/panel">Provo përsëri</a></main>;
  }
  return <main id="permbajtja">
    <Link className="back-link" href="/">← Kthehu te lista</Link>
    <p className="eyebrow">HYRJA DHE LEJET</p><h1>Paneli im</h1>
    {m && mesazhet[m] && <p className="notice" role="status">{mesazhet[m]}</p>}
    {error && <p className="notice" role="alert">Hyrja nuk u përfundua. Provo përsëri me GitHub.</p>}
    {!profil ? <p className="intro">Lista është publike. Për panelin hyr me llogarinë tënde GitHub.</p> : <div className="profile-summary"><p>Përshëndetje, {profil.emri}.</p><p>Roli: <strong>{profil.roli}</strong></p><p>ID ime GitHub: <code>{profil.id}</code></p></div>}
    <Hyrja brenda={Boolean(profil)} />
    {profil?.roli === "shofer" && ora !== null ? <form className="detail-panel edit-form" action={ruajOren}>
      <h2>Ndrysho orën e udhëtimit tim</h2>
      <p>Fushë Kosovë → AAB, udhëtimi 2</p>
      <input type="hidden" name="id" value="2" />
      <label htmlFor="ora">Ora e re</label>
      <input id="ora" name="ora" type="time" defaultValue={ora} required />
      <button className="action" type="submit">Ruaj orën</button>
      <p className="muted">Mund të ndryshosh vetëm udhëtimin që të përket.</p>
    </form> : profil && <p className="notice">{profil.roli === "shofer" ? "Nuk ke një udhëtim të caktuar për ndryshim." : "Si udhëtar mund të shohësh udhëtimet; nuk mund të ndryshosh orën e shoferit."}</p>}
    <p className="notice">Kërkesa për vend mbetet simulim. Ky panel ndryshon vetëm orën e një udhëtimi fiktiv.</p>
  </main>;
}
