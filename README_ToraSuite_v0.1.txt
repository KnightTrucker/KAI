TORA SUITE v0.1 - PROTOTIPO

Scopo
- Launcher PWA separato per ToraNavy, ToraTako e ToraBook.
- Non modifica nessuno dei tre progetti.
- Grafica delle card basata sugli asset reali dei repository GitHub.

Repository richiamati
- ToraNavy: KnightTrucker/TruckNavigator
- ToraTako: KnightTrucker/ToraTako
- ToraBook: KnightTrucker/Diario

URL di apertura
- https://knighttrucker.github.io/TruckNavigator/
- https://knighttrucker.github.io/ToraTako/
- https://knighttrucker.github.io/Diario/

Asset grafici usati direttamente dai repository
- ToraNavy: toranavy_startup.webp + icon-512.png
- ToraTako: splash-1080x1920.png + icon-512.png + ToraTako_stemma_araldico_pulito.png
- ToraBook: splash-torabook-a51.png + icon-512-v37.png

Comportamento Android/PWA
Tora Suite apre l'URL canonico dell'app. Se Android/Chrome instrada il link verso la PWA installata, viene aperta l'app installata; altrimenti viene aperta la versione web. Una PWA non può enumerare liberamente tutte le altre PWA installate per motivi di sicurezza/privacy.

File
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

Powered by Andrea Zollet
