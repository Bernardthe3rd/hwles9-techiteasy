import inventory from 'src/constants/inventory.js';

export const brandsList = inventory.map((tv) => {
    return tv.brand;
});
