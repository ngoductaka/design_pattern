class Boss {
    receiveRequest(offer) {
        console.log(offer, 'receiveRequest')
    }
}

class Secretary {
    receiveRequest(offer) {
        this.boss = new Boss();
        this.boss.receiveRequest(offer)
    }
}
class Developer {
    constructor(offer) {
        this.offer = offer;
    }
    sedRequestTo(target) {
        target.receiveRequest(this.offer)
    }

}
const dev = new Developer(5000);
dev.sedRequestTo(new Secretary())
