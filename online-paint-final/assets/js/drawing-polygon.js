class DrawingPolygon extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.startX = [];
        this.startY = [];
        this.mouseUp = false;

    }

//Positions beginning point of the line and sets up an array to receive incoming points
    onMouseDown(coord, event) {
        if (this.mouseUp == true) {
     
            this.startX = [];
            this.startY = [];
            this.contextReal.moveTo(coord[0], coord[1])
            this.contextReal.beginPath();
            this.mouseUp = false;
        }
    }
    //Array records new mouse click positions and connects 2 consecutive points with a line on the real layer, at the same time, 
    //checks current point for any adjacent points, and closes the shape if it fulfills the condition
    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.fillStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        this.contextReal.lineJoin = "miter";
       
        this.contextReal.lineTo(coord[0], coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];
        this.startX.push(this.origX);
        this.startY.push(this.origY);
        if (Math.abs(this.origX - this.startX[0]) < 20 && Math.abs(this.origY - this.startY[0]) < 20 && this.startX.length > 1 && this.startY.length > 1) {
            this.mouseUp = true;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.fill();
            this.contextReal.stroke();
            cPush(); 
        }
    }
    //Creates a line between the previous point and the current mouse position on the draft layer
    onMouseMove(coord, event) {
        if (this.mouseUp == false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.strokeStyle = rgbaColor;
            this.contextDraft.fillStyle = "transparent";
            this.contextDraft.lineWidth = lWidth;
            this.contextDraft.beginPath();
            this.contextReal.beginPath();
            this.contextDraft.moveTo(this.startX[0], this.startY[0]);
            var i;
            for (i = 0; i < this.startX.length; i++) {
                this.contextReal.lineTo(this.startX[i], this.startY[i]);
                this.contextDraft.lineTo(this.startX[i], this.startY[i]);
            }
            this.contextDraft.lineTo(coord[0], coord[1]);
            
            this.contextDraft.fill();
            this.contextDraft.stroke();
            this.contextReal.stroke();
        }
    }
    //Stops recording points
    onMouseLeave() { 
        this.mouseUp=true;
    }


}