class Asset {
    buyItem(asset) {
        console.log(asset + "by gold")
    }
}

class Order {
    constructor(userId) {
        this.userId = userId;
        this.date = new Date();
        this.products = []
    }
}

class OrderManager {
    constructor() {
        this.order = null;
    }
    createOrder(userId) {
        this.order = new Order(userId);
        return this.order;
    }

    addProduct(product) {
        this.order.products.push(product);
    }
    getOrder() {
        return this.order;
    }
    sendMail () {
        this.sendMailOrder = new SendMail();
        this.sendMailOrder.sendMail(this.order)
    }

}

class SendMail {
    sendMail (order) {
        console.log("send mail: " + order)
    }
}

const orderManager = new OrderManager();
orderManager.createOrder('dnd001')
orderManager.addProduct({name: 'm4', price: "2000"})
// console.log(orderManager.getOrder());
orderManager.sendMail();

