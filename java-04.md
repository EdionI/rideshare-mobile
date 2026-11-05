# RideShare Java 4: Neon dhe PostgreSQL

Data e verifikimit: 05.11.2026.

## Çfarë ndërtova

Lista, detajet dhe kërkesa e simuluar tani lexojnë nga e njëjta databazë Neon në planin Free, në rajonin Frankfurt. Tabela udhetimet përmban tri udhëtime fiktive. Të dhënat nuk janë më një listë fikse brenda kodit. Lidhja krijohet vetëm në server, me paketën @neondatabase/serverless dhe mbrojtjen server-only.

## Provat që bëra

Provat teknike më poshtë u kryen nga asistenti gjatë përgatitjes së punës. Duhet t'i përsëris vetë dhe t'i demonstroj në klasë; nuk po i paraqes si provë me kolegun.

### Prova 1: Ndryshimi në databazë shfaqet në aplikacion

Përmes një lidhjeje të drejtpërdrejtë SQL me Neon, ora e ID 2 u ndryshua nga 08:15 në 08:25. U lexuan faqja kryesore dhe /udhetimi/2 nga serveri lokal: të dyja treguan 08:25, pa ndryshuar kodin. Ora u rikthye me SQL në 08:15 dhe të dyja faqet treguan 08:15. ID 3 vazhdoi të kishte zero vende, ndërsa ID 99 tregoi Udhëtimi nuk u gjet. Nuk u përdor SQL Editor për këtë provë; komandat u kryen nga mjeti lokal i asistentit.

### Prova 2: Lista bosh dhe rikthimi

Vetëm te lexoUdhetimet u shtua përkohësisht WHERE false para ORDER BY id. Pas rileximit u shfaq Nuk ka udhëtime për momentin. Nuk u shfaq mesazhi i gabimit të lidhjes dhe nuk u fshi asnjë rresht. Kushti u hoq dhe u verifikuan përsëri saktësisht tri karta.

### Prova 3: Lidhja mungon, rikthimi dhe siguria

Në .env.local çelësi DATABASE_URL u riemërtua përkohësisht në DATABASE_URL_PA_TEST dhe serveri lokal u ndal e u rinis. Shfletuesi shfaqi Nuk u lidhëm me databazën. Provo përsëri. Emri DATABASE_URL u rikthye dhe serveri u rinis përsëri; u shfaqën tri udhëtimet nga Neon. Pamjet janë [lista](provat/java-04-neon-lista.jpg) dhe [gabimi pa lidhje](provat/java-04-pa-lidhje.jpg).

Skedari .env.local është i përjashtuar nga Git në rrënjë dhe brenda aplikacioni/. Nuk është shtuar në commit. Kredencialet nuk janë shkruar në këtë raport, pamje apo kod. .env.example ka vetëm emra variablash dhe vlera bosh.

## Ku gjendet puna

Repository: https://github.com/EdionI/rideshare-mobile.

Skedarët kryesorë janë aplikacioni/schema.sql, src/lib/db.ts, src/lib/udhetimet.ts, faqja kryesore, detajet, kërkesa dhe komponenti GabimDatabaze.tsx. Raporti është pranë README. scripts/setup-db.mjs ekzekuton skemën me lidhjen private lokale, pa publikuar kredenciale.

Ndërtimi npm run build kaloi. Publikimi në Vercel nuk është bërë; prova u krye lokalisht me databazë të vërtetë Neon.

## Çfarë mbetet për përmirësim

Do t'i përsëris provat me një koleg. Kërkesa Në pritje mbetet simulim dhe nuk ruan rezervim. Në Javën 5 do të shtohen hyrja dhe lejet për ndryshimin e orës.

## Ndihma nga AI

AI ndihmoi në konfigurimin e Neon, shkrimin e kodit dhe SQL-së, provat teknike, pamjet dhe raportin. Unë duhet ta rishikoj kodin dhe ta demonstroj vetë rrjedhën.
