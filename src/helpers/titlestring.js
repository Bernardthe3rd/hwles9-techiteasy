import {bestSellingTv} from "../constants/inventory.js";
// standaard 1 tv.
export const titleProduct = (object) => object.brand +' '+ object.type +' - '+ object.name;

// // hieronder proberen om een gewenste tv te selecteren.
// export const titleProduct =  (input) => {
//     let title = ''
//     for (let i = 0; i < input.length; i++) {
//         title = input[i].brand +' '+ input[i].type +' - ' +input[i].name;
//     }
//     return title;
// }

