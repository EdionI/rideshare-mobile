# RideShare Java 5: Hyrja dhe lejet

Data e verifikimit: 05.11.2026.

## Çfarë ndërtova

U shtua hyrja dhe dalja me GitHub përmes NextAuth 4.24.15. Identiteti merret nga sesioni i verifikuar; roli dhe pronari lexohen nga Neon. Profili i ri krijohet si udhetar. Roli shofer caktohet vetëm nga administratori i databazës së laboratorit, jo nga formulari.

OAuth App lokal përdor adresën http://127.0.0.1:3001 dhe callback-un /api/auth/callback/github. Kërkohet vetëm leximi i profilit për identitetin, pa leje repository ose email. Sekretet ruhen vetëm në .env.local, të përjashtuar nga Git.

## Provat që bëra

Provat teknike dhe kontrolli në shfletues u kryen nga asistenti gjatë përgatitjes së punës. Duhet t'i përsëris vetë dhe t'i demonstroj në klasë.

### Prova 1: Hyrja, rifreskimi dhe dalja

U hap /panel pa sesion: faqja kërkoi Hyr me GitHub dhe nuk shfaqi formularin e shoferit. U krye hyrja reale OAuth me GitHub; pas kthimit u shfaq profili me rolin fillestar udhetar. Pas rifreskimit profili mbeti i njohur. U klikua Dil dhe paneli kërkoi hyrje përsëri. Pastaj u krye hyrja sërish. Pamja është [hyrja](provat/java-05-hyrja.jpg).

### Prova 2: Shoferi ndryshon udhëtimin e vet

Pas hyrjes, profili i verifikuar u caktua shofer dhe pronar vetëm i ID 2 në Neon, përmes skriptit administrativ lokal. Në panel u vendos 08:25 dhe u klikua Ruaj orën. U shfaq Ora u ruajt me sukses. Lista, detajet e ID 2 dhe leximi i drejtpërdrejtë SQL në Neon treguan 08:25. Ora u rikthye nga paneli në 08:15 dhe leximi SQL konfirmoi rikthimin. Pamja është [ruajtja](provat/java-05-ruajtja.jpg).

### Prova 3: Veprimi pa leje refuzohet

Kontrolli i serverit u provua me një kërkesë POST të formularit real, me ID 1 dhe orën 08:35. Për këtë provë automatike u përdor një sesion testimi i nënshkruar lokalisht me sekretin e vetë aplikacionit dhe identitetin e profilit të laboratorit. Ky është test i aplikacionit tonë lokal; hyrja reale OAuth u provua veçmas në Provën 1.

Serveri e ridrejtoi kërkesën te /panel?m=ndaluar. Leximi SQL konfirmoi se ID 1 mbeti 08:00. Nuk u ndryshua fusha e fshehur përmes DevTools; u dërgua drejtpërdrejt e njëjta kërkesë formulari me ID-në tjetër.

U provuan edhe një orë e pavlefshme, një kërkesë pa sesion dhe një formular i vjetër pas heqjes së rolit shofer në databazë. Të gjitha u refuzuan dhe ora e ID 2 nuk ndryshoi. Roli shofer u rikthye. Rezultatet pa sekrete gjenden te [verifikimi teknik](provat/java-05-verifikimi.json).

## Ku gjendet puna

Repository: https://github.com/EdionI/rideshare-mobile.

Kodi i ri është te src/lib/auth.ts, src/lib/lejet.ts, src/components/Hyrja.tsx, src/app/api/auth/[...nextauth]/route.ts dhe src/app/panel/. Skema schema-java05.sql është pranë package.json. Skripti cakto-shoferin.mjs përdoret vetëm nga administratori lokal i laboratorit, pasi përdoruesi ka hyrë një herë.

npm run build dhe npm run typecheck kaluan. Publikimi në Vercel nuk është bërë. OAuth App është për provën lokale; nuk ka callback publik të prodhimit.

## Çfarë mbetet për përmirësim

Kërkesa për vend është ende simulim. Do t'i përsëris provat me një koleg dhe do të shtoj më vonë kërkesën reale sipas planit të lëndës. Profili duhet të shohë vetëm udhëtimet e veta për ndryshim; serveri duhet të mbetet autoriteti edhe kur ndryshohet formulari.

## Ndihma nga AI

AI ndihmoi në konfigurimin e OAuth App me miratimin tim, shkrimin e kodit, caktimin e profilit të laboratorit, provat dhe raportin. Raporti dallon hyrjen reale në shfletues nga sesioni i përdorur për testet automatike. Unë duhet ta kuptoj kodin dhe ta demonstroj vetë.
