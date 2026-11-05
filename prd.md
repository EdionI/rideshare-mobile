# PRD — Aplikacion për kërkim pune

**Autori:** Edion Islami  
**Kursi:** Programimi për Pajisje Mobile, AAB 2026/2027  
**Versioni:** 1.0 — propozim për MVP

## 1. Përdoruesi dhe problemi real
Punëkërkuesit kërkojnë shpallje në vende të ndryshme dhe e dërgojnë CV-në manualisht për secilin aplikim. Ideja nga Exit Ticket-i është një aplikacion web për telefon që e bën më të thjeshtë gjetjen e vendeve të punës dhe aplikimin.

## 2. Evidenca dhe validimi
Ky dokument është një propozim fillestar i bazuar në idenë time. Nuk kam dokumentuar ende tri intervista me përdorues. Para zhvillimit duhet të bisedoj me dy punëkërkues dhe një përfaqësues biznesi; të pyes si kërkojnë punë sot, çfarë i pengon dhe si duan t’i marrin aplikimet. Nuk po i paraqes supozimet si rezultate intervistash.

## 3. Hipoteza e vlerës
Nëse punëkërkuesi i gjen shpalljet dhe e përdor të njëjtën CV për aplikime, atëherë procesi mund të bëhet më i thjeshtë. Kjo hipotezë duhet provuar me përdorues; ende nuk kam matur kursim kohe.

## 4. Rrjedha kryesore — maksimumi pesë hapa
1. Përdoruesi hap listën e vendeve të punës.
2. Kërkon sipas titullit ose qytetit.
3. Hap kërkesat dhe afatin e një shpalljeje.
4. Zgjedh CV-në dhe dërgon aplikimin për atë pozitë.
5. Shikon konfirmimin e pranimit të aplikimit, jo konfirmim punësimi.

## 5. Kufijtë e MVP-së — tri veçori
1. Lista dhe kërkimi i shpalljeve.
2. Detajet e një shpalljeje.
3. Aplikimi me CV dhe konfirmimi i pranimit.

Jashtë MVP-së: vlerësimi automatik i CV-së, renditja automatike e kandidatëve, pagesat dhe bisedat brenda aplikacionit. Vlerësimi i CV-së përjashtohet sipas Exit Ticket-it tim.

## 6. Kriteret e pranimit — prova të planifikuara
- Kërkimi sipas qytetit kthen vetëm shpalljet përkatëse; pa rezultate shfaqet një mesazh i qartë.
- Detajet përputhen me shpalljen e zgjedhur.
- Pa CV ose pa fushat e detyrueshme aplikimi nuk dërgohet.
- Konfirmimi shfaqet vetëm pasi aplikimi të jetë ruajtur me sukses; gabimi lejon riprovim.
- Në ekran 375 px lista dhe formulari lexohen pa lëvizje horizontale.

Këto janë kritere për t’u testuar, jo pretendime se aplikacioni është ndërtuar.

## 7. Modeli minimal i të dhënave
- jobs: id, title, company, city, description, deadline
- applications: id, job_id, applicant_id, cv_reference, created_at

CV-të duhet të jenë private dhe të lexueshme vetëm nga aplikanti dhe punëdhënësi i autorizuar; për prova do të përdor të dhëna fiktive.

## 8. Rreziku dhe hapi i ardhshëm
Rreziku kryesor është nëse bizneset e pranojnë këtë mënyrë aplikimi. Hapi i ardhshëm është validimi i rrjedhës me përdorues dhe një biznes real. Biznesi partner ende nuk është përcaktuar.

## Ndihma nga AI
AI ndihmoi ta përputh këtë PRD me idenë e kërkimit të punës nga Exit Ticket-i dhe të shkruaj kriteret e testimit. Dokumenti kërkon rishikimin tim dhe intervistat reale. RideShare mbetet projekti i veçantë i ushtrimeve të javëve 2–3.
