# Portale e app «IIS Remo Brindisi» – guida alla pubblicazione

Cosa c'è nel pacchetto:

| Cartella | Contenuto |
|---|---|
| `sito/` | Il portale da caricare sul sito: pagina con le icone delle app, installazione sul telefono, funzionamento senza rete, aiuto, informativa privacy, file di verifica per Google Play |
| `play-store/` | Il materiale per la scheda di Google Play: icona, copertina, 4 schermate, testi e risposte ai moduli |

L'app Android **non va programmata**. È il portale stesso, «impacchettato» con il metodo ufficiale di Google per le app web (Trusted Web Activity), attraverso il servizio gratuito **PWABuilder**. Dopo la pubblicazione, **si aggiorna modificando solo il sito**: nuove app, nuovi indirizzi, testi. Su Google Play si ricarica un pacchetto solo se cambiano nome o icona.

---

## Fase 1 – Mettere online il portale (sito professionale, Aruba)

1. **Scegliere l'indirizzo.** Il consiglio è un **sottodominio dedicato**, per esempio `brindisi.studio-samaritani.com`. Resta separato da WordPress, e il file di verifica di Google sta nella sua radice. Nel pannello Aruba: *Hosting Linux → Gestione domini/sottodomini → Crea sottodominio*, e collegatelo a una cartella nuova, per esempio `/brindisi`. Va bene anche un altro nome, purché poi non cambi più.
2. **Attivare HTTPS** sul sottodominio (certificato SSL Aruba incluso o Let's Encrypt). Senza HTTPS l'app non si installa.
3. **Caricare il contenuto della cartella `sito/`** nella cartella del sottodominio, con il File Manager di Aruba o con FileZilla. Caricate anche i file che iniziano con il punto: **`.htaccess`** e la cartella **`.well-known`**. In FileZilla: menu *Server → Forza la visualizzazione dei file nascosti*.
4. **Controllare** dal telefono che si apra `https://brindisi.studio-samaritani.com/`. Con Chrome deve comparire il riquadro giallo «Installa l'app sul telefono».

> Il portale non contiene dati personali: sono solo pagine con i collegamenti.

## Fase 2 – Inserire gli indirizzi delle app

Aprite `sito/config.js` con il Blocco note (le istruzioni sono dentro il file).

1. Incollate l'URL `…/exec` di ogni app nel suo campo `url: ''`.
2. Aumentate `versione`.
3. Ricaricate **solo `config.js`** sul sito.

Le app senza URL compaiono come «In arrivo». I telefoni vedono le modifiche al primo avvio con internet, anche dopo che l'app è su Google Play.

## Fase 3 – Account Google Play

**Chi pubblica decide il nome che compare come sviluppatore. Se è la scuola (consigliato):**

1. Serve il **numero D-U-N-S** dell'istituto, gratuito, rilasciato da Dun & Bradstreet. Dalla Play Console si può verificare se la scuola ce l'ha già; se no, si richiede (può servire fino a circa 30 giorni).
2. La scuola crea l'account su **play.google.com/console** come **Organizzazione**: dati dell'istituto, D-U-N-S, sito istituzionale, email e telefono da verificare, quota una tantum di 25 $.
3. Con un account organizzazione **non** è obbligatorio il test chiuso con 12 tester (lo è per gli account personali nuovi). Un breve test interno con alcuni colleghi resta comunque consigliato.
4. La scuola può poi aggiungervi come **utente** della Play Console, con i permessi di gestione delle release: pubblicate voi, a nome della scuola.

*Se invece pubblicate voi con un account personale:* come sviluppatore comparirà il vostro nome, e prima della pubblicazione servono 12 tester iscritti per 14 giorni consecutivi.

## Fase 4 – Creare il pacchetto Android (PWABuilder)

1. Andate su **https://www.pwabuilder.com**, scrivete l'indirizzo del portale e avviate l'analisi. Manifest, icone e funzionamento senza rete sono già a posto.
2. **Package for stores → Android → Generate package.** Nelle opzioni:

   | Campo | Valore |
   |---|---|
   | Package ID | `it.edu.istitutoremobrindisi.app` (**definitivo: non si potrà più cambiare**) |
   | App name | `IIS Remo Brindisi` |
   | Launcher name | `Brindisi` |
   | App version / version code | `1.0.0` / `1` |
   | Host | il vostro indirizzo, es. `brindisi.studio-samaritani.com` |
   | Start URL | `/?origine=app` |
   | Theme color / Navigation color | `#1D3A5F` |
   | Background color | `#FFFFFF` |
   | Display mode | Standalone |
   | Notifications | disattivate |
   | Signing key | **New** (nome dell'istituto come organizzazione) |

3. Scaricate lo zip. Dentro trovate:
   - il pacchetto **`.aab`** (quello da caricare su Google Play);
   - la chiave **`signing.keystore`** con le sue **password** (`signing-key-info.txt`);
   - un file **`assetlinks.json`**.
4. **Custodite chiave e password** in un posto sicuro, con due copie: senza di esse non si possono pubblicare gli aggiornamenti. **Non** caricatele su GitHub né sul sito.

## Fase 5 – Pubblicare su Google Play

1. Nella Play Console: **Crea app** → nome «IIS Remo Brindisi», lingua italiano, tipo «App», gratuita.
2. **Scheda dello Store**: copiate i testi da `play-store/testi-scheda.md` e caricate icona, copertina e schermate.
3. **Contenuti dell'app**: compilate i moduli con le risposte di `play-store/sicurezza-dati.md`, dopo averle fatte confermare alla scuola. Come **URL dell'informativa privacy** usate `https://[indirizzo del portale]/privacy.html`, dopo aver completato i campi tra parentesi quadre (data e RPD).
4. **Test → Test interno** (o chiuso): caricate il file `.aab`, aggiungete gli indirizzi dei tester e mandate loro il link.
5. **Verifica del dominio – passo importante.** Google Play rifirma l'app con una propria chiave. Nella Play Console andate in *Test e rilascio → Configurazione → Integrità dell'app → Firma dell'app* e copiate l'impronta **SHA-256** della «chiave di firma dell'app». Nel file `sito/.well-known/assetlinks.json` mettete:
   - questa impronta al posto di `SOSTITUIRE_CON_IMPRONTA_CHIAVE_DI_FIRMA_DI_GOOGLE_PLAY`;
   - l'impronta della vostra chiave, che trovate nell'`assetlinks.json` di PWABuilder, al posto di `SOSTITUIRE_CON_IMPRONTA_CHIAVE_DI_CARICAMENTO`.

   Ricaricate il file sul sito. Per controllare: `https://[indirizzo]/.well-known/assetlinks.json` deve mostrare il testo.
   *Senza questo passo l'app funziona lo stesso, ma in alto compare la barra dell'indirizzo come in un browser.*
6. Provata l'app dai tester: **Produzione → Crea release → Invia per la revisione.** La revisione di Google richiede di solito da qualche giorno a una settimana.

## Fase 6 – Aggiornamenti

- **Nuove app, indirizzi, testi, aiuto:** si modifica il sito (`config.js` e le pagine). Non serve fare niente su Google Play.
- **Cambio di nome o di icona:** nuovo pacchetto con PWABuilder, usando la **stessa chiave** («Use mine»), con il numero di versione aumentato di uno; poi si carica in Play Console.
- Se cambiate i file `sw.js`, `stile.css` o `app.js`, aumentate il nome della cache in `sw.js` (`portale-brindisi-v1` → `v2`), così i telefoni scaricano i file nuovi.

## Note

- **iPhone e iPad:** non serve l'App Store. Si apre il portale con Safari e si usa *Condividi → Aggiungi alla schermata Home*. Le istruzioni sono nella pagina Aiuto del portale.
- **Logo:** il sito istituzionale non pubblica il logo in alta risoluzione. Le icone sono ricostruite dall'immagine piccola disponibile. Se la segreteria ha l'originale (per esempio nella carta intestata in Word), basta mandarmelo e rigenero icone e grafiche: per l'app su Play è un aggiornamento di icona.
- **Chi gestisce le pagine dei servizi:** ogni app (Bar Didattico, FSL…) resta uno script Google della scuola con il proprio controllo degli accessi. Il portale contiene solo i collegamenti.
