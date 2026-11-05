# RideShare Mobile — Javët 1–3

Projekt mësimor për **Programimi për Pajisje Mobile, AAB 2026/2027**.

## Dokumentet dhe dorëzimet

- **Java 1:** [exit-ticket.md](exit-ticket.md) dhe [prd.md](prd.md). Ideja individuale është aplikacioni për kërkim pune; PRD-ja është një propozim që ende kërkon intervista dhe zgjedhjen e biznesit partner.
- **Java 2:** [java-02.md](java-02.md) dhe [skica.png](skica.png), për ushtrimin e përbashkët RideShare. [Dorëzimi #836](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/836) kaloi 2/2 kontrolle teknike.
- **Java 3:** kodi brenda `aplikacioni/`, [raporti java-03.md](java-03.md) dhe pamjet e provave te `provat/`.

`java-04.md` është modeli i ngarkuar më herët; Java 4 ende nuk është zbatuar.

## Si e nis aplikacionin

Duhet Node.js 20.9 ose më i ri; rekomandohet Node.js LTS. Në terminalin e dosjes së këtij repository:

```sh
cd aplikacioni
npm ci
npm run dev
```

Hap adresën që jep terminali, zakonisht `http://localhost:3000`.

Për kontrollin e ndërtimit dhe tipeve:

```sh
npm run build
npm run typecheck
```

Për ta nisur versionin e ndërtuar, përdor `npm run start` pas `npm run build`.

## Rrjedha e Javës 3

1. `/` shfaq tri karta me udhëtime fiktive.
2. `/udhetimi/2` shfaq Fushë Kosovë → AAB, orën 08:15 dhe vendtakimin Te stacioni kryesor.
3. `/udhetimi/2/kerkesa` shfaq **Simulim: Në pritje**. Nuk dërgohet kërkesë dhe nuk ruhet rezervim.
4. `/udhetimi/3` ka zero vende dhe buton të çaktivizuar. Edhe adresa direkte `/udhetimi/3/kerkesa` nuk lejon simulim kërkese.
5. `/udhetimi/99` dhe `/udhetimi/99/kerkesa` shfaqin **Udhëtimi nuk u gjet**, me kthim te lista.

## Ku gjendet kodi

- `aplikacioni/src/lib/udhetimet.ts`: burimi i vetëm i tri udhëtimeve fiktive.
- `aplikacioni/src/components/KartaUdhetimi.tsx`: komponenti i ripërdorshëm i kartës.
- `aplikacioni/src/app/page.tsx`: lista.
- `aplikacioni/src/app/udhetimi/[id]/page.tsx`: detajet.
- `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx`: gjendja e simuluar e kërkesës.
- `aplikacioni/src/app/udhetimi/[id]/not-found.tsx`: udhëtimi i panjohur.

## Çfarë mbetet për studentin

Rishiko dokumentet dhe kodin, kryej provën me një koleg dhe përditëso raportin me vëzhgimet reale. Provat e asistentit janë dokumentuar veçmas. Kalimi i kontrollit teknik të GitHub-it nuk është notë.

Për publikim të mëvonshëm në Vercel, **Root Directory** është `aplikacioni`. Publikimi nuk është bërë në këtë fazë.
