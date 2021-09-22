class ToolBar {
  container;
  buttonGroup;

  lineButton;
  rectangleButton;
  fillButton;
  selectButton;

  strokeColor;
  strokeWeight;

  selectedButton = 0;
  constructor() {}

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

    // fill
    this.fillButton = createButton("Fill / No Fill");
    this.fillButton.id("fill_btn");
    this.fillButton.value(false);
    
  }

  setRectangle() {
    this.rectangleButton.mousePressed(() => {
      this.selectedButton = this.rectangleButton.value();
    });
  }

  setLine() {
    this.lineButton.mousePressed(() => {
      this.selectedButton = this.lineButton.value();
    });
  }

  drawRectangle(rectangleInstance) {
    if (this.selectedButton == 1) {
      if (mouseX !== 0 && mouseY !== 0) {
        rectangleInstance.show();
      }
    }
  }

  drawLine(lineInstance) {
    if (this.selectedButton == 0) {
      lineInstance.show();
    }
  }

  fillShape(color) {
    this.fillButton.mousePressed(() => {
      if(this.fillButton.value){
        fill(color)
      }
    });
  }
}

// TODO: make it more simple with rect click to make rect at x postions and then add
