class Discount {
    calc(val) {
        return val * 0.8
    }
}

class Shipping {
    calc() {
        return 6
    }
}

class Fees {
    calc(val) {
        return val * 0.9
    }
}

class ShopeeFacade {
    constructor () {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }
    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class User {
    constructor () {
    }
    buy(productPrice) {
        const shopee = new ShopeeFacade();
        console.log('price:', shopee.calc(productPrice) )
    }
}

const user = new User();
user.buy(100009)