//set array
var cPushArray = new Array();
var cStep = -1;
var ctx = document.getElementById('canvas-real').getContext("2d");;

//useing .toDataURL() save omage and push to bowers
function cPush() {
    cStep++;
    if (cStep != cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('canvas-real').toDataURL());

}

//clear to canvas and redraw the image you pushed to bowers
function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () {
            ctx.clearRect(0, 0, canvasReal.width, canvasReal.height);
            ctx.drawImage(canvasPic, 0, 0);
        }
    }
}

//same to undo function, take the undoed image push to bowers
function cRedo() {
    if (cStep < cPushArray.length - 1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () {
            ctx.clearRect(0, 0, canvasReal.width, canvasReal.height);
            ctx.drawImage(canvasPic, 0, 0);
        }
    }
}


  
