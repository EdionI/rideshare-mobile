"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ndryshoOren } from "@/lib/lejet";

export async function ruajOren(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  let mesazh: string;
  try { mesazh = await ndryshoOren(id, String(formData.get("ora") ?? "")); }
  catch { mesazh = "databaza"; }
  if (mesazh === "ruajtur") {
    revalidatePath("/");
    revalidatePath(`/udhetimi/${id}`);
  }
  // redirect është jashtë catch, sepse përfundon rrjedhën e kërkesës.
  redirect("/panel?m=" + mesazh);
}
