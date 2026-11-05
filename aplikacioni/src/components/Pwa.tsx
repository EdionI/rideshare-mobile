"use client";

import { useEffect, useState } from "react";

export default function Pwa() {
  const [mesazh, setMesazh] = useState("Hape një herë me lidhje për ta ruajtur listën në këtë pajisje.");
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let cancelled = false;
    async function warmSnapshot() {
      if (cancelled || !navigator.serviceWorker.controller) return;
      try {
        const response = await fetch("/api/udhetimet", { cache: "no-store", credentials: "omit" });
        if (!cancelled) setMesazh(response.ok && response.headers.has("x-rideshare-saved-at")
          ? "Lista është ruajtur në këtë pajisje. Kopja mund të jetë e vjetër."
          : "Lista ende nuk është ruajtur. Provo përsëri kur lidhja të punojë.");
      } catch {
        if (!cancelled) setMesazh("Nuk e arritëm serverin. Provo listën e ruajtur për lexim.");
      }
    }
    navigator.serviceWorker.addEventListener("controllerchange", warmSnapshot);
    navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then(() => navigator.serviceWorker.ready).then(warmSnapshot).catch(() => {
        if (!cancelled) setMesazh("Leximi pa internet nuk u aktivizua në këtë shfletues.");
      });
    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", warmSnapshot);
    };
  }, []);
  return <aside className="pwa-access" aria-label="Leximi pa internet">
    <a href="/offline.html">Lista për lexim pa internet</a>
    <p role="status">{mesazh}</p>
  </aside>;
}
