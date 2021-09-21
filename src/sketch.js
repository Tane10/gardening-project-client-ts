function setup() {
  createCanvas(1000, 500);
  background(220);
  strokeSlider = createSlider(0, 10, 1);
  strokeSlider.position(1000, 400);
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(1000, 450);

  toolbar = new ToolBar(pwinMouseX, pwinMouseY, winMouseX, winMouseY);
  toolbar.layout();
}

function draw() {
  // color picker
  pickerColor = colorPicker.value().toString();

  //line weight
  lineStrokeWeight = parseInt(strokeSlider.value().toString());

  //   let line = new Lines(
  //     pickerColor,
  //     lineStrokeWeight,
  //     pwinMouseX,
  //     pwinMouseY,
  //     winMouseX,
  //     winMouseY
  //   );
}

function mousePressed() {
  toolbar.setRectangle();
}

function mouseDragged() {
  // click for rect set start point hide the inbertween
  // render final rect once mousse dragg hase stoped
  toolbar.drawRectangle();
  // prevent default
  return false;
}

function mouseReleased() {
  toolbar.restValues();
}
