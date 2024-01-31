import {countBoughtTv} from "./boughttvs.js";
import {countSoldTv} from "./soldtvs.js";

export const toBeSold = () => countBoughtTv() - countSoldTv();
export default toBeSold;