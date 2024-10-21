const getPrice = (price, promotion) => {
    if (promotion === 'christmas') {
        return price * 0.8;
    }
    if (promotion === 'newyear') {
        return price * 0.9;
    }
    return price;
}
