# Portale «IIS Remo Brindisi – App della scuola»

Mini-app web installabile (PWA) che raccoglie i collegamenti alle app della scuola (script Google Apps Script) e che diventa l'app Android su Google Play tramite Trusted Web Activity (PWABuilder).

- `sito/` – file da caricare sul sito (HTTPS). Si modifica solo `config.js` per aggiungere o cambiare le app.
- `play-store/` – icona, copertina, schermate, testi e risposte ai moduli della Play Console.
- `GUIDA-PUBBLICAZIONE.md` – i passi completi: hosting su Aruba, indirizzi, account Play, pacchetto, verifica del dominio, aggiornamenti.

Pacchetto Android previsto: `it.edu.istitutoremobrindisi.app`.

Prove fatte (Chrome, telefono simulato): manifest valido e app installabile (nessun errore di installabilità secondo Chrome), service worker attivo, funzionamento senza rete con pagina di riserva, pagine Aiuto e Privacy.

## Pubblicazione attuale
Il portale è pubblicato con **GitHub Pages**: <https://studio-samaritani.github.io/portale-brindisi/>.
A ogni modifica del ramo `main` il workflow «Pubblica il portale» (`.github/workflows/pubblica.yml`) rimette online la cartella `sito`.
Per ora si installa **dal browser**, senza Google Play: «Installa» su Android e computer, «Aggiungi alla schermata Home» su iPhone.
Google Play resta facoltativo (vedi `GUIDA-PUBBLICAZIONE.md`). Per pubblicarla su Play serve `assetlinks.json` nella radice del dominio:
o un dominio proprio che punta a GitHub (consigliato), o il repository `studio-samaritani.github.io`.

## Locandina
`materiale/Locandina-App-della-scuola.pdf`: foglio A4 da affiggere, con il QR del portale e le istruzioni di installazione per Android e iPhone.
Si rigenera stampando in PDF `materiale/locandina.html` (A4, con sfondi).
