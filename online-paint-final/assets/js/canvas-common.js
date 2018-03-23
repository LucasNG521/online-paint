let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
let lWidth = document.getElementById('size-slider').value;


// CORE MOUSE EVENT FUNCTIONS //////////////////
$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

// CORE CLASS////////////////////
class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
}    

// FEATURE FUNCTION CALLS /////////////////////////

//PAINT LINE
$('#drawing-line').click(() => {
    currentFunction = new DrawingLine(contextReal);
})


//POLYGON
$('#drawing-polygon').click(() => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
})

//TEXT INPUT
$('#text-input').click(() => {
    currentFunction = new TextInput(contextReal, contextDraft);
})

//ERASER
$('#eraser').click(() => {
    currentFunction = new Eraser(contextReal);
})

//EYEDROPPER
$("#eyedropper").click(function (e) {
    eyedropperIsActive = true;
    currentFunction = new Eyedropper(contextReal, contextDraft);
})

//RECTANGLE AND ALTERNATIVES
$('#drawing-rectangle').click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
})

$('#drawing-rectangle-matrix').click(() => {
    currentFunction = new DrawingRectangleMatrix(contextReal, contextDraft);
})


$('#drawing-rectangle-portal').click(() => {
    currentFunction = new DrawingRectanglePortal(contextReal, contextDraft);
})

$('#drawing-rectangle-hollow').click(() => {
    currentFunction = new DrawingRectangleHollow(contextReal, contextDraft);
})

//SQUARE AND ALTERNATIVES
$('#drawing-square').click(() => {
    currentFunction = new DrawingSquare(contextReal, contextDraft);
})


$('#drawing-square-hollow').click(() => {
    currentFunction = new DrawingSquareHollow(contextReal, contextDraft);
})


$('#drawing-square-matrix').click(() => {
    currentFunction = new DrawingSquareMatrix(contextReal, contextDraft);
})

//CIRCLE AND ALTERNATIVES
$('#drawing-circle').click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
})

$('#drawing-circle-hollow').click(() => {
    currentFunction = new DrawingCircleHollow(contextReal, contextDraft);
})

$('#drawing-circle-matrix').click(() => {
    currentFunction = new DrawingCircleMatrix(contextReal, contextDraft);
})

//ELLIPSE AND ALTERNATIVES
$('#drawing-ellipse').click(() => {
    currentFunction = new DrawingEllipse(contextReal, contextDraft);
})

$('#drawing-ellipse-hollow').click(() => {
    currentFunction = new DrawingEllipseHollow(contextReal, contextDraft);
})

$('#drawing-ellipse-matrix').click(() => {
    currentFunction = new DrawingEllipseMatrix(contextReal, contextDraft);
})

$('#drawing-ellipse-portal').click(() => {
    currentFunction = new DrawingEllipsePortal(contextReal, contextDraft);
})

//WIPES REAL CANVAS CLEAN
$('#reset-all').click(()=> {
    contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
    cPush();
});

//UNDOES PREVIOUS DRAWING/RESETS
$('#undo').click(() => {
    cUndo()
})

//REDOS UNDID DRAWINGS/RESETS
$('#redo').click(() => {
    cRedo()
})


// CALLS ALTERNATE PATTERN DROPDOWN MENUS//////////////////////////////////
$('#drawing-square').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        $('#alternate-square').toggle()
    }, 300);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
});
$('#alternate-square').mouseleave(function (e) {
    $('#alternate-square').toggle()
});


$('#drawing-rectangle').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        $('#alternate-rectangle').toggle()
    }, 300);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
});
$('#alternate-rectangle').mouseleave(function (e) {
    $('#alternate-rectangle').toggle()
});

$('#drawing-circle').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        $('#alternate-circle').toggle()
    }, 300);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
});
$('#alternate-circle').mouseleave(function (e) {
    $('#alternate-circle').toggle()
});

$('#drawing-ellipse').mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        $('#alternate-ellipse').toggle()
    }, 300);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
});
$('#alternate-ellipse').mouseleave(function (e) {
    $('#alternate-ellipse').toggle()
});


// RESPONSIVE CANVAS///////////////////////////////
$(window).resize(function () {
    canvasReal.width = window.innerWidth;
    canvasReal.height = window.innerHeight;
    canvasDraft.width = window.innerWidth;
    canvasDraft.height = window.innerHeight;
})

// TOGGLE COLOR PICKER ON CLICK/////////
$('#color-input').on('click', function () {
    $('#color-picker').toggle();
})

// STORES FONT SIZE AND LINE WIDTH ON ONE VARIABLE/////////
$('#size-slider').on('input', function () {
    var v = $(this).val();
    $('#size-field').html(v);
    lWidth = $(this).val();
})

//ADD GRID BACKGROUND////////
$('#add-bg').click(function(){
    $('#canvas-bottom').toggleClass('show');
    // $('#canvas-bottom').css('background-repeat');
})


