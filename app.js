(function () {
  'use strict';

  var SCHLUESSEL = 'testapp-zaehler';
  var anzeige = document.getElementById('zaehler');
  var wert = laden();

  function laden() {
    try {
      var n = parseInt(localStorage.getItem(SCHLUESSEL), 10);
      return isNaN(n) ? 0 : n;
    } catch (e) {
      return 0;
    }
  }

  function speichern() {
    try {
      localStorage.setItem(SCHLUESSEL, String(wert));
    } catch (e) { /* Speicher nicht verfügbar */ }
  }

  function setzen(neu) {
    wert = neu;
    anzeige.textContent = String(wert);
    speichern();
  }

  document.getElementById('plus').addEventListener('click', function () {
    setzen(wert + 1);
  });

  document.getElementById('minus').addEventListener('click', function () {
    setzen(wert - 1);
  });

  document.getElementById('reset').addEventListener('click', function () {
    if (wert === 0) return;
    if (window.confirm('Zähler wirklich auf 0 zurücksetzen?')) {
      setzen(0);
    }
  });

  anzeige.textContent = String(wert);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
