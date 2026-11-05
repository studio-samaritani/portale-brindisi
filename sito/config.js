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
    { id: 'bar', nome: 'Bar Didattico', descrizione: 'Saldo, ricariche e tessera del bar', icona: '☕', per: 'Studenti e personale', url: 'https://script.google.com/a/macros/remobrindisi.istruzioneer.it/s/AKfycbzTxsL_lS1M7QTH1mFDZdJMXrfb8bykUQyNjLKod3bRajmILDB394IV1Sy7mOV7Z814/exec' },
    { id: 'fsl', nome: 'Gestionale FSL', descrizione: 'Formazione scuola-lavoro', icona: '🎓', per: 'Studenti e docenti', url: 'https://script.google.com/a/macros/remobrindisi.istruzioneer.it/s/AKfycbxNTFBXsf3aWcFirzHuiqW4BkRoiWeyq-sX6Dh99e_5G9_VYEDqthO-RrASdfHkVvlV/exec' },
    { id: 'attestati', nome: 'Attestati sicurezza', descrizione: 'Archivio attestati sicurezza', icona: '📜', per: 'Personale', url: 'https://script.google.com/a/macros/remobrindisi.istruzioneer.it/s/AKfycbxKsXGc4Q31vT4oDF9JVfRQw1G9GsQQnrk1h_gTPecebb02IZlpw0jFV_QzKRBXFap7yg/exec' },
    { id: 'sicurezza', nome: 'Gestionale sicurezza', descrizione: 'Sicurezza81 – documenti e scadenze', icona: '🦺', per: 'Personale', url: 'https://script.google.com/a/macros/remobrindisi.istruzioneer.it/s/AKfycbwQ0E5TxBhHjA0uDiNFoN2LfpOr4025E7QE_YOCgB0ky8YRRxnQDYoBKFz0Pkp9eiq6/exec' }
  ],

  // Collegamenti utili (pagine esterne). Con url: '' non vengono mostrati.
  collegamenti: [
    { nome: 'Sito della scuola', icona: '🌐', url: 'https://www.istitutoremobrindisi.edu.it/' },
    { nome: 'Circolari', icona: '📰', url: 'https://www.istitutoremobrindisi.edu.it/circolare/' },
    { nome: 'Registro elettronico', icona: '📘', url: '' },
    { nome: 'Pago In Rete', icona: '💳', url: 'https://www.istruzione.it/pagoinrete/' }
  ],

  versione: 2
};
