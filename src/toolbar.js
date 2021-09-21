class ToolBar {
  container;
  buttonGroup;
  lineButton;
  rectangleButton;
  px;
  py;
  x;
  y;
  selectedButton = 3;
  rectWidth = 0;
  rectLength = 0;

  constructor(pwinMouseX, pwinMouseY, winMouseX, winMouseY) {
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;
  }

  layout() {
    // toolbar div
    this.container = createDiv();
    this.container.id("toolbar_container");

    // button group div
    this.buttonGroup = createDiv();
    this.buttonGroup.id("buttonGroup");
    this.buttonGroup.parent("toolbar_container");

    // buttons
    // line
    this.lineButton = createButton("Line");
    this.lineButton.id("line_btn");
    this.lineButton.value(0);

    // square
    this.rectangleButton = createButton("Rectangle");
    this.rectangleButton.id("rectangle_btn");
    this.rectangleButton.value(1);
  }

  setRectangle() {
    this.rectangleButton.mousePressed(() => {
      this.selectedButton = this.rectangleButton.value();
    });
  }

  drawRectangle() {
    if (this.selectedButton == 1) {
      this.rectWidth = this.rectWidth + 5;
      this.rectLength = this.rectLength + 5;
      rect(this.px, this.py, this.rectWidth, this.rectLength).updaye;
    }
  }

  restValues() {
    this.rectWidth = 0;
    this.rectLength = 0;
  }
}

// TODO: make it more simple with rect click to make rect at x postions and then add
