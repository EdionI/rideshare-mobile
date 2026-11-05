# RideShare — Java 2

## 1. Problemi
Arta kërkon një udhëtim për në AAB, ndërsa Dreni ofron dy vende në veturë. Pa një listë të qartë, është e vështirë të krahasohen oraret, vendtakimet dhe vendet e lira. RideShare i mbledh këto informata dhe e bën të qartë që kërkesa nuk është ende rezervim i konfirmuar. Emrat dhe udhëtimet janë fiktive.

## 2. Përdoruesit
- Shoferi dëshiron të tregojë nisjen, destinacionin, orën, vendtakimin dhe vendet e lira; më vonë të pranojë ose refuzojë kërkesat.
- Udhëtari dëshiron të gjejë një udhëtim që i përshtatet, të lexojë detajet dhe të kërkojë një vend pa e ngatërruar kërkesën me konfirmimin.

## 3. Tri ekranet
1. Lista: tri karta udhëtimesh me nisjen, destinacionin, orën, vendet e lira dhe lidhjen Shiko detajet.
2. Detajet: të dhënat e kartës së zgjedhur, vendtakimi, Kërko vend dhe Kthehu te lista. Kur vendet janë zero, veprimi çaktivizohet.
3. Kërkesa në pritje: mesazhi Simulim: Në pritje, sqarimi se kërkesa nuk është dërguar dhe kthimi te detajet ose lista.

Skica digjitale ruhet si skica.png pranë këtij dokumenti. Ajo paraqet listën, detajet dhe gjendjen në pritje, me kthimin mbrapa dhe rastin kur nuk ka vende të lira.

## 4. MVP — vetëm tri veçori
1. Shikimi i listës së udhëtimeve.
2. Hapja e detajeve të udhëtimit të zgjedhur.
3. Kërkesa për një vend dhe shfaqja e gjendjes në pritje; në Javën 3 ky veprim është vetëm simulim. Konfirmimi real nga shoferi zhvillohet më vonë.

## 5. Çfarë e lëmë për më vonë?
Pagesat online dhe bisedat brenda aplikacionit nuk përfshihen në këtë version. Hyrja e përdoruesve, databaza dhe rezervimi real nuk zbatohen ende në Javën 3.

## 6. Si e provoj?
- Hap kartën 2: pres /udhetimi/2, Fushë Kosovë → AAB, ora 08:15 dhe vendtakimin Te stacioni kryesor.
- Kërko vend hap ekranin Simulim: Në pritje; nuk ruhet rezervim dhe numri i vendeve nuk ndryshon. Në versionin real kërkesa duhet të presë pranimin e shoferit.
- Karta 3 ka zero vende: butoni duhet të jetë i çaktivizuar; edhe adresa direkte e kërkesës duhet të tregojë se nuk ka vende.
- ID 99 duhet të tregojë Udhëtimi nuk u gjet dhe kthim te lista.

## 7. Prova me kolegun
Prova me një koleg ende nuk është dokumentuar. Duhet t’i jap skicën pa shpjegime, t’i kërkoj të gjejë një udhëtim e të kërkojë vend, pastaj të shënoj ku u hutua dhe çfarë ndryshova. Nuk po paraqes një provë të pakryer si të përfunduar.

## 8. Ndihma nga AI
AI ndihmoi në plotësimin e planit, përkufizimin e tri ekraneve dhe rasteve të testimit nga udhëzimet e profesorit. Unë duhet ta rishikoj planin dhe ta provoj me një koleg. Skica dhe kodi duhet të përputhen me këtë rrjedhë.
