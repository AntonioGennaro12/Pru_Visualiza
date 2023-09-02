const misCasillas   = document.querySelectorAll(".casilla");
const misFiguras    = document.querySelectorAll(".figura");


const symbLib     = [ "💎", "🍀", "🔔", "🎰", "🌟", "💰", "🕰️", "📀",
                      "🍊", "🍒", "🍋", "🍇", "🍉", "🍓", "🍎", "🍍",
                      "🍄", "🎲", "🌈", "🎁",  "🎩","📯", "🎸", "🎹",
                      "⚽", "🏈", "🏉", "🥎", "🏀", "🏐", "🎾", "🎱" ];


let miInterval = 0;  
let idx1, idx2 = 0;
let estado  = "";

miInterval = setInterval(miHandler, 2000);

function miHandler () {
    for (idx1 =0; idx1 < 6; idx1++ ) {
        switch (idx2) {
            case 0:
                misFiguras[idx1].textContent = symbLib[idx1];
                estado = "Fig_muestraFig1->OK";        // OK MUESTRA FIG 1
                break;
            case 1:
                misCasillas[idx1].style.backgroundColor = "white";
                estado = "Casill_backWhite->OK";     // OK FONDO BLANCO
                break;
            case 2:
                misFiguras[idx1].textContent = "";
                estado = "Fig_BooraFig->OK";      // OK NO FIG1
                break;
            case 3:
                misCasillas[idx1].style.backgroundColor = "yellow";
                estado = "CasillaBackYellow-> OK";  // OK FONDO AMARILLO 
                break;
            case 4:   
                misCasillas[idx1].textContent = symbLib[idx1+8];
                estado = "CasillaMuestraFig+8->OK";    // OK FIG +8 en Casilla 
                break;
            case 5:   
                misCasillas[idx1].textContent = ""; 
                estado = "CasillaBorraFig ->";  // OK BORRA FIG+8 en CASILLA
                break;
            case 6:
                misCasillas[idx1].style.backgroundColor = "transparent";
                estado = "bacCasTransp->ERROR";   // ERROR NO CHANGE
                break;
            case 7:
                misFiguras[idx1].textContent = symbLib[idx1];
                estado = "Fig_MuestraFig1-> ERROR";          // ERROR NO CHANGE
                break;
            case 8:
                misFiguras[idx1].textContent = "";
                estado = "Fig_BorraFig1->ERROR";     // ERROR NO CHANGE
                break;
            case 9:
                misFiguras[idx1].textContent = symbLib[idx1+16];
                estado = "Fig_Muestra_Fig1+8->ERROR";          // ERROR NO CHANGE
                break;
            case 10:
                idx2 = 0
                stopHandler();
                return;
                break;
        }
        console.log(estado);
    }
    console.log("vuelta: "+idx2);
    idx2++;                
} 

function stopHandler () {
    clearInterval (miInterval);
}