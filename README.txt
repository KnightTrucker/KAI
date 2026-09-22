Tora Suite v0.4 HOTFIX IMAGE

Sostituire SOLO:
- index.html
- sw.js

Non toccare gli asset: nella repo KAI risultano già presenti, incluso assets/suite/home-a51.png.

Correzioni:
- fallback locale e GitHub diretto per l'immagine principale
- nessun testo ALT visibile in caso di errore
- background cockpit di emergenza
- nuovo service worker che non fallisce l'installazione se un asset ritarda
- nuova cache v0.4 per forzare l'aggiornamento
