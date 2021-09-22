class LinesClass {
  colour;
  px;
  py;
  x;
  y;
  strokeWeight;

  constructor(
    colour,
    strokeWeight,
    pwinMouseX,
    pwinMouseY,
    winMouseX,
    winMouseY
  ) {
    this.colour = colour;
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;
    this.strokeWeight = strokeWeight;
  }

  show() {
    stroke(this.colour).strokeWeight(this.strokeWeight);
    line(this.px, this.py, this.x, this.y);
  }
}
