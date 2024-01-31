import {bestSellingTv} from "../constants/inventory.js";
import {inventory} from "../constants/inventory.js";




export const countBoughtTv = function () {
    let totalStorage = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalStorage = totalStorage + inventory[i].originalStock;
    }
    return (totalStorage + bestSellingTv.originalStock);
}