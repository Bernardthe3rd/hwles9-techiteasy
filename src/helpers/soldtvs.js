import {bestSellingTv} from "../constants/inventory.js";
import {inventory} from "../constants/inventory.js";

export const countSoldTv = function () {
    let totalInventory = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalInventory = totalInventory + inventory[i].sold;
    }
    return totalInventory + bestSellingTv.sold
}
export default countSoldTv();



