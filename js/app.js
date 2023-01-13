
//open side nav
window.addEventListener("click", e =>{
    if(e.target.id.includes("hamburger")){
       document.getElementById("side-nav").style.display  = "block";
    }
});

//close side nav
window.addEventListener("click", e =>{
    if(e.target.id.includes("close")){
       document.getElementById("side-nav").style.display  = "none";
    }
});



(function() {
    // Service Worker registrieren
    /* if ('serviceWorker' in navigator) {  
        window.addEventListener('load', function() { 
        navigator.serviceWorker.register('./sw.js').then(function(registration) { 
            console.log('[App] Service-Worker wurde registriert für Geltungsbereich: ' + registration.scope);
        }, 
        function(error) { 
            console.log('[App] Service-Worker-Registration fehlgeschlagen: ' + error);
        });
        });
    } else {
        console.warn('[App] Browser unterstützt Service-Worker nicht');
    } */

 })();