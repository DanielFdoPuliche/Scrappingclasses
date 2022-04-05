var port = chrome.runtime.connect({ name: "safePort" });
var msg = document.querySelector('body > main > h1')?.textContent //El signo de interrogación es para null safety

port.postMessage({txt:msg})

