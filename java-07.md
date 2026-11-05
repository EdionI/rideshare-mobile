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

Ky skedar lexon udhëtimin nga Neon sipas ID-së dhe shfaq detajet. Vetëm kur vende > 0 shfaq lidhjen te kërkesa demonstrative; për 0 vende shfaq një buton të çaktivizuar. U ndryshua etiketa Kërko vend në Provo kërkesën (simulim). Kështu kufiri i veprimit lexohet përpara klikimit. Lidhja ruan të njëjtin ID dhe kontrolli i vendeve mbetet në server.

U korrigjua problemi i parë. Titulli i gjendjes së simuluar nga problemi i dytë mbetet për një përmirësim të mëvonshëm; shpjegimi se nuk është dërguar kërkesë është ende i dukshëm.

## Versionet

Para: https://github.com/EdionI/rideshare-mobile/commit/fa48d9e45b891c2915c6ed56000f55520da01a80

Pas: https://github.com/EdionI/rideshare-mobile/commit/ab5a146bd21d00f68ab350bb3f743d3ddfde1c40

Commit-i Para ruan parashikimin dhe kodin me etiketën fillestare. Commit-i Pas ndryshon vetëm etiketën në skedarin e detajeve. Raporti final ruhet në një commit të mëvonshëm.

## Provat që bëra

Verifikimi teknik u krye më 05.11.2026 në http://127.0.0.1:3001, me të dhëna fiktive të laboratorit. Këto rezultate nuk përfaqësojnë demonstrim personal para kolegut ose profesorit.

### Prova 1

Hapat: Te udhëtimi 2 u vendosën përkohësisht Gjakovë, 10:20 dhe 2 vende sipas rastit P7-592. U hap lista, u klikua Shiko detajet: Gjakovë drejt AAB, pastaj Provo kërkesën (simulim).

Pritshmëria: I njëjti ID dhe ora duhet të kalojnë në të tri pamjet. Klikimi duhet të jetë vetëm simulim dhe vendet nuk duhet të ulen.

Vëzhgimi: Lista dhe /udhetimi/2 treguan Gjakovë, 10:20 dhe 2 vende. /udhetimi/2/kerkesa tregoi Simulim: Në pritje, Gjakovë dhe 10:20, me tekstin se kërkesa nuk është dërguar te shoferi. Leximi SQL pas klikimit konfirmoi se ID 2 kishte ende 2 vende. [Pamja e simulimit](provat/java-07-simulimi.jpg).

### Prova 2

Hapat: U përsërit hapja e /udhetimi/2 dhe leximi i lidhjes kryesore, si në vëzhgimin fillestar. U ndoq lidhja te kërkesa.

Pritshmëria: Etiketa duhet ta tregojë simulimin përpara klikimit, duke ruajtur destinacionin /udhetimi/2/kerkesa.

Vëzhgimi: Përpara ndryshimit etiketa ishte Kërko vend. Pas ndryshimit ishte Provo kërkesën (simulim), e dukshme në detaje, dhe hapi gjendjen e simuluar për ID 2. [Para](provat/java-07-para.jpg) dhe [pas](provat/java-07-pas.jpg). Nuk u shfaq konfirmim rezervimi.

### Prova 3

Hapat: U ndryshua vetëm ora e ID 2 nga 10:20 në 10:25 me SQL. Nisja Gjakovë dhe 2 vendet mbetën njësoj. U hap lista sërish, pastaj detajet dhe kërkesa demonstrative.

Pritshmëria: Të tri pamjet duhet të lexojnë 10:25 për të njëjtin udhëtim. Etiketa e re duhet të mbetet e qartë dhe klikimi të mbetet simulim.

Vëzhgimi: Lista tregoi 10:25 dhe 2 vende; detajet treguan 10:25 dhe Provo kërkesën (simulim). Faqja e simulimit tregoi 10:25 dhe se kërkesa nuk ishte dërguar. [Pamja me orën e re](provat/java-07-ora-e-re.jpg).

Pas provave, SQL riktheu ID 2 në Fushë Kosovë, 08:15 dhe 1 vend. Si kontroll shtesë, /udhetimi/3 me 0 vende kishte butonin Nuk ka vende të lira të çaktivizuar. /udhetimi/99 shfaqi Udhëtimi nuk u gjet dhe kthimin te lista. npm run build dhe npm run typecheck kaluan.

## Ndryshimi i ri

Hyrja e re ishte ora 10:25 në vend të 10:20, me të njëjtin ID, nisje dhe numër vendesh. Parashikimi ishte përditësimi i orës në të tri pamjet, sepse të tria lexojnë të njëjtin rresht nga Neon. Rezultati përputhej me këtë parashikim.

Demonstrimi me kolegun ende nuk është kryer. Duhet të përsëritet personalisht kontrolli, të shpjegohet kushti vende > 0 dhe të provohet një hyrje e zgjedhur nga kolegu në takimin e radhës. Nuk pretendohet se ky kontroll është bërë në çift.

## Ndihma nga AI

AI ndihmoi me parashikimin teknik, korrigjimin e etiketës, provat lokale dhe përgatitjen e raportit.
