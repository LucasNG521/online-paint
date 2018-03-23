let hasInput = false;

class TextInput extends PaintFunction {
    constructor(context) {
        super();
        this.context = context;
    }

    onMouseUp(coord, event) {
        addText(event);
    }

    onDragging() { }
    onMouseMove() { }
    onMouseDown() { }
    onMouseLeave() { }
    onMouseEnter() { }
}


function addText(e) {
    var canvas = canvasReal;
    var ctx = contextReal;
    var font = lWidth + 'px sans-serif';

    //Creates an input element at the mouse click position to receive text
    function addInput(x, y) {

        var textInput = document.createElement('input');

        textInput.type = 'text';
        textInput.style.position = 'fixed';
        textInput.style.left = e.pageX + 'px';
        textInput.style.top = e.pageY + 'px';
        textInput.style.fontSize = lWidth + 'px'; 
        textInput.style.color = rgbaColor;
        textInput.style.borderWidth = 0;
        textInput.style.padding = 0;
        textInput.onkeydown = handleEnter;
        ctx.fillStyle = rgbaColor;
        document.body.appendChild(textInput);

        textInput.focus();

        hasInput = true;
    }

    //listens for the enter key to be pressed, at which point it draws the text from the input onto the canvas, and removes the input box
    function handleEnter(e) {
        var keyCode = e.keyCode;
    
        if (keyCode === 13) {
            drawText(this.value,canvasX,canvasY);
            
            document.body.removeChild(this);
            hasInput = false;
        }
    }

    //Applies the input text from the input box and applies it to the real layer at the same position as the input box
    function drawText(txt, x, y) {
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.font = font;
        ctx.fillText(txt, x, y + 1);
        cPush();  
       
        
    }

    let canvasX = e.pageX - canvasReal.offsetLeft;
    let canvasY = e.pageY - canvasReal.offsetTop;

    addInput((e.canvasX), (e.canvasY));
}
