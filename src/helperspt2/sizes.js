export const size =  (object) => {
    let sizes = []

    for (let i = 0; i < object.availableSizes.length; i++) {
        let everythingInch = object.availableSizes[i]
        let everythingCm = object.availableSizes[i] * 2.54
        let benaming = everythingInch + ' inches (' + everythingCm.toFixed(0) + 'cm)'
        sizes.push(benaming);
    }
    return sizes.join(' | ')
}