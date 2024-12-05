
/**
 * Calculates the percentage of a part relative to a whole.
 * @param {number} part - The part to calculate the percentage of.
 * @param {number} whole - The whole to compare the part against.
 * @returns {number} The calculated percentage, or 0 if the whole is 0.
 */
const calculatePercentage = (part, whole) => {
    if (whole === 0) return 0;
    return (part / whole) * 100;
};

export default calculatePercentage;
