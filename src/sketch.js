function setup() {
  createCanvas(1000, 500);
  background(220);
  strokeSlider = createSlider(0, 10, 1);
  strokeSlider.position(1000, 400);
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(1000, 450);

  toolBar = new ToolBar();
  toolBar.layout();
}

function draw() {
  // color picker
  pickerColor = colorPicker.value().toString();

  //line weight
  lineStrokeWeight = parseInt(strokeSlider.value().toString());

  initializer = new Init(
    pickerColor,
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
}

function mouseDragged() {
  toolBar.drawLine(initializer.lineInstance);

  // click for rect set start point hide the inbertween
  // render final rect once mousse dragg hase stoped
  // toolBar.drawRectangle();
  // prevent default
  return false;
}

function mouseReleased() {
  // toolBar.restValues();
}
