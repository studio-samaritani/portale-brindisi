/* Portale IIS "Remo Brindisi" – disegna le icone leggendo config.js. Non serve modificarlo. */
(function () {
  var C = window.PORTALE || { app: [], collegamenti: [], scuola: {} };
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function sicuro(u) { return /^https:\/\//i.test(u || ''); }

  document.getElementById('nomeScuola').textContent = C.scuola.nome || '';
  document.getElementById('sottotitolo').textContent = C.scuola.sottotitolo || '';
  document.getElementById('versione').textContent = 'versione ' + (C.versione || 1);

  document.getElementById('griglia').innerHTML = C.app.map(function (a) {
    var pronta = sicuro(a.url);
    var corpo = '<span class="per">' + esc(pronta ? a.per : 'In arrivo') + '</span><span class="ico" aria-hidden="true">' + esc(a.icona) + '</span><b>' + esc(a.nome) + '</b><small>' + esc(a.descrizione) + '</small>';
    // stessa finestra: nell'app installata Android apre la pagina Google sopra il portale, con il tasto "indietro" per tornare
    return pronta ? '<a class="tile" href="' + esc(a.url) + '">' + corpo + '</a>' : '<div class="tile arrivo" aria-disabled="true">' + corpo + '</div>';
  }).join('');

  var link = C.collegamenti.filter(function (l) { return sicuro(l.url); });
  document.getElementById('collegamenti').innerHTML = link.map(function (l) {
    return '<a class="link" href="' + esc(l.url) + '" target="_blank" rel="noopener"><span>' + esc(l.icona + ' ' + l.nome) + '</span><span>›</span></a>';
  }).join('');
  if (!link.length) document.getElementById('titoloLink').hidden = true;

  // ---- funzionamento senza rete e installazione ----
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () { });

  var installata = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone || document.referrer.indexOf('android-app://') === 0;
  var box = document.getElementById('installa'), btn = document.getElementById('installaBtn'), evento = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); evento = e;
    if (!installata) box.hidden = false;
  });
  btn.addEventListener('click', function () {
    if (evento) { evento.prompt(); evento.userChoice.then(function () { box.hidden = true; evento = null; }); }
    else location.href = 'aiuto.html#installare';
  });
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (ios && !installata) {
    document.getElementById('installaTesto').textContent = 'Su iPhone: tocca Condividi e poi «Aggiungi alla schermata Home».';
    btn.textContent = 'Come fare'; box.hidden = false;
  }
  window.addEventListener('appinstalled', function () { box.hidden = true; });
})();
