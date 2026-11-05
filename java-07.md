# RideShare Java 7: Kontrolli i MVP-së

## Rasti im

GitHub: EdionI

Kodi: P7-592

Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): Rasti 3, Klikim apo rezervim.

ID i udhëtimit në projektin tim: 2.

Të dhënat fiktive të rastit: Gjakovë drejt AAB-së, ora 10:20, 2 vende. Ora për provën e re: 10:25. Këto vlera përdoren përkohësisht te udhëtimi i laboratorit dhe në fund rikthehen vlerat fillestare.

## Parashikimi

Lista dhe detajet duhet të tregojnë të njëjtin udhëtim, orën 10:20 dhe 2 vende. Veprimi i kërkesës duhet të shpjegojë se hap një demonstrim. Pas klikimit duhet të shfaqet gjendja e simuluar, pa dërgim te shoferi, pa rezervim real dhe pa ulje të vendeve. Kur ora ndryshon në 10:25, ekranet duhet të lexojnë vlerën e re nga serveri.

## Dy probleme

1. Te /udhetimi/2, lidhja kryesore quhet Kërko vend. Vetë etiketa nuk tregon simulimin; këtë e shpjegon vetëm shënimi pas seksionit. Përdoruesi që skanon veprimin mund të presë kërkesë reale.
2. Te /udhetimi/2/kerkesa, titulli Simulim: Në pritje mund të lërë paqartësi se çfarë po pritet. Trupi shpjegon saktë se kërkesa nuk është dërguar, por nuk ka proces real që pret përgjigje. Ky është vëzhgim për tekstin, jo dështim i ruajtjes.

## Korrigjimi

Skedari: aplikacioni/src/app/udhetimi/[id]/page.tsx

Do të sqarohet etiketa e veprimit përpara klikimit, duke ruajtur kontrollin e vendeve dhe lidhjen me të njëjtin ID. Në këtë version fillestar kodi ende nuk është ndryshuar.

## Versionet

Gjendja fillestare ruhet në këtë commit përpara korrigjimit. Lidhjet e plota Para dhe Pas do të shtohen pas provave.

## Provat që bëra

Provat e korrigjimit ende nuk janë kryer në këtë version fillestar.

## Ndryshimi i ri

Planifikohet ndryshimi i vetëm i orës nga 10:20 në 10:25 dhe kontrolli i rrjedhës përsëri. Demonstrimi me kolegun ende nuk është kryer.
