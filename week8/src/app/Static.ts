class Client {
  private static numberOfClients : number = 0;
	constructor(){
    Client.numberOfClients++;
	}

  static getNumberOfClients() {
    return "The number of clients is: " + Client.numberOfClients;
  }
}


console.log(Client.getNumberOfClients()); // 0

const client1 = new Client(); 

console.log(Client.getNumberOfClients()); // 1

// Client.numberOfClients = 10;