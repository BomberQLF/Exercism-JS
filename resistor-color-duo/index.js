export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
];
export const decodedValue = (colors) => {
    let getIndex = color => COLORS.indexOf(color);
    let singleBand = getIndex(colors[0]).toString();
    let secondBand = getIndex(colors[1]).toString();
    let result = singleBand + secondBand;
    return parseInt(result);
};
console.log(decodedValue("brown", "black"));