class Socket {
    constructor() {
        this.devices = []
    }
    connect(device) {
        this.devices.push(device)
    }
    active() {
        this.devices.forEach((device) => {
            device.connect();
        })
    }
}

class Fan {
    connect() {
        console.log("Connecting to Fan...");
    }
}
class Tivi {
    connect() {
        console.log("Connecting to Tivi...");
    }
}
class Fidge {
    connect() {
        console.log("Connecting to Fidge...");
    }
}

const socket = new Socket();
socket.connect(new Fan())
socket.connect(new Tivi())
socket.connect(new Fidge())
socket.active()