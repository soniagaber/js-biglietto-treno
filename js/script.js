let km;
let anni;
let prezzo;
let prezzoScontato
let dueDecimali

km = prompt("quanti chilometri vuoi percorrere?");
console.log(km);
anni=prompt("quanti anni hai?");
console.log(anni);

prezzo= 0.21 * km;
console.log(prezzo);

if(anni>= 18 && anni <= 65){
    document.writeln (`Il tuo biglietto costa ${prezzo} &euro;`);
} else if (anni <18) {
    prezzoScontato= prezzo - (prezzo / 100 * 20);
    console.log(prezzoScontato);
    dueDecimali=prezzoScontato.toFixed(2);
    document.writeln (`Il tuo biglietto è scontato perchè hai meno di 18 anni e costa ${dueDecimali} &euro;`);
} else {
    prezzoScontato= prezzo - (prezzo / 100 * 40);
    console.log(prezzoScontato);
    dueDecimali=prezzoScontato.toFixed(2);
    document.writeln (`Il tuo biglietto è scontato perchè hai più di 65 anni e costa ${dueDecimali} &euro;`);
}


