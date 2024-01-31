//bestselling 1 tv
import {bestSellingTv} from "../constants/inventory.js";
export const priceProduct = (object) => '€'+ object.price+',-';


//hieronder om een variabele tv te kunnen gebruiken
// export const priceProduct =  (input) => {
//     let prijsje = ''
//     for (let i = 0; i < input.length; i++) {
//         prijsje = '€'+input[i].price +',-';
//     }
//     return prijsje;
// }