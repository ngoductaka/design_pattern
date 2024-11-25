// Subsystem Classes
class CPU {
    start() { console.log("CPU started"); }
    stop() { console.log("CPU stopped"); }
}

class Memory {
    load() { console.log("Memory loaded"); }
    unload() { console.log("Memory unloaded"); }
}

class HardDrive {
    read() { console.log("Hard drive read"); }
    write() { console.log("Hard drive write"); }
}

// Facade
class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    startComputer() {
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log("Computer started");
    }

    stopComputer() {
        this.cpu.stop();
        this.memory.unload();
        this.hardDrive.write();
        console.log("Computer stopped");
    }
}

// Client code
const computer = new ComputerFacade();
computer.startComputer(); // Simplified interface to start the computer
computer.stopComputer();  // Simplified interface to stop the computer
