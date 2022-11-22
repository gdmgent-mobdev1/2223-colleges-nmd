class Client {
  private active: boolean;
  private value: number;
  // members: number;

  constructor(active: boolean, value: number){
    this.active = active;
    this.value = value;
    // this.members = 0;
  }

  makeProfile() {
    console.log(`This client is ${this.active ? "active" : "not active"} 
    and has a value of ${this.value}`);
  }

  setValue(value: number) {
    if(value < 0){
      console.log("Value can't be less than zero.");
      return;
    }
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const vanillae = new Client(true, 15);
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



