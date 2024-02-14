import {inventory} from "./inventory.js";

// Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.
const tvTypes = inventory.map((tv)=> {
    return tv.type;
});
console.log(tvTypes);

// Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.
const soldOutTv = inventory.filter((tv) => {
    let calculate = tv.originalStock - tv.sold;
    return calculate === 0;
});
console.log(soldOutTv);

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
const findTypeTv = inventory.find((tv) => {
    return tv.type = 'NH3216SMART';
});
console.log(findTypeTv);

// Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger).
// Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.
const listSport = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return tv.brand + ' ' + tv.name +', suitable: true';
    } else {
        return tv.brand + ' ' + tv.name +', suitable: false';
    }
});
console.log(listSport);

//hieronder is de verkorte versie en toch officieel makkelijker:
let listSports = inventory.map((tv) => {
    return {name: tv.name, suitable: tv.refreshRate >= 100}
})
console.log(listSports);

// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.
// const findSize = inventory.filter((tvs) => {
//     return tvs.availableSizes.find((tv) => {return tv.availableSizes = 65})
// })
// console.log(findSize);

// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.
const ambilight = inventory.filter((tv) => {
    const list = tv.options.find((option) => {return option.name === 'ambiLight'})
    return list.applicable === true
})
console.log(ambilight);

// voorstel was om met .some methode te werken. Kan altijd nog onderzoeken wat dit precies doet.