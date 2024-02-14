import {inventory} from "../constants/inventory.js";

export function mostSold() {
    let newSort = inventory.sort((a,b) => {
        if (a.sold > b.sold) {
            return -1;
        }
        if (a.sold < b.sold) {
            return 1;
        }
        return 0;
    })
    let string = newSort.map((object) => {
        return 'Verkocht: ' + object.sold + ' type: ' + object.type;
    })
    console.log(string)
}

//korter alternatief
//     let newSortTwo = inventory.sort((a,b) => {
//         return b.sold - a.sold
//     })
//     console.log(newSortTwo)


export function cheapest() {
    let newSort = inventory.sort((a,b) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    })
    let string = newSort.map((object) => {
        return 'Prijs: ' + object.price + ' type: ' + object.type;
    })
    console.log(string)
}

export function sport() {
    let newSort = inventory.sort((a,b) => {
        if (a.refreshRate > b.refreshRate) {
            return -1;
        }
        if (a.refreshRate < b.refreshRate) {
            return 1;
        }
        return 0;
    })
    let string = newSort.map((object) => {
        return 'refreshRate: ' + object.refreshRate + ' type: ' + object.type;
    })
    console.log(string)
}