class Schrijftool {
  protected isLeeg: boolean;
  schrijf() {
    console.log("We schrijven met de schrijftool.")
  }

  constructor(isLeeg: boolean){
    this.isLeeg = isLeeg;
  }

  setIsLeeg(isLeeg : boolean){
    this.isLeeg = isLeeg;
  }
}

class Pen extends Schrijftool {
  schrijf() {
    if(this.isLeeg){
      console.log("We kunnen niet schrijven met de pen.");
      return;
    }
    console.log("We schrijven met de pen.")
  }
}

class LekkendeVulpen extends Pen { 
  schrijf() {
    super.schrijf();
    super.setIsLeeg(true);
  }
}

class Balpen extends Schrijftool {

}

const lievelingspen = new Pen(true);
// lievelingspen.isLeeg = true;
lievelingspen.schrijf();

const balpen1 = new Balpen(false);
balpen1.schrijf();

const lekkendeVulpen1 = new LekkendeVulpen(false);
lekkendeVulpen1.schrijf();
lekkendeVulpen1.schrijf();

