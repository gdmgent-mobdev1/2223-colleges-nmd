var Client = /** @class */ (function () {
    function Client() {
        Client.numberOfClients++;
    }
    Client.getNumberOfClients = function () {
        return Client.numberOfClients;
    };
    Client.numberOfClients = 0;
    return Client;
}());
var client1 = new Client();
console.log(Client.getNumberOfClients());
var client2 = new Client();
console.log(Client.getNumberOfClients());
// Client.numberOfClients = 10; > error
