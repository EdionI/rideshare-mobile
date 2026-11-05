# RideShare — Java 3

**Data e verifikimit:** 05.11.2026

## Çfarë ndërtova

Me ndihmën e AI u ndërtua aplikacioni Next.js me App Router, TypeScript dhe stile për telefon brenda dosjes `aplikacioni/`. Ai ka listën e tri udhëtimeve fiktive, detajet sipas ID-së dhe ekranin e kërkesës së simuluar. `KartaUdhetimi.tsx` ripërdoret për secilin udhëtim; të gjitha faqet lexojnë të njëjtin burim `udhetimet.ts`.

**Kush i kreu provat:** provat teknike dhe kontrolli në shfletues më poshtë u kryen nga asistenti AI gjatë përgatitjes së punës. Nuk janë paraqitur si provë personale apo si provë me kolegun. Unë duhet t'i përsëris dhe ta demonstroj rrjedhën në klasë.

## Provat që bëra — verifikimi i kryer me ndihmën e asistentit

### Prova 1: Lista në telefon

Në shfletues u hap faqja kryesore me pamje telefoni 375 × 812 px. Pritej të shfaqeshin tri karta, të lexueshme pa lëvizje horizontale. U gjetën saktësisht tri karta; gjerësia e dokumentit ishte 360 px kundrejt pamjes 375 px, pra pa tejkalim horizontal. Kartat e tjera shihen duke lëvizur poshtë. Pamja është ruajtur te [provat/java-03-lista.jpg](provat/java-03-lista.jpg). Kjo është pamje telefoni e simuluar në shfletues; prova në pajisje fizike mbetet për t'u bërë.

### Prova 2: Detajet e udhëtimit të dytë

U klikua lidhja e kartës së dytë. Pritej adresa `/udhetimi/2`, nisja Fushë Kosovë, ora 08:15 dhe vendtakimi Te stacioni kryesor. U shfaqën të gjitha të dhënat e pritshme dhe lidhja Kërko vend. Pamja: [provat/java-03-detajet.jpg](provat/java-03-detajet.jpg).

U hap edhe karta 3: u shfaq Lipjan → AAB, ora 07:45, zero vende dhe butoni Nuk ka vende të lira ishte i çaktivizuar. Adresa direkte `/udhetimi/3/kerkesa` u kontrollua teknikisht dhe nuk shfaqi gjendje Në pritje. Te `/udhetimi/99` u shfaq Udhëtimi nuk u gjet dhe kthimi te lista, pa treguar të dhënat e një udhëtimi tjetër. Pamja: [provat/java-03-id-panjohur.jpg](provat/java-03-id-panjohur.jpg).

### Prova 3: Kërkesa në pritje

U klikua Kërko vend për ID 2. Pritej Simulim: Në pritje, pa rezervim real. U hap `/udhetimi/2/kerkesa`; mesazhi sqaroi që kërkesa nuk është dërguar te shoferi dhe nuk është ruajtur rezervim. Kthimi te detajet, pastaj te lista, funksionoi. Gjerësia e dokumentit në ekranin e kërkesës ishte 375 px për pamje 375 px, pa tejkalim horizontal. Një kontroll teknik para/pas konfirmoi që numri i vendeve nuk ndryshoi. Pamja: [provat/java-03-ne-pritje.jpg](provat/java-03-ne-pritje.jpg).

## Kontrollet teknike

- `npm run build`: kaloi.
- `npm run typecheck`: kaloi.
- Tetë kontrolle mbi faqet reale të serverit lokal kaluan: lista, detajet e ID 2, kërkesa e simuluar, udhëtimi pa vende, adresa direkte e kërkesës pa vende, dy adresat me ID 99 dhe pandryshueshmëria e të dhënave pas simulimit.

## Çfarë do të përmirësoj

Do ta provoj në telefon fizik dhe me një koleg, pastaj do të shënoj pengesat e vërejtura. Ende nuk ka databazë, hyrje përdoruesi apo kërkesë reale; këto janë jashtë kufirit të Javës 3. Në javët e ardhshme të dhënat fiktive do të zëvendësohen me të dhëna të ruajtura sipas udhëzimit të lëndës.

## Ndihma nga AI

AI ndihmoi në shkrimin e kodit, skicës digjitale, dokumenteve dhe provave teknike; gjithashtu kontrolloi rrjedhën në shfletues dhe ruajti pamjet. Nuk pretendoj se provat i kam kryer vetë ose me një koleg. Më mbetet ta kuptoj kodin, ta përsëris rrjedhën dhe ta demonstroj në klasë.
