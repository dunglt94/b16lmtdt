class Mobile {
    battery; drafting; inbox; sent;

    constructor(battery) {
        this.battery = 99;
        this.drafting = [];
        this.inbox = [];
        this.sent = [];
    }

    checkStatus() {
        if (this.isOn) return true;
    }
    turnOn() {
        this.isOn = true;
        console.log("Bật điện thoại")
    }
    turnOff() {
        this.isOn = false;
        console.log("Tắt điện thoại")
    }
    chargeBattery() {
        this.battery++;
    }
    draftMessage(message) {
        if (!this.turnOn) return;
        this.drafting = message;
        this.battery--;
    }
    sendMessage(mobile) {
        if (!this.turnOn) return;
        this.sent.push(this.drafting);
        mobile.inbox.push(this.drafting);
        this.drafting ='';
        this.battery--;
    }
    viewInbox() {
        if (!this.turnOn) return;
        this.battery--;
        return this.inbox;
    }
    viewSent() {
        if (!this.turnOn) return;
        this.battery--;
        return this.sent;
    }
}
