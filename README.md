# RideShare Mobile: Javët 1 deri 6

Projekt mësimor për Programimi për Pajisje Mobile, AAB 2026/2027.

## Dokumentet dhe dorëzimet

- Java 1: [exit-ticket.md](exit-ticket.md) dhe [prd.md](prd.md). Ideja individuale është aplikacioni për kërkim pune. PRD-ja ende kërkon intervista dhe zgjedhjen e biznesit partner. [Dorëzimi #427](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/427), 2/2 kontrolle teknike.
- Java 2: [java-02.md](java-02.md) dhe [skica.png](skica.png), ushtrimi i përbashkët RideShare. [Dorëzimi #836](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/836), 2/2.
- Java 3: [java-03.md](java-03.md), lista, detajet dhe kërkesa e simuluar. [Dorëzimi #842](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/842), 5/5.
- Java 4: [java-04.md](java-04.md), leximi real nga Neon dhe trajtimi i gabimeve. [Dorëzimi #847](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/847), 5/5.
- Java 5: [java-05.md](java-05.md), hyrja me GitHub dhe kontrolli në server i rolit dhe pronarit. [Dorëzimi #849](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/849), 5/5.
- Java 6: [java-06.md](java-06.md), manifesti, ikonat dhe lista publike për lexim offline. [Dorëzimi #852](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/852).

Pamjet dhe rezultatet e provave gjenden te [provat/](provat/). Kontrollet teknike nuk janë notë.

## Si e nis aplikacionin

Duhet Node.js 20.9 ose më i ri. Në dosjen e repository-t:

```sh
cd aplikacioni
npm ci
```

Në një kopje të re, kopjo `.env.example` si `.env.local` dhe plotëso lokalisht DATABASE_URL, GITHUB_ID, GITHUB_SECRET dhe NEXTAUTH_SECRET. Mos i ngarko në GitHub. Në kompjuterin ku u kryen provat, konfigurimi privat është vendosur tashmë.

OAuth App lokal përdor adresën `http://127.0.0.1:3001` dhe callback-un `http://127.0.0.1:3001/api/auth/callback/github`. NEXTAUTH_URL duhet të përputhet me këtë adresë. Nise kështu:

```sh
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Hap `http://127.0.0.1:3001`. Për versionin e ndërtuar:

```sh
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

## Databaza e laboratorit

Në një databazë të re Neon, pasi të kesh vendosur DATABASE_URL në `.env.local`, ekzekuto:

```sh
node --env-file=.env.local scripts/setup-db.mjs schema.sql
node --env-file=.env.local scripts/setup-db.mjs schema-java05.sql
```

Skema fillestare shton tri udhëtime fiktive. Në databazën ekzistuese këto hapa janë kryer. Mos e riekzekuto skemën fillestare mbi ndryshime që dëshiron t'i ruash.

Përdoruesi i ri hyn si udhetar. Vetëm administratori i laboratorit mund të përdorë `scripts/cakto-shoferin.mjs` me ID-në numerike të verifikuar të profilit, pasi ai ka hyrë një herë. Skripti e cakton shofer dhe pronar vetëm të udhëtimit 2.

## Rrjedha e aplikacionit

1. `/` lexon tri udhëtimet nga Neon. `/udhetimi/2` tregon detajet.
2. `/udhetimi/2/kerkesa` është simulim në pritje. Nuk krijon rezervim real.
3. Udhëtimi pa vende dhe ID-të e panjohura kanë mesazhet përkatëse.
4. `/panel` kërkon hyrje me GitHub. Serveri lejon ndryshimin e orës vetëm për shoferin që zotëron udhëtimin.
5. `/api/udhetimet` kthen vetëm gjashtë fushat publike.
6. Pas një vizite me lidhje, `/offline.html` lexon kopjen e ruajtur. Tregon burimin dhe kohën. Pas rikthimit të lidhjes përdor Rifresko listën.

Kopja mund të jetë e vjetër. Paneli, hyrja dhe veprimet POST nuk ruhen nga service worker. Lexuesi offline nuk konfirmon ose ridërgon rezervime.

## Çfarë mbetet për studentin

Rishiko kodin dhe raportet, përsërit provat me një koleg dhe në telefon, dhe demonstroji në klasë. Raportet shënojnë cilat prova kreu asistenti. Intervistat dhe zgjedhja e partnerit për idenë individuale mbeten për t'u kryer.

Publikimi në Vercel nuk është bërë. Për një publikim të mëvonshëm, Root Directory është `aplikacioni`; do të duhen konfigurimi privat dhe callback-u publik për atë adresë.
