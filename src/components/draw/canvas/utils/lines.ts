import P5 from "p5";

export default class Lines {
  private colour: string;
  private p5: P5;
  public px;
  public py;
  public x;
    public y;
    public strokeWeight: number;

  constructor(
    p5: P5,
    colour: string,
    pwinMouseX: number,
    pwinMouseY: number,
    winMouseX: number,
      winMouseY: number,
    strokeWeight: number
  ) {
    this.colour = colour;
    this.p5 = p5;
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
      this.y = winMouseY;
      this.strokeWeight = strokeWeight;
  }

  public show(): void {
      const p5 = this.p5;
      
      p5.stroke(this.colour).strokeWeight(this.strokeWeight)
      p5.line(this.px, this.py, this.x, this.y);
      
  }
}
