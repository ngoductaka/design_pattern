// mô hình MVC (Model View Controller)
// phổ biến trong lập trình
// Áp dụng: quan sát nhau => lắng nghe sự kiện 
// ví dụ tín hiệu đèn giao thông
// 


class Observer {
    constructor(name) {
        this.namePick = name;
    }
    updateLocation(location) {
        this.goToHelp(location);
    }
    goToHelp(location) {
        console.log(this.namePick + ' is going to help at ' + JSON.stringify(location));
    }

}

class Subject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(item => item !== observer);
    }
    notifyObserver(location) {
        this.observers.forEach(observer => {
            observer.updateLocation(location);
        });
    }
}

const subject = new Subject();
const ducdn = new Observer('ducdn');
const dnd = new Observer('dnd');
subject.addObserver(ducdn);
subject.addObserver(dnd);
subject.notifyObserver({lat: 123, lng: 123.43});