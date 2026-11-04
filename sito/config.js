/*
 * ============================================================
 *  PORTALE IIS "REMO BRINDISI" – FILE DI CONFIGURAZIONE
 *  È l'UNICO file da modificare per aggiungere o cambiare le app.
 * ============================================================
 *
 *  Come inserire l'indirizzo di un'app:
 *   1. pubblicate lo script Google come app web e copiate l'URL (finisce con /exec);
 *   2. incollatelo tra le virgolette di  url: ''  dell'app giusta;
 *   3. aumentate di uno il numero in  versione  qui in fondo;
 *   4. caricate questo file sul sito al posto del vecchio.
 *  Un'app con  url: ''  compare nel portale come «In arrivo».
 *  Il telefono vede le modifiche al primo avvio con internet, senza aggiornare l'app da Google Play.
 */
var PORTALE = {
  scuola: {
    nome: 'IIS "Remo Brindisi"',
    sottotitolo: 'Comacchio – Lido degli Estensi (FE)',
    sito: 'https://www.istitutoremobrindisi.edu.it/'
  },

  // Le app della scuola (script Google). "per" è solo un'indicazione: ogni app controlla da sola chi può entrare.
  app: [
    { id: 'bar', nome: 'Bar Didattico', descrizione: 'Saldo, ricariche e tessera del bar', icona: '☕', per: 'Studenti e personale', url: '' },
    { id: 'fsl', nome: 'Gestione FSL', descrizione: 'Formazione scuola-lavoro', icona: '🎓', per: 'Studenti e docenti', url: '' },
    { id: 'attestati', nome: 'Attestati', descrizione: 'Archivio attestati sicurezza', icona: '📜', per: 'Personale', url: '' },
    { id: 'sicurezza', nome: 'Gestione Sicurezza', descrizione: 'Sicurezza81 – documenti e scadenze', icona: '🦺', per: 'Personale', url: '' }
  ],

  // Collegamenti utili (pagine esterne). Con url: '' non vengono mostrati.
  collegamenti: [
    { nome: 'Sito della scuola', icona: '🌐', url: 'https://www.istitutoremobrindisi.edu.it/' },
    { nome: 'Circolari', icona: '📰', url: 'https://www.istitutoremobrindisi.edu.it/circolare/' },
    { nome: 'Registro elettronico', icona: '📘', url: '' },
    { nome: 'Pago In Rete', icona: '💳', url: 'https://www.istruzione.it/pagoinrete/' }
  ],

  versione: 1
};
