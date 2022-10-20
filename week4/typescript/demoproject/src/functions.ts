function addExplicit(a: number, b: number = 2): number {
    return a + b;
}

addExplicit(3,4);

addExplicit(3);

function sumVariadicSafe(...numbers: number[]): number {
    // let sum = 0;
    // for(let index = 0; index < numbers.length; index++){
    //     sum += numbers[index];
    // }
    // return sum;
    return numbers.reduce((total, n) => total + n, 0);
  }
  sumVariadicSafe(1, 2, 3); // evaluates to 6
  


  const returnParameter = <T>(waarde: T) : T => {
    return waarde;
  }
  
  const result = returnParameter("a");
  const result2 = returnParameter(1);

  
  type Reserve = {
  //  (from: Date, to: Date, destination: string): Reservation // voor retour
  //  (from: Date, destination: string): Reservation // voor enkele reis
  }
  let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
  ) => {
    // schrijf hier de code om dit uit te voeren
    // je moet eerst een onderscheid maken tussen een retour of een enkele reis
  }


  function call<T extends unknown[], R>(
    f: (...args: T) => R,
  ...args: T
  ): R {
    return f(...args)
  }


  
  function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
  }
  call(fill, 10, "a") // evaluates to an array of 10 'a's
  
  
  
  