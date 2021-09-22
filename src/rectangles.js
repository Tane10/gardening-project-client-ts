class RectangleClass {
  colour;
  postionX;
  postionY;
  strokeWeight;
  rectWidth = 10;
  rectLength = 10;


  constructor(
    colour,
    strokeWeight,
    pX,
    pY,
  ) {
    this.colour = colour;
    this.strokeWeight = strokeWeight;
    this.postionX = pX;
    this.postionY = pY;
  }

  show() {
    stroke(this.colour).strokeWeight(this.strokeWeight);
    rect(this.postionX, this.postionY, this.rectWidth, this.rectLength);
  }
}
