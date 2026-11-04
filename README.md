# Portale «IIS Remo Brindisi – App della scuola»

Mini-app web installabile (PWA) che raccoglie i collegamenti alle app della scuola (script Google Apps Script) e che diventa l'app Android su Google Play tramite Trusted Web Activity (PWABuilder).

- `sito/` – file da caricare sul sito (HTTPS). Si modifica solo `config.js` per aggiungere o cambiare le app.
- `play-store/` – icona, copertina, schermate, testi e risposte ai moduli della Play Console.
- `GUIDA-PUBBLICAZIONE.md` – i passi completi: hosting su Aruba, indirizzi, account Play, pacchetto, verifica del dominio, aggiornamenti.

Pacchetto Android previsto: `it.edu.istitutoremobrindisi.app`.

Prove fatte (Chrome, telefono simulato): manifest valido e app installabile (nessun errore di installabilità secondo Chrome), service worker attivo, funzionamento senza rete con pagina di riserva, pagine Aiuto e Privacy.
