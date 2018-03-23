class Eraser extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        // this.context.strokeStyle = "rgba(255,255,255,0.1)";//draw white color
        // this.context.lineJoin = "round";
        // this.context.lineWidth = lWidth;
        // this.context.beginPath();
        // this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        var imageData = this.context.getImageData(x - lWidth / 2, y - lWidth / 2, lWidth, lWidth);
        var data = imageData.data;


        for (var i = 0; i < data.length; i += 4) {
            data[i + 3] -= 255; // opacity
        }
        this.context.putImageData(imageData, x - lWidth / 2, y - lWidth / 2);

    }
}