const liczba = 5;
const mojaZmienna = "To jest moja zmienna";
const aToJuzNie = " a to juz nie"
const boolean = true;
const imie = "dupa";
const i = 0;
const tablica = [5, "costam", liczba, boolean, true];
const czlowiek = {
imie: "Tomek",
wiek: 5,
obywatelstwa: ["polskie", "angielskie"],
czyChlop: true
}

function mojaFunkcja(imie) {
    const przywitanie = "Cześć " + imie;
    return przywitanie;
}
console.log(imie);

const wynikFunkcji = mojaFunkcja("Tomek");
console.log(wynikFunkcji);

// function zadanko() {
// for(let i = 0; i < 5; i++) {console.log("x")}
// }
// zadanko()

// function noweZadanko() {
//     for(let i = 1; i < 9    ; i++) 
//     {console.log(i)}
// }
// noweZadanko()

// function nextZadanie(imie) {
//     for(let i = 0; i < 13; i++)
//     {console.log(i + " " + imie)}
// }
// nextZadanie("Romek")

const zadanko = [1,2,3,4,5,6,7,8,9]
function isEven(tablica) {
    for(let i = 0; i < tablica.length; i++){
        if(tablica[i] % 2 === 0) {
            console.log(tablica[i] + " jest parzysta")
        } else {
            console.log(tablica[i] + " ta liczba nie jest parzysta")
        }
        
    }
}
isEven(zadanko)