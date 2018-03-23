class Eyedropper extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }
//The ImageData object represents the underlying pixel data of an area of a canvas object. 
//getImageData The data property returns a Uint8ClampedArray which can be accessed to look at the raw pixel data; 
//each pixel is represented by four one-byte values (red, green, blue, and alpha, in that order; that is, "RGBA" format).

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
    getPixelColor(x, y) {
        var pxData = this.contextReal.getImageData(x, y, 1, 1);
        return ("rgba(" + pxData.data[0] + "," + pxData.data[1] + "," + pxData.data[2] +"," + (pxData.data[3]/255) +")");
    }

    onMouseDown(data){
        if (!eyedropperIsActive) {
            return;
        }
        
        var eyedropColor = this.getPixelColor(data[0], data[1]);
        rgbaColor = eyedropColor;
        $("#color-label").css("backgroundColor", this.getPixelColor(data[0], data[1]));
        console.log(eyedropColor)
    }
}

var eyedropperIsActive = false;

$("#startDropper").click(function (e) {
    eyedropperIsActive = true;
    currentFunction = new Eyedropper(contextReal,contextDraft);
});
