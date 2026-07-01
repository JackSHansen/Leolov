#security vulnerability found in vite
## har ikke fixet vulnabilety så denne fil bør ikke benyttes eller åbnes








# Leo-Lov Onepage

Kort opsummering
- Formål: En enkel, responsiv one-page hjemmeside for advokatfirmaet Leo-Lov, der følger det udleverede design.
- Tech: React + TypeScript (.tsx), SCSS, Vite.
- Struktur: 
  - Components/NavBar (sticky navigation med ankerlinks)
  - Components/Hero (heltop billede, titel; Services er placeret i Hero)
  - Components/Services (4 servicekort)
  - Components/About (to feature-sektioner: “Intet problem”, “Evig garanti”)
  - Components/Team (team-galleri med billeder)
  - Components/Contact (kontaktinfo + Google Maps iFrame)
  - Components/Footer (simpel footer)
- Assets: Billeder ligger i src/assets og importeres i komponenterne.

Funktionalitet
- Sticky navbar der forbliver i toppen ved scroll.
- Ankerlinks der scroller til de korrekte sektioner.
- Responsive layouts for mobil, tablet og desktop.
- Hero indeholder services-kort som “hænger” under billedet.
- Google Maps er indlejret i Contact.

Kør projektet
- npm install
- npm run dev (lokal udvikling)
- npm run build (produktion)
- npm run preview (forhåndsvisning af build)

Noter
- Erstat placeholders med endelige billeder efter behov.
- Justér SCSS-variabler og breakpoints for finpudsning ift. det endelige design.
