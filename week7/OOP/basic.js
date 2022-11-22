var Client = /** @class */ (function () {
    // members: number;
    function Client(active, value) {
        this.active = active;
        this.value = value;
        // this.members = 0;
    }
    Client.prototype.makeProfile = function () {
        console.log("This client is ".concat(this.active ? "active" : "not active", " \n    and has a value of ").concat(this.value));
    };
    Client.prototype.setValue = function (value) {
        if (value < 0) {
            console.log("Value can't be less than zero.");
            return;
        }
        this.value = value;
    };
    Client.prototype.getValue = function () {
        return this.value;
    };
    return Client;
}());
var vanillae = new Client(true, 15);
// vanillae.active = true;
// vanillae.value = 15;
vanillae.setValue(-1);
console.log(vanillae.getValue());
vanillae.setValue(10);
console.log(vanillae.getValue());
vanillae.makeProfile();
// const fatigue = new Client();
// fatigue.active = false;
// fatigue.value = 4;
// fatigue.makeProfile();
