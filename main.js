/*
Crea una pagina html con le seguenti caratteristiche:

crea un input dove potrai inserire un tot di secondi.
 un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
un pulsante che, al click, mettera' in pausa il countdown.
 un pulsante che, al click, pulira' l’input e azzerera' il countdown.


    EXTRA:

se il timer viene stoppato(non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punto

*/





// 1. Catturare gli elementi HTML che saranno coinvolti nelle attività di manipolaizone

// cattura della casella di input
let countdown_input = document.querySelector('#countdown_input');

//cattura del pulsante che farà partire il conto alla rovescia
let start = document.querySelector('#start');

//catturiamo il pulsante che ci permetterà di stoppare il timer
let stop = document.querySelector('#stop');

// cattura del pulsante reset
let reset = document.querySelector('#reset');

// cattura dell'elemnto dentro al quale verrà visualizzato il conto alla rovescia, il numero inserito dinamicamente con JS cambierà ogni secondo
let countdown = document.querySelector('#countdown');

// utilizzando il metodo innerHtml, sono in grando di inserire qualunque ocntenuto all'interno dell'elemnto catturato
// countdown.innerHTML = '2345';

let secondi = 0;
let intervalID;
let tempo_rimasto = 0;


// gestione delle istruzioni che dovranno essere eseguite al click sul pulsante start
start.addEventListener('click', () => {

    if (countdown_input.value <= 0) {
        // Un alert che avverte di inserire un numero maggiore di zero
        alert('Inserisci un numero maggiore di zero');
    } else {

        clearInterval(intervalID);

        // prendiamo il valore inserito nella casella di input e lo memorizziamo dentro la variabile secondi

        // utilzzeremo la variabile tempo_rimasto per quando interrompiamo il timer prima della sua fine, cioè prima che arrivi a zero

        if (tempo_rimasto != 0) {
            secondi = tempo_rimasto;
            tempo_rimasto = 0;
        } else {
            secondi = countdown_input.value;
            countdown.innerHTML = secondi;
        }

        intervalID = setInterval(function () {

            // la funzione setInterval, ogni 1000 millisecondi, decrementa di una unità il valore inserito nella casella di input e lo riassegna ogni volta all'oggetto countdown, cioè il contenuto del tag span
            secondi--;
            countdown.innerHTML = secondi;

            if (secondi == 0) {
                clearInterval(intervalID);
                countdown.innerHTML = 'Tempo scaduto!';
                start.innerHTML(`Avvia conto alla rovescia`)
            }

        }, 1000);


    } // end controllo casella di input


});

// istruzioni che dovranno essere eseguiti al click sul pulsante stop

stop.addEventListener('click', () => {

    // interrompo il conto alla rovescia
    // nel momento dell'interruzione nel tag span il numero visualizzato corrisponde al valore che la variabile secondi possiede nel momento in cui interrompiamo il timer
    if(countdown_input.value == ''){
        alert('Non puoi fermare un timer non in corso');

    }else{

        clearInterval(intervalID);

        tempo_rimasto = secondi;

        start.innerHTML = 'Riprendi conto alla rovescia';


    }


});

reset.addEventListener('click', () => {
    clearInterval(intervalID);
    secondi = 0;
    countdown_input.value = '';
    tempo_rimasto = 0;
    countdown.innerHTML = '';
    start.innerHTML = `Avvia conto alla rovescia`
}
);
