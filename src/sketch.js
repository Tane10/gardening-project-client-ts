function setup() {
  createCanvas(1000, 500);
  background(220);
  strokeSlider = createSlider(0, 10, 1);
  strokeSlider.position(1000, 400);

  lineColorPicker = createColorPicker("#ed225d");
  lineColorPicker.position(1000, 450);

  fillColorPicker = createColorPicker("white");
  fillColorPicker.position(1050, 450);

  toolBar = new ToolBar();
  toolBar.layout();
}

function draw() {
  // color picker
  lineColor = lineColorPicker.value().toString();

  //line weight
  lineStrokeWeight = parseInt(strokeSlider.value().toString());

  initializer = new Init(
    lineColor,
    lineStrokeWeight,
    pwinMouseX,
    pwinMouseY,
    winMouseX,
    winMouseY,
    mouseX,
    mouseY
  );

  initializer.createShapeInstances();
}

function mousePressed() {
  // toolBar button clicks
  toolBar.setRectangle();
  toolBar.setLine();

  // drawing
  toolBar.drawRectangle(initializer.rectangleInstance);
  toolBar.drawLine(initializer.lineInstance);

  // return false;
}

function mouseDragged() {
  toolBar.drawLine(initializer.lineInstance);
  toolBar.drawCustomRectangle(initializer.rectangleInstance);

  console.log(mouseX);

  // click for rect set start point hide the inbertween
  // render final rect once mousse dragg hase stoped
  // toolBar.drawRectangle();
  // prevent default
  return false;
}

function mouseReleased() {
  // loop();
  // toolBar.restValues();
}
