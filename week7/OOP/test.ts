class Client {
  readonly active: boolean;

	constructor(active: boolean, public value: number){
    this.active = active;
	}

  setActive(active){ 
    this.active = active
  }
}
