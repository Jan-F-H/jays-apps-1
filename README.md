# Test-App

Einfache Zähler-PWA mit reinem HTML, CSS und JavaScript (kein Framework, kein Build-Schritt).

- `index.html`, `style.css`, `app.js` – App
- `manifest.json`, `sw.js`, `icons/` – PWA (installierbar, offline-fähig)
- Zählerstand wird im `localStorage` unter `testapp-zaehler` gespeichert

Alle Pfade sind relativ, die App läuft daher auch unter einem Unterpfad wie `https://<user>.github.io/meine-app/`.
Nach Änderungen an den Dateien die Versionsnummer `CACHE` in `sw.js` erhöhen, damit Nutzer die neue Version bekommen.
