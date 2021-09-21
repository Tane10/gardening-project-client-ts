import P5 from "p5";

export default class Buttons {
  #p5;

  constructor(p5) {
    this.p5 = p5;
  }

  setup() {
    const p5 = this.p5;
    const circleBtn = p5.createButton("circle");
  }
}
