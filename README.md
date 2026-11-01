# Test-App

Einfache Zähler-PWA mit reinem HTML, CSS und JavaScript (kein Framework, kein Build-Schritt).

- `index.html`, `style.css`, `app.js` – App
- `manifest.json`, `sw.js`, `icons/` – PWA (installierbar, offline-fähig)
- Zählerstand wird im `localStorage` unter `testapp-zaehler` gespeichert

Die App läuft unter `https://jan-f-h.github.io/jays-apps-1/`. Alle Pfade sind relativ und lösen sich dort automatisch auf `/jays-apps-1/` auf (`start_url` und `scope` im Manifest sind `./`).
Nach Änderungen an den Dateien die Versionsnummer `CACHE` in `sw.js` erhöhen, damit Nutzer die neue Version bekommen.
