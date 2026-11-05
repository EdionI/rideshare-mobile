import "server-only";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { getSql } from "./db";

export type Profil = { id: string; emri: string; roli: "udhetar" | "shofer" };
export type RezultatRuajtjeje = "hyr" | "ndaluar" | "fushe" | "ruajtur";

export async function profiliIm(): Promise<Profil | null> {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  if (!id || !/^\d+$/.test(id)) return null;
  const sql = getSql();
  // Nuk lejohet zgjedhja e rolit nga formulari ose nga GitHub.
  await sql`INSERT INTO profilet (github_id, emri)
    VALUES (${id}, ${session.user.name ?? "Student"}) ON CONFLICT (github_id) DO NOTHING`;
  const rows = await sql`SELECT github_id AS id, emri, roli FROM profilet WHERE github_id = ${id}`;
  return rows[0] as Profil;
}

export async function ndryshoOren(id: string, ora: string): Promise<RezultatRuajtjeje> {
  const profil = await profiliIm();
  if (!profil) return "hyr";
  if (profil.roli !== "shofer") return "ndaluar";
  if (!/^[123]$/.test(id) || !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(ora)) return "fushe";
  const sql = getSql();
  // Kushti i pronarit dhe roli kontrollohen në të njëjtin UPDATE.
  const rows = await sql`UPDATE udhetimet SET ora = ${ora}
    WHERE id = ${id} AND shofer_id = ${profil.id}
      AND EXISTS (SELECT 1 FROM profilet WHERE github_id = ${profil.id} AND roli = 'shofer')
    RETURNING id`;
  return rows.length === 1 ? "ruajtur" : "ndaluar";
}

export async function oraEPronarit(id: string): Promise<string | null> {
  const sql = getSql();
  const rows = await sql`SELECT ora FROM udhetimet WHERE id = '2' AND shofer_id = ${id}`;
  return rows[0]?.ora as string | undefined ?? null;
}
