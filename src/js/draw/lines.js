import P5 from "p5";
import { Service } from "typedi";

@Service()
export default class Lines {
  #colour;
  #p5;
  px;
  py;
  x;
  y;
  strokeWeight;

  constructor(
    p5,
    colour,
    pwinMouseX,
    pwinMouseY,
    winMouseX,
    winMouseY,
    strokeWeight
  ) {
    this.colour = colour;
    this.p5 = p5;
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;
    this.strokeWeight = strokeWeight;
  }

  show() {
    const p5 = this.p5;

    p5.stroke(this.colour).strokeWeight(this.strokeWeight);
    p5.line(this.px, this.py, this.x, this.y);
  }
}
