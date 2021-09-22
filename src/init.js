class Init {
  pickerColor;
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
    pickerColor,
    lineStrokeWeight,
    pwinMouseX,
    pwinMouseY,
    winMouseX,
    winMouseY,
    mouseX,
    mouseY
  ) {
    this.pickerColor = pickerColor;
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
      pickerColor,
      lineStrokeWeight,
      pwinMouseX,
      pwinMouseY,
      winMouseX,
      winMouseY
    );

    this.rectangleInstance = new RectangleClass(
      pickerColor,
      lineStrokeWeight,
      mouseX,
      mouseY
    );
  }
}
