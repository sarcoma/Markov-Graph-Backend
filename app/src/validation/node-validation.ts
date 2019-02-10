
export const labelValidation = {
    isLongEnough: (val) => {
        if (val.length == 0 || val === null || !val) {
            throw new Error("Please provide a label")
        }
        if (val.length < 3) {
            throw new Error("Please choose a longer label")
        }
    },
    isShortEnough: (val) => {
        if (val.length > 65) {
            throw new Error("Please choose a shorter label")
        }
    },
};
