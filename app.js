const liczba = 5;
const mojaZmienna = "To jest moja zmienna";
const aToJuzNie = " a to juz nie"
const boolean = true;
const imie = "dupa";

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