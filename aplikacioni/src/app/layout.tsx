import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideShare · Udhëtimet për AAB",
  description: "Projekt mësimor i Javës 3: udhëtime fiktive dhe kërkesë e simuluar për vend.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq">
      <body>
        <a className="skip-link" href="#permbajtja">Kalo te përmbajtja</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="RideShare, faqja kryesore"><span className="brand-mark" aria-hidden="true">R</span>RideShare<span className="brand-aab">/ AAB</span></Link>
          <span className="demo-label">Java 3 · Demonstrim</span>
        </header>
        {children}
        <footer className="site-footer">Të dhëna fiktive · Pa rezervime reale · Projekt mësimor</footer>
      </body>
    </html>
  );
}
