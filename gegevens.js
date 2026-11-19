/*
  GEGEVENS VAN DE KAZM-WEBSITE
  ============================
  Hier pas je alles aan wat regelmatig verandert.

  Zo werkt het:
  - Verander alleen de tekst TUSSEN de aanhalingstekens "…".
  - Laat de aanhalingstekens, komma's en haakjes staan.
  - Klik daarna op "Commit changes". Na 1 à 2 minuten staat het online.
  - Laat je een veld leeg (""), dan toont de site de standaardtekst.
*/

window.KAZM = {

  // ---- Algemeen -------------------------------------------------------
  ledenaantal: "±120",

  // ---- Zweefkamp ------------------------------------------------------
  kamp: {
    week1:          "12 t.e.m. 16 juli 2027",   // verschijnt ook in de kalender
    week2:          "19 t.e.m. 23 juli 2027",   // verschijnt ook in de kalender
    inschrijvingen: "Inschrijvingen starten in 2027. Zet je nu al op de wachtlijst.",
    email:          "info [at] zweefkamp.be",   // contactadres voor het kamp, met [at] i.p.v. @ (leeg = niet getoond)
    // De knop onder "Inschrijven" in de kampsectie:
    knopTekst: "Wil je meer info? →",   // bv. "Schrijf je in →" of "Op de wachtlijst →"
    knopLink:  "",                         // leeg = naar het contactformulier,
                                           // of een volledige link, bv. naar een Google Form

    // Wachtlijst (Fillout-formulier van info@zweefkamp.be).
    // Kamp volzet? Zet wachtlijst op true: de knop wordt dan "Op de wachtlijst →"
    // en opent het wachtlijstformulier. Weer false = gewone knop van hierboven.
    wachtlijst:     true,
    wachtlijstLink: "https://forms.fillout.com/t/2b4AtcywxDus"
  },

  // ---- Contactgegevens op de pagina ------------------------------------
  // E-mail: schrijf het adres VERSTOPT, met [at] in plaats van @,
  // bv. "info [at] kazm.be". Zo vinden spambots het niet in dit bestand.
  // Op de site staat een knop "Toon e-mailadres"; pas na een klik
  // verschijnt het echte, klikbare adres. Gebruik een clubadres, geen privéadres.
  // Telefoon: is wél voor iedereen leesbaar. Gebruik geen privénummer.
  contact: {
    email:    "secretariaatKAZM [at] telenet.be",                 // bv. "info [at] kazm.be"  (leeg = regel wordt niet getoond)
    telefoon: ""                  // leeg = regel "Telefoon" wordt niet getoond
  },

  // ---- Infobrochure ---------------------------------------------------
  // Leeg = de knop "Infobrochure (PDF)" wordt niet getoond.
  // Om hem te tonen: vul de link naar de PDF in, bv.
  // "img/infobrochure.pdf" (PDF in de map img op GitHub) of een volledige link.
  brochure: "",

  // ---- Formulieren ---------------------------------------------------
  // Vul per formulier een Web3Forms-sleutel in (aanbevolen), bv.
  //   "1a2b3c4d-1234-5678-9abc-1a2b3c4d5e6f"
  // Zo'n sleutel vraag je gratis aan op web3forms.com: vul daar het adres in
  // dat de berichten moet krijgen, en de sleutel wordt naar dat adres gemaild.
  // Een Formspree-link ("https://formspree.io/f/…") werkt ook.
  // Leeg = het formulier verstuurt niets en toont een melding.

  // Algemeen formulier (lid worden, initiatievlucht, andere vragen) → secretariaat
  formulier: "",   // nog geen sleutel van het secretariaat: het formulier toont dan een melding

  // Kampvragen: keuze "Zweefkamp" in het formulier (ook via de kampknop) → info@zweefkamp.be
  formulierKamp: "92e90fb6-5e7d-4cae-9023-a10172df19cd",

  // ---- Vliegkalender --------------------------------------------------
  // Eén regel per activiteit. Kopieer een regel om er een toe te voegen,
  // verwijder een regel om ze weg te halen.
  // { kampweek: 1 } en { kampweek: 2 } nemen automatisch de kampdata over
  // van hierboven (bij "Zweefkamp"): die hoef je hier dus niet te herhalen.
  kalender: [
    { wanneer: "Najaar en winter 2026–2027", activiteit: "Theoriecursus voor leerling-piloten" },
    { wanneer: "Winter 2026–2027",           activiteit: "Winterwerk" },
    { wanneer: "Eind winter 2027",           activiteit: "Bouw van de nieuwe hangar" },
    { kampweek: 1 },
    { kampweek: 2 },
  ]

};
