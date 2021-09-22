class Init {
  lineColor;
  lineStrokeWeight;
  pwinMouseX;
  pwinMouseY;
  winMouseX;
  winMouseY;
  mouseX;
  mouseY;

  lineInstance;
  rectangleInstance;

  constructor(
    lineColor,
    lineStrokeWeight,
    pwinMouseX,
    pwinMouseY,
    winMouseX,
    winMouseY,
    mouseX,
    mouseY
  ) {
    this.lineColor = lineColor;
    this.lineStrokeWeight = lineStrokeWeight;
    this.pwinMouseX = pwinMouseX;
    this.pwinMouseY = pwinMouseY;
    this.winMouseX = winMouseX;
    this.winMouseY = winMouseY;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  }

  createShapeInstances() {
     this.lineInstance = new LinesClass(
      lineColor,
      lineStrokeWeight,
      pwinMouseX,
      pwinMouseY,
      winMouseX,
      winMouseY
    );

    this.rectangleInstance = new RectangleClass(
      lineColor,
      lineStrokeWeight,
      mouseX,
      mouseY
    );
  }
}
