# RideShare Java 6: PWA dhe puna offline

Data e verifikimit: 05.11.2026.

## Çfarë ndërtova

Manifesti jep emrin RideShare AAB, nisjen në / dhe pamjen standalone. U shtuan ikonat PNG 192x192 dhe 512x512 nga materiali i lëndës. Service worker ruan dokumentin offline, ikonat dhe përgjigjen publike të udhëtimeve. Lista provohet fillimisht nga serveri; kur serveri nuk arrihet, lexohet kopja e fundit me paralajmërim dhe kohën e ruajtjes.

API publike kthen vetëm id, nisja, destinacioni, ora, vendtakimi dhe vende. Nuk përfshin profilin, email, pronarin ose sekrete. Hyrja, paneli dhe POST nuk ruhen ose ridërgohen. Kodi i Javës 5 ruan kontrollin e lejeve në server.

## Provat që bëra

Provat më poshtë u kryen nga asistenti në aplikacionin lokal. Nuk janë prova me një koleg ose në telefon fizik. Raporti shënon mënyrën reale të provës.

### Prova 1: Manifesti dhe vizita online

U kontrolluan përgjigjet HTTP të http://127.0.0.1:3001/manifest.webmanifest dhe të dy ikonave. Manifesti kishte emrin RideShare AAB, display standalone dhe start_url /. Leximi i skedarëve PNG konfirmoi përmasat 192x192 dhe 512x512. API ktheu tri udhëtime me vetëm gjashtë fushat publike. Rezultatet janë te [verifikimi teknik](provat/java-06-verifikimi.json).

Faqja kryesore regjistroi /sw.js dhe shfaqi se lista ishte ruajtur. Te /offline.html u shfaqën tri karta, burimi server dhe koha e ruajtjes 05.11.2026, 19:32:18 sipas orës lokale. Instalimi si aplikacion më vete nuk u krye dhe disponueshmëria e menysë së instalimit nuk u verifikua. Prova vazhdoi në shfletues. Pamja është [vizita online](provat/java-06-online.jpg).

### Prova 2: Pa internet dhe pas rifreskimit

Ndërprerja u simulua duke ndalur serverin lokal Next.js në portën 3001. Nuk u përdor Network Offline i DevTools; interneti për lidhjen me Neon mbeti aktiv. Kjo provon rastin kur serveri i aplikacionit nuk arrihet.

U hap / dhe u rifreskua faqja ndërsa serveri ishte i ndalur. Dokumenti offline u hap dhe shfaqi tri karta. ID 2 tregonte ende 08:15 dhe koha e ruajtjes mbeti 19:32:18. Mesazhi tregonte listën e fundit të ruajtur, që mund të ishte vjetruar, dhe se serveri nuk u arrit. Butoni Kërko vend ishte i çaktivizuar. Nuk u konfirmua rezervim. Pamja është [pas rifreskimit pa server](provat/java-06-offline.jpg).

Hapja pas rifreskimit provoi përdorimin real të dokumentit dhe listës së ruajtur, jo vetëm një pamje të mbetur në ekran.

### Prova 3: Lidhja rikthehet

Ndërsa serveri lokal ishte i ndalur, ora e ID 2 në Neon u ndryshua me SQL nga 08:15 në 08:25 përmes skriptit lokal. Nuk u përdor SQL Editor i panelit Neon. Rifresko listën në lexues vazhdoi të tregonte kopjen 08:15 dhe kohën e vjetër.

Serveri lokal u rinis. Pas klikimit Rifresko listën, ID 2 tregoi 08:25, mesazhi tregoi burimin server dhe koha e re ishte 19:33:59. Pamja është [rikthimi i serverit](provat/java-06-rikthimi.jpg).

Në fund ora e ID 2 u rikthye në Neon në 08:15 dhe lexuesi u rifreskua sërish. Leximi HTTP konfirmoi 08:15. U hap edhe paneli pas shtimit të PWA: sesioni njihej, roli ishte shofer dhe formulari i udhëtimit të vet tregonte 08:15.

## Ku gjendet puna

Repository: https://github.com/EdionI/rideshare-mobile.

Skedarët kryesorë brenda aplikacioni janë src/app/manifest.ts, src/app/api/udhetimet/route.ts, src/components/Pwa.tsx, public/sw.js, public/offline.html dhe public/icons/. Pwa është përfshirë në layout para përmbajtjes. next.config.ts shërben worker-in pa cache HTTP të vjetër.

npm run build dhe npm run typecheck kaluan. Publikimi në Vercel nuk është bërë; prova u krye në 127.0.0.1:3001.

## Çfarë mbetet për përmirësim

Vizita e parë pa kopje nuk mund të shpikë të dhëna. Lexuesi ka mesazhin Ende nuk ka listë të ruajtur. Ky rast nuk u provua me profil të pastër. Shfletuesi mund ta fshijë kopjen dhe ajo nuk zëvendëson databazën. Vendet mund të ndryshojnë, prandaj leximi offline nuk mjafton për rezervim.

Duhet ta përsëris me një koleg, me Network Offline të tab-it dhe në telefon. U kërkua viewport 375 px nga mjeti i shfletuesit, por dimensioni i matur mbeti 792 px, ndaj testi 375 px nuk raportohet si i kryer.

## Ndihma nga AI

AI shkroi kodin dhe raportin, kontrolloi manifestin, ikonat dhe fushat publike, ndali e rinisi serverin për provën e kopjes dhe ndryshoi përkohësisht orën në Neon. Unë duhet ta rishikoj kodin, t'i përsëris provat dhe të dokumentoj vëzhgimet e mia dhe të kolegut.
