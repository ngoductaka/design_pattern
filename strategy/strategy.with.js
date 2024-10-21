

const newYear = price => price * 0.5;
const christmas = price => price * 0.6;
const getPriceStrategy = {
    newYear,
    christmas
}

const getPrice = (price, promotion) => {
    return getPriceStrategy[promotion] ? getPriceStrategy[promotion](price) : price;
}