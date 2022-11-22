export abstract class Figure {
  // public color: string;
  abstract CalcSurface();
  // showColor() {
  //   return this.color;
  // }
}

export abstract class Polygon extends Figure {

}

export class Rectangle extends Polygon {
  public color:  "red";
  public width : number;
  public length : number;
  CalcSurface() {
    return this.width * this.length;
  }
}





