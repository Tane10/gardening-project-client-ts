class RectangleClass {
  colour;
  postionX;
  postionY;
  strokeWeight;
  rectWidth = 10;
  rectLength = 10;

  constructor(colour, strokeWeight, pX, pY) {
    this.colour = colour;
    this.strokeWeight = strokeWeight;
    this.postionX = pX;
    this.postionY = pY;
  }

  show() {
    stroke(this.colour).strokeWeight(this.strokeWeight);
    noFill();
    rect(this.postionX, this.postionY, this.rectWidth, this.rectLength);
  }

  drawCustomRectangle() {
    // Draw a rectangle at location (30, 20) with a width and height of 55.
    // rect(30, 20, 55, 55);
    noLoop();
    let requiredPostions = this.trackMousePosition();

    console.log(requiredPostions);
    //stop rendering
  }

  trackMousePosition() {
    let startPostionX = this.postionX;
    let startPostionY = this.postionY;

    let finalPostionX = mouseX;
    let finalPostionY = mouseY;

    // dist for width
    dist(startPostionX, 0, finalPostionX, 0);

    // dist for length
    dist(0, startPostionY, 0, finalPostionY, 0);

    console.log(dist(startPostionX, 0, finalPostionX, 0));

    return [startPostionX, startPostionY, finalPostionX, finalPostionY];
  }
}

// note: cursor() lets you chage your cursor and how it looks

// TODO: how to drag and draw a reactange:
// click store first point postions X,Y, set size to 0
// noStroke + noFill = no image drawn
// update values as the mouse is moving, donot render
// render image with values when mouse is released

/**
 * on click n dragged, no loop but save values on release create rect?
 */
