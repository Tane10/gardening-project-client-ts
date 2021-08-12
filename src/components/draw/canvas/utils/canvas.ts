import P5 from "p5";
import Lines from "./lines";
import Buttons from "./buttons";

export default class Canvas {
    private canvasSize: { width: number; height: number } = {
        width: 1000,
        height: 500,
    };

    private canvasId = "canvas-container";
    private background = 100;
    public lineStrokeWeight = 1;

    public lineSelect = true;

    public setUp(): void {
        const canvasInit = (p5: P5) => {
            let canvas: P5.Renderer;
            let colorPicker: P5.Element;
            let strokeSlider: P5.Element;
            let pickerColor: string;
            
            const lines: Lines[] = [];

            p5.setup = () => {

                //canvas 
                canvas = p5.createCanvas(this.canvasSize.width, this.canvasSize.height);
                canvas.parent(this.canvasId);
                p5.background(this.background);

                // Colour picker
                colorPicker = p5.createColorPicker("#ed225d");
                colorPicker.position(1000, 450);

                // Stroke Slider 
                strokeSlider = p5.createSlider(0, 10, 1)
                strokeSlider.position(1000, 400)
            };

            p5.draw = () => {
                pickerColor = colorPicker.value().toString();
                this.lineStrokeWeight = parseInt(strokeSlider.value().toString())

                if (p5.mouseIsPressed) {
                    const line = new Lines(
                        p5,
                        pickerColor,
                        p5.pwinMouseX,
                        p5.pwinMouseY,
                        p5.winMouseX,
                        p5.winMouseY,
                        this.lineStrokeWeight
                    );
                    lines.push(line);
                }

                for (const line of lines) {
                    line.show();
                }
            };
        };
        new P5(canvasInit);
    }
}
