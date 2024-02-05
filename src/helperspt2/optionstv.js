
export const options = (object) => {
    return object.options.map((option) => {
        let optionName =  option.name + ' | ';
        let optionApplicable = option.applicable;
        return optionApplicable + ' ' + optionName
        })
}

// export const icons = (object) => {
//     return object.options.map((optionApp) => {
//         let applicableCheck = optionApp.applicable
//         let icons = (() => {
//             if (applicableCheck === true) {
//                 return <img src="src/assets/check.png" alt="check icon"/>
//             } else {
//                 return <img src="src/assets/minus.png" alt="minus icon"/>
//             }
//         })
//         return icons;
//     })
// }