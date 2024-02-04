import {inventory} from "../constants/inventory.js";

export const options = (object) => {
    return object.options.map((option) => {
        return option.name
    })
};
