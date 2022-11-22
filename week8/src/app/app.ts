

import { Rectangle, Polygon, Figure } from "../lib/abstract-classes";

const rect = new Rectangle();
rect.width = 5;
rect.length = 10;
console.log(rect.CalcSurface());